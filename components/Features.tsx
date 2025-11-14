"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { Briefcase, Bot, Flag, TrendingUp, Zap } from "lucide-react";

export default function Features() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const features = [
    {
      icon: Briefcase,
      title: "20+ лет опыта",
      description: "Наш опыт в юриспруденции и программировании позволяет нам глубоко понимать потребности клиентов и предлагать оптимальные решения. Мы работаем с различными отраслями, включая финансовый сектор, недвижимость и технологии, что делает нас универсальными специалистами."
    },
    {
      icon: Bot,
      title: "Сами создаем код",
      description: "Мы осуществляем полный цикл разработки AI-систем, начиная с идеи и заканчивая внедрением. Это включает в себя проектирование, программирование, тестирование и поддержку. Благодаря этому, наши клиенты получают продукт, который полностью соответствует их ожиданиям и требованиям."
    },
    {
      icon: Flag,
      title: "Российские AI",
      description: "Мы интегрируем наши решения с такими платформами, как YandexGPT и GigaChat, что позволяет обеспечить соответствие политике импортозамещения. Это гарантирует, что наши продукты остаются актуальными и конкурентоспособными на российском рынке."
    },
    {
      icon: TrendingUp,
      title: "80%+ экономия",
      description: "Наши решения позволяют сократить время на выполнение рутинных задач в юридических отделах до 80%. Это означает, что команда из пяти человек может сэкономить до 120-150 часов в месяц, что значительно повышает их продуктивность и эффективность."
    },
    {
      icon: Zap,
      title: "ROI 4-6 месяцев",
      description: "Автоматизация процессов обеспечивает быструю окупаемость инвестиций. В среднем, наши клиенты видят возврат инвестиций в течение 4-6 месяцев, что делает наши решения не только эффективными, но и экономически выгодными."
    }
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
            Мы предлагаем уникальное сочетание юридической экспертизы и технических навыков, что позволяет нам создавать инновационные решения для наших клиентов. Наш подход основан на глубоком понимании потребностей бизнеса и использовании передовых технологий.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`stagger-item ${gridVisible ? 'visible' : ''} group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200 hover:border-amber-300 relative overflow-hidden`}
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
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и готовы предложить вам индивидуальное решение, которое поможет вашему бизнесу расти и развиваться.
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