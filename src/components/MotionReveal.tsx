import React, { ElementType, useEffect, useRef } from 'react';

// Premium editorial cubic-bezier easing curve
export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

export function Reveal({
  children,
  className = '',
  as = 'div',
}: RevealProps) {
  const Component = (as as any) || 'div';
  return <Component className={className}>{children}</Component>;
}

export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = '',
  as = 'div',
}: StaggerContainerProps) {
  const Component = (as as any) || 'div';
  return <Component className={className}>{children}</Component>;
}

export interface StaggerItemProps {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  isParentVisible?: boolean;
  staggerIndex?: number;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerItem({
  children,
  className = '',
  as = 'div',
}: StaggerItemProps) {
  const Component = (as as any) || 'div';
  return <Component className={className}>{children}</Component>;
}

// 2. Standard Responsive Image Container
export function ParallaxImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
}

// 3. Modal Backdrop & Dialog Animation Container
export function AnimateModalContainer({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0d0b]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl"
      >
        {children}
      </div>
    </div>
  );
}

// 4. Smooth Infinite Marquee using Pure CSS
export function MarqueeText({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-[#0e0d0b] text-[#e6e2dd] py-2.5 border-y border-[#242320] font-label-editorial text-[10px] sm:text-xs uppercase tracking-[0.28em] select-none">
      <div className="contact-strip-track">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

// 5. Zero-Re-render High Performance Optical Viewfinder Cursor
export function OpticalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="button"], img, .group, .cursor-pointer')
      );

      if (isInteractive) {
        el.style.width = '46px';
        el.style.height = '46px';
        el.style.borderColor = '#6b5c4d';
        el.style.backgroundColor = 'rgba(244, 223, 204, 0.15)';
      } else {
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.borderColor = 'rgba(107, 92, 77, 0.4)';
        el.style.backgroundColor = 'transparent';
      }
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#6b5c4d]/60 hidden md:block transition-[width,height,background-color,border-color] duration-150 ease-out"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        width: 24,
        height: 24,
      }}
    />
  );
}
