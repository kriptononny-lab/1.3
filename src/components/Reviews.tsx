'use client';

import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const items = t.raw('items') as Array<{
    name: string;
    location: string;
    text: string;
    tag: string;
  }>;

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-sm" />
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] uppercase tracking-wider">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-dark-card border border-white/5 rounded-lg p-7 hover:border-gold/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-heading font-bold text-base text-black">
                  {item.name[0]}
                </div>
                <div className="flex-1">
                  <h5 className="text-[0.92rem] font-semibold">
                    {item.name}
                  </h5>
                  <span className="text-xs text-gray-500">
                    {item.location}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[0.7rem] text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#E8A825"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-400 leading-relaxed mb-3.5">
                {item.text}
              </p>

              {/* Tag */}
              <span className="inline-block mt-auto px-2.5 py-1 bg-gold/10 rounded text-xs text-gold font-semibold">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
