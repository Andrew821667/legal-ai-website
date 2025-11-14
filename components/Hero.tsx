export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Background decoration - Grid pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `
          linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Юристы, самостоятельно <br />
          <span className="text-amber-400">разрабатывающие AI-решения</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay-1">
          Мы создаем передовые системы, которые автоматизируют юридические процессы и повышают их эффективность. Наша специализация — разработка и внедрение инноваций, а не консультации.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay-2">
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">20+</div>
            <div className="text-slate-300">лет успешной юридической практики</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">80%+</div>
            <div className="text-slate-300">сокращение времени на рутинные задачи</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">4-6 мес</div>
            <div className="text-slate-300">срок окупаемости инвестиций</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <a
            href="#calculator"
            className="group relative bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">Рассчитать экономию для моей компании</span>
          </a>
          <a
            href="https://t.me/legal_ai_helper_new_bot?start=demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all backdrop-blur-sm border border-white/30 hover:border-white/60 transform hover:scale-105 shadow-lg"
          >
            <span className="relative z-10">Смотреть демо →</span>
          </a>
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