"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { Award, BookOpen, Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";

export default function ExpertiseProof() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 });

  const credentials = [
    {
      icon: GraduationCap,
      title: "Образование",
      gradient: "from-blue-500 to-indigo-600",
      items: [
        "Юридическое образование (магистратура)",
        "Техническое образование (программирование)",
        "Курсы ML/AI от ведущих университетов",
        "Сертификация по YandexGPT и GigaChat"
      ]
    },
    {
      icon: Briefcase,
      title: "Опыт работы",
      gradient: "from-amber-500 to-orange-600",
      items: [
        "Chief Legal Officer в агрохолдингах",
        "Юридический директор в банковском секторе",
        "Руководитель юротдела в крупных холдингах",
        "Практикующий разработчик систем на основе ИИ"
      ]
    },
    {
      icon: Award,
      title: "Достижения",
      gradient: "from-emerald-500 to-teal-600",
      items: [
        "200+ успешных процедур банкротства",
        "Сопровождение сделок M&A на сумму 5+ млрд ₽",
        "Разработка ИИ-систем для Fortune 500 компаний",
        "Автоматизация юридических процессов в 20+ компаниях"
      ]
    },
    {
      icon: Users,
      title: "Профессиональные членства",
      gradient: "from-purple-500 to-pink-600",
      items: [
        "Член Ассоциации юристов России",
        "Участник Legal Tech сообщества",
        "Спикер на конференциях по автоматизации",
        "Эксперт по внедрению ИИ в юриспруденции"
      ]
    },
  ];

  const expertise = [
    {
      area: "Договорное право и M&A",
      years: "20+",
      cases: "1000+",
      description: "Проверка и составление договоров, сопровождение сделок слияний и поглощений"
    },
    {
      area: "Корпоративное управление",
      years: "15+",
      cases: "500+",
      description: "Уставы, корпоративные структуры, реорганизации, due diligence"
    },
    {
      area: "Банкротство и реструктуризация",
      years: "12+",
      cases: "200+",
      description: "Процедуры несостоятельности, арбитражное управление, защита кредиторов"
    },
    {
      area: "Земельное право",
      years: "18+",
      cases: "800+",
      description: "Сделки с землей, кадастровый учет, оспаривание стоимости"
    },
    {
      area: "Судебная практика",
      years: "20+",
      cases: "1500+",
      description: "Арбитраж, суды общей юрисдикции, представительство интересов"
    },
    {
      area: "Разработка ИИ-решений",
      years: "5+",
      cases: "50+",
      description: "RAG-системы, автоматизация документооборота, предиктивная аналитика"
    },
  ];

  const publications = [
    {
      title: "Применение ИИ в юридической практике",
      type: "Статья",
      description: "Практический опыт внедрения YandexGPT для автоматизации договорной работы",
      year: "2024"
    },
    {
      title: "Автоматизация банкротных процедур",
      type: "Кейс",
      description: "Как мы сократили время на анализ документов в банкротстве с 3 недель до 2 дней",
      year: "2024"
    },
    {
      title: "RAG-системы для юристов",
      type: "Доклад",
      description: "Выступление на Legal Tech Conference о векторных базах данных в праве",
      year: "2024"
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Экспертиза и опыт
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Наша команда объединяет юридическую практику высшего уровня и глубокие технические компетенции.
            Мы не просто разрабатываем системы — мы понимаем юридические процессы изнутри.
            Это позволяет создавать решения, которые действительно работают.
          </p>
        </div>

        {/* Credentials Grid */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className={`stagger-item ${contentVisible ? 'visible' : ''} bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${credential.gradient} shadow-lg mb-4`}>
                <credential.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {credential.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {credential.items.map((item, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Founder Bio */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                АП
              </div>
            </div>

            {/* Bio content */}
            <div className="flex-grow">
              <h3 className="text-3xl font-bold text-white mb-2">
                Андрей Попов
              </h3>
              <p className="text-xl text-amber-400 mb-4">
                Основатель и Chief Legal Officer
              </p>

              <div className="space-y-3 text-slate-300">
                <p>
                  Более 20 лет юридической практики в крупнейших российских компаниях.
                  Работал юридическим директором в агрохолдингах, банках и промышленных холдингах.
                  Провел более 200 процедур банкротства.
                </p>
                <p>
                  Параллельно с юридической практикой освоил программирование и машинное обучение.
                  Разрабатываю системы на основе искусственного интеллекта для автоматизации юридических процессов.
                  Использую Python, TypeScript и современные фреймворки.
                </p>
                <p>
                  Специализируюсь на внедрении российских решений: YandexGPT и GigaChat.
                  Создаю RAG-системы для работы с правовыми документами.
                  Помогаю компаниям сокращать затраты на юридическую функцию на 80%+.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:a.popov.gv@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 transition-all"
                >
                  <span>📧</span>
                  a.popov.gv@gmail.com
                </a>
                <a
                  href="tel:+79092330909"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 transition-all"
                >
                  <span>📞</span>
                  +7 (909) 233-09-09
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Области экспертизы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white flex-grow">
                    {item.area}
                  </h4>
                  <div className="flex gap-2">
                    <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded text-xs font-semibold">
                      {item.years} лет
                    </span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-semibold">
                      {item.cases}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Speaking */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Публикации и выступления
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-semibold">{pub.type}</span>
                  <span className="ml-auto text-slate-400 text-sm">{pub.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {pub.title}
                </h4>
                <p className="text-slate-300 text-sm">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-300 text-sm">
              Регулярно выступаем на конференциях Legal Tech, публикуем статьи о практическом применении ИИ в юридической сфере.
              Делимся реальным опытом внедрения автоматизации в крупных компаниях.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
            <div className="text-slate-300 text-sm">лет практики</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
            <div className="text-slate-300 text-sm">банкротств</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-slate-300 text-sm">ИИ-проектов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
            <div className="text-slate-300 text-sm">конфиденциальность</div>
          </div>
        </div>
      </div>
    </section>
  );
}
