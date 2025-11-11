export default function Features() {
  const features = [
    {
      icon: "💼",
      title: "20+ лет практики",
      description: "Юридическая экспертиза + программирование. Понимаем специфику изнутри."
    },
    {
      icon: "🤖",
      title: "Сами пишем код",
      description: "Не консультируем — разрабатываем и внедряем AI-системы под ключ."
    },
    {
      icon: "🇷🇺",
      title: "Российские AI",
      description: "Работаем с YandexGPT и GigaChat. Соответствие требованиям импортозамещения."
    },
    {
      icon: "📊",
      title: "80%+ экономия",
      description: "Реальное сокращение времени на рутинные задачи юротдела."
    },
    {
      icon: "⚡",
      title: "ROI 4-6 месяцев",
      description: "Быстрая окупаемость за счет автоматизации процессов."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Почему мы?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Уникальное сочетание юридической экспертизы и технических навыков
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            Готовы обсудить ваш проект?
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
            Написать нам в Telegram →
          </button>
        </div>
      </div>
    </section>
  );
}
