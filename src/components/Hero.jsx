export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M10 10 h60 v60 h-60 z" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="3" fill="#60a5fa" />
              <circle cx="70" cy="10" r="3" fill="#60a5fa" />
              <circle cx="10" cy="70" r="3" fill="#60a5fa" />
              <circle cx="70" cy="70" r="3" fill="#60a5fa" />
              <path d="M40 10 v20 M40 50 v20 M10 40 h20 M50 40 h20" stroke="#60a5fa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Next-Generation Semiconductor Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powering the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Advanced Chips
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              FihuaChip delivers cutting-edge semiconductor solutions for AI, IoT, automotive, 
              and consumer electronics. Our chips are engineered for performance, efficiency, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="border border-slate-500 hover:border-blue-400 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:bg-blue-500/10"
              >
                Contact Sales →
              </a>
            </div>
          </div>

          {/* Chip illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-slate-800/80 rounded-2xl border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                {/* Chip SVG */}
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  {/* Chip body */}
                  <rect x="50" y="50" width="100" height="100" rx="8" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
                  {/* Inner die */}
                  <rect x="65" y="65" width="70" height="70" rx="4" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1" />
                  {/* Grid pattern */}
                  <line x1="80" y1="65" x2="80" y2="135" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="95" y1="65" x2="95" y2="135" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="110" y1="65" x2="110" y2="135" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="125" y1="65" x2="125" y2="135" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="65" y1="80" x2="135" y2="80" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="65" y1="95" x2="135" y2="95" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="65" y1="110" x2="135" y2="110" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="65" y1="125" x2="135" y2="125" stroke="#3b82f6" strokeWidth="0.5" />
                  {/* Pins top */}
                  <rect x="60" y="42" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="75" y="42" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="90" y="42" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="105" y="42" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="120" y="42" width="6" height="8" rx="1" fill="#94a3b8" />
                  {/* Pins bottom */}
                  <rect x="60" y="150" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="75" y="150" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="90" y="150" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="105" y="150" width="6" height="8" rx="1" fill="#94a3b8" />
                  <rect x="120" y="150" width="6" height="8" rx="1" fill="#94a3b8" />
                  {/* Pins left */}
                  <rect x="42" y="60" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="42" y="75" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="42" y="90" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="42" y="105" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="42" y="120" width="8" height="6" rx="1" fill="#94a3b8" />
                  {/* Pins right */}
                  <rect x="150" y="60" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="150" y="75" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="150" y="90" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="150" y="105" width="8" height="6" rx="1" fill="#94a3b8" />
                  <rect x="150" y="120" width="8" height="6" rx="1" fill="#94a3b8" />
                  {/* Center label */}
                  <text x="100" y="97" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">FIHUA</text>
                  <text x="100" y="108" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">CHIP</text>
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
