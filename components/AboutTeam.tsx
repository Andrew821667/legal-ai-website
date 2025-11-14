"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

// SVG Icons
const LegalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <g transform="translate(50, 50)">
      {/* Balance beam */}
      <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#fbbf24" strokeWidth="3" />
      <circle cx="0" cy="-10" r="4" fill="#f59e0b" />
      {/* Stand */}
      <rect x="-2" y="-10" width="4" height="40" fill="#92400e" />
      <rect x="-15" y="28" width="30" height="5" rx="2" fill="#92400e" />
      {/* Left scale */}
      <line x1="-30" y1="-10" x2="-35" y2="5" stroke="#64748b" strokeWidth="2" />
      <line x1="-25" y1="-10" x2="-20" y2="5" stroke="#64748b" strokeWidth="2" />
      <ellipse cx="-27.5" cy="7" rx="12" ry="5" fill="#3b82f6" opacity="0.7" />
      {/* Right scale */}
      <line x1="30" y1="-10" x2="35" y2="5" stroke="#64748b" strokeWidth="2" />
      <line x1="25" y1="-10" x2="20" y2="5" stroke="#64748b" strokeWidth="2" />
      <ellipse cx="27.5" cy="7" rx="12" ry="5" fill="#3b82f6" opacity="0.7" />
    </g>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Monitor */}
    <rect x="15" y="20" width="70" height="50" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
    <rect x="20" y="25" width="60" height="40" fill="#0f172a" />
    {/* Code */}
    <text x="25" y="38" fontSize="8" fill="#22d3ee" fontFamily="monospace">&lt;AI/&gt;</text>
    <text x="25" y="48" fontSize="8" fill="#a855f7" fontFamily="monospace">func()</text>
    <text x="25" y="58" fontSize="8" fill="#10b981" fontFamily="monospace">{`{...}`}</text>
    {/* Stand */}
    <rect x="45" y="70" width="10" height="8" fill="#64748b" />
    <rect x="30" y="78" width="40" height="3" fill="#64748b" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* AI Brain/Network */}
    <circle cx="50" cy="50" r="25" fill="url(#aiGradient)" opacity="0.3" />
    <circle cx="50" cy="50" r="15" fill="#a855f7" />
    {/* Neural connections */}
    <circle cx="30" cy="35" r="6" fill="#3b82f6" />
    <circle cx="70" cy="35" r="6" fill="#ec4899" />
    <circle cx="30" cy="65" r="6" fill="#10b981" />
    <circle cx="70" cy="65" r="6" fill="#fbbf24" />
    <line x1="50" y1="50" x2="30" y2="35" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="50" y1="50" x2="70" y2="35" stroke="#ec4899" strokeWidth="2" opacity="0.6" />
    <line x1="50" y1="50" x2="30" y2="65" stroke="#10b981" strokeWidth="2" opacity="0.6" />
    <line x1="50" y1="50" x2="70" y2="65" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
    {/* AI text */}
    <text x="50" y="55" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">AI</text>
    <defs>
      <radialGradient id="aiGradient">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </radialGradient>
    </defs>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12">
    <rect x="20" y="60" width="12" height="25" fill="#3b82f6" rx="2" />
    <rect x="38" y="45" width="12" height="40" fill="#10b981" rx="2" />
    <rect x="56" y="30" width="12" height="55" fill="#a855f7" rx="2" />
    <rect x="74" y="50" width="12" height="35" fill="#f59e0b" rx="2" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12">
    <rect x="25" y="15" width="50" height="70" rx="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
    <line x1="35" y1="30" x2="65" y2="30" stroke="#1e293b" strokeWidth="2" />
    <line x1="35" y1="42" x2="65" y2="42" stroke="#1e293b" strokeWidth="1.5" opacity="0.7" />
    <line x1="35" y1="52" x2="60" y2="52" stroke="#1e293b" strokeWidth="1.5" opacity="0.7" />
    <line x1="35" y1="62" x2="65" y2="62" stroke="#1e293b" strokeWidth="1.5" opacity="0.5" />
    <circle cx="65" cy="72" r="8" fill="#10b981" />
    <path d="M 61 72 L 64 75 L 69 69" stroke="#fff" strokeWidth="2" fill="none" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12">
    <circle cx="50" cy="50" r="30" fill="#fff" stroke="#3b82f6" strokeWidth="3" />
    <circle cx="50" cy="50" r="3" fill="#1e293b" />
    <line x1="50" y1="50" x2="50" y2="30" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="50" x2="65" y2="50" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
    {/* Speed lines */}
    <line x1="85" y1="40" x2="95" y2="35" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
    <line x1="85" y1="50" x2="95" y2="50" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
    <line x1="85" y1="60" x2="95" y2="65" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12">
    <rect x="30" y="30" width="40" height="55" fill="#6366f1" />
    <rect x="25" y="82" width="50" height="5" fill="#4338ca" />
    {[0, 1, 2, 3].map(row =>
      [0, 1, 2].map(col => (
        <rect
          key={`${row}-${col}`}
          x={35 + col * 10}
          y={38 + row * 12}
          width="6"
          height="8"
          fill="#a5b4fc"
        />
      ))
    )}
  </svg>
);

export default function AboutTeam() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation({ threshold: 0.05 });

  const expertise = [
    {
      IconComponent: LegalIcon,
      gradient: "from-amber-500 to-orange-500",
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
      IconComponent: CodeIcon,
      gradient: "from-blue-500 to-cyan-500",
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
      IconComponent: AIIcon,
      gradient: "from-purple-500 to-pink-500",
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
    { IconComponent: ChartIcon, gradient: "from-blue-500 to-cyan-500", number: "200+", label: "процедур банкротства" },
    { IconComponent: DocumentIcon, gradient: "from-green-500 to-emerald-500", number: "1000+", label: "автоматизированных договоров" },
    { IconComponent: ClockIcon, gradient: "from-amber-500 to-orange-500", number: "80%+", label: "экономия времени юротдела" },
    { IconComponent: BuildingIcon, gradient: "from-indigo-500 to-purple-500", number: "20+", label: "компаний-клиентов" },
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
            Мы — команда профессионалов, которая объединяет в себе глубокую юридическую экспертизу и передовые технологии. Наши AI/ML решения помогают клиентам достигать новых высот в их бизнесе, предоставляя инновационные инструменты и подходы.
          </p>
        </div>

        {/* Expertise Grid */}
        <div ref={expertiseRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`stagger-item ${expertiseVisible ? 'visible' : ''} bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500`}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4`}>
                <item.IconComponent />
              </div>

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
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} shadow-lg`}>
                    <achievement.IconComponent />
                  </div>
                </div>
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
              Мы активно используем такие решения, как YandexGPT и GigaChat, чтобы соответствовать требованиям импортозамещения и обеспечивать нашим клиентам лучшие технологии.
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
              Свяжитесь с нами через Telegram — мы с удовольствием ответим на все ваши вопросы и проконсультируем по вашей задаче, чтобы предложить наилучшие решения.
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