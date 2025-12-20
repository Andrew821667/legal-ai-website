import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/authMiddleware';

/**
 * API endpoint для получения данных из Google Search Console
 *
 * Требуемые переменные окружения:
 * - GSC_PROPERTY_URL: URL свойства (например: "https://legalaipro.ru" или "sc-domain:legalaipro.ru")
 * - GSC_CREDENTIALS: JSON строка с credentials от Service Account
 *
 * Service Account должен иметь доступ к свойству в Search Console
 */

const GSC_PROPERTY_URL = process.env.GSC_PROPERTY_URL;
const GSC_CREDENTIALS = process.env.GSC_CREDENTIALS;

interface SearchConsoleData {
  summary: {
    totalClicks: number;
    totalImpressions: number;
    averageCTR: number;
    averagePosition: number;
  };
  topQueries: Array<{
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
  topPages: Array<{
    page: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
  devices: Array<{
    device: string;
    clicks: number;
    impressions: number;
  }>;
}

/**
 * Создание JWT для Service Account с использованием jose
 */
async function createJWT(credentials: any): Promise<string> {
  const { SignJWT, importPKCS8 } = await import('jose');

  const now = Math.floor(Date.now() / 1000);

  // Импортируем приватный ключ из credentials
  const privateKey = await importPKCS8(credentials.private_key, 'RS256');

  // Создаем и подписываем JWT
  const jwt = await new SignJWT({
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
  })
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
    .setIssuer(credentials.client_email)
    .setAudience('https://oauth2.googleapis.com/token')
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .sign(privateKey);

  return jwt;
}

/**
 * Получение access token для Search Console API
 */
async function getAccessToken(credentials: any): Promise<string> {
  const jwt = await createJWT(credentials);

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    const error = await tokenResponse.text();
    throw new Error(`Failed to get access token: ${tokenResponse.status} ${error}`);
  }

  const { access_token } = await tokenResponse.json();
  return access_token;
}

/**
 * Запрос данных из Search Console API
 */
async function querySearchConsole(
  accessToken: string,
  dimensions: string[],
  startDate: string,
  endDate: string,
  rowLimit: number = 10
): Promise<any> {
  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY_URL!)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions,
        rowLimit,
        aggregationType: 'auto',
      }),
      next: { revalidate: 3600 }, // Кэш на 1 час
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Search Console API error: ${response.status} ${error}`);
  }

  return response.json();
}

/**
 * Получение данных из Google Search Console
 */
async function fetchSearchConsoleData(): Promise<SearchConsoleData | null> {
  if (!GSC_PROPERTY_URL || !GSC_CREDENTIALS) {
    console.warn('Search Console credentials not configured');
    return null;
  }

  try {
    // Парсим credentials
    const credentials = JSON.parse(GSC_CREDENTIALS);

    // Получаем access token
    const accessToken = await getAccessToken(credentials);

    // Даты для запроса (последние 28 дней, минус 3 дня задержки данных GSC)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 3);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 28);

    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    // Запрашиваем данные параллельно
    const [summaryData, queriesData, pagesData, devicesData] = await Promise.all([
      // Общая статистика
      querySearchConsole(accessToken, [], formatDate(startDate), formatDate(endDate), 1),
      // Топ запросы
      querySearchConsole(accessToken, ['query'], formatDate(startDate), formatDate(endDate), 10),
      // Топ страницы
      querySearchConsole(accessToken, ['page'], formatDate(startDate), formatDate(endDate), 10),
      // По устройствам
      querySearchConsole(accessToken, ['device'], formatDate(startDate), formatDate(endDate), 10),
    ]);

    // Обработка summary
    const summary = summaryData.rows?.[0] || {
      clicks: 0,
      impressions: 0,
      ctr: 0,
      position: 0,
    };

    // Обработка топ запросов
    const topQueries = (queriesData.rows || []).map((row: any) => ({
      query: row.keys[0],
      clicks: Math.round(row.clicks || 0),
      impressions: Math.round(row.impressions || 0),
      ctr: Math.round((row.ctr || 0) * 100 * 100) / 100, // В процентах с 2 знаками
      position: Math.round((row.position || 0) * 10) / 10,
    }));

    // Обработка топ страниц
    const topPages = (pagesData.rows || []).map((row: any) => ({
      page: row.keys[0],
      clicks: Math.round(row.clicks || 0),
      impressions: Math.round(row.impressions || 0),
      ctr: Math.round((row.ctr || 0) * 100 * 100) / 100,
      position: Math.round((row.position || 0) * 10) / 10,
    }));

    // Обработка устройств
    const devices = (devicesData.rows || []).map((row: any) => ({
      device: row.keys[0],
      clicks: Math.round(row.clicks || 0),
      impressions: Math.round(row.impressions || 0),
    }));

    return {
      summary: {
        totalClicks: Math.round(summary.clicks || 0),
        totalImpressions: Math.round(summary.impressions || 0),
        averageCTR: Math.round((summary.ctr || 0) * 100 * 100) / 100,
        averagePosition: Math.round((summary.position || 0) * 10) / 10,
      },
      topQueries,
      topPages,
      devices,
    };

  } catch (error) {
    console.error('Error fetching Search Console data:', error);
    return null;
  }
}

/**
 * Mock данные для демонстрации (когда Search Console не настроен)
 */
function getMockData(): SearchConsoleData {
  return {
    summary: {
      totalClicks: 0,
      totalImpressions: 0,
      averageCTR: 0,
      averagePosition: 0,
    },
    topQueries: [],
    topPages: [],
    devices: [],
  };
}

export async function GET(request: NextRequest) {
  return withAuth(request, async () => {
    try {
      const data = await fetchSearchConsoleData();

      return NextResponse.json({
        success: !!data,
        source: 'google-search-console',
        configured: !!(GSC_PROPERTY_URL && GSC_CREDENTIALS),
        data: data || getMockData(),
        timestamp: new Date().toISOString(),
        note: !data ? 'Search Console not configured. Add GSC_PROPERTY_URL and GSC_CREDENTIALS to environment variables.' : undefined,
      });
    } catch (error) {
      console.error('Search Console API Route Error:', error);
      return NextResponse.json(
        {
          success: false,
          source: 'google-search-console',
          configured: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          data: getMockData(),
        },
        { status: 500 }
      );
    }
  });
}
