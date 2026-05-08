'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(target * eased));
      if (t < 1) requestAnimationFrame(step);
      else setCount(target);
    }
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-[clamp(2.5rem,5vw,3.6rem)] font-bold text-gold leading-none mb-2 [text-shadow:0_0_30px_rgba(232,168,37,0.3)]">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-[0.1em]">
        {label}
      </div>
    </div>
  );
}

export default function Counters() {
  const t = useTranslations('counters');

  const items = [
    { target: parseInt(t('clientsNum')), suffix: t('clientsSuffix'), label: t('clients') },
    { target: parseInt(t('yearsNum')), suffix: t('yearsSuffix'), label: t('years') },
    { target: parseInt(t('availableNum')), suffix: t('availableSuffix'), label: t('available') },
    { target: parseInt(t('safetyNum')), suffix: t('safetySuffix'), label: t('safety') },
  ];

  return (
    <section className="py-[70px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <AnimatedCounter key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
