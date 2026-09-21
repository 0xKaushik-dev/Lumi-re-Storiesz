import { useState, useEffect } from 'react';
import { JULIEN_IMAGE } from '../data/portfolioData';
import { ArrowRight, X, Camera, Compass, Award } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';
import { motion, AnimatePresence } from 'motion/react';

interface StudioSectionProps {
  onOpenInquire: () => void;
}

export default function StudioSection({ onOpenInquire }: StudioSectionProps) {
  const [showStudioModal, setShowStudioModal] = useState(false);

  useEffect(() => {
    if (showStudioModal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          setShowStudioModal(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showStudioModal]);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-space-xl border-t border-[#cac6bd]/30" id="studio">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Photographer Image (Left 5 Cols) */}
        <Reveal delay={0.1} duration={0.8} y={18} className="lg:col-span-5 space-y-4">
          <div
            onClick={() => setShowStudioModal(true)}
            className="relative w-full aspect-[3/4] overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40 group cursor-pointer"
          >
            <img
              alt="Julien holding vintage Leica M camera in linen shirt"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover contrast-[1.02] group-hover:scale-105 transition-transform duration-700 will-change-transform"
              src={JULIEN_IMAGE}
            />
            <div className="absolute inset-0 bg-[#0e0d0b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-[#faf9f6] text-[#0e0d0b] px-4 py-2 text-xs font-label-editorial uppercase tracking-[0.2em]">
                Read Studio Bio
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#494740] font-label-editorial text-label-editorial uppercase tracking-[0.22em] pt-1">
            <span>Julien &amp; The Studio Practice</span>
            <span className="text-[#7a776f]">35mm &amp; Medium Format</span>
          </div>
        </Reveal>

        {/* Manifesto & Prose (Right 7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-8 lg:pl-6">
          <div className="space-y-3">
            <Reveal delay={0.15} duration={0.6} y={14}>
              <div className="flex items-center gap-3">
                <span className="font-label-numeral text-label-numeral text-[#7a776f]">03</span>
                <span className="w-8 h-px bg-[#cac6bd]"></span>
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-[#494740]">
                  The Studio
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.25} duration={0.7} y={16}>
              <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b] tracking-tight">
                Images that feel like memories.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.32} duration={0.7} y={14} className="space-y-4 text-[#494740] font-body-lg text-body-lg">
            <p className="font-body-lg text-body-lg leading-relaxed">
              Rooted in fine-art reportage, we document the real cadence of your day without intrusion. We value quiet intimacy over spectacle, emotional resonance over stiff posed perfection.
            </p>
            <p className="font-body-md text-body-md text-[#494740]/90 leading-relaxed">
              Trained in analog laboratory darkroom methods and documentary cinematography, Julien divides his calendar between commissions across Europe, Japan, and India, accepting an intentionally restricted roster of 15 commissions each year.
            </p>
          </Reveal>

          {/* Studio Commitments List */}
          <StaggerContainer
            staggerDelay={0.12}
            delayChildren={0.35}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#cac6bd]/40"
          >
            <StaggerItem y={12} className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30">
              <span className="font-headline-sm text-headline-sm text-[#0e0d0b] block">15</span>
              <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f] block pt-1">
                Commissions / Yr
              </span>
            </StaggerItem>

            <StaggerItem y={12} className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30">
              <span className="font-headline-sm text-headline-sm text-[#0e0d0b] block">100%</span>
              <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f] block pt-1">
                Archival Rag Print
              </span>
            </StaggerItem>

            <StaggerItem y={12} className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30">
              <span className="font-headline-sm text-headline-sm text-[#0e0d0b] block">Global</span>
              <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f] block pt-1">
                Travel Availability
              </span>
            </StaggerItem>
          </StaggerContainer>

          <Reveal delay={0.45} duration={0.6} y={12} className="pt-2">
            <button
              onClick={() => setShowStudioModal(true)}
              className="group inline-flex items-center gap-3 font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#0e0d0b] pb-1 border-b border-[#0e0d0b] hover:border-[#6b5c4d] transition-all cursor-pointer"
            >
              <span>More About Us &amp; The Philosophy</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Studio Profile & Gear Modal */}
      <AnimatePresence>
        {showStudioModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setShowStudioModal(false)}
            className="fixed inset-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#faf9f6] border border-[#cac6bd] max-w-3xl w-full p-6 sm:p-12 relative my-8 shadow-2xl text-[#1a1c1a] cursor-default"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStudioModal(false);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#7a776f] hover:text-[#0e0d0b] hover:bg-[#0e0d0b]/5 transition-colors rounded-full cursor-pointer z-50 flex items-center justify-center"
                aria-label="Close studio modal"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-[3/4] bg-[#efeeeb] border border-[#cac6bd]/40 overflow-hidden shrink-0">
                  <img src={JULIEN_IMAGE} alt="Julien" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4">
                  <span className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#7a776f]">
                    Lead Photographer &amp; Director
                  </span>
                  <h3 className="font-headline-md text-headline-md text-[#0e0d0b]">
                    Julien Moreau
                  </h3>
                  <p className="font-body-md text-[#494740] leading-relaxed">
                    "I was drawn to documentary photography because memory is delicate. We do not look at wedding photos to recall the centerpiece flowers; we look at them to remember how safe we felt, how loud the table roared with laughter, and who held our hand when our voice cracked during the vows."
                  </p>
                  <div className="pt-2 text-xs text-[#7a776f] font-label-editorial uppercase tracking-[0.2em]">
                    Studio Bases: 6th Arrondissement, Paris · Gion, Kyoto · Bhubaneswar, Odisha
                  </div>
                </div>
              </div>

              {/* Gear & Analog Workflow Section */}
              <div className="space-y-4 pt-4 border-t border-[#cac6bd]/40">
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#0e0d0b] block">
                  The Analog Tooling
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#0e0d0b]">
                      <Camera size={16} />
                      <span className="font-headline-sm text-base">Leica M6 &amp; MP</span>
                    </div>
                    <p className="text-xs text-[#494740]">
                      35mm rangefinders with 35mm f/1.4 Summilux. Discrete, silent shutter for ceremony reportage.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#0e0d0b]">
                      <Compass size={16} />
                      <span className="font-headline-sm text-base">Contax 645</span>
                    </div>
                    <p className="text-xs text-[#494740]">
                      Medium format 120 roll film with legendary Carl Zeiss 80mm f/2.0 for luminous portraiture.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f4f3f0] border border-[#cac6bd]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#0e0d0b]">
                      <Award size={16} />
                      <span className="font-headline-sm text-base">Lab Darkroom</span>
                    </div>
                    <p className="text-xs text-[#494740]">
                      Custom dips in Xtol chemistry followed by drum scans and cotton rag silver gelatin prints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#cac6bd]/40">
                <button
                  type="button"
                  onClick={() => {
                    setShowStudioModal(false);
                    onOpenInquire();
                  }}
                  className="px-6 py-3 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.22em] hover:bg-[#494740] transition-colors cursor-pointer"
                >
                  Inquire With Julien
                </button>
                <button
                  type="button"
                  onClick={() => setShowStudioModal(false)}
                  className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f] hover:text-[#0e0d0b] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
