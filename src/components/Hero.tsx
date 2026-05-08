'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center pt-[76px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0e1f] via-[#1a1535] via-[35%] via-[#4a2440] via-[65%] to-[#8a3a1f]">
        {/* Stars */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, white, transparent),
              radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 90% 25%, white, transparent)
            `,
          }}
        />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-dark to-transparent z-[2]" />
      </div>

      {/* Skyline SVG layers */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none h-[60%]">
        <svg
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#1a0f1f">
            <rect x="500" y="340" width="90" height="260" />
            <rect x="610" y="310" width="70" height="290" />
            <rect x="700" y="350" width="100" height="250" />
            <rect x="820" y="280" width="80" height="320" />
            <rect x="1100" y="320" width="85" height="280" />
            <rect x="1200" y="295" width="95" height="305" />
            <rect x="1310" y="335" width="75" height="265" />
            <rect x="1400" y="305" width="90" height="295" />
          </g>
          {/* Palace of Culture */}
          <g fill="#251530">
            <rect x="920" y="200" width="60" height="400" />
            <rect x="900" y="220" width="100" height="20" />
            <rect x="880" y="280" width="140" height="320" />
            <rect x="860" y="340" width="180" height="260" />
            <rect x="840" y="400" width="220" height="200" />
            <polygon points="950,200 940,140 950,80 960,140" />
          </g>
          <g fill="#1f1428">
            <rect x="1060" y="150" width="50" height="450" />
            <polygon points="1060,150 1085,100 1110,150" />
          </g>
          {/* Window lights */}
          <g fill="#E8A825" opacity="0.85">
            <circle cx="520" cy="370" r="2" /><circle cx="540" cy="400" r="2" />
            <circle cx="560" cy="430" r="2" /><circle cx="630" cy="340" r="2" />
            <circle cx="650" cy="380" r="2" /><circle cx="720" cy="380" r="2" />
            <circle cx="750" cy="420" r="2" /><circle cx="840" cy="320" r="2" />
            <circle cx="860" cy="370" r="2" /><circle cx="935" cy="240" r="1.5" />
            <circle cx="955" cy="240" r="1.5" /><circle cx="975" cy="240" r="1.5" />
            <circle cx="935" cy="320" r="1.5" /><circle cx="955" cy="320" r="1.5" />
            <circle cx="975" cy="320" r="1.5" /><circle cx="935" cy="400" r="1.5" />
            <circle cx="955" cy="400" r="1.5" /><circle cx="975" cy="400" r="1.5" />
            <circle cx="1075" cy="200" r="2" /><circle cx="1075" cy="290" r="2" />
            <circle cx="1075" cy="390" r="2" /><circle cx="1120" cy="350" r="2" />
            <circle cx="1220" cy="320" r="2" /><circle cx="1330" cy="370" r="2" />
            <circle cx="1420" cy="340" r="2" /><circle cx="1450" cy="390" r="2" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-[3] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5 opacity-0 animate-[fadeUp_0.6s_ease-out_0.2s_forwards]">
            <span className="w-8 h-[2px] bg-gold block" />
            {t('badge')}
          </div>

          <h1 className="font-heading font-semibold uppercase tracking-wider text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.15] mb-5">
            <span className="inline-block opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.2,0.7,0.3,1.1)_0.4s_forwards]">
              {t('title1')}
            </span>
            <br />
            <span className="inline-block opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.2,0.7,0.3,1.1)_0.55s_forwards]">
              {t('title2')}{' '}
            </span>
            <span className="inline-block text-gold opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.2,0.7,0.3,1.1)_0.7s_forwards]">
              {t('titleHighlight')}
            </span>{' '}
            <span className="inline-block opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.2,0.7,0.3,1.1)_0.85s_forwards]">
              {t('flag')}
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-[480px] mb-9 leading-relaxed opacity-0 animate-[fadeUp_0.6s_ease-out_1.5s_forwards]">
            {t('description')}
          </p>

          <div className="flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.6s_ease-out_1.7s_forwards]">
            <button
              onClick={() =>
                document.getElementById('modal')?.classList.add('active')
              }
              className="px-7 py-3 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-light hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,168,37,0.4)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{t('ctaButton')}</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:left-[100%]" />
            </button>
            <a
              href="#services"
              className="px-7 py-3 bg-transparent text-gold border-2 border-gold font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              {t('servicesButton')}
            </a>
          </div>
        </div>

        {/* Animated Van */}
        <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards] hidden lg:block">
          <svg
            viewBox="0 0 600 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[540px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <defs>
              <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#e8e8e8" />
                <stop offset="100%" stopColor="#b8b8b8" />
              </linearGradient>
              <linearGradient id="vanCabin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5f5f5" />
                <stop offset="100%" stopColor="#a8a8a8" />
              </linearGradient>
              <linearGradient id="windshield" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a3055" />
                <stop offset="100%" stopColor="#0a1525" />
              </linearGradient>
              <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#fff8d0" />
                <stop offset="100%" stopColor="#E8A825" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="300" cy="350" rx="240" ry="14" fill="#000" opacity="0.4" />
            <g style={{ animation: 'vanBob 3.5s ease-in-out infinite' }}>
              <rect x="80" y="120" width="320" height="180" rx="6" fill="url(#vanBody)" stroke="#888" strokeWidth="1.5" />
              <line x1="180" y1="120" x2="180" y2="300" stroke="#bbb" strokeWidth="1" />
              <line x1="280" y1="120" x2="280" y2="300" stroke="#bbb" strokeWidth="1" />
              {/* KingdomCars text on van */}
              <text x="200" y="210" fontFamily="Oswald" fontSize="22" fontWeight="700" fill="#E8A825" textAnchor="middle" letterSpacing="2">
                KINGDOMCARS
              </text>
              {/* Cabin */}
              <path d="M400,140 L490,140 Q510,140 515,160 L530,230 L530,300 L400,300 Z" fill="url(#vanCabin)" stroke="#888" strokeWidth="1.5" />
              <path d="M408,148 L488,148 Q502,150 506,165 L518,225 L408,225 Z" fill="url(#windshield)" />
              <ellipse cx="525" cy="245" rx="10" ry="14" fill="#fff8d0" />
              <ellipse
                cx="540" cy="250" rx="35" ry="20" fill="url(#headlight)"
                style={{ animation: 'headlightPulse 2s ease-in-out infinite' }}
              />
              <rect x="510" y="270" width="22" height="20" rx="2" fill="#222" />
              <rect x="80" y="290" width="450" height="20" rx="3" fill="#444" />
              {/* Wheels */}
              <circle cx="180" cy="320" r="30" fill="#333" />
              <circle cx="180" cy="320" r="18" fill="#555" />
              <circle cx="180" cy="320" r="6" fill="#888" />
              <circle cx="460" cy="320" r="30" fill="#333" />
              <circle cx="460" cy="320" r="18" fill="#555" />
              <circle cx="460" cy="320" r="6" fill="#888" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
