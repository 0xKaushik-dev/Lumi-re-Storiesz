import { useRef, useState } from 'react';
import { CONTACT_STRIP_ITEMS } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Reveal } from './MotionReveal';
import { motion } from 'motion/react';

interface ContactSheetStripProps {
  onOpenPlate: (plateId: number) => void;
}

export default function ContactSheetStrip({ onOpenPlate }: ContactSheetStripProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicated items for seamless infinite looping strip
  const doubledItems = [...CONTACT_STRIP_ITEMS, ...CONTACT_STRIP_ITEMS];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-space-md border-t border-[#cac6bd]/30 bg-[#242320] text-white overflow-hidden">
      <Reveal delay={0.1} duration={0.7} y={15}>
        <div className="px-6 md:px-12 lg:px-20 mb-3 flex items-center justify-between text-xs font-label-editorial uppercase tracking-[0.24em] text-[#cac6c1]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#f4dfcc] animate-pulse"></span>
            <span>Archival 35mm Film Contact Sheet — Uncut Negatives</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.18em] text-[#8d8a86] hidden sm:inline mr-2">
              (Hover to Pause)
            </span>
            <button
              onClick={() => scroll('left')}
              className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Continuous Right-to-Left Looping Motion Track with Smooth CSS Pause */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-hidden py-2"
        >
          <div className="contact-strip-track">
            {doubledItems.map((item, index) => {
              const frameIndex = (index % CONTACT_STRIP_ITEMS.length) + 1;
              const frameLabel = `${String(frameIndex).padStart(2, '0')}A`;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => onOpenPlate(item.id)}
                  className="group shrink-0 relative cursor-pointer select-none"
                >
                  {/* Film negative sprockets look */}
                  <div className="bg-[#0e0d0b] p-2 border border-white/15 space-y-1.5 transition-all duration-300 group-hover:border-[#f4dfcc]">
                    <div className="flex items-center justify-between text-[8px] font-mono tracking-widest text-[#8d8a86] px-1">
                      <span>KODAK {item.tag}</span>
                      <span>{frameLabel}</span>
                    </div>

                    <div className="w-48 sm:w-56 aspect-[3/2] bg-[#242320] overflow-hidden relative">
                      <img
                        alt={item.title}
                        className="w-full h-full object-cover filter contrast-125 transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                        src={item.image}
                      />
                      <div className="absolute inset-0 bg-[#0e0d0b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye size={16} className="text-white" />
                      </div>
                    </div>

                    <div className="text-[9px] font-label-editorial tracking-[0.16em] uppercase text-[#cac6c1] truncate px-1 group-hover:text-white transition-colors">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
