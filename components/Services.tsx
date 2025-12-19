"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { FileText, Scale, Building2, Sprout, ShieldCheck, BarChart3, Settings, Briefcase, Coins } from "lucide-react";

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const services = [
    {
      icon: FileText,
      title: "Договорная работа",
      description: `Быстрая проверка и создание договоров с анализом рисков за 5-10 минут.
        Эффективная работа с протоколами разногласий позволяет избежать многих проблем.
        Мы предлагаем уникальный подход к каждому договору, чтобы минимизировать риски.`,
      price: "от 150 тыс. ₽",
      features: [
        "AI-анализ рисков",
        "Генерация договоров",
        "Протоколы разногласий",
        "80%+ экономия времени",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Scale,
      title: "Судебная работа",
      description: `Анализ судебной практики, создание документов и мониторинг арбитражных дел.
        Мы помогаем вам находить прецеденты, которые могут быть полезны в вашем деле.
        Наши инструменты позволяют быстро и эффективно генерировать иски.`,
      price: "от 200 тыс. ₽",
      features: [
        "Поиск прецедентов",
        "Генерация исков",
        "Претензионная работа",
        "Мониторинг КАД",
      ],
      gradient: "from-purple-500 to-violet-500",
          sources: [
      "Российское федеральное законодательство",
      "Юриспруденция арбитражных судов",
      "Профессиональные стандарты"
    ],
    },
    {
      icon: Building2,
      title: "Корпоративное право и M&A",
      description: `Автоматизация Due Diligence с анализом сотен документов за часы.
        Оптимизация документооборота позволяет сократить время на обработку данных.
        Мы предлагаем решения для анализа корпоративных структур и реорганизаций.`,
      price: "от 300 тыс. ₽",
      features: [
        "Due Diligence за часы",
        "Корп. документооборот",
        "Анализ структур",
        "Реорганизации",
      ],
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Sprout,
      title: "Земельное право",
      description: `Анализ правоустанавливающих документов, работа с кадастром и оспаривание стоимости.
        Мы предоставляем полную поддержку в вопросах аренды и сделок с землей.
        Наши эксперты помогут вам разобраться в сложных земельных спорах.`,
      price: "от 250 тыс. ₽",
      features: [
        "Кадастровый анализ",
        "Земельные споры",
        "Аренда и сделки",
        "Агробизнес",
      ],
      gradient: "from-green-500 to-emerald-500",
          sources: ["Законодательство РФ", "Судебная практика", "Юридические консультации"],
    },
    {
      icon: ShieldCheck,
      title: "Комплаенс",
      description: `Круглосуточный мониторинг законодательства, санкционный комплаенс и антикоррупционные меры.
        Мы следим за всеми изменениями в законодательстве, чтобы вы всегда были в курсе.
        Наши решения помогают обеспечить соответствие всем необходимым нормам.`,
      price: "от 200 тыс. ₽",
      features: [
        "Мониторинг 24/7",
        "Санкционный комплаенс",
        "152-ФЗ",
        "Антикоррупция",
      ],
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: BarChart3,
      title: "Аналитика",
      description: `Анализ договоров, создание риск-дашбордов и оценка KPI юридического отдела.
        Мы предоставляем инструменты для детального анализа вашего портфеля.
        Наши дашборды помогут вам визуализировать риски и принимать обоснованные решения.`,
      price: "от 150 тыс. ₽",
      features: [
        "Анализ портфеля",
        "Риск-дашборды",
        "KPI юротдела",
        "Отчетность",
      ],
      gradient: "from-cyan-500 to-teal-500",
          sources: ["Корпоративные стандарты", "Лучшая практика", "Инновации"],
    },
    {
      icon: Settings,
      title: "Кастомные решения",
      description: `Разработка AI-ассистента для вашей отрасли, интеграции с CRM/ERP/1C и обучение на данных.
        Мы создаем решения, которые полностью соответствуют вашим бизнес-потребностям.
        Наши специалисты помогут вам интегрировать новые технологии в вашу систему.`,
      price: "от 300 тыс. ₽",
      features: [
        "Под вашу отрасль",
        "Интеграции",
        "Обучение на данных",
        "Full customization",
      ],
      gradient: "from-slate-500 to-gray-600",
    },
    {
      icon: Briefcase,
      title: "Аутсорсинг + AI",
      description: `Гибридная модель: опытный юрист и AI-инструменты для договорной работы и судебного представительства.
        Мы объединяем человеческий опыт и технологические возможности для достижения лучших результатов.
        Наши решения позволяют вам сосредоточиться на главном, доверив рутину нам.`,
      price: "от 100 тыс. ₽/мес",
      features: [
        "Юрист + AI",
        "Договоры",
        "Суды",
        "Гибкая модель",
      ],
      gradient: "from-orange-500 to-amber-500",
          sources: ["Налоговые кодексы", "Практика ФУ (НАЛОГ)", "Министерство Налоговые"],
    },
    {
      icon: Coins,
      title: "Налоговый комплаенс с AI-аналитикой",
      description: `AI-мониторинг налоговой практики и законодательства. Анализ изменений и автоматизация отчетности.
        Мы предоставляем инструменты для постоянного мониторинга изменений в налоговом законодательстве.
        Наши решения помогают прогнозировать налоговые риски и автоматизировать отчетность.`,
      price: "от 200 тыс. ₽",
      features: [
        "Мониторинг изменений 24/7",
        "Анализ практики ФНС",
        "Прогноз налоговых рисков",
        "Автоматизация отчетов",
      ],
      gradient: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Комплексные AI-решения для автоматизации юридической работы. Мы предлагаем широкий спектр услуг, которые помогут вам оптимизировать процессы и повысить эффективность.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`stagger-item ${gridVisible ? 'visible' : ''} group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300 flex flex-col relative overflow-hidden transform hover:-translate-y-2`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500 rounded-xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon with gradient background */}
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-lg font-bold text-amber-600 mb-4">
                {service.price}
              </div>

                {/* CTA Button */}
                <a
                  href="https://t.me/legal_ai_helper_new_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-slate-900 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Не нашли нужную услугу?
          </h3>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Мы разрабатываем индивидуальные решения под специфику вашего бизнеса. Наши специалисты готовы обсудить ваши потребности и предложить оптимальные решения.
          </p>
          <a
            href="https://t.me/legal_ai_helper_new_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Обсудить ваш проект →
          </a>
        </div>
      </div>
    </section>
  );
}
