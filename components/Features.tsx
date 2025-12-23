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
      description: `У нас более 20 лет опыта в юриспруденции и программировании. Мы работали в качестве CLO в агрохолдингах, банках и крупных холдингах.

За это время провели более 200 процедур банкротства. Мы глубоко понимаем все тонкости юридической работы.

Поэтому знаем, где искусственный интеллект действительно помогает. А где — нет.`    },
    {
      icon: Bot,
      title: "Сами создаем код",
      description: `Мы сами пишем код на Python, TypeScript и JavaScript. Не привлекаем сторонних разработчиков.

Это позволяет полностью контролировать процесс разработки. От идеи до внедрения — все этапы под нашим контролем.

Гарантируем качество и безопасность ваших данных. Полная прозрачность всех процессов.`    },
    {
      icon: Flag,
      title: "Российские решения",
      description: `Мы работаем с YandexGPT, GigaChat и другими российскими моделями. Полностью соответствуем политике импортозамещения.

Ваши данные остаются на территории России. Это важно для безопасности и соответствия требованиям.

При необходимости используем международные решения. Выбираем оптимальную модель под вашу конкретную задачу.`    },
    {
      icon: TrendingUp,
      title: "80%+ экономия",
      description: `Мы сокращаем время на рутинные задачи на 80-95%. Проверка договора занимает 5-10 минут вместо 2-3 часов.

Тщательная проверка документов при сделках — 2 дня вместо 2-3 недель. Это реальная экономия времени и денег.

Ваши юристы освобождаются от рутины. Они сосредотачиваются на стратегических вопросах и сложных делах.`    },
    {
      icon: Zap,
      title: "ROI 4-6 месяцев",
      description: `Автоматизация окупается за 4-6 месяцев. Это подтверждено реальными кейсами наших клиентов.

Средняя стоимость внедрения — 300-500 тыс. ₽. Экономия на ФОТ юристов — от 900 тыс. ₽ в год.

Это обеспечивает быстрый возврат инвестиций. И долгосрочную выгоду для вашего бизнеса.`    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Мы предлагаем уникальное сочетание юридической экспертизы и технических навыков.
            Глубоко понимаем бизнес-процессы и технологии.
            Это делает нас идеальным выбором для вашего бизнеса.
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
            <p className="text-slate-600 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>                  {feature.description}
                </p>
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