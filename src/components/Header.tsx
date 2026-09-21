import { useState } from 'react';
import { ActiveView } from '../types';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenInquire: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Header({
  activeView,
  setActiveView,
  onOpenInquire,
  onNavigateSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ActiveView, sectionId?: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#faf9f6]/45 backdrop-blur-md border-b border-[#cac6bd]/30 transition-all duration-300">
      {/* Top Utility & Navigation Row */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-2.5 flex items-center justify-between text-[11px] font-label-editorial uppercase tracking-[0.24em] text-[#494740]">
        {/* Left side: Primary Nav Links (Left-Aligned) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick('all', 'work')}
            className={`cursor-pointer transition-colors duration-200 pb-0.5 border-b uppercase ${
              activeView === 'work' || activeView === 'all'
                ? 'text-[#0e0d0b] border-[#0e0d0b] font-medium'
                : 'border-transparent text-[#494740] hover:text-[#0e0d0b] hover:border-[#0e0d0b]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('approach', 'approach')}
            className={`cursor-pointer transition-colors duration-200 pb-0.5 border-b uppercase ${
              activeView === 'approach'
                ? 'text-[#0e0d0b] border-[#0e0d0b] font-medium'
                : 'border-transparent text-[#494740] hover:text-[#0e0d0b] hover:border-[#0e0d0b]'
            }`}
          >
            Studio
          </button>
          <button
            onClick={() => handleNavClick('disciplines', 'disciplines')}
            className={`cursor-pointer transition-colors duration-200 pb-0.5 border-b uppercase ${
              activeView === 'disciplines'
                ? 'text-[#0e0d0b] border-[#0e0d0b] font-medium'
                : 'border-transparent text-[#494740] hover:text-[#0e0d0b] hover:border-[#0e0d0b]'
            }`}
          >
            Disciplines
          </button>
          <button
            onClick={() => handleNavClick('journal', 'journal')}
            className={`cursor-pointer transition-colors duration-200 pb-0.5 border-b uppercase ${
              activeView === 'journal'
                ? 'text-[#0e0d0b] border-[#0e0d0b] font-medium'
                : 'border-transparent text-[#494740] hover:text-[#0e0d0b] hover:border-[#0e0d0b]'
            }`}
          >
            Journal
          </button>
          <button
            onClick={() => handleNavClick('experience', 'experience')}
            className={`cursor-pointer transition-colors duration-200 pb-0.5 border-b uppercase ${
              activeView === 'experience'
                ? 'text-[#0e0d0b] border-[#0e0d0b] font-medium'
                : 'border-transparent text-[#494740] hover:text-[#0e0d0b] hover:border-[#0e0d0b]'
            }`}
          >
            Experience
          </button>
        </nav>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-2 text-[#0e0d0b] py-1 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          <span className="text-[10px] tracking-[0.2em]">Index</span>
        </button>

        {/* Right side: Studio Locations/Availability & Inquire */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-[#7a776f] tracking-[0.2em] text-[10px]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6b5c4d] animate-pulse"></span>
            <span>Paris · Kyoto · Odisha — 2026/2027 Commissions</span>
          </div>

          <button
            onClick={onOpenInquire}
            className="inline-flex items-center gap-2 border border-[#0e0d0b]/60 text-[#0e0d0b] px-3.5 py-1.5 hover:bg-[#0e0d0b] hover:text-white active:scale-95 transition-all duration-300 text-[10px] tracking-[0.22em] cursor-pointer shadow-xs"
          >
            <span>Inquire</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Motion Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden w-full bg-[#faf9f6] border-b border-[#cac6bd] px-6 py-6 space-y-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 text-xs font-label-editorial uppercase tracking-[0.22em]">
              <button
                onClick={() => handleNavClick('all', 'work')}
                className="text-left py-1 text-[#0e0d0b] hover:text-[#6b5c4d] transition-colors"
              >
                01 — Selected Work
              </button>
              <button
                onClick={() => handleNavClick('approach', 'approach')}
                className="text-left py-1 text-[#0e0d0b] hover:text-[#6b5c4d] transition-colors"
              >
                02 — Studio Practice
              </button>
              <button
                onClick={() => handleNavClick('disciplines', 'disciplines')}
                className="text-left py-1 text-[#0e0d0b] hover:text-[#6b5c4d] transition-colors"
              >
                03 — Disciplines & Coverage
              </button>
              <button
                onClick={() => handleNavClick('journal', 'journal')}
                className="text-left py-1 text-[#0e0d0b] hover:text-[#6b5c4d] transition-colors"
              >
                04 — Field Notes & Journal
              </button>
              <button
                onClick={() => handleNavClick('experience', 'experience')}
                className="text-left py-1 text-[#0e0d0b] hover:text-[#6b5c4d] transition-colors"
              >
                05 — The Experience Process
              </button>
            </div>
            <div className="pt-3 border-t border-[#cac6bd]/40 flex items-center justify-between text-[10px] text-[#7a776f] tracking-[0.18em]">
              <span className="flex items-center gap-1.5">
                <Globe size={11} /> Paris · Kyoto · Odisha
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="underline text-[#0e0d0b]"
              >
                Book Commission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
