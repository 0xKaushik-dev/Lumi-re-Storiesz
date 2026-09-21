import { useEffect } from 'react';
import { Discipline } from '../types';
import { X, Check, Camera, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface DisciplineModalProps {
  discipline: Discipline;
  onClose: () => void;
  onOpenInquire: (disciplineTitle: string) => void;
}

export default function DisciplineModal({
  discipline,
  onClose,
  onOpenInquire,
}: DisciplineModalProps) {
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
        className="bg-[#faf9f6] border border-[#cac6bd] max-w-2xl w-full p-6 sm:p-10 relative my-8 shadow-2xl text-[#1a1c1a] cursor-default"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#7a776f] hover:text-[#0e0d0b] hover:bg-[#0e0d0b]/5 transition-colors rounded-full cursor-pointer z-50 flex items-center justify-center"
          aria-label="Close discipline modal"
        >
          <X size={22} />
        </button>

        <div className="space-y-2 border-b border-[#cac6bd]/40 pb-4 pr-8">
          <div className="flex items-center gap-3">
            <span className="font-label-numeral text-sm text-[#7a776f]">{discipline.number}</span>
            <span className="w-6 h-px bg-[#cac6bd]"></span>
            <span className="font-label-editorial text-xs uppercase tracking-[0.24em] text-[#7a776f]">
              Discipline Dossier
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-[#0e0d0b]">
            {discipline.title}
          </h2>
          <p className="font-body-md text-sm text-[#494740]">
            {discipline.tagline}
          </p>
        </div>

        <div className="space-y-6 my-6">
          <p className="font-body-md text-base text-[#494740] leading-relaxed">
            {discipline.description}
          </p>

          <div className="p-5 bg-[#f4f3f0] border border-[#cac6bd]/40 space-y-3">
            <h4 className="font-label-editorial text-xs uppercase tracking-[0.22em] text-[#0e0d0b]">
              Heirloom Deliverables
            </h4>
            <ul className="space-y-2 text-xs text-[#494740]">
              {discipline.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#6b5c4d] shrink-0 mt-0.5" />
                  <span className="font-body-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#efeeeb] border border-[#cac6bd]/30 space-y-1">
              <span className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#7a776f] block">
                Film Coverage
              </span>
              <span className="font-body-md text-xs text-[#0e0d0b] flex items-center gap-1.5">
                <Camera size={13} className="text-[#6b5c4d]" />
                {discipline.filmCoverage}
              </span>
            </div>

            <div className="p-4 bg-[#efeeeb] border border-[#cac6bd]/30 space-y-1">
              <span className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#7a776f] block">
                Investment Baseline
              </span>
              <span className="font-headline-sm text-sm text-[#0e0d0b] block">
                {discipline.investment}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#cac6bd]/40 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="font-label-editorial text-xs uppercase tracking-[0.2em] text-[#7a776f] hover:text-[#0e0d0b] cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquire(discipline.title);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.22em] hover:bg-[#494740] transition-colors cursor-pointer"
          >
            <span>Inquire for {discipline.title}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
