import { useEffect } from 'react';
import { Story } from '../types';
import { X, MapPin, Calendar, Camera, Film, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface StoryDetailModalProps {
  story: Story;
  onClose: () => void;
  onOpenPlateReader: () => void;
  onOpenInquire: () => void;
}

export default function StoryDetailModal({
  story,
  onClose,
  onOpenPlateReader,
  onOpenInquire,
}: StoryDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
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
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0d0b]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#faf9f6] border border-[#cac6bd] max-w-4xl w-full p-6 sm:p-10 relative my-8 shadow-2xl text-[#1a1c1a] cursor-default"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#7a776f] hover:text-[#0e0d0b] hover:bg-[#0e0d0b]/5 transition-colors rounded-full cursor-pointer z-50 flex items-center justify-center"
          aria-label="Close story note"
        >
          <X size={22} />
        </button>

        {/* Top Header */}
        <div className="space-y-2 border-b border-[#cac6bd]/40 pb-4 pr-8">
          <div className="flex items-center gap-4 text-xs font-label-editorial uppercase tracking-[0.24em] text-[#7a776f]">
            <span>Story {story.number}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {story.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {story.date}
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-[#0e0d0b]">
            {story.title}
          </h2>
          <p className="font-label-editorial text-xs uppercase tracking-[0.2em] text-[#494740]">
            {story.subtitle}
          </p>
        </div>

        {/* Image Display */}
        <div className="my-6 aspect-[16/10] overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover filter contrast-[1.03]"
          />
        </div>

        {/* Description & Technical Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-3">
            <h4 className="font-label-editorial text-xs uppercase tracking-[0.2em] text-[#7a776f]">
              Narrative Study
            </h4>
            <p className="font-body-md text-base text-[#494740] leading-relaxed">
              {story.excerpt}
            </p>
            {story.plateCaption && (
              <p className="text-xs text-[#7a776f] italic pt-1 border-t border-[#cac6bd]/30">
                “{story.plateCaption}”
              </p>
            )}
          </div>

          <div className="md:col-span-5 p-4 bg-[#f4f3f0] border border-[#cac6bd]/30 space-y-3 text-xs">
            <h4 className="font-label-editorial text-[10px] uppercase tracking-[0.22em] text-[#0e0d0b]">
              Analog Camera &amp; Stock
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-[#494740]">
                <Camera size={14} className="text-[#6b5c4d] shrink-0 mt-0.5" />
                <span>{story.camera}</span>
              </div>
              <div className="flex items-start gap-2 text-[#494740]">
                <Film size={14} className="text-[#6b5c4d] shrink-0 mt-0.5" />
                <span>{story.filmStock}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-6 mt-6 border-t border-[#cac6bd]/40 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPlateReader();
            }}
            className="inline-flex items-center gap-2 text-xs font-label-editorial uppercase tracking-[0.2em] text-[#0e0d0b] hover:text-[#6b5c4d] cursor-pointer"
          >
            <span>Open in Archival Monograph Viewer</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquire();
            }}
            className="px-6 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-colors cursor-pointer"
          >
            Inquire for Similar Commission
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
