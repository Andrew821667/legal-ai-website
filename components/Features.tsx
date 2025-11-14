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
      description: "Наши специалисты обладают более чем 20-летним опытом работы в юриспруденции и программировании. Это позволяет нам глубоко понимать потребности клиентов и предлагать решения, которые действительно работают. Например, мы успешно реализовали проекты для крупных юридических фирм, помогая им оптимизировать процессы и повысить эффективность."
    },
    {
      icon: Bot,
      title: "Сами создаем код",
      description: "Мы полностью контролируем процесс разработки AI-систем, начиная с идеи и заканчивая внедрением. Это означает, что мы можем быстро адаптироваться к изменениям и внедрять инновации, которые соответствуют вашим уникальным требованиям. Например, наша команда разработала систему автоматизации, которая сократила время обработки документов на 50%."
    },
    {
      icon: Flag,
      title: "Российские AI",
      description: "Мы интегрируем наши решения с передовыми российскими технологиями, такими как YandexGPT и GigaChat, что позволяет соответствовать политике импортозамещения. Это не только поддерживает отечественные разработки, но и обеспечивает надежность и безопасность ваших данных. Например, наши клиенты отмечают улучшение качества обслуживания благодаря интеграции с локальными AI-системами."
    },
    {
      icon: TrendingUp,
      title: "80%+ экономия",
      description: "Наши решения позволяют сократить время на рутинные задачи в юридических отделах до 80%, что эквивалентно экономии 120-150 часов в месяц для команды из 5 человек. Представьте: ваш юрист получает договор, который автоматически анализируется и подготавливается к подписанию, освобождая время для более стратегически важных задач."
    },
    {
      icon: Zap,
      title: "ROI 4-6 месяцев",
      description: "Автоматизация процессов с помощью наших решений обеспечивает быструю окупаемость инвестиций в течение 4-6 месяцев. Это достигается за счет значительного сокращения затрат на ручной труд и повышения точности выполнения задач. Например, одна из наших систем позволила клиенту сократить расходы на 30% уже в первые месяцы использования."
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
            Мы предлагаем уникальное сочетание юридической экспертизы и технических навыков, что позволяет нам создавать решения, которые действительно работают. Наши клиенты доверяют нам, потому что мы понимаем их потребности и предлагаем индивидуальный подход к каждому проекту.
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
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и готовы предложить вам лучшие решения, которые помогут вашему бизнесу расти и развиваться.
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