import { HERO_IMAGE } from '../data/portfolioData';
import { ArrowDown, Eye } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface CoverHeroProps {
  onExploreClick: () => void;
  onOpenPlate: (plateId: number) => void;
}

export default function CoverHero({ onExploreClick, onOpenPlate }: CoverHeroProps) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 pt-[49px] pb-3 h-[100vh] h-[100dvh] flex flex-col justify-between space-y-2 box-border overflow-hidden">
      {/* 1. Large Editorial Brand Title Banner */}
      <Reveal delay={0.05} duration={0.8} y={12} className="w-full shrink-0">
        <div className="w-full py-8 sm:py-10 lg:py-12 flex flex-col items-center justify-center text-center border-b border-[#cac6bd]/30">
          <div className="group flex flex-col items-center text-center cursor-pointer">
            <span className="font-headline-lg text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] tracking-[0.28em] md:tracking-[0.32em] uppercase text-[#0e0d0b] font-normal leading-none">
              Lumière Stories
            </span>
            <span className="font-label-editorial text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.34em] text-[#7a776f] pt-3">
              Documentary &amp; Fine Art Photography Studio
            </span>
          </div>
        </div>
      </Reveal>

      {/* 2. Top Editorial Monograph Sub-Header & Meta Trackers */}
      <Reveal delay={0.1} duration={0.7} y={10} className="w-full shrink-0">
        <div className="w-full flex items-center justify-between pt-1 border-b border-[#cac6bd]/30 pb-2 text-[10px] sm:text-[11px]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#494740]">
              Editorial Monograph
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#cac6bd]"></span>
            <span className="hidden sm:inline-block font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#7a776f]">
              Vol. VIII — Autumn / Winter
            </span>
          </div>
          <div className="font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#494740]">
            Weddings · Events · Portraits
          </div>
        </div>
      </Reveal>

      {/* 3. Main Inset Photographic Hero Frame (Flex-1 fills EXACT remaining screen height on any device) */}
      <Reveal delay={0.18} duration={0.8} y={16} className="w-full flex-1 min-h-0 flex flex-col">
        <div
          onClick={() => onOpenPlate(1)}
          className="relative w-full flex-1 min-h-[220px] my-1.5 overflow-hidden bg-[#e9e8e5] group cursor-pointer border border-[#cac6bd]/40"
        >
          <img
            alt="Lumière Stories cover bridal portrait"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out group-hover:scale-105 will-change-transform"
            src={HERO_IMAGE}
          />

          {/* Gentle Film Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b]/80 via-[#0e0d0b]/25 to-transparent pointer-events-none"></div>

          {/* Quick View Tag on Hover */}
          <div className="absolute top-4 right-4 bg-[#faf9f6]/90 backdrop-blur-sm px-3 py-1.5 font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#0e0d0b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <Eye size={12} />
            <span>Inspect Plate 01</span>
          </div>

          {/* Superimposed Editorial Masthead Typography */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 lg:p-12 flex flex-col md:flex-row md:items-end justify-between gap-3 text-white">
            <div className="max-w-2xl space-y-1.5">
              <Reveal delay={0.25} duration={0.6} y={10}>
                <span className="font-label-editorial text-label-editorial uppercase tracking-[0.3em] text-[#e6e2dd] block">
                  Selected Portfolio &amp; Archives
                </span>
              </Reveal>
              <Reveal delay={0.35} duration={0.7} y={14}>
                <h1 className="font-display-lg text-2xl sm:text-4xl lg:text-display-lg tracking-tight font-light leading-none text-white">
                  Lumière Stories
                </h1>
              </Reveal>
              <Reveal delay={0.45} duration={0.6} y={10}>
                <p className="font-body-lg text-xs sm:text-base text-[#cac6c1]/95 max-w-xl font-light pt-0.5">
                  Moments that deserve to be remembered.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-right shrink-0">
              <Reveal delay={0.3} duration={0.6} y={10}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-px bg-white/60"></span>
                  <span className="font-label-editorial text-label-editorial tracking-[0.26em] uppercase text-[#e6e2dd]">
                    Plate 01 — Provencal Villa
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.4} duration={0.6} y={10}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onExploreClick();
                  }}
                  className="inline-flex items-center gap-2 font-label-editorial text-label-editorial uppercase tracking-[0.22em] text-white hover:text-[#f4dfcc] transition-colors cursor-pointer"
                >
                  <span>Scroll to explore</span>
                  <ArrowDown size={14} className="animate-bounce" />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4. Cover Footer Index */}
      <StaggerContainer
        staggerDelay={0.08}
        delayChildren={0.25}
        className="w-full shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2 text-[#494740] font-label-editorial text-label-editorial tracking-[0.2em] uppercase border-t border-[#cac6bd]/20"
      >
        <StaggerItem y={10}>
          <div>Medium — 35mm &amp; 120 Roll Film</div>
        </StaggerItem>
        <StaggerItem y={10}>
          <div>Base — Paris / Odisha / Global</div>
        </StaggerItem>
        <StaggerItem y={10}>
          <div>Current Season — 2026 / 2027</div>
        </StaggerItem>
        <StaggerItem y={10} className="text-right">
          <div>Index 01 — 08 Studies</div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
