import { ArrowRight } from 'lucide-react';
import { Reveal } from './MotionReveal';

interface ClosingCtaProps {
  onOpenInquire: () => void;
}

export default function ClosingCta({ onOpenInquire }: ClosingCtaProps) {
  return (
    <section className="w-full bg-[#242320] text-white px-6 md:px-12 lg:px-20 py-space-xl">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Reveal delay={0.1} duration={0.6} y={10}>
          <span className="font-label-editorial text-label-editorial uppercase tracking-[0.3em] text-[#f4dfcc] block">
            Begin A Dialogue
          </span>
        </Reveal>

        <Reveal delay={0.2} duration={0.8} y={16}>
          <h2 className="font-display-lg text-display-lg font-light tracking-tight text-white">
            Let’s make something<br />
            <em className="font-normal italic">worth remembering.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.3} duration={0.7} y={12}>
          <p className="font-body-lg text-body-lg text-[#cac6c1]/85 max-w-xl mx-auto font-light leading-relaxed">
            Limited commissions worldwide. We accept only 15 weddings per season to maintain complete presence and craftsmanship.
          </p>
        </Reveal>

        <Reveal delay={0.4} duration={0.6} y={12} className="pt-4">
          <button
            onClick={onOpenInquire}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0e0d0b] font-label-editorial text-label-editorial uppercase tracking-[0.24em] hover:bg-[#f4dfcc] transition-colors cursor-pointer"
          >
            <span>Start A Conversation</span>
            <ArrowRight size={14} />
          </button>
        </Reveal>

        {/* Footer Micro Colophon Inside Closing Container */}
        <Reveal delay={0.48} duration={0.6} y={10}>
          <div className="pt-16 mt-16 border-t border-[#7a776f]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#8d8a86]">
              Lumière Stories Practice · Paris — Odisha — Worldwide
            </div>
            <div className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#8d8a86]">
              Preserving Quiet Human Gestures on 35mm Archival Silver Gelatin
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
