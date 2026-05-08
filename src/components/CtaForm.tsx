'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CtaForm() {
  const t = useTranslations('cta');
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedPeople, setSelectedPeople] = useState(0);

  const options1 = t.raw('options1') as string[];
  const options2 = t.raw('options2') as string[];

  const handleSubmit = () => {
    alert(t('thanks'));
    setStep(1);
    setSelectedService(0);
    setSelectedPeople(0);
  };

  return (
    <section className="py-16 bg-gold relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-[2]">
        {/* Left text */}
        <div>
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] text-black uppercase tracking-wider mb-2">
            {t('title')}
          </h2>
          <p className="text-black/70 mb-7">{t('subtitle')}</p>
        </div>

        {/* Form */}
        <div className="max-w-[460px]">
          {/* Progress */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`flex-1 h-1 rounded-sm transition-all duration-300 ${
                  s <= step ? 'bg-black' : 'bg-black/15'
                }`}
              />
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-3.5 step-enter">
              <div className="font-heading text-base font-semibold text-black/90 uppercase tracking-wider mb-1">
                {t('step1title')}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {options1.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className={`py-3.5 px-4 rounded-lg text-sm font-semibold border-2 transition-all duration-300 text-center ${
                      selectedService === i
                        ? 'border-black bg-black text-gold'
                        : 'border-black/15 bg-white text-black hover:border-black'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-2.5 mt-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3.5 px-7 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] hover:translate-y-[-2px] transition-all duration-300"
                >
                  {t('next')} →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="flex flex-col gap-3.5 step-enter">
              <div className="font-heading text-base font-semibold text-black/90 uppercase tracking-wider mb-1">
                {t('step2title')}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {options2.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPeople(i)}
                    className={`py-3.5 px-4 rounded-lg text-sm font-semibold border-2 transition-all duration-300 text-center ${
                      selectedPeople === i
                        ? 'border-black bg-black text-gold'
                        : 'border-black/15 bg-white text-black hover:border-black'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-2.5 mt-2">
                <button
                  onClick={() => setStep(1)}
                  className="py-3.5 px-5 bg-transparent text-black border-2 border-black font-heading font-semibold text-[0.85rem] uppercase tracking-wider rounded-lg hover:bg-black hover:text-gold transition-all duration-300"
                >
                  ← {t('back')}
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 px-7 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] hover:translate-y-[-2px] transition-all duration-300"
                >
                  {t('next')} →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="flex flex-col gap-3.5 step-enter">
              <div className="font-heading text-base font-semibold text-black/90 uppercase tracking-wider mb-1">
                {t('step3title')}
              </div>
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                className="py-3.5 px-4 border-2 border-black/15 rounded-lg bg-white text-sm font-inherit focus:outline-none focus:border-black transition-all duration-300 text-black"
              />
              <input
                type="tel"
                placeholder={t('phonePlaceholder')}
                className="py-3.5 px-4 border-2 border-black/15 rounded-lg bg-white text-sm font-inherit focus:outline-none focus:border-black transition-all duration-300 text-black"
              />
              <label className="flex items-center gap-2 text-xs text-black/60">
                <input type="checkbox" className="accent-black w-4 h-4" />
                {t('consent')}
              </label>
              <div className="flex gap-2.5 mt-2">
                <button
                  onClick={() => setStep(2)}
                  className="py-3.5 px-5 bg-transparent text-black border-2 border-black font-heading font-semibold text-[0.85rem] uppercase tracking-wider rounded-lg hover:bg-black hover:text-gold transition-all duration-300"
                >
                  ← {t('back')}
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3.5 px-7 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] hover:translate-y-[-2px] transition-all duration-300"
                >
                  {t('submit')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
