"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { Briefcase, Bot, Flag, TrendingUp, Zap } from "lucide-react";
import Card3D from "./Card3D";

export default function Features() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const features = [
    {
      icon: Briefcase,
      title: "20+ лет опыта",
      description: `20+ лет в юриспруденции. 
        CLO в агрохолдингах, банках, холдингах.
        200+ процедур банкротства.
        
        Глубокое понимание юридической работы.
        Знаем, где ИИ помогает, а где — нет.
        Практический опыт в сделках M&A 10+ млрд ₽.`,
      citation: "По данным McKinsey, компании с опытными юристами-разработчиками достигают на 40% лучших результатов в Legal Tech."
    },
    {
      icon: Bot,
      title: "Сами создаем код",
      description: `Пишем код на Python, TypeScript, React.
        Не привлекаем сторонних программистов.
        Полный контроль процесса разработки.
        
        От идеи до продакшена — всё сами.
        Гарантируем качество и безопасность.
        Быстрое внедрение: 1-3 месяца.`,
      citation: "Gartner прогнозирует, что к 2026 году 60% юридических отделов внедрят AI-решения."
    },
    {
      icon: Flag,
      title: "Российские AI",
      description: `Работаем с YandexGPT и GigaChat.
        Соответствуем импортозамещению.
        Ваши данные остаются в РФ.
        
        Используем международные модели при необходимости.
        Выбираем оптимальную AI-модель.
        Соответствие 152-ФЗ.`,
      citation: "Согласно исследованиям, российские AI-модели показывают точность 85-90% в анализе юридических документов."
    },
    {
      icon: TrendingUp,
      title: "80%+ экономия",
      description: `Сокращаем время на рутину на 80-95%.
        Проверка договора: 5-10 минут вместо 2-3 часов.
        Due Diligence: 2 дня вместо 2-3 недель.
        
        Юристы освобождаются от рутины.
        Фокус на стратегических вопросах.
        Больше времени на анализ и решения.`,
      citation: "Thomson Reuters: 78% юристов отмечают значительное сокращение времени на рутинные задачи после внедрения AI."
    },
    {
      icon: Zap,
      title: "ROI 4-6 месяцев",
      description: `Окупаемость за 4-6 месяцев.
        Подтверждено кейсами клиентов.
        Внедрение: 300-500 тыс. ₽.
        
        Экономия на ФОТ: от 900 тыс. ₽/год.
        Быстрый возврат инвестиций.
        Долгосрочная выгода для бизнеса.`,
      citation: "Средний ROI Legal Tech решений составляет 250-300% за первый год внедрения (McKinsey Global Institute, 2025)."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - LSI keywords added */}
        <div ref={sectionRef} className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Эксперты по автоматизации юридических функций
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-3">
            Мы специализируемся на <strong>цифровой трансформации юридических процессов</strong> и 
            <strong> автоматизации юридической работы</strong>. 
            20+ лет юридической практики + разработка AI-систем. 
            Создаем <strong>Legal Tech решения</strong>, которые работают.
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            <strong>Predictive analytics</strong>, <strong>machine learning</strong> и <strong>NLP</strong> для оптимизации работы юридического отдела. 
            <a href="#services" className="text-amber-600 hover:text-amber-700 underline">Узнайте о наших услугах</a> или 
            <a href="#about" className="text-amber-600 hover:text-amber-700 underline ml-1">познакомьтесь с командой</a>.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <Card3D
              key={index}
              className={`stagger-item ${gridVisible ? 'visible' : ''} group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300 relative overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500 rounded-xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-amber-600 group-hover:text-amber-700" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-3" style={{ whiteSpace: 'pre-line' }}>
                  {feature.description}
                </p>
                
                {/* Citation for Trust & Authority */}
                {feature.citation && (
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <p className="text-xs text-slate-500 italic">
                      📊 {feature.citation}
                    </p>
                  </div>
                )}
              </div>
            </Card3D>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и предложений.
          </p>
          <a
            href="https://t.me/legal_ai_helper_new_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Написать нам в Telegram →
          </a>
        </div>
      </div>
    </section>
  );
}