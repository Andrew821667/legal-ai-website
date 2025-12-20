import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/authMiddleware';

/**
 * API endpoint для получения данных из PageSpeed Insights
 *
 * Опциональная переменная окружения:
 * - PAGESPEED_API_KEY: API ключ для увеличения лимитов (опционально)
 *
 * Без ключа работает с ограничениями (25 запросов/день)
 */

const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://legalaipro.ru';

interface PageSpeedData {
  mobile: {
    score: number;
    metrics: {
      fcp: { value: number; displayValue: string; rating: string }; // First Contentful Paint
      lcp: { value: number; displayValue: string; rating: string }; // Largest Contentful Paint
      cls: { value: number; displayValue: string; rating: string }; // Cumulative Layout Shift
      si: { value: number; displayValue: string; rating: string }; // Speed Index
      tbt: { value: number; displayValue: string; rating: string }; // Total Blocking Time
      tti: { value: number; displayValue: string; rating: string }; // Time to Interactive
    };
  };
  desktop: {
    score: number;
    metrics: {
      fcp: { value: number; displayValue: string; rating: string };
      lcp: { value: number; displayValue: string; rating: string };
      cls: { value: number; displayValue: string; rating: string };
      si: { value: number; displayValue: string; rating: string };
      tbt: { value: number; displayValue: string; rating: string };
      tti: { value: number; displayValue: string; rating: string };
    };
  };
  lastChecked: string;
}

/**
 * Запрос данных из PageSpeed Insights API
 */
async function queryPageSpeed(
  url: string,
  strategy: 'mobile' | 'desktop'
): Promise<any> {
  const params = new URLSearchParams({
    url: url,
    strategy: strategy,
    category: 'performance',
  });

  if (PAGESPEED_API_KEY) {
    params.append('key', PAGESPEED_API_KEY);
  }

  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
    {
      next: { revalidate: 3600 }, // Кэш на 1 час (данные не меняются так часто)
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PageSpeed API error: ${response.status} ${error}`);
  }

  return response.json();
}

/**
 * Извлечение метрик из ответа PageSpeed Insights
 */
function extractMetrics(data: any) {
  const lighthouse = data.lighthouseResult;
  const audits = lighthouse.audits;

  // Извлекаем Core Web Vitals и другие важные метрики
  return {
    score: Math.round((lighthouse.categories.performance.score || 0) * 100),
    metrics: {
      fcp: {
        value: audits['first-contentful-paint'].numericValue,
        displayValue: audits['first-contentful-paint'].displayValue,
        rating: audits['first-contentful-paint'].score >= 0.9 ? 'good' : audits['first-contentful-paint'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
      lcp: {
        value: audits['largest-contentful-paint'].numericValue,
        displayValue: audits['largest-contentful-paint'].displayValue,
        rating: audits['largest-contentful-paint'].score >= 0.9 ? 'good' : audits['largest-contentful-paint'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
      cls: {
        value: audits['cumulative-layout-shift'].numericValue,
        displayValue: audits['cumulative-layout-shift'].displayValue,
        rating: audits['cumulative-layout-shift'].score >= 0.9 ? 'good' : audits['cumulative-layout-shift'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
      si: {
        value: audits['speed-index'].numericValue,
        displayValue: audits['speed-index'].displayValue,
        rating: audits['speed-index'].score >= 0.9 ? 'good' : audits['speed-index'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
      tbt: {
        value: audits['total-blocking-time'].numericValue,
        displayValue: audits['total-blocking-time'].displayValue,
        rating: audits['total-blocking-time'].score >= 0.9 ? 'good' : audits['total-blocking-time'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
      tti: {
        value: audits['interactive'].numericValue,
        displayValue: audits['interactive'].displayValue,
        rating: audits['interactive'].score >= 0.9 ? 'good' : audits['interactive'].score >= 0.5 ? 'needs-improvement' : 'poor',
      },
    },
  };
}

/**
 * Получение данных из PageSpeed Insights
 */
async function fetchPageSpeedData(): Promise<PageSpeedData | null> {
  try {
    // Запрашиваем данные для мобильных и десктопных устройств параллельно
    const [mobileData, desktopData] = await Promise.all([
      queryPageSpeed(SITE_URL, 'mobile'),
      queryPageSpeed(SITE_URL, 'desktop'),
    ]);

    return {
      mobile: extractMetrics(mobileData),
      desktop: extractMetrics(desktopData),
      lastChecked: new Date().toISOString(),
    };

  } catch (error) {
    console.error('Error fetching PageSpeed data:', error);
    return null;
  }
}

/**
 * Mock данные для демонстрации (когда PageSpeed недоступен)
 */
function getMockData(): PageSpeedData {
  const mockMetrics = {
    fcp: { value: 0, displayValue: '0 s', rating: 'good' as const },
    lcp: { value: 0, displayValue: '0 s', rating: 'good' as const },
    cls: { value: 0, displayValue: '0', rating: 'good' as const },
    si: { value: 0, displayValue: '0 s', rating: 'good' as const },
    tbt: { value: 0, displayValue: '0 ms', rating: 'good' as const },
    tti: { value: 0, displayValue: '0 s', rating: 'good' as const },
  };

  return {
    mobile: {
      score: 0,
      metrics: mockMetrics,
    },
    desktop: {
      score: 0,
      metrics: mockMetrics,
    },
    lastChecked: new Date().toISOString(),
  };
}

export async function GET(request: NextRequest) {
  return withAuth(request, async () => {
    try {
      const data = await fetchPageSpeedData();

      return NextResponse.json({
        success: !!data,
        source: 'pagespeed-insights',
        data: data || getMockData(),
        timestamp: new Date().toISOString(),
        note: !data
          ? 'Failed to fetch PageSpeed data. Check if the site is accessible or add PAGESPEED_API_KEY for higher limits.'
          : PAGESPEED_API_KEY
            ? undefined
            : 'Using public API (limited to 25 requests/day). Add PAGESPEED_API_KEY for higher limits.',
      });
    } catch (error) {
      console.error('PageSpeed API Route Error:', error);
      return NextResponse.json(
        {
          success: false,
          source: 'pagespeed-insights',
          error: error instanceof Error ? error.message : 'Unknown error',
          data: getMockData(),
        },
        { status: 500 }
      );
    }
  });
}
