"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { useScrollAnimationMultiple } from "@/lib/hooks/useScrollAnimationMultiple";

export default function CaseStudies() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const cases = [
    {
      industry: "Агрохолдинг",
      icon: "🌾",
      problem: {
        title: "Проблема",
        points: [
          "50+ договоров в месяц требуют проверки",
          "2 юриста не успевают проверять все документы",
          "Пропуск критически важных условий",
          "2-4 часа на проверку одного договора",
        ],
      },
      solution: {
        title: "Решение",
        points: [
          "Разработка AI-системы для анализа договоров",
          "Обучение системы на внутренних шаблонах компании",
          "Интеграция с 1C и корпоративной почтой",
          "Автоматическое выявление рисков в договорах",
        ],
      },
      results: {
        title: "Результаты",
        metrics: [
          { label: "Время проверки", value: "2-4 ч → 30 мин", highlight: "8x быстрее" },
          { label: "Выявление рисков", value: "95%+", highlight: "автоматически" },
          { label: "Экономия времени", value: "80 часов/мес", highlight: "2 ставки юриста" },
          { label: "ROI", value: "4 месяца", highlight: "окупаемость" },
        ],
      },
      testimonial:
        "До внедрения AI мы тонули в бумажной работе. Теперь система за 5 минут находит все риски, а мы сосредотачиваемся на сложных вопросах. Это было лучшее вложение года!",
      role: "Главный юрист",
    },
    {
      industry: "Банк",
      icon: "🏦",
      problem: {
        title: "Проблема",
        points: [
          "200+ процедур банкротства одновременно",
          "Ручной мониторинг КАД по всем делам",
          "Пропуск сроков из-за человеческого фактора",
          "Огромный объем процессуальных документов",
        ],
      },
      solution: {
        title: "Решение",
        points: [
          "Автоматизация мониторинга картотеки арбитражных дел",
          "AI-генерация процессуальных документов",
          "Уведомления о критических сроках",
          "Анализ судебной практики по аналогичным делам",
        ],
      },
      results: {
        title: "Результаты",
        metrics: [
          { label: "Мониторинг дел", value: "24/7", highlight: "автоматически" },
          { label: "Пропущенных сроков", value: "0", highlight: "за 6 месяцев" },
          { label: "Генерация документов", value: "15 мин", highlight: "вместо 3 часов" },
          { label: "Экономия", value: "3 млн ₽/год", highlight: "на ФОТ" },
        ],
      },
      testimonial:
        "Раньше два юриста занимались только мониторингом. Теперь система сама следит за всеми делами и предупреждает о важных событиях. Мы смогли высвободить людей для аналитической работы.",
      role: "Начальник юридического управления",
    },
    {
      industry: "Холдинг",
      icon: "🏢",
      problem: {
        title: "Проблема",
        points: [
          "Due Diligence занимала 2-3 недели",
          "Анализ сотен документов вручную",
          "Высокий риск пропустить важные детали",
          "Задержки в закрытии сделок M&A",
        ],
      },
      solution: {
        title: "Решение",
        points: [
          "AI-система для автоматизированного Due Diligence",
          "Анализ правоустанавливающих документов",
          "Выявление юридических рисков и обременений",
          "Структурированные отчеты для руководства",
        ],
      },
      results: {
        title: "Результаты",
        metrics: [
          { label: "Время DD", value: "2-3 недели → 2 дня", highlight: "10x быстрее" },
          { label: "Анализ документов", value: "500+ за день", highlight: "автоматически" },
          { label: "Выявленные риски", value: "85%+", highlight: "точность" },
          { label: "Ускорение сделок", value: "в 5 раз", highlight: "быстрее" },
        ],
      },
      testimonial:
        "Due Diligence из бутылочного горлышка превратился в наше конкурентное преимущество. Теперь мы можем быстро оценивать активы и принимать решения о сделках.",
      role: "Директор по правовым вопросам",
    },
  ];

  const { setRef, visibleItems } = useScrollAnimationMultiple(cases.length, {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Кейсы и результаты
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Мы предлагаем вашему вниманию реальные проекты, которые принесли измеримые результаты и помогли нашим клиентам значительно улучшить их бизнес-процессы. Узнайте, как наши решения изменили подход к работе в различных отраслях.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              ref={setRef(index)}
              className={`scroll-reveal ${visibleItems[index] ? 'visible' : ''} bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 hover:border-white/40 transition-all duration-500`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{caseStudy.icon}</div>
                <h3 className="text-3xl font-bold text-white">
                  {caseStudy.industry}
                </h3>
              </div>

              {/* Problem, Solution, Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Problem */}
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <span>❌</span> {caseStudy.problem.title}
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.problem.points.map((point, idx) => (
                      <li key={idx} className="text-slate-300 text-sm">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <span>🔧</span> {caseStudy.solution.title}
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.solution.points.map((point, idx) => (
                      <li key={idx} className="text-slate-300 text-sm">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <span>✅</span> {caseStudy.results.title}
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.results.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-amber-400 font-bold">
                          {metric.value}
                        </div>
                        <div className="text-xs text-green-400">
                          {metric.highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-amber-500/20 border border-amber-500/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <p className="text-slate-200 italic mb-3">
                      "{caseStudy.testimonial}"
                    </p>
                    <p className="text-slate-400 text-sm">
                      — {caseStudy.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Хотите такие же результаты?
          </h3>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Давайте обсудим, как AI может трансформировать ваш юридический отдел, обеспечив более эффективное управление документами и процессами. Наши специалисты помогут вам внедрить передовые технологии, которые изменят ваш бизнес.
          </p>
          <a
            href="https://t.me/legal_ai_helper_new_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Обсудить ваш проект в Telegram →
          </a>
        </div>
      </div>
    </section>
  );
}