import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { JournalArticle } from '../types';
import { ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export default function JournalSection({ onSelectArticle }: JournalSectionProps) {
  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-space-xl bg-[#f4f3f0]/40 border-t border-[#cac6bd]/30"
      id="journal"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#cac6bd]/40">
        <Reveal delay={0.05} duration={0.6} y={14} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-label-numeral text-label-numeral text-[#7a776f]">05</span>
            <span className="w-8 h-px bg-[#cac6bd]"></span>
            <span className="font-label-editorial text-label-editorial uppercase tracking-[0.26em] text-[#494740]">
              Journal
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#0e0d0b]">Field Notes &amp; Observations</h2>
        </Reveal>

        <Reveal delay={0.15} duration={0.6} y={10}>
          <button
            onClick={() => onSelectArticle(JOURNAL_ARTICLES[0])}
            className="font-label-editorial text-label-editorial tracking-[0.24em] uppercase text-[#0e0d0b] underline underline-offset-4 hover:text-[#6b5c4d] transition-colors cursor-pointer text-left"
          >
            Read All Field Notes
          </button>
        </Reveal>
      </div>

      {/* 3-Column Editorial Grid */}
      <StaggerContainer
        staggerDelay={0.12}
        delayChildren={0.15}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {JOURNAL_ARTICLES.map((article) => (
          <StaggerItem
            key={article.id}
            y={16}
            className="h-full"
          >
            <article
              onClick={() => onSelectArticle(article)}
              className="space-y-4 group cursor-pointer h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[16/11] overflow-hidden bg-[#efeeeb] border border-[#cac6bd]/40">
                  <img
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    src={article.image}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#7a776f]">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-[#0e0d0b] group-hover:text-[#6b5c4d] transition-colors">
                    {article.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-[#494740] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1 font-label-editorial text-label-editorial uppercase tracking-[0.2em] text-[#0e0d0b] group-hover:underline">
                  Read Story <ArrowRight size={12} />
                </span>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
