'use client';

import { useTranslations } from 'next-intl';

const peopleIcons = [
  // 1 person
  <svg key="1" width="40" height="40" viewBox="0 0 40 40" fill="#000"><circle cx="20" cy="12" r="6" /><path d="M10,36 Q10,24 20,24 Q30,24 30,36" /></svg>,
  // 2 people
  <svg key="2" width="40" height="40" viewBox="0 0 40 40" fill="#000"><circle cx="14" cy="12" r="5" /><circle cx="26" cy="12" r="5" /><path d="M4,36 Q4,24 14,24 Q24,24 24,36" opacity="0.7" /><path d="M16,36 Q16,24 26,24 Q36,24 36,36" /></svg>,
  // 3 people
  <svg key="3" width="40" height="40" viewBox="0 0 40 40" fill="#000"><circle cx="10" cy="14" r="4" /><circle cx="20" cy="10" r="5" /><circle cx="30" cy="14" r="4" /><path d="M2,36 Q2,26 10,26 Q18,26 18,36" opacity="0.5" /><path d="M10,36 Q10,22 20,22 Q30,22 30,36" /><path d="M22,36 Q22,26 30,26 Q38,26 38,36" opacity="0.5" /></svg>,
  // 3+ people
  <svg key="3p" width="40" height="40" viewBox="0 0 40 40" fill="#000"><circle cx="10" cy="14" r="4" /><circle cx="20" cy="10" r="5" /><circle cx="30" cy="14" r="4" /><path d="M2,36 Q2,26 10,26 Q18,26 18,36" opacity="0.5" /><path d="M10,36 Q10,22 20,22 Q30,22 30,36" /><path d="M22,36 Q22,26 30,26 Q38,26 38,36" opacity="0.5" /><text x="35" y="10" fontSize="14" fontWeight="bold" fill="#000">+</text></svg>,
];

export default function Pricing() {
  const t = useTranslations('pricing');
  const items = t.raw('items') as Array<{
    people: string;
    price: string;
    unit: string;
  }>;

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-sm" />
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] uppercase tracking-wider">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-7">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-center bg-dark-card border border-white/5 rounded-lg p-9 hover:border-gold hover:scale-[1.04] transition-all duration-300"
            >
              <div className="w-[72px] h-[72px] mx-auto mb-4 bg-gold rounded-lg flex items-center justify-center">
                {peopleIcons[i]}
              </div>
              <h4 className="font-heading text-sm text-gray-400 mb-2 tracking-wider uppercase">
                {item.people}
              </h4>
              <div className="font-heading text-3xl font-bold">
                <span className="text-sm text-gray-500 font-normal">od </span>
                {item.price}
                <small className="text-base text-gray-500 font-normal ml-1">
                  {item.unit}
                </small>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border border-gold/20 rounded-lg py-2.5 px-6 text-sm text-gray-400 italic w-fit mx-auto">
          {t('note')}
        </div>
      </div>
    </section>
  );
}
