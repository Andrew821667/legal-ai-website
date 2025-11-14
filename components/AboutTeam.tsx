"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function AboutTeam() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation({ threshold: 0.05 });

  const expertise = [
    {
      icon: "⚖️",
      title: "Юридическая практика",
      description: "20+ лет опыта в крупных компаниях",
      details: [
        "CLO в агрохолдингах, банках, холдингах",
        "Договоры, M&A, банкротства (200+ процедур)",
        "Земельное право, ВЭД",
        "Международные переговоры (English)",
      ],
    },
    {
      icon: "💻",
      title: "Разработка ПО",
      description: "Практический опыт программирования",
      details: [
        "Python (AI/ML, backend)",
        "TypeScript/React (frontend)",
        "OpenAI GPT-4, Claude, векторные БД",
        "Интеграции (1C, CRM, API)",
      ],
    },
    {
      icon: "🤖",
      title: "AI/ML экспертиза",
      description: "Разработка интеллектуальных систем",
      details: [
        "RAG системы (Retrieval-Augmented Generation)",
        "Fine-tuning моделей под отрасль",
        "Prompt engineering и оптимизация",
        "Мультиагентные архитектуры",
      ],
    },
  ];

  const achievements = [
    { icon: "📊", number: "200+", label: "процедур банкротства" },
    { icon: "📋", number: "1000+", label: "автоматизированных договоров" },
    { icon: "⏱️", number: "80%+", label: "экономия времени юротдела" },
    { icon: "🏢", number: "20+", label: "компаний-клиентов" },
  ];

  const technologies = {
    ai: [
      "OpenAI GPT-4",
      "Claude",
      "YandexGPT",
      "GigaChat (Сбер)",
      "LangChain",
    ],
    backend: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Pinecone",
      "Docker",
    ],
    frontend: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
    ],
    integrations: [
      "1C Integration",
      "REST API",
      "Telegram API",
      "Email",
    ],
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            О нашей команде
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Мы — команда профессионалов, объединяющая юридическую экспертизу и передовые технологии. Наши AI/ML решения помогают клиентам достигать новых высот. Представьте себе, как наши инновационные подходы могут трансформировать ваш бизнес, оптимизируя процессы и повышая эффективность. Мы гордимся тем, что наши технологии позволяют компаниям не только экономить ресурсы, но и открывать новые горизонты для роста и развития.
          </p>
        </div>

        {/* Expertise Grid */}
        <div ref={expertiseRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`stagger-item ${expertiseVisible ? 'visible' : ''} bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 mb-4">{item.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-slate-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-amber-500">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Достижения в цифрах
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-slate-300 text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Технологический стек
          </h3>

          {/* Russian AI highlight */}
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">🇷🇺</span>
              <h4 className="text-lg font-bold text-green-400">
                Работаем с российскими AI-решениями
              </h4>
            </div>
            <p className="text-slate-300 text-sm">
              YandexGPT, GigaChat — для соответствия требованиям импортозамещения. Эти решения позволяют нам не только поддерживать высокие стандарты качества, но и обеспечивать полное соответствие локальным нормативам и требованиям.
            </p>
          </div>

          {/* Tech categories */}
          <div className="space-y-6">
            {/* AI Models */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-3 text-center">
                AI-модели
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.ai.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      tech.includes("Yandex") || tech.includes("GigaChat")
                        ? "bg-green-800 text-green-100 border-green-600 hover:border-green-400"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-500"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-3 text-center">
                Backend
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.backend.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 hover:border-amber-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-3 text-center">
                Frontend
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 hover:border-amber-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-3 text-center">
                Интеграции
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.integrations.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 hover:border-amber-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-amber-500/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-500/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами через Telegram — ответим на вопросы и проконсультируем по вашей задаче. Мы предлагаем индивидуальный подход к каждому клиенту, чтобы гарантировать наилучшие результаты и полное удовлетворение ваших потребностей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://t.me/legal_ai_helper_new_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Написать в Telegram →
              </a>
              <a
                href="mailto:a.popov.gv@gmail.com"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all border border-white/30"
              >
                Email: a.popov.gv@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}