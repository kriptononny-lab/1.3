'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.4 });
    obs.observe(el); return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const d = 1800, s = performance.now();
    function step(n: number) { const t = Math.min((n - s) / d, 1); setCount(Math.floor(target * (1 - Math.pow(1 - t, 3)))); if (t < 1) requestAnimationFrame(step); else setCount(target); }
    requestAnimationFrame(step);
  }, [started, target]);
  return <div ref={ref}>{count}{suffix}</div>;
}

export default function V3Page() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const switchLocale = (l: string) => { const s = pathname.split('/'); s[1] = l; router.push(s.join('/')); };
  useEffect(() => { const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); }; document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, []);

  const advItems = t.raw('advantages.items') as Array<{ title: string; desc: string }>;
  const svcItems = t.raw('services.items') as Array<{ title: string; cta: string }>;
  const svcDescs = t.raw('services.descriptions') as string[];
  const svcPrices = t.raw('services.prices') as string[];
  const svcTimes = t.raw('services.times') as string[];
  const revItems = t.raw('reviews.items') as Array<{ name: string; location: string; text: string; tag: string }>;
  const cities = t.raw('map.cities') as string[];

  const svcCodes = ['SVC-01', 'SVC-02', 'SVC-03', 'SVC-04'];
  const svcLabels = ['MIESZKANIE', 'MAGAZYN', 'ŚMIECI', 'BIURO'];
  const cityCodes = ['WAW', 'KRK', 'GDN', 'WRO', 'POZ', 'LCJ', 'KTW', 'LUZ', 'BZG'];

  return (
    <div className="text-white leading-[1.55] antialiased overflow-x-hidden text-[15px]" style={{ fontFamily: "'Inter', sans-serif", background: '#141414' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');
        .bebas { font-family: 'Bebas Neue', sans-serif; text-transform: uppercase; letter-spacing: 0.02em; line-height: 0.95; }
        .mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }
        .hazard { height: 16px; background: repeating-linear-gradient(135deg, #E8A825 0 14px, #141414 14px 28px); width: 100%; }
        .hazard-thin { height: 8px; background: repeating-linear-gradient(135deg, #E8A825 0 8px, #141414 8px 16px); }
        body::before { content:''; position:fixed; inset:0; pointer-events:none; z-index:0; background-image: linear-gradient(to right,rgba(232,168,37,0.025) 1px,transparent 1px), linear-gradient(to bottom,rgba(232,168,37,0.025) 1px,transparent 1px); background-size:64px 64px; }
        .sec-label { font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:0.22em; color:#E8A825; display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sec-label::before { content:''; width:24px; height:2px; background:#E8A825; }
        @keyframes ping3 { 0%{r:3;opacity:0.8} 100%{r:14;opacity:0} }
        @keyframes pulse3 { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scroll3 { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      {/* ═══ HAZARD TOP ═══ */}
      <div className="hazard" />

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-[#141414]/92 backdrop-blur-lg border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between py-4.5">
          <a href="#" className="flex items-center gap-2.5 bebas text-[22px] tracking-[0.12em]">
            <span className="w-9 h-9 bg-[#E8A825] flex items-center justify-center text-[#141414] text-[20px] relative">
              KC
              <span className="absolute inset-[3px] border border-[#141414]/45" />
            </span>
            KingdomCars
          </a>
          <nav className="hidden lg:flex gap-9">
            {[
              { label: t('nav.benefits'), href: '#advantages' },
              { label: t('nav.services'), href: '#services' },
              { label: t('nav.pricing'), href: '#pricing' },
              { label: t('nav.reviews'), href: '#reviews' },
            ].map((n, i) => (
              <a key={i} href={n.href} className="mono text-xs uppercase tracking-[0.1em] text-[#B0B0B0] hover:text-[#E8A825] transition-colors pb-1 relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-px hover:after:bg-[#E8A825]">
                <span className="text-[#6A6A6A] mr-1">[{String(i + 1).padStart(2, '0')}]</span> {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-0.5 border border-[#2E2E2E] overflow-hidden">
              {['pl', 'ru'].map(l => (
                <button key={l} onClick={() => switchLocale(l)} className={`mono px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${locale === l ? 'bg-[#E8A825] text-[#141414]' : 'text-[#6A6A6A] hover:text-[#E8A825]'}`}>{l}</button>
              ))}
            </div>
            <button onClick={() => setModalOpen(true)} className="mono text-xs font-bold uppercase tracking-[0.12em] px-5 py-3.5 bg-[#E8A825] text-[#141414] border border-[#E8A825] hover:bg-transparent hover:text-[#E8A825] transition-all">
              {t('nav.cta')} →
            </button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-2xl">☰</button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-[#1A1A1A] border-t border-[#2E2E2E] px-8 py-6 flex flex-col gap-4">
            <div className="flex gap-2">
              {['pl', 'ru'].map(l => <button key={l} onClick={() => switchLocale(l)} className={`mono px-4 py-2 text-[10px] font-bold uppercase ${locale === l ? 'bg-[#E8A825] text-[#141414]' : 'border border-[#2E2E2E] text-[#6A6A6A]'}`}>{l}</button>)}
            </div>
            <button onClick={() => { setMobileOpen(false); setModalOpen(true); }} className="mono text-xs font-bold uppercase bg-[#E8A825] text-[#141414] py-3">{t('nav.cta')}</button>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section className="pt-16 relative overflow-hidden border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-20 items-start relative z-10">
          <div>
            <div className="flex items-center gap-3.5 mono text-[11px] text-[#6A6A6A] uppercase tracking-[0.18em] mb-8">
              <span className="w-7 h-0.5 bg-[#E8A825]" />
              PL · 2019
              <span className="border border-[#3A3A3A] px-2.5 py-1 text-[#E8A825]">SYS // ACTIVE v.5.2</span>
            </div>

            <h1 className="bebas text-[clamp(56px,9vw,132px)] mb-7">
              <span className="mono text-[0.18em] align-top text-[#E8A825] tracking-[0.12em] font-bold mr-3">01</span>
              {t('hero.title1')}<br />
              <span className="text-[#E8A825] block">{t('hero.title2')} {t('hero.titleHighlight')}</span>
            </h1>

            <p className="max-w-[540px] text-[17px] text-[#B0B0B0] mb-9 border-l-2 border-[#E8A825] pl-5">{t('hero.description')}</p>

            <div className="flex gap-4 flex-wrap mb-12">
              <button onClick={() => setModalOpen(true)} className="mono text-xs font-bold uppercase tracking-[0.12em] px-5 py-3.5 bg-[#E8A825] text-[#141414] border border-[#E8A825] hover:bg-transparent hover:text-[#E8A825] transition-all">
                {t('hero.ctaButton')} →
              </button>
              <a href="#services" className="mono text-xs font-bold uppercase tracking-[0.12em] px-5 py-3.5 border border-[#3A3A3A] text-white hover:border-[#E8A825] hover:text-[#E8A825] transition-all">
                {t('hero.servicesButton')}
              </a>
            </div>

            <div className="flex gap-2 flex-wrap mono text-[11px] uppercase tracking-[0.1em]">
              {t('hero.badge').split(' · ').map((tag, i) => (
                <span key={i} className="px-3 py-1.5 border border-[#3A3A3A] text-[#B0B0B0]">// {tag}</span>
              ))}
            </div>
          </div>

          {/* MANIFEST CARD */}
          <div className="bg-[#202020] border border-[#3A3A3A] relative mono text-xs">
            <div className="flex justify-between items-center px-5 py-3.5 bg-[#E8A825] text-[#141414] font-bold uppercase tracking-[0.15em]">
              <span><span className="inline-block w-2 h-2 bg-[#141414] rounded-full mr-2" style={{ animation: 'pulse3 1.6s ease-in-out infinite' }} />Live Status ● Operational</span>
              <span>Manifest #KC-2026-PL</span>
            </div>
            <div className="p-5">
              {[
                { label: 'Floty', val: '12 pojazdów' },
                { label: 'Kierowcy', val: '24h dostępni', gold: true },
                { label: 'Ubezpieczenie', val: 'OC + AC + Cargo' },
                { label: 'Dokumenty', val: 'Faktura VAT' },
                { label: 'Zlecenia', val: '3 200+', gold: true },
              ].map((r, i) => (
                <div key={i} className={`flex justify-between py-3 ${i < 4 ? 'border-b border-dashed border-[#2E2E2E]' : ''} text-xs`}>
                  <span className="text-[#6A6A6A] uppercase tracking-[0.12em]">{r.label}</span>
                  <span className={`font-bold text-right ${r.gold ? 'text-[#E8A825]' : 'text-white'}`}>{r.val}</span>
                </div>
              ))}
            </div>
            {/* Stamp */}
            <div className="absolute -top-3.5 -right-3.5 w-[90px] h-[90px] border-2 border-[#E8A825] flex items-center justify-center text-center bg-[#141414] rotate-[8deg] bebas text-[13px] text-[#E8A825] tracking-wider leading-none p-2">
              <span className="absolute inset-1 border border-dashed border-[#E8A825] opacity-40" />
              WARSZAWA ··· POLSKA
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="mt-16 border-t border-[#2E2E2E] border-b border-[#2E2E2E] bg-black/30 overflow-hidden">
          <div className="flex gap-12 py-4 whitespace-nowrap" style={{ animation: 'scroll3 40s linear infinite' }}>
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex gap-12">
                {['Warszawa → Kraków', 'Łódź → Gdańsk', 'Wrocław → Poznań', 'Katowice → Lublin', 'Białystok → Warszawa', 'Jarosław → Kraków'].map((route, i) => (
                  <span key={i} className="mono text-xs text-[#B0B0B0] uppercase tracking-[0.18em] flex items-center gap-3.5">
                    <span className="text-[#E8A825] font-bold">KC-2026-{String(i + 1).padStart(3, '0')}</span>
                    {route}
                    <span className="text-[#6A6A6A]">//</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-24 border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
            <div>
              <div className="sec-label">[01] // KEY METRICS</div>
              <h2 className="bebas text-[clamp(40px,5vw,64px)]">{t('advantages.sectionTitle').split(' ')[0]} <span className="text-[#E8A825]">{t('advantages.sectionTitle').split(' ').slice(1).join(' ')}</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#3A3A3A]">
            {[
              { num: '5+', label: t('counters.years'), desc: advItems[1]?.desc },
              { num: '3200+', label: t('counters.clients'), desc: advItems[0]?.desc },
              { num: '127+', label: 'Opinii klientów', desc: 'Pozytywne recenzje i opinie sprawdzonych klientów na Google.' },
            ].map((s, i) => (
              <div key={i} className={`p-10 relative ${i < 2 ? 'md:border-r border-[#3A3A3A]' : ''}`}>
                <span className="mono text-[10px] text-[#6A6A6A] tracking-[0.1em] absolute top-4 right-4">{String(i + 1).padStart(2, '0')} / 03</span>
                <div className="bebas text-[88px] text-[#E8A825] leading-none mb-2 tracking-tighter">{s.num}</div>
                <div className="mono text-[11px] uppercase tracking-[0.15em] text-[#B0B0B0] mb-3">{s.label}</div>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section id="advantages" className="py-24 bg-[#1A1A1A] border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="sec-label mb-4">[02] // CORE ADVANTAGES</div>
          <h2 className="bebas text-[clamp(40px,5vw,64px)] mb-14">{t('advantages.sectionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#3A3A3A]">
            {advItems.slice(0, 4).map((item, i) => (
              <div key={i} className={`p-10 relative border-b border-[#3A3A3A] ${i % 2 === 0 ? 'md:border-r border-[#3A3A3A]' : ''} ${i >= 2 ? 'md:border-b-0' : ''} hover:bg-[#E8A825]/[0.04] transition-colors`}>
                <div className="mono text-[11px] text-[#E8A825] tracking-[0.18em] mb-5">// {String(i + 1).padStart(2, '0')} — {['БЕЗПЕЧЕНСТВО', 'ДОСТУПНІСТЬ', 'ZASIĘG', 'LOGISTYKA'][i]}</div>
                <h3 className="bebas text-[32px] mb-3.5">{item.title}</h3>
                <p className="text-[#B0B0B0] text-[15px] max-w-[420px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="sec-label mb-4">[03] // SERVICES CATALOG</div>
          <h2 className="bebas text-[clamp(40px,5vw,64px)] mb-14">{t('services.sectionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {svcItems.map((svc, i) => (
              <div key={i} className="border border-[#3A3A3A] -mt-px -ml-px p-9 flex flex-col gap-5 min-h-[280px] hover:bg-[#202020] hover:border-[#E8A825] hover:z-10 transition-all relative group">
                <div className="flex justify-between items-center mono text-[11px] tracking-[0.15em] uppercase">
                  <span className="text-[#E8A825] font-bold">{svcCodes[i]} // {svcLabels[i]}</span>
                  <span className="text-[#6A6A6A]"><span className="text-[#4ade80] mr-1.5 text-shadow-[0_0_4px_#4ade80]">●</span>Available</span>
                </div>
                <h3 className="bebas text-[44px] leading-[0.95]">{svc.title}</h3>
                <p className="text-[#B0B0B0] text-sm flex-1">{svcDescs[i]}</p>
                <div className="flex justify-between items-end border-t border-dashed border-[#3A3A3A] pt-5">
                  <div>
                    <div className="bebas text-4xl text-[#E8A825] leading-none">{svcPrices[i]}</div>
                    <small className="mono text-[11px] text-[#6A6A6A] tracking-[0.12em] block mt-1">/godz · netto</small>
                  </div>
                  <button onClick={() => setModalOpen(true)} className="mono text-xs text-[#E8A825] tracking-[0.15em] uppercase border border-[#E8A825] px-3.5 py-2.5 group-hover:bg-[#E8A825] group-hover:text-[#141414] transition-all">
                    {svc.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COVERAGE MAP ═══ */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="sec-label mb-4">[04] // COVERAGE MAP</div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <h2 className="bebas text-[clamp(40px,5vw,64px)] mb-6">{t('map.title1')} <span className="text-[#E8A825]">{t('map.titleHighlight')}</span></h2>
              <p className="text-[#B0B0B0] mb-8 max-w-[480px]">{t('map.description')}</p>
              <div className="grid grid-cols-2 border border-[#3A3A3A]">
                {cities.slice(0, -1).map((c, i) => (
                  <div key={i} className={`mono text-xs uppercase tracking-[0.1em] px-4 py-3.5 flex justify-between items-center ${i % 2 === 0 ? 'border-r border-[#3A3A3A]' : ''} ${i < cities.length - 3 ? 'border-b border-[#3A3A3A]' : ''} hover:bg-[#E8A825]/[0.06] hover:text-[#E8A825] transition-all cursor-default`}>
                    {c}
                    <span className="text-[10px] text-[#6A6A6A]">{cityCodes[i] || '...'}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#3A3A3A] bg-[#202020] p-10 relative" style={{ aspectRatio: '1/1.05' }}>
              <span className="mono text-[10px] text-[#E8A825] tracking-[0.18em] absolute top-3 left-4">PL · COVERAGE GRID</span>
              <span className="mono text-[10px] text-[#6A6A6A] tracking-[0.18em] absolute top-3 right-4">24/7</span>
              <svg viewBox="0 0 500 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M180,60 L220,55 L260,50 L300,48 L340,52 L370,60 L400,80 L420,100 L430,130 L440,160 L430,200 L420,240 L400,270 L380,300 L360,330 L340,360 L310,380 L280,390 L250,400 L220,395 L190,380 L160,360 L140,330 L120,300 L110,270 L100,240 L95,210 L100,180 L110,150 L120,120 L140,90 L160,70 Z"
                  fill="rgba(232,168,37,0.08)" stroke="#E8A825" strokeWidth="1.2" />
                {[
                  { cx: 270, cy: 190, n: 'WAW' }, { cx: 290, cy: 330, n: 'KRK' },
                  { cx: 340, cy: 110, n: 'GDN' }, { cx: 190, cy: 230, n: 'WRO' },
                  { cx: 210, cy: 130, n: 'POZ' }, { cx: 240, cy: 220, n: 'LCJ' },
                  { cx: 250, cy: 320, n: 'KTW' }, { cx: 350, cy: 260, n: 'LUZ' },
                ].map((c, i) => (
                  <g key={i}>
                    <circle cx={c.cx} cy={c.cy} r="3" fill="#E8A825" />
                    <circle cx={c.cx} cy={c.cy} r="3" fill="#E8A825" style={{ animation: `ping3 2.5s ease-out infinite ${i * 0.3}s` }} />
                    <text x={c.cx + 8} y={c.cy + 3} fill="#B0B0B0" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em" style={{ textTransform: 'uppercase' }}>{c.n}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING TABLE ═══ */}
      <section id="pricing" className="py-24 border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="sec-label mb-4">[05] // PRICE LIST</div>
          <h2 className="bebas text-[clamp(40px,5vw,64px)] mb-14">{t('pricing.sectionTitle')}</h2>
          <div className="border border-[#3A3A3A]">
            {/* Header */}
            <div className="grid grid-cols-[80px_2fr_1fr_1fr_1.2fr] bg-[#E8A825] text-[#141414] mono text-[11px] font-bold uppercase tracking-[0.15em]">
              {['#', t('nav.services'), 'Czas', 'Stawka', 'Akcja'].map((h, i) => (
                <div key={i} className={`px-4 py-3.5 ${i < 4 ? 'border-r border-[#141414]/20' : ''}`}>{h}</div>
              ))}
            </div>
            {/* Rows */}
            {svcItems.map((svc, i) => (
              <div key={i} className="grid grid-cols-[80px_2fr_1fr_1fr_1.2fr] border-t border-[#3A3A3A] hover:bg-[#202020] transition-colors">
                <div className="px-4 py-5 mono text-[13px] text-[#E8A825] font-bold tracking-[0.1em] border-r border-[#3A3A3A] flex items-center">{svcCodes[i]}</div>
                <div className="px-4 py-5 bebas text-[22px] tracking-wider border-r border-[#3A3A3A] flex items-center">{svc.title}</div>
                <div className="px-4 py-5 mono text-[13px] text-[#B0B0B0] border-r border-[#3A3A3A] flex items-center">{svcTimes[i]}</div>
                <div className="px-4 py-5 bebas text-[28px] text-[#E8A825] tracking-wider border-r border-[#3A3A3A] flex items-center">{svcPrices[i]}</div>
                <div className="px-4 py-5 mono text-[11px] tracking-[0.15em] uppercase flex items-center">
                  <button onClick={() => setModalOpen(true)} className="text-[#B0B0B0] hover:text-[#E8A825] transition-colors">{svc.cta} →</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 mono text-[11px] text-[#6A6A6A] tracking-[0.15em] uppercase flex items-center gap-3">
            <span className="text-[#E8A825] text-base">*</span>
            {t('pricing.note')} · Faktura VAT
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews" className="py-24 bg-[#1A1A1A] border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
            <div>
              <div className="sec-label">[06] // CLIENT REVIEWS</div>
              <h2 className="bebas text-[clamp(40px,5vw,64px)]">{t('reviews.sectionTitle')}</h2>
            </div>
            <div className="border border-[#3A3A3A] px-5 py-4 flex items-center gap-3.5 mono text-[11px] tracking-[0.12em] uppercase">
              <span className="text-[#E8A825] text-base tracking-wider">★★★★★</span>
              <span className="bebas text-[22px] text-[#E8A825]">4.9</span>
              <span className="text-[#6A6A6A]">/ 5 Google · 127+ opinii</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revItems.map((r, i) => (
              <div key={i} className="bg-[#202020] border border-[#3A3A3A] p-7 relative hover:border-[#E8A825] hover:-translate-y-1 transition-all">
                <span className="absolute top-3.5 right-3.5 bebas text-[56px] text-[#E8A825] opacity-40 leading-[0.6]">&ldquo;</span>
                <div className="text-[#E8A825] text-sm tracking-wider mb-3.5">★★★★★</div>
                <p className="text-sm text-[#B0B0B0] mb-6 min-h-[72px]">{r.text}</p>
                <div className="flex justify-between items-center pt-4 border-t border-dashed border-[#3A3A3A] mono text-[11px] tracking-[0.1em] uppercase">
                  <span className="font-bold text-white">// {r.name}</span>
                  <span className="text-[#6A6A6A]">{r.location.split('·')[1]?.trim()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="py-24 border-b border-[#2E2E2E]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="sec-label mb-4">[07] // ORDER REQUEST</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#3A3A3A]">
            {/* Info side */}
            <div className="p-14 border-r border-[#3A3A3A] relative">
              <div className="absolute left-0 top-0 right-0 hazard-thin" />
              <h2 className="bebas text-[56px] mb-6 leading-none mt-4">{t('cta.title').split('?')[0]}?<br /><span className="text-[#E8A825]">{t('cta.title').split('?')[1] || ''}</span></h2>
              <p className="text-[#B0B0B0] mb-9 max-w-[380px]">{t('cta.subtitle')}</p>
              <div className="flex flex-col gap-3.5">
                {[
                  { label: 'Tel', val: t('contact.phone') },
                  { label: 'Email', val: t('contact.email') },
                  { label: 'Adres', val: t('contact.address').slice(0, 50) },
                  { label: 'Godz', val: t('contact.hours') },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 mono text-xs tracking-[0.12em] uppercase">
                    <span className="text-[#6A6A6A] w-12">{c.label}</span>
                    <span className="font-bold">{c.val}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Form side */}
            <div className="p-14">
              <div className="mono text-[11px] text-[#E8A825] tracking-[0.18em] mb-6">Form // Order-Request <span className="text-[#6A6A6A]">REQ-2026-NEW</span></div>
              <div className="flex flex-col gap-4">
                {[t('cta.namePlaceholder'), t('cta.phonePlaceholder'), 'Email'].map((ph, i) => (
                  <div key={i}>
                    <label className="mono text-[10px] text-[#6A6A6A] tracking-[0.15em] uppercase block mb-1.5">{String(i + 1).padStart(2, '0')} // {ph.split(' ')[0]}</label>
                    <input type={i === 2 ? 'email' : 'text'} placeholder={ph} className="w-full py-3.5 px-4 bg-transparent border border-[#3A3A3A] text-sm text-white focus:outline-none focus:border-[#E8A825] transition-all mono placeholder-[#6A6A6A]" />
                  </div>
                ))}
                <label className="flex items-start gap-2.5 text-xs text-[#B0B0B0] cursor-pointer mt-1">
                  <input type="checkbox" className="accent-[#E8A825] w-4 h-4 mt-0.5" />
                  {t('cta.consent')}
                </label>
                <button onClick={() => alert(t('cta.thanks'))} className="mt-2 mono text-xs font-bold uppercase tracking-[0.12em] py-4 bg-[#E8A825] text-[#141414] border border-[#E8A825] hover:bg-transparent hover:text-[#E8A825] transition-all">
                  {t('cta.submit')} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10">
        <div className="hazard-thin mb-8" />
        <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-between items-center gap-4 mono text-[11px] text-[#6A6A6A] tracking-[0.12em] uppercase">
          <span>© 2024 KingdomCars. All rights reserved.</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full" style={{ boxShadow: '0 0 6px #4ade80' }} />
            System Operational
          </span>
          <a href={`mailto:${t('contact.email')}`} className="text-[#E8A825] hover:underline">{t('contact.email')}</a>
        </div>
      </footer>

      {/* ═══ MODAL ═══ */}
      {modalOpen && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center" onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div className="bg-[#202020] border border-[#3A3A3A] w-[480px] max-w-[92vw] relative animate-[fadeUp_0.3s_ease-out]">
            <div className="bg-[#E8A825] text-[#141414] mono text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-3 flex justify-between">
              <span>Order Form</span>
              <button onClick={() => setModalOpen(false)}>×</button>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <h3 className="bebas text-4xl mb-2">{t('cta.title').split('?')[0]}?</h3>
              <input type="text" placeholder={t('cta.namePlaceholder')} className="w-full py-3.5 px-4 bg-transparent border border-[#3A3A3A] text-sm text-white focus:outline-none focus:border-[#E8A825] transition-all mono placeholder-[#6A6A6A]" />
              <input type="tel" placeholder={t('cta.phonePlaceholder')} className="w-full py-3.5 px-4 bg-transparent border border-[#3A3A3A] text-sm text-white focus:outline-none focus:border-[#E8A825] transition-all mono placeholder-[#6A6A6A]" />
              <label className="flex items-start gap-2.5 text-xs text-[#B0B0B0]">
                <input type="checkbox" className="accent-[#E8A825] w-4 h-4 mt-0.5" />
                {t('cta.consent')}
              </label>
              <button onClick={() => { alert(t('cta.thanks')); setModalOpen(false); }} className="mt-2 mono text-xs font-bold uppercase tracking-[0.12em] py-4 bg-[#E8A825] text-[#141414] hover:bg-transparent hover:text-[#E8A825] border border-[#E8A825] transition-all">
                {t('cta.submit')} →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
