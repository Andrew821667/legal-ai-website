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
    </>
  );
}
