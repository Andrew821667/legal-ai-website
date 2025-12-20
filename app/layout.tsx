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
    // Основные услуги
    'автоматизация юридической работы',
    'AI для юристов',
    'искусственный интеллект юриспруденция',
    'юридический AI',
    'legal tech',
    'legal tech решения',
    'юридическая автоматизация',
    'legaltech россия',

    // Договорная работа
    'проверка договоров AI',
    'автоматизация договоров',
    'анализ договоров искусственный интеллект',
    'проверка контрактов AI',
    'автоматическая проверка договоров',
    'AI анализ юридических документов',

    // Судебная работа
    'автоматизация судебной работы',
    'мониторинг арбитражных дел',
    'КАД мониторинг автоматизация',
    'AI для арбитражных дел',
    'автоматизация судебных процессов',

    // Банкротство
    'автоматизация банкротства',
    'AI для процедур банкротства',
    'мониторинг банкротств',

    // Корпоративное право
    'Due Diligence автоматизация',
    'AI для Due Diligence',
    'автоматизация корпоративного права',

    // Российские AI
    'YandexGPT для юристов',
    'GigaChat юридический',
    'YandexGPT legal',
    'GigaChat для юристов',
    'российский AI для юристов',
    'импортозамещение legal tech',

    // Комплаенс
    'налоговый комплаенс автоматизация',
    'AI налоговый мониторинг',
    'автоматизация комплаенс',
    'комплаенс контроль автоматизация',

    // Общие термины
    'юридическая технология',
    'автоматизация юротдела',
    'AI помощник юриста',
    'роботизация юридических процессов',
    'цифровизация юридических услуг',
    'юрист программист',
    'разработка legal tech',

    // Внедрение ИИ в бизнес
    'внедрение ИИ в бизнес',
    'внедрение искусственного интеллекта',
    'консультации по ИИ',
    'разработка AI решений',
    'AI для бизнеса',
    'машинное обучение для бизнеса',
    'внедрение нейросетей',
    'автоматизация бизнес процессов ИИ',

    // Разработка AI систем
    'разработка чатботов',
    'AI чатбот для бизнеса',
    'разработка виртуального ассистента',
    'обработка документов ИИ',
    'анализ документов нейросетями',
    'OCR и распознавание документов',
    'классификация документов AI',

    // ML и аналитика
    'machine learning разработка',
    'обучение моделей машинного обучения',
    'fine-tuning языковых моделей',
    'RAG системы разработка',
    'векторные базы данных',
    'аналитика данных с ИИ',
    'предиктивная аналитика',

    // Российские AI платформы
    'разработка на YandexGPT',
    'интеграция GigaChat',
    'разработка на российских LLM',
    'Kandinsky нейросеть',
    'ruGPT разработка',

    // Автоматизация процессов
    'автоматизация документооборота AI',
    'роботизация процессов RPA',
    'intelligent automation',
    'процессинг документов AI',
    'извлечение данных из документов',
    'автоматическая обработка заявок',

    // Консалтинг и услуги
    'AI консалтинг',
    'внедрение GPT в компанию',
    'корпоративный AI помощник',
    'разработка AI стратегии',
    'аудит AI решений',
    'proof of concept AI',
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
    google: 'mTUEyeu5VGZOmD8i8uGmxG-XhDHU6MacydZDAWry8U0',
    yandex: '3448a4683f1cad05',
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
        <AdminPanel />
      </body>
    </html>
  );
}
