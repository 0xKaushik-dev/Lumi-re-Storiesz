import { Reveal } from './MotionReveal';

interface FooterProps {
  onOpenInquire: () => void;
}

export default function Footer({ onOpenInquire }: FooterProps) {
  return (
    <footer className="w-full bg-[#f4f3f0] border-t border-[#cac6bd]/40 mt-space-xl">
      <Reveal delay={0.1} duration={0.7} y={12} className="w-full">
        <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col items-center text-center space-y-8 pt-20 pb-20">
          <div className="space-y-2">
            <span className="font-headline-sm text-headline-sm tracking-[0.24em] text-[#0e0d0b] uppercase block font-normal">
              Lumière Stories
            </span>
            <span className="font-label-editorial text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#7a776f] block">
              Documentary &amp; Fine Art Photography
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#494740] font-label-editorial text-label-editorial uppercase tracking-[0.22em] pt-2">
            <button
              onClick={onOpenInquire}
              className="hover:text-[#0e0d0b] underline underline-offset-4 transition-colors cursor-pointer"
            >
              studio@lumierestories.com
            </button>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#cac6bd]"></span>
            <span>Paris · Kyoto · New York · Odisha</span>
          </div>

          <div className="w-12 h-px bg-[#cac6bd]/40 my-2"></div>

          <div className="font-label-editorial text-[10px] uppercase tracking-[0.2em] text-[#7a776f]">
            © 2026 Lumière Stories. All rights reserved. Archival Silver Gelatin Mono Series.
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
