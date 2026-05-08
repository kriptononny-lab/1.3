'use client';

import { useTranslations } from 'next-intl';

const serviceIcons = [
  // Apartment
  <svg key="apt" viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1a1a1a" />
    <rect x="40" y="50" width="120" height="120" rx="4" fill="#2a2a2a" stroke="#E8A825" strokeWidth="1" opacity="0.5" />
    <rect x="60" y="70" width="30" height="30" rx="2" fill="#E8A825" opacity="0.2" />
    <rect x="110" y="70" width="30" height="30" rx="2" fill="#E8A825" opacity="0.2" />
    <rect x="60" y="120" width="30" height="50" rx="2" fill="#E8A825" opacity="0.3" />
    <rect x="110" y="120" width="30" height="30" rx="2" fill="#E8A825" opacity="0.2" />
    <polygon points="100,25 30,55 170,55" fill="#E8A825" opacity="0.15" />
  </svg>,
  // Warehouse
  <svg key="wh" viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1a1a1a" />
    <rect x="30" y="80" width="140" height="90" rx="2" fill="#2a2a2a" stroke="#E8A825" strokeWidth="1" opacity="0.5" />
    <path d="M30,80 L100,40 L170,80" fill="none" stroke="#E8A825" strokeWidth="1.5" opacity="0.4" />
    <rect x="50" y="110" width="40" height="60" fill="#E8A825" opacity="0.15" />
    <rect x="110" y="110" width="40" height="60" fill="#E8A825" opacity="0.15" />
    <rect x="60" y="90" width="20" height="15" rx="1" fill="#E8A825" opacity="0.25" />
    <rect x="120" y="90" width="20" height="15" rx="1" fill="#E8A825" opacity="0.25" />
  </svg>,
  // Trash
  <svg key="trash" viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1a1a1a" />
    <path d="M65,60 L70,160 L130,160 L135,60" fill="#2a2a2a" stroke="#E8A825" strokeWidth="1" opacity="0.5" />
    <line x1="55" y1="60" x2="145" y2="60" stroke="#E8A825" strokeWidth="1.5" opacity="0.4" />
    <rect x="85" y="45" width="30" height="15" rx="2" fill="none" stroke="#E8A825" strokeWidth="1" opacity="0.3" />
    <line x1="85" y1="75" x2="88" y2="150" stroke="#E8A825" strokeWidth="1" opacity="0.2" />
    <line x1="100" y1="75" x2="100" y2="150" stroke="#E8A825" strokeWidth="1" opacity="0.2" />
    <line x1="115" y1="75" x2="112" y2="150" stroke="#E8A825" strokeWidth="1" opacity="0.2" />
  </svg>,
  // Office
  <svg key="office" viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1a1a1a" />
    <rect x="50" y="40" width="100" height="130" rx="3" fill="#2a2a2a" stroke="#E8A825" strokeWidth="1" opacity="0.5" />
    <rect x="65" y="55" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="110" y="55" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="65" y="90" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="110" y="90" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="65" y="125" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="110" y="125" width="25" height="20" rx="1" fill="#E8A825" opacity="0.15" />
    <rect x="85" y="150" width="30" height="20" rx="1" fill="#E8A825" opacity="0.3" />
  </svg>,
];

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Array<{ title: string; cta: string }>;

  return (
    <section id="services" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-sm" />
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] uppercase tracking-wider">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-dark-card rounded-lg overflow-hidden border border-white/5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(232,168,37,0.3)] transition-all duration-300 flex flex-col group relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-[-1px] rounded-lg p-[1px] bg-gradient-to-br from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10" style={{ mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', maskComposite: 'exclude' }} />
              
              <div className="h-[200px] relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  {serviceIcons[i]}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-4 relative z-20">
                <h3 className="font-heading text-[0.95rem] font-semibold uppercase tracking-wider">
                  {item.title}
                </h3>
                <button
                  onClick={() =>
                    document.getElementById('modal')?.classList.add('active')
                  }
                  className="mt-auto w-full py-2.5 px-4 bg-gold text-black font-heading font-semibold text-[0.82rem] uppercase tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">{item.cta}</span>
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover/btn:left-[100%]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
