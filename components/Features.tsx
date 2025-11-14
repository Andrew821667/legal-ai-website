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
      description: `Мы обладаем более чем двадцатилетним опытом в таких важных областях,
        как юриспруденция и программирование. Это позволяет нам глубоко понимать
        все тонкости и нюансы отрасли, в которой мы работаем.`,
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600",
      hoverColor: "group-hover:text-blue-700"
    },
    {
      icon: Bot,
      title: "Сами создаем код",
      description: `Мы полностью контролируем процесс разработки наших AI-систем.
        Это означает, что мы начинаем с идеи и доводим её до полного внедрения,
        обеспечивая качество на каждом этапе.`,
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600",
      hoverColor: "group-hover:text-purple-700"
    },
    {
      icon: Flag,
      title: "Российские AI",
      description: `Наши системы интегрируются с такими передовыми технологиями,
        как YandexGPT и GigaChat. Это соответствует политике импортозамещения,
        что делает наши решения особенно актуальными.`,
      gradient: "from-red-500 via-blue-500 to-red-500",
      iconColor: "text-red-600",
      hoverColor: "group-hover:text-blue-700"
    },
    {
      icon: TrendingUp,
      title: "80%+ экономия",
      description: `Мы помогаем сократить время, затрачиваемое на рутинные задачи
        в юридических отделах, более чем на 80%. Это позволяет вашим сотрудникам
        сосредоточиться на более важных и стратегических задачах.`,
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-600",
      hoverColor: "group-hover:text-green-700"
    },
    {
      icon: Zap,
      title: "ROI 4-6 месяцев",
      description: `Автоматизация процессов, которую мы предлагаем, обеспечивает
        быструю окупаемость инвестиций. В среднем, вы сможете вернуть вложенные
        средства в течение 4-6 месяцев.`,
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-600",
      hoverColor: "group-hover:text-amber-700"
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
            Мы предлагаем уникальное сочетание юридической экспертизы и технических навыков,
            что делает нас идеальным выбором для вашего бизнеса.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`stagger-item ${gridVisible ? 'visible' : ''} group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200 hover:border-amber-300 relative overflow-hidden`}
            >
              {/* Glow effect on hover with feature-specific gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl`}></div>

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold text-slate-900 mb-3 ${feature.hoverColor} transition-colors`}>
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