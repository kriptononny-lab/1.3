'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  const contactLines = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      content: (
        <span>
          <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="text-gold hover:underline transition-colors">{t('phone')}</a>
          <br />
          <a href={`tel:${t('phone2').replace(/\s/g, '')}`} className="text-gold hover:underline transition-colors">{t('phone2')}</a>
        </span>
      ),
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      content: (
        <a href={`mailto:${t('email')}`} className="text-gold hover:underline transition-colors">
          {t('email')}
        </a>
      ),
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: <span>{t('address')}</span>,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      content: <span>{t('hours')}</span>,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-section">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-1 bg-gold rounded-sm" />
            <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] uppercase tracking-wider">
              {t('sectionTitle')}
            </h2>
          </div>

          <div className="flex flex-col gap-4.5">
            {contactLines.map((line, i) => (
              <div key={i} className="flex items-center gap-3.5 text-base">
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  {line.icon}
                </div>
                {line.content}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[360px] rounded-lg overflow-hidden border border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d20.99!3d52.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ4LjAiTiAyMcKwMDAnMDAuMCJF!5e0!3m2!1spl!2spl!4v1"
            className="w-full h-full border-0 invert-[0.92] hue-rotate-180"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
