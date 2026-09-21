import { useState } from 'react';
import { DISCIPLINES } from '../data/portfolioData';
import { Discipline } from '../types';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';
import { motion, AnimatePresence } from 'motion/react';

interface DisciplinesSectionProps {
  onSelectDiscipline: (discipline: Discipline) => void;
  onInquireForDiscipline: (disciplineTitle: string) => void;
}

export default function DisciplinesSection({
  onSelectDiscipline,
  onInquireForDiscipline,
}: DisciplinesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>('weddings');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-space-xl bg-[#f4f3f0]/40 border-t border-[#cac6bd]/30"
      id="disciplines"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#cac6bd]/40">
        <Reveal delay={0.05} duration={0.6} y={14} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-label-numeral text-label-numeral text-[#7a776f]">04</span>
            <span className="w-8 h-px bg-[#cac6bd]"></span>
            <span className="font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-[#494740]">
              Services &amp; Disciplines
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b]">What We Photograph</h2>
        </Reveal>

        <Reveal delay={0.15} duration={0.6} y={10}>
          <div className="font-label-editorial text-label-editorial uppercase tracking-[0.24em] text-[#494740]">
            All — 06 Disciplines
          </div>
        </Reveal>
      </div>

      {/* Editorial Horizontal List with Expandable Deep Details */}
      <StaggerContainer
        staggerDelay={0.08}
        delayChildren={0.15}
        className="w-full flex flex-col divide-y divide-[#cac6bd]/40 border-b border-[#cac6bd]/40"
      >
        {DISCIPLINES.map((discipline) => {
          const isExpanded = expandedId === discipline.id;
          return (
            <StaggerItem key={discipline.id} y={12} className="w-full">
              <motion.button
                whileHover={{ backgroundColor: 'rgba(239, 238, 235, 0.75)' }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => toggleExpand(discipline.id)}
                className="w-full text-left group py-7 px-5 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer border-l-2 border-transparent hover:border-[#0e0d0b] transition-all duration-300"
              >
                <div className="flex items-baseline gap-8 md:w-1/3">
                  <span className="font-label-numeral text-label-numeral text-[#7a776f] group-hover:text-[#0e0d0b] transition-colors duration-300">
                    {discipline.number}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-[#0e0d0b] font-normal group-hover:text-[#6b5c4d] transition-colors duration-300">
                    {discipline.title}
                  </h3>
                </div>

                <p className="font-body-md text-body-md text-[#494740] group-hover:text-[#1a1c1a] md:w-1/2 transition-colors duration-300">
                  {discipline.tagline}
                </p>

                <div className="md:w-1/6 flex justify-end items-center gap-2">
                  <span className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#7a776f] group-hover:text-[#0e0d0b] hidden sm:inline transition-colors duration-300">
                    {isExpanded ? 'Fold' : 'Details'}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <ArrowRight
                      size={18}
                      className="text-[#7a776f] group-hover:text-[#0e0d0b] transition-colors duration-300"
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* In-place Expandable Detail Drawer with Motion Animation */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#efeeeb]/40 border-t border-[#cac6bd]/30 p-6 md:p-8 space-y-6">
                      <div className="max-w-3xl space-y-4">
                        <p className="font-body-md text-[#494740] leading-relaxed">
                          {discipline.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#cac6bd]/30">
                          <div>
                            <span className="font-label-editorial text-[10px] uppercase tracking-[0.24em] text-[#0e0d0b] block mb-2">
                              Deliverables &amp; Heirlooms
                            </span>
                            <ul className="space-y-1.5 text-xs text-[#494740]">
                              {discipline.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check size={13} className="text-[#6b5c4d] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <span className="font-label-editorial text-[10px] uppercase tracking-[0.24em] text-[#0e0d0b] block mb-1">
                                Analog Film Coverage
                              </span>
                              <span className="text-xs text-[#494740] flex items-center gap-1.5">
                                <Sparkles size={12} className="text-[#6b5c4d]" />
                                {discipline.filmCoverage}
                              </span>
                            </div>

                            <div>
                              <span className="font-label-editorial text-[10px] uppercase tracking-[0.24em] text-[#0e0d0b] block mb-1">
                                Investment Guidance
                              </span>
                              <span className="font-headline-sm text-sm text-[#0e0d0b]">
                                {discipline.investment}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          <button
                            onClick={() => onInquireForDiscipline(discipline.title)}
                            className="px-5 py-2.5 bg-[#0e0d0b] text-white font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#494740] transition-all hover:scale-[1.02] cursor-pointer"
                          >
                            Inquire For {discipline.title} →
                          </button>
                          <button
                            onClick={() => onSelectDiscipline(discipline)}
                            className="px-4 py-2 border border-[#0e0d0b] text-[#0e0d0b] font-label-editorial text-label-editorial uppercase tracking-[0.2em] hover:bg-[#0e0d0b] hover:text-white transition-colors cursor-pointer"
                          >
                            Expanded Monograph Spec
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

