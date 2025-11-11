export default function LeadMagnets() {
  const magnets = [
    {
      icon: "📞",
      title: "Бесплатная консультация",
      subtitle: "30 минут с экспертом",
      description:
        "Обсудим вашу ситуацию, оценим потенциал автоматизации и рассчитаем ROI для вашей компании.",
      features: [
        "Анализ текущих процессов",
        "Расчет экономии",
        "Рекомендации по внедрению",
        "Ответы на вопросы",
      ],
      cta: "Записаться на консультацию",
      popular: true,
    },
    {
      icon: "📄",
      title: "Чек-лист по договорам",
      subtitle: "15 типовых ошибок",
      description:
        "Бесплатный PDF с самыми частыми ошибками в договорах, которые находит наша AI-система.",
      features: [
        "Критические условия",
        "Упущенные риски",
        "Некорректные формулировки",
        "Примеры из практики",
      ],
      cta: "Скачать чек-лист",
      popular: false,
    },
    {
      icon: "🎯",
      title: "Демо-анализ договора",
      subtitle: "Бесплатная проверка",
      description:
        "Пришлите ваш договор — мы проанализируем его через AI-систему и покажем что можно улучшить.",
      features: [
        "Выявление рисков",
        "Анализ условий",
        "Рекомендации",
        "Конфиденциально",
      ],
      cta: "Отправить договор",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Начните бесплатно
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Выберите способ познакомиться с нашими AI-решениями
          </p>
        </div>

        {/* Magnets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {magnets.map((magnet, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                magnet.popular
                  ? "border-amber-500 relative"
                  : "border-slate-200"
              } flex flex-col`}
            >
              {/* Popular badge */}
              {magnet.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Популярно
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-6xl mb-4 text-center">{magnet.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                {magnet.title}
              </h3>

              {/* Subtitle */}
              <p className="text-amber-600 font-semibold mb-4 text-center">
                {magnet.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed text-center">
                {magnet.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {magnet.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 flex items-start gap-2"
                  >
                    <span className="text-amber-500 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://t.me/legal_ai_helper_new_bot?start=${
                  index === 0 ? "consultation" : index === 1 ? "checklist" : "demo"
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 ${
                  magnet.popular
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {magnet.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Все материалы — бесплатно
            </h3>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Никаких скрытых платежей. Просто качественная информация о том,
              как AI может помочь вашему юротделу.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Без обязательств</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Конфиденциально</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Без спама</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
