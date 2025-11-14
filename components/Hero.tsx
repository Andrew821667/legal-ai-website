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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Юристы, самостоятельно <br />
              <span className="text-amber-400">разрабатывающие AI-решения</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-delay-1">
              Мы создаем уникальные системы, которые помогают автоматизировать юридические процессы и значительно повышают их эффективность.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-delay-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">20+</div>
                <div className="text-sm text-slate-300">лет практики</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">80%+</div>
                <div className="text-sm text-slate-300">экономия времени</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">4-6 мес</div>
                <div className="text-sm text-slate-300">окупаемость</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <a
                href="#calculator"
                className="group relative bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Рассчитать экономию</span>
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
          </div>

          {/* Right side - Illustration */}
          <div className="hidden lg:block animate-fade-in-delay-2">
            <div className="relative">
              {/* AI + Legal SVG Illustration */}
              <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
                {/* Background circles */}
                <circle cx="250" cy="250" r="200" fill="url(#grad1)" opacity="0.1"/>
                <circle cx="250" cy="250" r="150" fill="url(#grad2)" opacity="0.1"/>

                {/* AI Brain/Network */}
                <g className="animate-pulse" style={{animationDuration: '3s'}}>
                  {/* Central node */}
                  <circle cx="250" cy="180" r="40" fill="#f59e0b" opacity="0.2"/>
                  <circle cx="250" cy="180" r="30" fill="#f59e0b" opacity="0.4"/>
                  <circle cx="250" cy="180" r="20" fill="#fbbf24"/>

                  {/* Connecting nodes */}
                  <circle cx="180" cy="140" r="12" fill="#94a3b8"/>
                  <circle cx="320" cy="140" r="12" fill="#94a3b8"/>
                  <circle cx="200" cy="220" r="12" fill="#94a3b8"/>
                  <circle cx="300" cy="220" r="12" fill="#94a3b8"/>

                  {/* Connection lines */}
                  <line x1="250" y1="180" x2="180" y2="140" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
                  <line x1="250" y1="180" x2="320" y2="140" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
                  <line x1="250" y1="180" x2="200" y2="220" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
                  <line x1="250" y1="180" x2="300" y2="220" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
                </g>

                {/* Legal Documents */}
                <g transform="translate(150, 280)">
                  {/* Document 1 */}
                  <rect x="0" y="0" width="80" height="100" rx="4" fill="#ffffff" opacity="0.9"/>
                  <line x1="10" y1="15" x2="70" y2="15" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>
                  <line x1="10" y1="30" x2="70" y2="30" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>
                  <line x1="10" y1="45" x2="50" y2="45" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>

                  {/* Document 2 */}
                  <rect x="20" y="10" width="80" height="100" rx="4" fill="#ffffff" opacity="0.8"/>
                  <line x1="30" y1="25" x2="90" y2="25" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>
                  <line x1="30" y1="40" x2="90" y2="40" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>
                  <line x1="30" y1="55" x2="70" y2="55" stroke="#1e293b" strokeWidth="2" opacity="0.3"/>
                </g>

                {/* Scale of Justice */}
                <g transform="translate(280, 300)">
                  {/* Stand */}
                  <rect x="48" y="0" width="4" height="120" fill="#94a3b8"/>
                  <rect x="30" y="115" width="40" height="8" rx="2" fill="#94a3b8"/>

                  {/* Balance beam */}
                  <line x1="20" y1="30" x2="80" y2="30" stroke="#f59e0b" strokeWidth="3"/>
                  <circle cx="50" cy="30" r="5" fill="#f59e0b"/>

                  {/* Left scale */}
                  <line x1="20" y1="30" x2="15" y2="50" stroke="#94a3b8" strokeWidth="2"/>
                  <line x1="25" y1="30" x2="30" y2="50" stroke="#94a3b8" strokeWidth="2"/>
                  <ellipse cx="22.5" cy="52" rx="15" ry="8" fill="#ffffff" opacity="0.7"/>

                  {/* Right scale */}
                  <line x1="80" y1="30" x2="75" y2="50" stroke="#94a3b8" strokeWidth="2"/>
                  <line x1="85" y1="30" x2="90" y2="50" stroke="#94a3b8" strokeWidth="2"/>
                  <ellipse cx="82.5" cy="52" rx="15" ry="8" fill="#ffffff" opacity="0.7"/>
                </g>

                {/* Floating particles */}
                <circle cx="100" cy="100" r="3" fill="#f59e0b" opacity="0.6" className="animate-ping" style={{animationDuration: '2s'}}/>
                <circle cx="400" cy="150" r="3" fill="#f59e0b" opacity="0.6" className="animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}/>
                <circle cx="150" cy="400" r="3" fill="#f59e0b" opacity="0.6" className="animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}}/>

                {/* Gradients */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/50 text-sm mb-2 text-center">Прокрутить вниз</div>
          <svg className="w-6 h-6 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}