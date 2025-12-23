import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Legal AI PRO",
    "url": "https://legalaipro.ru",
    "logo": "https://legalaipro.ru/opengraph-image",
    "description": "Автоматизация юридической работы на базе искусственного интеллекта. Разработка решений на YandexGPT, GigaChat, Claude для проверки договоров, мониторинга судебных дел и налогового комплаенса.",
    "founder": {
      "@type": "Person",
      "name": "Андрей Попов",
      "jobTitle": "Основатель и Chief Legal Officer",
      "email": "a.popov.gv@gmail.com",
      "telephone": "+79092330909",
      "description": "20+ лет юридической практики. Chief Legal Officer в агрохолдингах, банках и промышленных холдингах. Опыт ведения 200+ процедур банкротства. Разработчик AI-решений на Python и TypeScript."
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-909-233-09-09",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": ["Russian", "English"]
    },
    "sameAs": [
      "https://t.me/legal_ai_helper_new_bot",
      "https://t.me/legal_ai_pro"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Legal AI PRO",
    "url": "https://legalaipro.ru",
    "description": "Автоматизация юридической работы с помощью ИИ",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://legalaipro.ru?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legal AI PRO",
    "image": "https://legalaipro.ru/opengraph-image",
    "url": "https://legalaipro.ru",
    "telephone": "+7-909-233-09-09",
    "email": "a.popov.gv@gmail.com",
    "priceRange": "Консультация - бесплатно",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "RU"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Russia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Автоматизация проверки договоров",
            "description": "AI-система для анализа договоров, поиска рисков и несоответствий на базе YandexGPT и Claude"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Мониторинг судебных дел",
            "description": "Автоматический мониторинг арбитражных дел через КАД с уведомлениями"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Налоговый комплаенс",
            "description": "Автоматизация проверки налоговых деклараций и расчетов"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Разработка AI-решений для юристов",
            "description": "Создание custom LLM решений на российских платформах (YandexGPT, GigaChat)"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://legalaipro.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "О нас",
        "item": "https://legalaipro.ru/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Политика конфиденциальности",
        "item": "https://legalaipro.ru/privacy"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Условия использования",
        "item": "https://legalaipro.ru/terms"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоит автоматизация юридической работы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Средняя стоимость внедрения составляет 300-500 тыс. рублей. Точная стоимость зависит от объема и сложности задач. Система окупается за 4-6 месяцев за счет экономии на ФОТ юристов (от 900 тыс. рублей в год). Консультация по оценке стоимости для вашего проекта — бесплатно."
        }
      },
      {
        "@type": "Question",
        "name": "Какие AI-модели вы используете?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы работаем с российскими решениями: YandexGPT и GigaChat. Это полностью соответствует политике импортозамещения. Ваши данные остаются на территории России. При необходимости используем международные решения (Claude, OpenAI GPT-4). Выбираем оптимальную модель под конкретную задачу."
        }
      },
      {
        "@type": "Question",
        "name": "Как быстро окупается внедрение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Автоматизация окупается за 4-6 месяцев. Это подтверждено реальными кейсами наших клиентов. Экономия достигается за счет сокращения времени на рутинные задачи на 80-95%. Например, проверка договора занимает 5-10 минут вместо 2-3 часов. Экономия на ФОТ юристов составляет от 900 тыс. рублей в год."
        }
      },
      {
        "@type": "Question",
        "name": "Безопасны ли ваши решения для конфиденциальных данных?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, безопасность — наш приоритет. Мы используем российские AI-модели (YandexGPT, GigaChat), данные остаются в России. Возможно развертывание on-premise на вашей инфраструктуре. Соблюдаем 152-ФЗ о персональных данных. Все процессы разработки под нашим полным контролем. Не привлекаем сторонних подрядчиков."
        }
      },
      {
        "@type": "Question",
        "name": "Какую экономию времени дает автоматизация?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы сокращаем время на рутинные задачи на 80-95%. Конкретные примеры: проверка договора — 5-10 минут вместо 2-3 часов, тщательная проверка документов при сделках (due diligence) — 2 дня вместо 2-3 недель, мониторинг судебных дел — автоматически 24/7 вместо ежедневной ручной проверки. Юристы освобождаются от рутины и фокусируются на стратегических задачах."
        }
      },
      {
        "@type": "Question",
        "name": "У вас есть опыт внедрения в крупных компаниях?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, у нас 20+ лет опыта юридической практики в агрохолдингах, банках и крупных холдингах. Мы работали в качестве Chief Legal Officer. Провели более 200 процедур банкротства. Автоматизировали юридические процессы в 20+ компаниях. Сопровождали сделки M&A на сумму более 5 млрд рублей."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли интегрировать с нашей 1С или CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы разрабатываем интеграции с 1С, CRM-системами и другими корпоративными приложениями. Используем REST API для подключения к вашей инфраструктуре. Можем настроить двустороннюю синхронизацию данных. Все интеграции разрабатываем самостоятельно, без привлечения сторонних подрядчиков. Это гарантирует качество и безопасность."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает внедрение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Срок внедрения зависит от масштаба проекта. Простые решения (проверка договоров) — 1-2 месяца. Комплексные системы (договоры + суды + комплаенс) — 3-6 месяцев. Включает: анализ процессов, разработку, тестирование, обучение команды, запуск и поддержку. Работаем по этапам с промежуточными результатами каждые 2-3 недели."
        }
      }
    ]
  };
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
