'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useCallback } from 'react';

export default function Modal() {
  const t = useTranslations('cta');
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedPeople, setSelectedPeople] = useState(0);

  const options1 = t.raw('options1') as string[];
  const options2 = t.raw('options2') as string[];

  const close = useCallback(() => {
    document.getElementById('modal')?.classList.remove('active');
    setStep(1);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [close]);

  const handleSubmit = () => {
    alert(t('thanks'));
    close();
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md hidden items-center justify-center [&.active]:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="bg-white rounded-xl p-10 w-[460px] max-w-[92vw] text-[#222] relative animate-[modalIn_0.3s_ease-out]">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3.5 right-4.5 bg-none border-none text-2xl text-gray-400 hover:text-gray-700 transition-colors"
        >
          ×
        </button>

        <h3 className="font-heading text-xl text-center mb-6 text-[#111] uppercase tracking-wider">
          {t('title').split('?')[0]}?
        </h3>

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
            <div className="font-heading text-sm font-semibold text-[#111] uppercase tracking-wider mb-1">
              {t('step1title')}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {options1.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedService(i)}
                  className={`py-3.5 px-4 rounded-lg text-sm font-semibold border-2 transition-all duration-300 text-center ${
                    selectedService === i
                      ? 'border-black bg-black text-[#E8A825]'
                      : 'border-black/15 bg-white text-black hover:border-black'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-2 py-3.5 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] transition-all duration-300"
            >
              {t('next')} →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-3.5 step-enter">
            <div className="font-heading text-sm font-semibold text-[#111] uppercase tracking-wider mb-1">
              {t('step2title')}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {options2.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPeople(i)}
                  className={`py-3.5 px-4 rounded-lg text-sm font-semibold border-2 transition-all duration-300 text-center ${
                    selectedPeople === i
                      ? 'border-black bg-black text-[#E8A825]'
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
                className="py-3 px-5 border-2 border-black text-black font-heading font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-black hover:text-[#E8A825] transition-all duration-300"
              >
                ← {t('back')}
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3.5 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] transition-all duration-300"
              >
                {t('next')} →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-3.5 step-enter">
            <div className="font-heading text-sm font-semibold text-[#111] uppercase tracking-wider mb-1">
              {t('step3title')}
            </div>
            <input
              type="text"
              placeholder={t('namePlaceholder')}
              className="py-3.5 px-4 border-2 border-black/15 rounded-lg bg-white text-sm focus:outline-none focus:border-black transition-all duration-300"
            />
            <input
              type="tel"
              placeholder={t('phonePlaceholder')}
              className="py-3.5 px-4 border-2 border-black/15 rounded-lg bg-white text-sm focus:outline-none focus:border-black transition-all duration-300"
            />
            <label className="flex items-center gap-2 text-xs text-black/60">
              <input type="checkbox" className="accent-black w-4 h-4" />
              {t('consent')}
            </label>
            <div className="flex gap-2.5 mt-2">
              <button
                onClick={() => setStep(2)}
                className="py-3 px-5 border-2 border-black text-black font-heading font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-black hover:text-[#E8A825] transition-all duration-300"
              >
                ← {t('back')}
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3.5 bg-black text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#222] transition-all duration-300"
              >
                {t('submit')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
