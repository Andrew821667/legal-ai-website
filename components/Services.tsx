"use client";

import {
  FileText,
  Scale,
  Building2,
  Sprout,
  ShieldCheck,
  BarChart3,
  Settings,
  Briefcase,
  Coins,
} from "lucide-react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      icon: FileText,
      title: "Договорная работа",
      description: `Мы предлагаем быструю проверку и создание договоров с анализом рисков всего за 5-10 минут.
        Эффективная работа с протоколами разногласий позволяет избежать множества проблем.
        Наш уникальный подход к каждому договору помогает минимизировать риски и улучшить результаты.`,
      price: "от 150 тыс. ₽",
      sources: ["Гражданский кодекс РФ", "Судебная практика Верховного Суда РФ", "Постановления Пленума ВС РФ"],
      features: [
        "AI-анализ рисков",
        "Конструктор документов",
        "Протоколы разногласий",
        "База знаний",
      ],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Scale,
      title: "Судебная работа",
      description: `Мы предлагаем анализ судебной практики, создание документов и мониторинг арбитражных дел.
        Наши инструменты помогают находить прецеденты, которые могут быть полезны в вашем деле.
        Быстрая и эффективная генерация исков позволяет экономить время и ресурсы.`,
      price: "от 200 тыс. ₽",
      sources: ["Картотека арбитражных дел (kad.arbitr.ru)", "ГАС Правосудие", "КонсультантПлюс"],
      features: [
        "Поиск прецедентов",
        "Генерация исков",
        "Мониторинг дел",
        "Предиктивная аналитика",
      ],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Building2,
      title: "Корпоративное право и M&A",
      description: `Мы предлагаем автоматизацию для тщательной проверки документов (Due Diligence) с анализом сотен документов за считанные часы.
        Оптимизация документооборота позволяет значительно сократить время на обработку данных.
        Наши решения помогают анализировать корпоративные структуры и проводить реорганизации.`,
      price: "от 300 тыс. ₽",
      sources: ["ФЗ об ООО", "ФЗ об Акционерных обществах", "Реестр ЕГРЮЛ"],
      features: [
        "Due Diligence за часы",
        "Анализ уставов",
        "Сделки M&A",
        "Реестр акционеров",
      ],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Sprout,
      title: "Земельное право",
      description: `Мы проводим анализ правоустанавливающих документов, работаем с кадастром и оспариваем стоимость.
        Полная поддержка в вопросах аренды и сделок с землей гарантирована.
        Наши эксперты помогут разобраться в сложных земельных спорах и найти оптимальные решения.`,
      price: "от 250 тыс. ₽",
      sources: ["Земельный кодекс РФ", "Публичная кадастровая карта", "Росреестр"],
      features: [
        "Кадастровый анализ",
        "Сделки с землей",
        "Оспаривание стоимости",
        "Арендные отношения",
      ],
      gradient: "from-lime-500 to-green-600",
    },
    {
      icon: ShieldCheck,
      title: "Комплаенс",
      description: `Мы обеспечиваем круглосуточный мониторинг законодательства, санкционный комплаенс и антикоррупционные меры.
        Следим за всеми изменениями в законодательстве, чтобы вы всегда были в курсе.
        Наши решения помогают обеспечить соответствие всем необходимым нормам и стандартам.`,
      price: "от 200 тыс. ₽",
      sources: ["КоАП РФ", "Методические рекомендации ЦБ РФ", "ФЗ о противодействии коррупции"],
      features: [
        "Мониторинг 24/7",
        "Антикоррупция",
        "Санкционный контроль",
        "Внутренний аудит",
      ],
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: BarChart3,
      title: "Аналитика",
      description: `Мы предлагаем анализ договоров, создание риск-дашбордов и оценку KPI юридического отдела.
        Наши инструменты позволяют детально анализировать ваш портфель.
        Дашборды помогают визуализировать риски и принимать обоснованные решения.`,
      price: "от 150 тыс. ₽",
      sources: ["Внутренняя статистика компании", "Отраслевые бенчмарки", "Данные судебного департамента"],
      features: [
        "Анализ портфеля",
        "Риск-дашборды",
        "KPI отдела",
        "Прогнозирование",
      ],
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Settings,
      title: "Кастомные решения",
      description: `Мы разрабатываем AI-ассистента для вашей отрасли, интеграции с CRM/ERP/1C и обучение на данных.
        Наши решения полностью соответствуют вашим бизнес-потребностям.
        Специалисты помогут интегрировать новые технологии в вашу систему, обеспечивая полную поддержку.`,
      price: "от 300 тыс. ₽",
      sources: ["Техническая документация API", "Best Practices разработки", "GDPR/152-ФЗ"],
      features: [
        "Под вашу отрасль",
        "Интеграция с 1С/CRM",
        "Обучение на данных",
        "On-premise / Cloud",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Briefcase,
      title: "Аутсорсинг + AI",
      description: `Мы предлагаем гибридную модель: опытный юрист и AI-инструменты для договорной работы и судебного представительства.
        Объединяем человеческий опыт и технологические возможности для достижения лучших результатов.
        Наши решения позволяют сосредоточиться на главном, доверив рутину нам.`,
      price: "от 100 тыс. ₽/мес",
      sources: ["Стандарты оказания юридических услуг", "Кодекс профессиональной этики адвоката"],
      features: [
        "Юрист + AI",
        "Договорная работа",
        "Суды и арбитраж",
        "Консультации",
      ],
      gradient: "from-fuchsia-500 to-pink-600",
    },
    {
      icon: Coins,
      title: "Налоговый комплаенс с AI-аналитикой",
      description: `Мы предлагаем AI-мониторинг налоговой практики и законодательства, анализ изменений и автоматизацию отчетности.
        Инструменты для постоянного мониторинга изменений в налоговом законодательстве всегда под рукой.
        Наши решения помогают прогнозировать налоговые риски и автоматизировать отчетность, обеспечивая надежность и точность.`,
      price: "от 200 тыс. ₽",
      sources: ["Налоговый кодекс РФ", "Письма Минфина и ФНС", "Арбитражная практика по налоговым спорам"],
      features: [
        "Мониторинг изменений 24/7",
        "Проверка контрагентов",
        "Анализ налоговых рисков",
        "Автоматизация отчетности",
      ],
      gradient: "from-yellow-500 to-amber-600",
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
            Мы предлагаем комплексные AI-решения для автоматизации работы юристов. Наши услуги помогут оптимизировать процессы и повысить эффективность вашей команды.
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
                      <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Sources (for SEO schema, hidden visually but useful for data) */}
                <div className="hidden">
                  {service.sources?.join(", ")}
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-amber-600 mb-4">
                  {service.price}
                </div>

                {/* CTA Button */}
                <a
                  href="https://t.me/legal_ai_helper_new_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:text-amber-600 transition-colors"
                >
                  Подробнее
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
            Мы разрабатываем индивидуальные решения, которые учитывают специфику вашего бизнеса. Наши специалисты готовы обсудить ваши потребности и предложить оптимальные решения, которые помогут вам достичь успеха.
          </p>
          <a
            href="https://t.me/legal_ai_helper_new_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}
