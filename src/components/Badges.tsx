'use client';

import { useTranslations } from 'next-intl';

const icons = [
  // Calendar/Experience
  <svg key="exp" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  // Clock/24-7
  <svg key="clock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  // Map/Poland
  <svg key="map" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
];

export default function Badges() {
  const t = useTranslations('badges');

  const items = [
    { title: t('experience'), sub: t('experienceSub'), icon: icons[0] },
    { title: t('availability'), sub: t('availabilitySub'), icon: icons[1] },
    { title: t('coverage'), sub: t('coverageSub'), icon: icons[2] },
  ];

  return (
    <section className="relative z-[4] -mt-12 mb-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-dark-card border border-gold/15 rounded-lg p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-gold hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] transition-all duration-300"
          >
            <div className="w-[52px] h-[52px] min-w-[52px] rounded-full bg-gold/10 flex items-center justify-center text-gold">
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading text-[0.95rem] font-semibold uppercase tracking-wider mb-0.5">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
