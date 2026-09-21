import { useEffect } from 'react';
import { JournalArticle } from '../types';
import { X, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleModalProps {
  article: JournalArticle;
  onClose: () => void;
  onOpenInquire: () => void;
}

export default function ArticleModal({ article, onClose, onOpenInquire }: ArticleModalProps) {
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
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#7a776f] hover:text-[#0e0d0b] hover:bg-[#0e0d0b]/5 transition-colors rounded-full cursor-pointer z-50 flex items-center justify-center"
          aria-label="Close note"
        >
          <X size={22} />
        </button>

        {/* Article Meta */}
        <div className="space-y-3 border-b border-[#cac6bd]/40 pb-6 pr-8">
          <div className="flex items-center gap-4 text-xs font-label-editorial uppercase tracking-[0.24em] text-[#7a776f]">
            <span>{article.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {article.readTime}
            </span>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-[#0e0d0b] tracking-tight">
            {article.title}
          </h1>

          <p className="font-body-lg text-body-lg text-[#494740] italic pt-1 font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Image Spread */}
        <div className="my-8 aspect-[16/10] overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover filter contrast-[1.02]"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 font-body-lg text-body-lg text-[#494740] leading-relaxed">
          {article.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {article.quote && (
            <blockquote className="my-8 p-6 bg-[#f4f3f0] border-l-2 border-[#0e0d0b] font-headline-sm text-lg text-[#0e0d0b] italic">
              “{article.quote}”
            </blockquote>
          )}
        </div>

        {/* Article Footer */}
        <div className="pt-8 mt-8 border-t border-[#cac6bd]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-label-editorial uppercase tracking-[0.2em] text-[#7a776f]">
            Published by Lumière Stories Studio Archives
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquire();
            }}
            className="px-6 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-colors cursor-pointer"
          >
            Inquire for 2026 / 2027
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
