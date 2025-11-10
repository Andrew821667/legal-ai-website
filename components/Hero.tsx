export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Юристы, которые САМИ <br />
          <span className="text-amber-400">пишут AI-код</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay-1">
          Разрабатываем AI-системы для автоматизации юридической работы.
          Не консультируем — ДЕЛАЕМ.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
            <div className="text-slate-300">лет юридической практики</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2">80%+</div>
            <div className="text-slate-300">экономии времени юротдела</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2">4-6 мес</div>
            <div className="text-slate-300">ROI окупаемость</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
            Рассчитать экономию для моей компании
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all backdrop-blur-sm border border-white/30">
            Смотреть демо →
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/50 text-sm mb-2">Прокрутить вниз</div>
          <svg className="w-6 h-6 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
