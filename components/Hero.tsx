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
              {/* AI + Legal SVG Illustration - Enhanced version */}
              <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
                {/* Dynamic background with gradients */}
                <circle cx="250" cy="250" r="220" fill="url(#bgGrad1)" opacity="0.15"/>
                <circle cx="250" cy="250" r="170" fill="url(#bgGrad2)" opacity="0.15"/>
                <circle cx="250" cy="250" r="120" fill="url(#bgGrad3)" opacity="0.1"/>

                {/* Circuit board pattern */}
                <g opacity="0.3">
                  <line x1="50" y1="80" x2="150" y2="80" stroke="#22d3ee" strokeWidth="2"/>
                  <line x1="150" y1="80" x2="150" y2="130" stroke="#22d3ee" strokeWidth="2"/>
                  <circle cx="150" cy="130" r="4" fill="#06b6d4"/>

                  <line x1="350" y1="100" x2="450" y2="100" stroke="#a855f7" strokeWidth="2"/>
                  <line x1="350" y1="100" x2="350" y2="150" stroke="#a855f7" strokeWidth="2"/>
                  <circle cx="350" cy="150" r="4" fill="#c084fc"/>

                  <line x1="80" y1="400" x2="120" y2="400" stroke="#10b981" strokeWidth="2"/>
                  <line x1="120" y1="400" x2="120" y2="450" stroke="#10b981" strokeWidth="2"/>
                  <circle cx="120" cy="450" r="4" fill="#34d399"/>
                </g>

                {/* AI Neural Network - More complex */}
                <g className="animate-pulse" style={{animationDuration: '3s'}}>
                  {/* Central AI core with layers */}
                  <circle cx="250" cy="150" r="50" fill="url(#aiGrad)" opacity="0.2"/>
                  <circle cx="250" cy="150" r="35" fill="url(#aiGrad)" opacity="0.4"/>
                  <circle cx="250" cy="150" r="20" fill="#fbbf24"/>

                  {/* AI chip symbol */}
                  <rect x="240" y="140" width="20" height="20" fill="#f59e0b" opacity="0.6" rx="2"/>
                  <line x1="245" y1="145" x2="255" y2="155" stroke="#fff" strokeWidth="1.5"/>
                  <line x1="255" y1="145" x2="245" y2="155" stroke="#fff" strokeWidth="1.5"/>

                  {/* Extended neural network */}
                  <circle cx="160" cy="100" r="14" fill="#3b82f6"/>
                  <circle cx="340" cy="100" r="14" fill="#ec4899"/>
                  <circle cx="180" cy="200" r="14" fill="#10b981"/>
                  <circle cx="320" cy="200" r="14" fill="#a855f7"/>
                  <circle cx="250" cy="80" r="12" fill="#06b6d4"/>
                  <circle cx="250" cy="220" r="12" fill="#f472b6"/>

                  {/* Neural connections - colorful */}
                  <line x1="250" y1="150" x2="160" y2="100" stroke="url(#connGrad1)" strokeWidth="3" opacity="0.6"/>
                  <line x1="250" y1="150" x2="340" y2="100" stroke="url(#connGrad2)" strokeWidth="3" opacity="0.6"/>
                  <line x1="250" y1="150" x2="180" y2="200" stroke="url(#connGrad3)" strokeWidth="3" opacity="0.6"/>
                  <line x1="250" y1="150" x2="320" y2="200" stroke="url(#connGrad4)" strokeWidth="3" opacity="0.6"/>
                  <line x1="250" y1="150" x2="250" y2="80" stroke="url(#connGrad5)" strokeWidth="3" opacity="0.6"/>
                  <line x1="250" y1="150" x2="250" y2="220" stroke="url(#connGrad6)" strokeWidth="3" opacity="0.6"/>

                  {/* Data flow particles */}
                  <circle cx="200" cy="125" r="3" fill="#fbbf24" className="animate-ping" style={{animationDuration: '2s'}}/>
                  <circle cx="300" cy="175" r="3" fill="#22d3ee" className="animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}/>
                </g>

                {/* Legal elements - Enhanced */}
                <g transform="translate(100, 280)">
                  {/* Courthouse columns */}
                  <rect x="0" y="30" width="10" height="60" fill="#64748b" rx="2"/>
                  <rect x="20" y="30" width="10" height="60" fill="#64748b" rx="2"/>
                  <rect x="40" y="30" width="10" height="60" fill="#64748b" rx="2"/>
                  <polygon points="5,5 25,0 45,5 45,30 5,30" fill="#475569"/>
                  <rect x="0" y="90" width="50" height="8" fill="#475569" rx="2"/>

                  {/* Gavel */}
                  <g transform="translate(60, 40)">
                    <rect x="0" y="20" width="8" height="40" fill="#f59e0b" rx="1"/>
                    <rect x="-10" y="15" width="28" height="12" fill="#fbbf24" rx="2"/>
                    <circle cx="4" cy="62" r="8" fill="#ec4899" opacity="0.3"/>
                    <circle cx="4" cy="62" r="5" fill="#ec4899" opacity="0.5"/>
                  </g>
                </g>

                {/* Digital contract with signature */}
                <g transform="translate(280, 260)">
                  {/* Contract paper with gradient */}
                  <rect x="0" y="0" width="120" height="140" rx="6" fill="url(#paperGrad)" stroke="#3b82f6" strokeWidth="2"/>

                  {/* Contract lines */}
                  <line x1="15" y1="20" x2="105" y2="20" stroke="#334155" strokeWidth="2" opacity="0.6"/>
                  <line x1="15" y1="35" x2="105" y2="35" stroke="#334155" strokeWidth="2" opacity="0.5"/>
                  <line x1="15" y1="50" x2="85" y2="50" stroke="#334155" strokeWidth="2" opacity="0.5"/>
                  <line x1="15" y1="65" x2="105" y2="65" stroke="#334155" strokeWidth="2" opacity="0.4"/>
                  <line x1="15" y1="80" x2="95" y2="80" stroke="#334155" strokeWidth="2" opacity="0.4"/>

                  {/* Digital signature */}
                  <path d="M 20 110 Q 30 100, 40 110 T 60 110" stroke="#a855f7" strokeWidth="3" fill="none"/>

                  {/* Verification checkmark */}
                  <circle cx="95" cy="110" r="15" fill="#10b981"/>
                  <path d="M 88 110 L 93 115 L 102 105" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>

                  {/* AI badge */}
                  <rect x="85" y="15" width="25" height="12" fill="#ec4899" rx="6"/>
                  <text x="97.5" y="23" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">AI</text>
                </g>

                {/* Law books stack */}
                <g transform="translate(150, 320)">
                  <rect x="0" y="20" width="70" height="15" fill="#ef4444" rx="2"/>
                  <rect x="5" y="7" width="70" height="15" fill="#f59e0b" rx="2"/>
                  <rect x="10" y="-6" width="70" height="15" fill="#3b82f6" rx="2"/>

                  {/* Book spines */}
                  <line x1="0" y1="22" x2="0" y2="35" stroke="#991b1b" strokeWidth="1"/>
                  <line x1="5" y1="9" x2="5" y2="22" stroke="#92400e" strokeWidth="1"/>
                  <line x1="10" y1="-4" x2="10" y2="9" stroke="#1e40af" strokeWidth="1"/>
                </g>

                {/* Data visualization graph */}
                <g transform="translate(50, 200)">
                  <rect x="0" y="50" width="8" height="20" fill="#3b82f6" opacity="0.7"/>
                  <rect x="12" y="35" width="8" height="35" fill="#10b981" opacity="0.7"/>
                  <rect x="24" y="20" width="8" height="50" fill="#a855f7" opacity="0.7"/>
                  <rect x="36" y="40" width="8" height="30" fill="#ec4899" opacity="0.7"/>
                </g>

                {/* Binary code */}
                <g opacity="0.4" fontSize="10" fill="#22d3ee" fontFamily="monospace">
                  <text x="380" y="250">1010</text>
                  <text x="380" y="265">0110</text>
                  <text x="380" y="280">1101</text>
                </g>

                {/* Floating particles - more colorful */}
                <circle cx="100" cy="100" r="4" fill="#fbbf24" opacity="0.7" className="animate-ping" style={{animationDuration: '2s'}}/>
                <circle cx="400" cy="150" r="4" fill="#ec4899" opacity="0.7" className="animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}/>
                <circle cx="150" cy="450" r="4" fill="#22d3ee" opacity="0.7" className="animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}}/>
                <circle cx="420" cy="350" r="4" fill="#10b981" opacity="0.7" className="animate-ping" style={{animationDuration: '2.2s', animationDelay: '0.8s'}}/>
                <circle cx="80" cy="300" r="4" fill="#a855f7" opacity="0.7" className="animate-ping" style={{animationDuration: '2.8s', animationDelay: '0.3s'}}/>

                {/* Gradients */}
                <defs>
                  {/* Background gradients */}
                  <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="bgGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                  </linearGradient>

                  {/* AI gradient */}
                  <radialGradient id="aiGrad">
                    <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                  </radialGradient>

                  {/* Connection gradients */}
                  <linearGradient id="connGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="connGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="connGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="connGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="connGrad5" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="connGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f472b6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Paper gradient */}
                  <linearGradient id="paperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f1f5f9', stopOpacity: 1}} />
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