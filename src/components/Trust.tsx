'use client';

import { useTranslations } from 'next-intl';

export default function Trust() {
  const t = useTranslations('trust');

  const items = [
    { title: t('carrier'), sub: t('carrierSub'), icon: '✓' },
    { title: t('google'), sub: t('googleSub'), icon: '★' },
    { title: t('insurance'), sub: t('insuranceSub'), icon: '🛡' },
    { title: t('invoice'), sub: t('invoiceSub'), icon: '📄' },
  ];

  return (
    <section className="py-10 bg-dark-section border-y border-gold/5">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-2 text-center p-3 ${
              i < items.length - 1 ? 'md:border-r border-gold/10' : ''
            }`}
          >
            <span className="text-3xl text-gold">{item.icon}</span>
            <span className="font-heading text-sm font-semibold tracking-wider">
              {item.title}
            </span>
            <span className="text-xs text-gray-500">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
