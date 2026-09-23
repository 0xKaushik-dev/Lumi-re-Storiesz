import { useState, useEffect } from 'react';
import Header from './components/Header';
import CoverHero from './components/CoverHero';
import ApproachSection from './components/ApproachSection';
import SelectedStories from './components/SelectedStories';
import MonographFeature from './components/MonographFeature';
import StudioSection from './components/StudioSection';
import DisciplinesSection from './components/DisciplinesSection';
import NarrativeArc from './components/NarrativeArc';
import JournalSection from './components/JournalSection';
import ContactSheetStrip from './components/ContactSheetStrip';
import ExperienceProcess from './components/ExperienceProcess';
import ClosingCta from './components/ClosingCta';
import Footer from './components/Footer';

import MonographReaderModal from './components/MonographReaderModal';
import InquiryModal from './components/InquiryModal';
import StoryDetailModal from './components/StoryDetailModal';
import ArticleModal from './components/ArticleModal';
import DisciplineModal from './components/DisciplineModal';

import { ActiveView, Story, Discipline, JournalArticle } from './types';
import { OpticalCursor, MarqueeText } from './components/MotionReveal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('all');
  const [isPlateReaderOpen, setIsPlateReaderOpen] = useState(false);
  const [selectedPlateId, setSelectedPlateId] = useState<number>(1);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [selectedDisciplineTitle, setSelectedDisciplineTitle] = useState<string>('Weddings');

  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline | null>(null);

  const isAnyModalOpen = Boolean(
    isPlateReaderOpen || isInquireOpen || activeStory || activeArticle || activeDiscipline
  );

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnyModalOpen]);

  // Ultra-smooth 60/120fps LERP scroll engine (desktop & mobile/touch)
  useEffect(() => {
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let animFrameId: number | null = null;
    let isRunning = false;

    // Touch interaction tracking variables
    let isTouching = false;
    let lastTouchY = 0;
    let lastTouchTime = 0;
    let touchVelocityY = 0;

    const isModalActive = () => {
      return isAnyModalOpen || document.body.style.overflow === 'hidden';
    };

    const updateScroll = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      // Ultra-buttery linear interpolation (0.085 lerp factor for silky liquid momentum)
      currentY += (targetY - currentY) * 0.085;

      if (Math.abs(targetY - currentY) > 0.1) {
        window.scrollTo(0, currentY);
        animFrameId = requestAnimationFrame(updateScroll);
      } else {
        currentY = targetY;
        window.scrollTo(0, targetY);
        isRunning = false;
        animFrameId = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isModalActive()) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('.overflow-y-auto, [data-native-scroll="true"]')) return;

      e.preventDefault();

      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }

      // 52% total scroll speed reduction (0.48 multiplier: reduced speed by 20% more)
      targetY += e.deltaY * 0.48;

      if (!isRunning) {
        isRunning = true;
        animFrameId = requestAnimationFrame(updateScroll);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isModalActive()) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('.overflow-y-auto, [data-native-scroll="true"]')) return;

      if (e.touches.length === 1) {
        isTouching = true;
        lastTouchY = e.touches[0].clientY;
        lastTouchTime = performance.now();
        touchVelocityY = 0;

        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching || isModalActive()) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('.overflow-y-auto, [data-native-scroll="true"]')) return;

      if (e.touches.length === 1) {
        const currentTouchY = e.touches[0].clientY;
        const now = performance.now();
        const deltaY = lastTouchY - currentTouchY;
        const dt = Math.max(1, now - lastTouchTime);

        const instantVelocity = deltaY / dt;
        touchVelocityY = touchVelocityY * 0.4 + instantVelocity * 0.6;

        lastTouchY = currentTouchY;
        lastTouchTime = now;

        if (e.cancelable) {
          e.preventDefault();
        }

        if (!isRunning) {
          currentY = window.scrollY;
          targetY = window.scrollY;
        }

        // 52% total scroll speed reduction (0.48 multiplier)
        targetY += deltaY * 0.48;

        if (!isRunning) {
          isRunning = true;
          animFrameId = requestAnimationFrame(updateScroll);
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTouching) return;
      isTouching = false;

      const timeSinceLastMove = performance.now() - lastTouchTime;
      if (timeSinceLastMove > 80) {
        touchVelocityY = 0;
      }

      if (Math.abs(touchVelocityY) > 0.05) {
        const momentum = touchVelocityY * 120 * 0.48;
        targetY += momentum;

        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        targetY = Math.max(0, Math.min(targetY, maxScroll));

        if (!isRunning) {
          isRunning = true;
          animFrameId = requestAnimationFrame(updateScroll);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [isAnyModalOpen]);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlate = (plateId: number) => {
    setSelectedPlateId(plateId);
    setIsPlateReaderOpen(true);
  };

  const handleOpenInquireWithDiscipline = (disciplineTitle: string) => {
    setSelectedDisciplineTitle(disciplineTitle);
    setIsInquireOpen(true);
  };

  return (
    <div className="bg-[#faf9f6] font-body-md text-[#1a1c1a] antialiased selection:bg-[#f4dfcc] selection:text-[#24190e] min-h-screen flex flex-col relative w-full">
      {/* Custom Optical Viewfinder Cursor */}
      <OpticalCursor />

      {/* Editorial Fixed Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenInquire={() => {
          setSelectedDisciplineTitle('Weddings');
          setIsInquireOpen(true);
        }}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="w-full bg-[#faf9f6] flex-1">
        {/* SECTION 1: COVER HERO */}
        <CoverHero
          onExploreClick={() => handleNavigateSection('approach')}
          onOpenPlate={handleOpenPlate}
        />

        {/* MARQUEE BANNER */}
        <MarqueeText text="PARIS · PROVENCE · KYOTO · LAKE COMO · ODISHA · NEW YORK · ARCHIVAL FILM MONOGRAPHS · 2026 / 2027 COMMISSIONS · " />

        {/* SECTION 2: 01 — THE APPROACH */}
        <ApproachSection />

        {/* SECTION 3: 02 — SELECTED STORIES */}
        <SelectedStories
          onSelectStory={(story) => setActiveStory(story)}
          onOpenPlate={handleOpenPlate}
        />

        {/* SECTION 4: FEATURED STORY MONOGRAPH SPREAD */}
        <MonographFeature
          onOpenMonographReader={() => {
            setSelectedPlateId(2);
            setIsPlateReaderOpen(true);
          }}
        />

        {/* SECTION 5: 03 — ABOUT (The Studio & Craft) */}
        <StudioSection
          onOpenInquire={() => {
            setSelectedDisciplineTitle('Weddings');
            setIsInquireOpen(true);
          }}
        />

        {/* SECTION 6: 04 — WHAT WE PHOTOGRAPH (Disciplines) */}
        <DisciplinesSection
          onSelectDiscipline={(disc) => setActiveDiscipline(disc)}
          onInquireForDiscipline={handleOpenInquireWithDiscipline}
        />

        {/* SECTION 7: THE NARRATIVE ARC */}
        <NarrativeArc onOpenPlate={handleOpenPlate} />

        {/* SECTION 8: 05 — FROM THE JOURNAL */}
        <JournalSection onSelectArticle={(article) => setActiveArticle(article)} />

        {/* SECTION 9: HORIZONTAL CONTACT SHEET STRIP */}
        <ContactSheetStrip onOpenPlate={handleOpenPlate} />

        {/* SECTION 10: TESTIMONIAL & THE EXPERIENCE PROCESS */}
        <ExperienceProcess />

        {/* SECTION 11: CINEMATIC CLOSING CTA & COLOPHON */}
        <ClosingCta
          onOpenInquire={() => {
            setSelectedDisciplineTitle('Weddings');
            setIsInquireOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquire={() => {
          setSelectedDisciplineTitle('Weddings');
          setIsInquireOpen(true);
        }}
      />

      {/* Interactive Modals with AnimatePresence */}
      <AnimatePresence>
        {isPlateReaderOpen && (
          <MonographReaderModal
            initialPlateId={selectedPlateId}
            onClose={() => setIsPlateReaderOpen(false)}
            onOpenInquire={() => {
              setIsPlateReaderOpen(false);
              setIsInquireOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isInquireOpen && (
          <InquiryModal
            initialDiscipline={selectedDisciplineTitle}
            onClose={() => setIsInquireOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeStory && (
          <StoryDetailModal
            story={activeStory}
            onClose={() => setActiveStory(null)}
            onOpenPlateReader={() => {
              setActiveStory(null);
              setIsPlateReaderOpen(true);
            }}
            onOpenInquire={() => {
              setActiveStory(null);
              setIsInquireOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeArticle && (
          <ArticleModal
            article={activeArticle}
            onClose={() => setActiveArticle(null)}
            onOpenInquire={() => {
              setActiveArticle(null);
              setIsInquireOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeDiscipline && (
          <DisciplineModal
            discipline={activeDiscipline}
            onClose={() => setActiveDiscipline(null)}
            onOpenInquire={(title) => {
              setActiveDiscipline(null);
              handleOpenInquireWithDiscipline(title);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

