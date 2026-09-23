import { useState, useEffect } from 'react';
import { HERO_IMAGE } from '../data/portfolioData';
import { ArrowRight, X, Sparkles, Camera, ShieldCheck } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface ApproachSectionProps {
  onOpenPhilosophyModal?: () => void;
}

export default function ApproachSection({ onOpenPhilosophyModal }: ApproachSectionProps) {
  const [showManifestoModal, setShowManifestoModal] = useState(false);

  useEffect(() => {
    if (showManifestoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showManifestoModal]);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-space-xl border-t border-[#cac6bd]/30" id="approach">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Anchor Column (40%) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <Reveal delay={0.05} duration={0.6} y={14}>
              <div className="flex items-center gap-3">
                <span className="font-label-numeral text-label-numeral text-[#7a776f]">01</span>
                <span className="w-8 h-px bg-[#cac6bd]"></span>
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-[#494740]">
                  The Approach
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15} duration={0.7} y={16}>
              <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b] tracking-tight">
                Documentary soul.<br />
                <em className="font-normal italic">Editorial eye.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.25} duration={0.7} y={14}>
            <p className="font-body-md text-body-md text-[#494740] leading-relaxed max-w-md">
              Unscripted light, quiet presence, and true memory. We believe the most powerful photographs happen when nobody is performing for the lens. Our working method avoids staged choreography in favor of genuine observation.
            </p>
          </Reveal>

          <Reveal delay={0.35} duration={0.6} y={12}>
            <div>
              <button
                onClick={() => {
                  if (onOpenPhilosophyModal) {
                    onOpenPhilosophyModal();
                  } else {
                    setShowManifestoModal(true);
                  }
                }}
                className="group inline-flex items-center gap-3 font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#0e0d0b] pb-1 border-b border-[#0e0d0b] hover:border-[#6b5c4d] transition-all cursor-pointer"
              >
                <span>Our Approach &amp; Philosophy</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Asymmetric Photo Breakout + Excerpt */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          <Reveal delay={0.2} duration={0.8} y={20} className="w-full">
            <div className="relative w-full aspect-[4/5] max-w-xl mx-auto overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40 group">
              <img
                alt="Two figures watching golden sunset by the sea"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                src={HERO_IMAGE}
              />
              <div className="absolute bottom-4 right-4 bg-[#faf9f6]/95 backdrop-blur-sm px-3 py-1.5 font-label-editorial text-label-editorial uppercase tracking-[0.18em] text-[#0e0d0b] border border-[#cac6bd]/30">
                Fig. 01 — Stillness Before Guests Arrive
              </div>
            </div>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.14}
            delayChildren={0.25}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#cac6bd]/30"
          >
            <StaggerItem y={14} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f]">
                  01.01 Presence
                </span>
              </div>
              <h4 className="font-headline-sm text-lg text-[#0e0d0b] font-normal">Invisible observation</h4>
              <p className="font-body-sm text-body-sm text-[#494740] leading-relaxed">
                We embed within your circle as guests with cameras. No megaphones, no intrusive flashes, no repetitive retakes.
              </p>
            </StaggerItem>

            <StaggerItem y={14} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f]">
                  01.02 Longevity
                </span>
              </div>
              <h4 className="font-headline-sm text-lg text-[#0e0d0b] font-normal">Archival silver gelatin</h4>
              <p className="font-body-sm text-body-sm text-[#494740] leading-relaxed">
                Analog film emulsions printed on acid-free cotton rag paper rated to endure 200+ years without color degradation.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Philosophy Details Modal */}
      {showManifestoModal && (
        <div className="fixed inset-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-[#faf9f6] border border-[#cac6bd] max-w-2xl w-full p-8 md:p-12 relative space-y-8 my-8 shadow-2xl">
            <button
              onClick={() => setShowManifestoModal(false)}
              className="absolute top-6 right-6 text-[#7a776f] hover:text-[#0e0d0b] p-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-3">
              <span className="font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-[#7a776f]">
                The Studio Manifesto
              </span>
              <h3 className="font-headline-lg text-headline-md text-[#0e0d0b]">
                The Discipline of Stillness
              </h3>
            </div>

            <div className="space-y-4 font-body-md text-body-md text-[#494740] leading-relaxed">
              <p>
                In a world saturated with ephemeral digital feeds and rehearsed trends, Lumière Stories was established as a sanctuary for authentic human remembrance.
              </p>
              <p>
                We work predominantly with analog rangefinder and medium format roll film. Film forces patience. It demands that the photographer anticipate light and emotion rather than machine-gun hundreds of indiscriminate digital exposures.
              </p>
              <p>
                When you open your monograph twenty years from today, we want you to smell the olive branches again, feel the crisp mountain air, and remember the quiet reassurance of your partner’s hand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#cac6bd]/40 text-center">
              <div className="p-4 bg-[#f4f3f0] space-y-1">
                <Sparkles size={18} className="mx-auto text-[#6b5c4d]" />
                <div className="font-label-editorial text-[10px] uppercase tracking-[0.16em] text-[#0e0d0b] pt-1">Pure Emulsion</div>
                <div className="text-[11px] text-[#7a776f]">Kodak &amp; Ilford</div>
              </div>
              <div className="p-4 bg-[#f4f3f0] space-y-1">
                <Camera size={18} className="mx-auto text-[#6b5c4d]" />
                <div className="font-label-editorial text-[10px] uppercase tracking-[0.16em] text-[#0e0d0b] pt-1">Rangefinder</div>
                <div className="text-[11px] text-[#7a776f]">Leica &amp; Contax</div>
              </div>
              <div className="p-4 bg-[#f4f3f0] space-y-1">
                <ShieldCheck size={18} className="mx-auto text-[#6b5c4d]" />
                <div className="font-label-editorial text-[10px] uppercase tracking-[0.16em] text-[#0e0d0b] pt-1">Archival Rag</div>
                <div className="text-[11px] text-[#7a776f]">Florence Bindery</div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setShowManifestoModal(false)}
                className="px-6 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-colors cursor-pointer"
              >
                Return to Monograph
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
