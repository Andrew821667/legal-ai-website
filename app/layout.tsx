import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import YandexMetrika from "@/components/YandexMetrika";
import StickyCTA from "@/components/StickyCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://legalaipro.ru';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Legal AI PRO - Юристы, разрабатывающие AI-решения для юридической автоматизации",
  description: "Создаем интеллектуальные системы для автоматизации юридической работы. 20+ лет практики + программирование. Налоговый комплаенс, договоры, суды. YandexGPT, GigaChat.",
  keywords: [
    'автоматизация юридической работы',
    'AI для юристов',
    'искусственный интеллект юриспруденция',
    'проверка договоров AI',
    'юридический AI',
    'legal tech',
    'автоматизация договоров',
    'юридическая автоматизация',
    'YandexGPT для юристов',
    'GigaChat юридический'
  ],
  authors: [{ name: 'Legal AI PRO' }],
  creator: 'Legal AI PRO',
  publisher: 'Legal AI PRO',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    title: 'Legal AI PRO - Автоматизация юридической работы на базе ИИ',
    description: 'Мы — юристы-разработчики. Создаем системы, которые проверяют договоры, ищут риски и готовят документы в 10 раз быстрее человека.',
    siteName: 'Legal AI PRO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal AI PRO - Автоматизация юридической работы на базе ИИ',
    description: 'Мы — юристы-разработчики. Создаем системы, которые проверяют договоры, ищут риски и готовят документы в 10 раз быстрее человека.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте ваши verification коды:
    // google: 'your-google-site-verification',
    // yandex: 'your-yandex-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        {/* Yandex Metrika */}
        {process.env.NEXT_PUBLIC_YM_COUNTER_ID && (
          <YandexMetrika counterId={process.env.NEXT_PUBLIC_YM_COUNTER_ID} />
        )}

        <Header />
        {children}
        <Footer />
        <StickyCTA />
        <AdminPanel password={process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"} />
      </body>
    </html>
  );
}
