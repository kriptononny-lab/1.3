'use client';

import { useTranslations } from 'next-intl';

export default function MapSection() {
  const t = useTranslations('map');
  const cities = t.raw('cities') as string[];

  return (
    <section className="py-20 bg-dark-section relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-1 bg-gold rounded-sm" />
              <span className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
                Pokrycie
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[clamp(1.6rem,3vw,2.2rem)] uppercase tracking-wider leading-tight mb-5">
              {t('title1')}{' '}
              <span className="text-gold">{t('titleHighlight')}</span>
            </h3>
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 bg-gold/[0.08] border border-gold/20 rounded-full text-xs text-gold font-semibold tracking-wider"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Poland Map SVG */}
          <div>
            <svg
              viewBox="0 0 500 480"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Poland outline */}
              <path
                d="M180,60 L220,55 L260,50 L300,48 L340,52 L370,60 L400,80 L420,100 L430,130 L440,160 L430,200 L420,240 L400,270 L380,300 L360,330 L340,360 L310,380 L280,390 L250,400 L220,395 L190,380 L160,360 L140,330 L120,300 L110,270 L100,240 L95,210 L100,180 L110,150 L120,120 L140,90 L160,70 Z"
                fill="rgba(232,168,37,0.06)"
                stroke="#E8A825"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />

              {/* Route lines */}
              <line x1="270" y1="190" x2="290" y2="330" stroke="#E8A825" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" className="route-line" />
              <line x1="270" y1="190" x2="190" y2="230" stroke="#E8A825" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" className="route-line" style={{ animationDelay: '0.5s' }} />
              <line x1="270" y1="190" x2="340" y2="110" stroke="#E8A825" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" className="route-line" style={{ animationDelay: '1s' }} />
              <line x1="270" y1="190" x2="210" y2="130" stroke="#E8A825" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" className="route-line" style={{ animationDelay: '1.5s' }} />

              {/* City dots */}
              {[
                { cx: 270, cy: 190, name: 'Warszawa' },
                { cx: 290, cy: 330, name: 'Kraków' },
                { cx: 340, cy: 110, name: 'Gdańsk' },
                { cx: 190, cy: 230, name: 'Wrocław' },
                { cx: 210, cy: 130, name: 'Poznań' },
                { cx: 240, cy: 220, name: 'Łódź' },
                { cx: 250, cy: 320, name: 'Katowice' },
                { cx: 350, cy: 260, name: 'Lublin' },
              ].map((city, i) => (
                <g key={i}>
                  <circle
                    cx={city.cx}
                    cy={city.cy}
                    r="4"
                    fill="#E8A825"
                    style={{
                      animation: `cityPulse 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      transformOrigin: 'center',
                      transformBox: 'fill-box' as const,
                    }}
                  />
                  <text
                    x={city.cx + 8}
                    y={city.cy + 4}
                    fill="#B0B0B0"
                    fontSize="11"
                    fontFamily="Source Sans 3"
                  >
                    {city.name}
                  </text>
                </g>
              ))}

              {/* Warsaw highlight */}
              <circle cx="270" cy="190" r="12" fill="none" stroke="#E8A825" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" from="6" to="20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
