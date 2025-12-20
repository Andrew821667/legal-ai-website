import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/authMiddleware';

/**
 * API endpoint для мониторинга uptime и производительности
 *
 * Проверяет доступность сайта и измеряет время ответа
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://legalaipro.ru';

interface UptimeData {
  status: 'up' | 'down' | 'degraded';
  responseTime: number; // в миллисекундах
  statusCode: number;
  timestamp: string;
  checks: {
    homepage: { status: 'ok' | 'error'; responseTime: number; statusCode?: number };
    api: { status: 'ok' | 'error'; responseTime: number; statusCode?: number };
    sitemap: { status: 'ok' | 'error'; responseTime: number; statusCode?: number };
  };
}

/**
 * Проверка доступности URL с измерением времени ответа
 */
async function checkEndpoint(url: string): Promise<{
  status: 'ok' | 'error';
  responseTime: number;
  statusCode?: number;
}> {
  const startTime = Date.now();

  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'no-store',
      signal: AbortSignal.timeout(10000), // 10 секунд таймаут
    });

    const responseTime = Date.now() - startTime;

    return {
      status: response.ok ? 'ok' : 'error',
      responseTime,
      statusCode: response.status,
    };
  } catch (error) {
    const responseTime = Date.now() - startTime;
    console.error(`Error checking ${url}:`, error);

    return {
      status: 'error',
      responseTime,
      statusCode: 0,
    };
  }
}

/**
 * Мониторинг uptime
 */
async function monitorUptime(): Promise<UptimeData> {
  try {
    // Проверяем несколько критичных endpoints параллельно
    const [homepageCheck, apiCheck, sitemapCheck] = await Promise.all([
      checkEndpoint(SITE_URL),
      checkEndpoint(`${SITE_URL}/api/health`), // Можно создать health check endpoint
      checkEndpoint(`${SITE_URL}/sitemap.xml`),
    ]);

    // Вычисляем общий статус
    const allOk = homepageCheck.status === 'ok' && apiCheck.status === 'ok' && sitemapCheck.status === 'ok';
    const someOk = homepageCheck.status === 'ok' || apiCheck.status === 'ok' || sitemapCheck.status === 'ok';

    const status: 'up' | 'down' | 'degraded' = allOk ? 'up' : someOk ? 'degraded' : 'down';

    // Средний response time
    const avgResponseTime = Math.round(
      (homepageCheck.responseTime + apiCheck.responseTime + sitemapCheck.responseTime) / 3
    );

    return {
      status,
      responseTime: avgResponseTime,
      statusCode: homepageCheck.statusCode || 0,
      timestamp: new Date().toISOString(),
      checks: {
        homepage: homepageCheck,
        api: apiCheck,
        sitemap: sitemapCheck,
      },
    };

  } catch (error) {
    console.error('Error monitoring uptime:', error);

    return {
      status: 'down',
      responseTime: 0,
      statusCode: 0,
      timestamp: new Date().toISOString(),
      checks: {
        homepage: { status: 'error', responseTime: 0, statusCode: 0 },
        api: { status: 'error', responseTime: 0, statusCode: 0 },
        sitemap: { status: 'error', responseTime: 0, statusCode: 0 },
      },
    };
  }
}

/**
 * Health check endpoint (может использоваться внешними мониторингами)
 */
export async function GET(request: NextRequest) {
  return withAuth(request, async () => {
    try {
      const data = await monitorUptime();

      return NextResponse.json({
        success: true,
        source: 'uptime-monitoring',
        data,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Uptime Monitoring API Route Error:', error);
      return NextResponse.json(
        {
          success: false,
          source: 'uptime-monitoring',
          error: error instanceof Error ? error.message : 'Unknown error',
          data: {
            status: 'down',
            responseTime: 0,
            statusCode: 0,
            timestamp: new Date().toISOString(),
            checks: {
              homepage: { status: 'error', responseTime: 0, statusCode: 0 },
              api: { status: 'error', responseTime: 0, statusCode: 0 },
              sitemap: { status: 'error', responseTime: 0, statusCode: 0 },
            },
          },
        },
        { status: 500 }
      );
    }
  });
}
