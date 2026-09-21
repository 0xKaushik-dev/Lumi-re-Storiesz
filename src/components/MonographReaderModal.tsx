import { useState, useEffect } from 'react';
import { MONOGRAPH_PLATES } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MonographReaderModalProps {
  initialPlateId?: number;
  onClose: () => void;
  onOpenInquire: () => void;
}

export default function MonographReaderModal({
  initialPlateId = 1,
  onClose,
  onOpenInquire,
}: MonographReaderModalProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = MONOGRAPH_PLATES.findIndex((p) => p.id === initialPlateId);
    return idx !== -1 ? idx : 0;
  });
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const plate = MONOGRAPH_PLATES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MONOGRAPH_PLATES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MONOGRAPH_PLATES.length) % MONOGRAPH_PLATES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % MONOGRAPH_PLATES.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + MONOGRAPH_PLATES.length) % MONOGRAPH_PLATES.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-[#0e0d0b] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* Top Monograph Control Bar */}
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-white/10 bg-[#0e0d0b]/90 backdrop-blur-md z-30">
        <div className="flex items-center gap-4">
          <span className="font-headline-sm tracking-[0.2em] text-sm uppercase text-white font-normal">
            Lumière Monograph
          </span>
          <span className="text-xs font-label-editorial uppercase tracking-[0.2em] text-[#8d8a86]">
            Vol. VIII — Archival Plates
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-label-editorial tracking-[0.2em] uppercase">
          <button
            type="button"
            onClick={() => setIsAmbientOn(!isAmbientOn)}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1 border transition-colors cursor-pointer ${
              isAmbientOn ? 'border-[#f4dfcc] text-[#f4dfcc]' : 'border-white/20 text-[#8d8a86]'
            }`}
          >
            {isAmbientOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span>{isAmbientOn ? 'Studio Calm: On' : 'Studio Calm: Off'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="hidden sm:block p-1 text-[#8d8a86] hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Fullscreen view"
          >
            <Maximize2 size={15} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex items-center gap-1.5 border border-white/20 px-3.5 py-1.5 text-white hover:bg-white hover:text-[#0e0d0b] transition-colors cursor-pointer rounded-sm"
            aria-label="Close monograph viewer"
          >
            <span>Close</span>
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Main Plate Presentation Area */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Previous Navigation Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-20 p-3 bg-[#242320]/80 hover:bg-white hover:text-[#0e0d0b] text-white transition-colors border border-white/10 cursor-pointer"
          aria-label="Previous Plate"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Center Display: Photo and Editorial Margin */}
        <div className="max-w-5xl w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Photograph Container */}
          <div className="relative max-h-[68vh] aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/3] flex items-center justify-center bg-[#242320] border border-white/15 p-2 sm:p-3 shadow-2xl">
            <img
              key={plate.id}
              src={plate.image}
              alt={plate.title}
              className="w-full h-full object-contain filter contrast-[1.03] select-none"
            />
          </div>

          {/* Editorial Plate Monograph Metadata */}
          <div className="lg:w-80 shrink-0 space-y-5 text-left border-l border-white/15 pl-6 hidden md:block">
            <div className="space-y-1">
              <span className="font-label-editorial text-[10px] uppercase tracking-[0.3em] text-[#f4dfcc] block">
                {plate.plateNumber} of 08
              </span>
              <h3 className="font-headline-sm text-xl text-white font-light">
                {plate.title}
              </h3>
            </div>

            <p className="text-xs text-[#cac6c1] leading-relaxed font-body-sm">
              {plate.caption}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] font-label-editorial uppercase tracking-[0.16em] text-[#8d8a86]">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-white">{plate.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Camera:</span>
                <span className="text-white">{plate.camera}</span>
              </div>
              <div className="flex justify-between">
                <span>Lens:</span>
                <span className="text-white">{plate.lens}</span>
              </div>
              <div className="flex justify-between">
                <span>Emulsion:</span>
                <span className="text-white">{plate.filmStock}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenInquire();
                }}
                className="w-full py-2.5 bg-white text-[#0e0d0b] text-[10px] font-label-editorial uppercase tracking-[0.22em] hover:bg-[#f4dfcc] transition-colors cursor-pointer text-center block"
              >
                Inquire For This Style
              </button>
            </div>
          </div>
        </div>

        {/* Next Navigation Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-20 p-3 bg-[#242320]/80 hover:bg-white hover:text-[#0e0d0b] text-white transition-colors border border-white/10 cursor-pointer"
          aria-label="Next Plate"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Plate Thumbnails Carousel */}
      <div className="w-full px-6 md:px-12 py-3 border-t border-white/10 bg-[#0e0d0b] flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="text-[10px] font-label-editorial uppercase tracking-[0.22em] text-[#8d8a86] shrink-0">
          Plates Index
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {MONOGRAPH_PLATES.map((p, idx) => (
            <button
              type="button"
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-9 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#f4dfcc] scale-105 opacity-100'
                  : 'border-white/20 opacity-40 hover:opacity-80'
              }`}
            >
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="text-[10px] font-label-editorial uppercase tracking-[0.2em] text-[#f4dfcc] shrink-0">
          {String(currentIndex + 1).padStart(2, '0')} / {String(MONOGRAPH_PLATES.length).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}
