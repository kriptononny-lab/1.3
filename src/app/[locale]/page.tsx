import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations('index');

  const variants = [
    { href: '/v1', title: t('v1'), desc: t('v1desc'), color: 'from-amber-500 to-amber-700' },
    { href: '/v2', title: t('v2'), desc: t('v2desc'), color: 'from-emerald-600 to-emerald-800' },
    { href: '/v3', title: t('v3'), desc: t('v3desc'), color: 'from-amber-500 to-zinc-900' },
  ];

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="font-heading text-4xl md:text-5xl text-gold text-center mb-4 uppercase tracking-wider">
          KingdomCars
        </h1>
        <p className="text-center text-gray-400 mb-12">{t('title')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((v, i) => (
            <Link
              key={i}
              href={v.href}
              className="group relative bg-dark-card border border-white/10 rounded-xl p-8 hover:border-gold/50 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(232,168,37,0.15)] flex flex-col"
            >
              <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${v.color} mb-6 group-hover:w-full transition-all duration-500`} />
              <h2 className="font-heading text-xl uppercase tracking-wider mb-3 text-white">
                {v.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {v.desc}
              </p>
              <span className="mt-4 text-gold text-sm font-semibold group-hover:tracking-wider transition-all">
                → Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
