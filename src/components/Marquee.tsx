'use client';

import { useTranslations } from 'next-intl';

export default function Marquee() {
  const t = useTranslations();
  const text = t('marquee');

  return (
    <div className="overflow-hidden bg-gold py-3">
      <div
        className="inline-flex whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-heading font-bold text-sm tracking-[0.15em] uppercase text-black px-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
