import { useState } from 'react';
import { Story } from '../types';
import { STORIES } from '../data/portfolioData';
import { Eye } from 'lucide-react';
import { Reveal } from './MotionReveal';
import { motion, AnimatePresence } from 'motion/react';

interface SelectedStoriesProps {
  onSelectStory: (story: Story) => void;
  onOpenPlate: (plateId: number) => void;
}

export default function SelectedStories({ onSelectStory }: SelectedStoriesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredStories = activeCategory === 'all'
    ? STORIES
    : STORIES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'gatherings', label: 'Gatherings' },
    { id: 'details', label: 'Artefacts' },
  ];

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-space-xl bg-[#f4f3f0]/60 border-t border-[#cac6bd]/30"
      id="work"
    >
      {/* Header with Index Counter and Filters */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#cac6bd]/40 gap-6">
        <Reveal delay={0.05} duration={0.6} y={14} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-label-numeral text-label-numeral text-[#7a776f]">02</span>
            <span className="w-8 h-px bg-[#cac6bd]"></span>
            <span className="font-label-editorial text-label-editorial uppercase tracking-[0.28em] text-[#494740]">
              Portfolio
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b]">Selected Stories</h2>
        </Reveal>

        {/* Filter Badges & Archive Link */}
        <Reveal delay={0.15} duration={0.6} y={10} className="flex flex-wrap items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 p-1 bg-[#faf9f6] border border-[#cac6bd]/40 relative">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 text-[10px] font-label-editorial uppercase tracking-[0.18em] transition-colors cursor-pointer z-10 ${
                    isActive ? 'text-white font-medium' : 'text-[#494740] hover:text-[#0e0d0b]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#0e0d0b] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="w-px h-6 bg-[#cac6bd]"></span>
            <div className="font-label-editorial text-label-editorial tracking-[0.25em] uppercase text-[#7a776f]">
              Index — 01 / {String(filteredStories.length).padStart(2, '0')}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Asymmetric Master Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {filteredStories.map((story, index) => {
          let colSpan = 'lg:col-span-6 pt-6';
          let aspectClass = 'aspect-[3/2]';

          if (activeCategory === 'all') {
            if (index === 0) {
              colSpan = 'lg:col-span-7';
              aspectClass = 'aspect-[16/10]';
            } else if (index === 1) {
              colSpan = 'lg:col-span-5 lg:-mt-10';
              aspectClass = 'aspect-[4/5]';
            }
          }

          return (
            <Reveal
              key={story.id}
              delay={0.08 + (index % 3) * 0.08}
              duration={0.7}
              y={16}
              className={colSpan}
            >
              <div
                onClick={() => onSelectStory(story)}
                className="space-y-4 group cursor-pointer"
              >
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40`}>
                  <img
                    alt={story.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                    src={story.image}
                  />
                  <div className="absolute top-4 left-4 bg-[#faf9f6]/95 backdrop-blur-sm px-3 py-1 font-label-editorial text-label-editorial tracking-[0.2em] text-[#0e0d0b] uppercase border border-[#cac6bd]/30">
                    Story {story.number}
                  </div>
                  <div className="absolute inset-0 bg-[#0e0d0b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#faf9f6] text-[#0e0d0b] px-4 py-2 text-xs font-label-editorial uppercase tracking-[0.2em] flex items-center gap-2">
                      <Eye size={13} /> View Story Study
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-b border-[#cac6bd]/40 pb-3">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-[#0e0d0b] font-normal group-hover:text-[#6b5c4d] transition-colors">
                      {story.title}
                    </h3>
                    <p className="font-label-editorial text-label-editorial uppercase tracking-[0.22em] text-[#494740] pt-1">
                      {story.subtitle}
                    </p>
                  </div>
                  <span className="font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f]">
                    {story.date}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
