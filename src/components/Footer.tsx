'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tc = useTranslations('contact');

  return (
    <footer className="py-14 pb-8 bg-[#0a0a0a] border-t border-gold/[0.08] relative">
      {/* Gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="font-heading text-2xl tracking-[0.18em] text-gold font-semibold animate-breathe">
            KingdomCars
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-1">{t('tagline')}</p>
        <p className="text-sm text-gray-500 mb-1">
          <a href={`mailto:${tc('email')}`} className="text-gold hover:underline">
            {tc('email')}
          </a>
        </p>
        <p className="mt-4 text-xs text-gray-600">{t('copyright')}</p>
      </div>
    </footer>
  );
}
