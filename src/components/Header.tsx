'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navItems = [
    { key: 'benefits', href: '#advantages' },
    { key: 'services', href: '#services' },
    { key: 'pricing', href: '#pricing' },
    { key: 'reviews', href: '#reviews' },
    { key: 'contact', href: '#contact' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/85 backdrop-blur-xl border-b border-gold/10 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-heading text-xl tracking-[0.18em] text-gold font-semibold">
            KingdomCars
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(key)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-4 border border-gold/20 rounded-md overflow-hidden">
            <button
              onClick={() => switchLocale('pl')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                locale === 'pl'
                  ? 'bg-gold text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PL
            </button>
            <button
              onClick={() => switchLocale('ru')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                locale === 'ru'
                  ? 'bg-gold text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              RU
            </button>
          </div>

          <button
            onClick={() =>
              document.getElementById('modal')?.classList.add('active')
            }
            className="ml-2 px-6 py-3 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-light hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,168,37,0.4)] transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">{t('cta')}</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-600 group-hover:left-[100%]" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gold text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-section border-t border-gold/10 px-6 py-6 flex flex-col gap-4">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => switchLocale('pl')}
              className={`px-4 py-2 text-xs font-semibold uppercase rounded ${
                locale === 'pl' ? 'bg-gold text-black' : 'border border-gold/30 text-gold'
              }`}
            >
              PL
            </button>
            <button
              onClick={() => switchLocale('ru')}
              className={`px-4 py-2 text-xs font-semibold uppercase rounded ${
                locale === 'ru' ? 'bg-gold text-black' : 'border border-gold/30 text-gold'
              }`}
            >
              RU
            </button>
          </div>
          <button
            onClick={() => {
              setMobileOpen(false);
              document.getElementById('modal')?.classList.add('active');
            }}
            className="mt-2 px-6 py-3 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-wider rounded-lg"
          >
            {t('cta')}
          </button>
        </div>
      )}
    </header>
  );
}
