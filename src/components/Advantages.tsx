'use client';

import { useTranslations } from 'next-intl';

export default function Advantages() {
  const t = useTranslations('advantages');

  const items = [
    t.raw('items') as Array<{ title: string; desc: string }>,
  ][0];

  return (
    <section id="advantages" className="py-20 bg-dark-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-sm" />
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] uppercase tracking-wider">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className="relative p-9 pb-7 border border-white/5 rounded-lg hover:border-gold/25 hover:translate-y-[-4px] transition-all duration-300 overflow-hidden"
            >
              <span className="font-heading text-[4rem] font-bold text-gold/[0.08] absolute top-2 right-4 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="font-heading text-base font-semibold uppercase tracking-wider mb-2 relative">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 relative leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 bg-gold/[0.06] border border-gold/20 rounded-lg p-8 text-base text-gray-400 leading-relaxed italic">
          {t('quote')}
        </div>
      </div>
    </section>
  );
}
