import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

const STEPS = [
  {
    number: '01',
    title: 'Inquire',
    short: 'Initial conversation.',
    detail: 'Share your celebration date, destination, and aesthetic intentions via our bespoke commission form.'
  },
  {
    number: '02',
    title: 'Connect',
    short: 'Personal dialogue.',
    detail: 'We meet over coffee in Paris, Kyoto, or via video to ensure our artistic sensibilities align naturally.'
  },
  {
    number: '03',
    title: 'Plan',
    short: 'Timeline & pacing.',
    detail: 'We review your day’s natural light rhythms together, crafting an unhurried itinerary with zero rush.'
  },
  {
    number: '04',
    title: 'Photograph',
    short: 'Unobtrusive presence.',
    detail: 'On the day, we document discreetly with twin 35mm rangefinders and medium format roll film.'
  },
  {
    number: '05',
    title: 'Remember',
    short: 'Bespoke linen album.',
    detail: 'Delivery of your digital master archive followed by a hand-bound Italian linen monograph album.'
  }
];

export default function ExperienceProcess() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-space-xl border-t border-[#cac6bd]/30">
      {/* Big Editorial Quote */}
      <Reveal delay={0.1} duration={0.8} y={16} className="max-w-4xl mx-auto text-center space-y-6 mb-20">
        <span className="font-label-numeral text-display-lg-mobile text-[#7a776f]/40 leading-none select-none">
          “
        </span>
        <blockquote className="font-headline-lg text-headline-lg text-[#0e0d0b] -mt-6 font-light italic">
          The photographs made the day feel like something we could experience again — not just remember.
        </blockquote>
        <div className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#494740]">
          — Anna &amp; Michael · Odisha, 2026
        </div>
      </Reveal>

      {/* 5-Step Process Timeline */}
      <div className="pt-12 border-t border-[#cac6bd]/30">
        <Reveal delay={0.12} duration={0.6} y={10} className="text-center mb-10">
          <span className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#7a776f]">
            The Experience
          </span>
        </Reveal>

        <StaggerContainer
          staggerDelay={0.08}
          delayChildren={0.18}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
        >
          {STEPS.map((step, idx) => (
            <StaggerItem
              key={step.number}
              y={14}
              className={idx === 4 ? 'col-span-2 md:col-span-1' : ''}
            >
              <div
                onClick={() => setSelectedStep(selectedStep === idx ? null : idx)}
                className={`space-y-2 p-3 rounded-none transition-colors cursor-pointer h-full ${
                  selectedStep === idx ? 'bg-[#efeeeb]' : 'hover:bg-[#f4f3f0]'
                }`}
              >
                <span className="font-label-numeral text-label-numeral text-[#7a776f]">
                  {step.number}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-[#0e0d0b]">
                  {step.title}
                </h4>
                <p className="font-body-sm text-body-sm text-[#494740]">
                  {step.short}
                </p>
                {selectedStep === idx && (
                  <p className="text-xs text-[#0e0d0b] pt-2 border-t border-[#cac6bd] leading-relaxed animate-fadeIn">
                    {step.detail}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
