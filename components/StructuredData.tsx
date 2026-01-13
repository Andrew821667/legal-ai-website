"use client";

/**
 * Структурированные данные Schema.org для улучшения SEO
 * Критично для YMYL-сайтов (юридические услуги)
 */

interface StructuredDataProps {
  siteUrl?: string;
}

export default function StructuredData({ siteUrl = 'https://legalaipro.ru' }: StructuredDataProps) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Legal AI PRO",
    "alternateName": "LegalAIPro",
    "url": siteUrl,
    "description": "Профессиональная команда юристов-разработчиков, создающих AI-решения для автоматизации юридической работы. 20+ лет опыта в юриспруденции и разработке.",
    "foundingDate": "2020",
    "slogan": "Юристы, которые сами пишут код",
    "knowsAbout": [
      "Искусственный интеллект",
      "Юридическая автоматизация",
      "Machine Learning",
      "Legal Tech",
      "YandexGPT",
      "GigaChat",
      "Договорная работа",
      "Судебная практика",
      "Due Diligence",
      "Налоговый комплаенс"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Россия"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+7-909-233-09-09",
      "email": "a.popov.gv@gmail.com",
      "availableLanguage": ["Russian", "English"],
      "areaServed": "RU"
    },
    "sameAs": [
      "https://t.me/legal_ai_pro",
      "https://github.com/Andrew821667/legal-ai-website"
    ]
  };

  // Professional Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    "name": "Legal AI PRO - Автоматизация юридической работы",
    "serviceType": "Legal Technology & AI Development",
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": {
      "@type": "Country",
      "name": "Россия"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Автоматизация договорной работы",
            "description": "AI-анализ договоров, выявление рисков, автоматическая генерация документов. Сокращение времени проверки с 2-3 часов до 5-10 минут."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Судебная и претензионная работа",
            "description": "Автоматизация мониторинга арбитражных дел, анализ судебной практики, генерация процессуальных документов."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Корпоративное право и M&A",
            "description": "Автоматизация Due Diligence, корпоративный документооборот. Сокращение времени проверки с 2-3 недель до 2 дней."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Налоговый комплаенс с AI",
            "description": "Мониторинг изменений законодательства, прогнозирование налоговых рисков, автоматическая проверка соответствия."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Кастомные AI-решения",
            "description": "Разработка индивидуальных AI-систем для автоматизации специфических юридических задач вашего бизнеса."
          }
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "Legal AI PRO",
    "description": "Автоматизация юридической работы на базе искусственного интеллекта",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "ru-RU"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Услуги",
        "item": `${siteUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "О команде",
        "item": `${siteUrl}/#about`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Калькулятор ROI",
        "item": `${siteUrl}/#calculator`
      }
    ]
  };

  // Person Schema - основатель (обобщенно, без фото)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Андрей Попов",
    "jobTitle": "Основатель и CEO Legal AI PRO",
    "description": "Юрист-разработчик с 20+ годами опыта. CLO в крупных агрохолдингах и банках. Более 200 процедур банкротства. Разработчик AI-систем на Python, TypeScript и JavaScript.",
    "knowsAbout": [
      "Юриспруденция",
      "Искусственный интеллект",
      "Machine Learning",
      "Python",
      "TypeScript",
      "Legal Tech",
      "Договорное право",
      "Корпоративное право",
      "Банкротство",
      "M&A",
      "Земельное право"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Юридическое образование"
    },
    "worksFor": {
      "@id": `${siteUrl}/#organization`
    },
    "email": "a.popov.gv@gmail.com",
    "telephone": "+7-909-233-09-09"
  };

  // Combine all schemas using @graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      serviceSchema,
      websiteSchema,
      breadcrumbSchema,
      personSchema
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0) // minified
      }}
    />
  );
}
