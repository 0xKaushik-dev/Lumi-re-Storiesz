import { BANQUET_IMAGE } from '../data/portfolioData';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Reveal } from './MotionReveal';

interface MonographFeatureProps {
  onOpenMonographReader: () => void;
}

export default function MonographFeature({ onOpenMonographReader }: MonographFeatureProps) {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-space-xl">
      <Reveal delay={0.1} duration={0.8} y={20} className="w-full">
        <div className="relative w-full overflow-hidden bg-[#0e0d0b] text-white border border-[#cac6bd]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Full Image Area */}
            <div
              onClick={onOpenMonographReader}
              className="lg:col-span-7 relative h-96 lg:h-auto overflow-hidden group cursor-pointer"
            >
              <img
                alt="The wedding dinner of Emma and Daniel under string lights at dusk"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover brightness-90 contrast-[1.05] transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                src={BANQUET_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#242320]/90 hidden lg:block pointer-events-none"></div>

              <div className="absolute top-6 left-6 bg-[#242320]/80 backdrop-blur-sm px-3.5 py-1.5 font-label-editorial text-[10px] tracking-[0.22em] text-[#f4dfcc] uppercase border border-white/15 flex items-center gap-2">
                <BookOpen size={13} />
                <span>48 Bound Plates</span>
              </div>
            </div>

            {/* Text Monograph Area */}
            <div className="lg:col-span-5 p-8 md:p-14 lg:p-16 flex flex-col justify-between space-y-8 bg-[#242320]">
              <div className="space-y-4">
                <Reveal delay={0.2} duration={0.6} y={10}>
                  <span className="font-label-editorial text-label-editorial uppercase tracking-[0.3em] text-[#f4dfcc] block">
                    Monograph Feature
                  </span>
                </Reveal>
                <Reveal delay={0.3} duration={0.7} y={14}>
                  <h2 className="font-headline-lg text-headline-lg tracking-tight font-light text-white">
                    The Wedding of<br />
                    <span className="italic font-normal">Emma &amp; Daniel</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.38} duration={0.6} y={10}>
                  <div className="font-label-editorial text-label-editorial uppercase tracking-[0.25em] text-[#8d8a86]">
                    An Intimate Celebration in the Foothills
                  </div>
                </Reveal>
                <Reveal delay={0.46} duration={0.7} y={12}>
                  <p className="font-body-md text-body-md text-[#cac6c1]/85 pt-2 font-light leading-relaxed">
                    A study in ambient warmth, soft laughter, and unhurried poetry beneath ancient olive groves. Documented over 72 hours with dual 35mm rangefinders and custom hand-bound Belgian linen casing.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.55} duration={0.6} y={10}>
                <div className="pt-6 border-t border-[#7a776f]/30 flex items-center justify-between">
                  <button
                    onClick={onOpenMonographReader}
                    className="group inline-flex items-center gap-3 font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-white hover:text-[#f4dfcc] transition-colors cursor-pointer"
                  >
                    <span>View Full Monograph (48 Plates)</span>
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <span className="font-label-numeral text-label-numeral text-[#8d8a86]">VOL. 08</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
