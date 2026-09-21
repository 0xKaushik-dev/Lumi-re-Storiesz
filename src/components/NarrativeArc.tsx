import { NARRATIVE_CHAPTERS } from '../data/portfolioData';
import { Eye } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface NarrativeArcProps {
  onOpenPlate: (plateId: number) => void;
}

export default function NarrativeArc({ onOpenPlate }: NarrativeArcProps) {
  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-space-xl border-t border-[#cac6bd]/30"
      id="experience"
    >
      <Reveal delay={0.1} duration={0.7} y={15} className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
        <span className="font-label-editorial text-label-editorial uppercase tracking-[0.3em] text-[#7a776f] block">
          Visual Sequence
        </span>
        <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b]">The Narrative Arc</h2>
        <p className="font-body-md text-body-md text-[#494740]">
          Every celebration unfolds in four resonant chapters — captured with patience and artistic discretion.
        </p>
      </Reveal>

      {/* 4-Stage Horizontal Grid */}
      <StaggerContainer
        staggerDelay={0.12}
        delayChildren={0.2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {NARRATIVE_CHAPTERS.map((item, idx) => {
          const isStaggered = idx % 2 === 1;
          return (
            <StaggerItem
              key={item.numeral}
              y={18}
              className={`space-y-4 group cursor-pointer ${isStaggered ? 'lg:mt-6' : ''}`}
            >
              <div
                onClick={() => onOpenPlate(idx + 1)}
                className="space-y-4"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40">
                  <img
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    src={item.image}
                  />
                  <div className="absolute bottom-3 left-3 bg-[#faf9f6]/95 backdrop-blur-sm px-2.5 py-1 font-label-numeral text-label-numeral text-[#0e0d0b] border border-[#cac6bd]/30">
                    {item.numeral}
                  </div>
                  <div className="absolute inset-0 bg-[#0e0d0b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#faf9f6] text-[#0e0d0b] px-3 py-1.5 text-[10px] font-label-editorial uppercase tracking-[0.2em] flex items-center gap-1.5">
                      <Eye size={12} /> Inspect
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#0e0d0b] block">
                    {item.chapter}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-[#0e0d0b] group-hover:text-[#6b5c4d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#494740] pt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
