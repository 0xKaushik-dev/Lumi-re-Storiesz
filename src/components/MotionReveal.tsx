import React, { ElementType, useState, useEffect, useRef } from 'react';

// Premium editorial cubic-bezier easing curve
export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

// Global single-instance IntersectionObserver for zero layout-thrashing scroll reveals
type ObserverCallback = (entry: IntersectionObserverEntry) => void;
let globalObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, ObserverCallback>();

function getGlobalObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = observerCallbacks.get(entry.target);
          if (cb) cb(entry);
        });
      },
      {
        threshold: 0.01,
        rootMargin: '50px 0px 50px 0px',
      }
    );
  }
  return globalObserver;
}

function observeElement(element: Element, callback: ObserverCallback) {
  const observer = getGlobalObserver();
  if (!observer) return () => {};

  observerCallbacks.set(element, callback);
  observer.observe(element);

  return () => {
    observerCallbacks.delete(element);
    observer.unobserve(element);
  };
}

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
  delay = 0,
  duration = 0.7,
  y = 24,
  className = '',
  as = 'div',
  once = true,
}: RevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Native observer registration without synchronous forced reflows (no getBoundingClientRect)
    const unobserve = observeElement(el, (entry) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (once) unobserve();
      } else if (!once) {
        setIsRevealed(false);
      }
    });

    return unobserve;
  }, [once]);

  const Component = (as as any) || 'div';

  return (
    <Component
      ref={ref}
      className={`reveal-base ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        transform: isRevealed ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
      }}
    >
      {children}
    </Component>
  );
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
  staggerDelay = 0.12,
  delayChildren = 0,
  className = '',
  as = 'div',
  once = true,
}: StaggerContainerProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const unobserve = observeElement(el, (entry) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (once) unobserve();
      } else if (!once) {
        setIsRevealed(false);
      }
    });

    return unobserve;
  }, [once]);

  const Component = (as as any) || 'div';

  return (
    <Component ref={ref} className={className}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          isParentVisible: isRevealed,
          staggerIndex: idx,
          staggerDelay,
          delayChildren,
        });
      })}
    </Component>
  );
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
  y = 24,
  duration = 0.7,
  className = '',
  as = 'div',
  isParentVisible = true,
  staggerIndex = 0,
  staggerDelay = 0.12,
  delayChildren = 0,
}: StaggerItemProps) {
  const Component = (as as any) || 'div';
  const calculatedDelay = delayChildren + staggerIndex * staggerDelay;

  return (
    <Component
      className={`reveal-base ${isParentVisible ? 'is-revealed' : ''} ${className}`}
      style={{
        transitionDelay: `${calculatedDelay}s`,
        transitionDuration: `${duration}s`,
        transform: isParentVisible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
      }}
    >
      {children}
    </Component>
  );
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
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
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
      className="fixed inset-0 z-50 bg-[#0e0d0b]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
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

// 5. Custom Editorial Optical Viewfinder Ring / Floating Cursor Indicator
export function OpticalCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let animFrame: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="button"], img, .group, .cursor-pointer')
      );
      setHovered((prev) => (prev !== isInteractive ? isInteractive : prev));
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      setPos({ x: currentX, y: currentY });
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
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#6b5c4d]/60 hidden md:block transition-[width,height,background-color,border-color] duration-150 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        width: hovered ? 46 : 24,
        height: hovered ? 46 : 24,
        borderColor: hovered ? '#6b5c4d' : 'rgba(107, 92, 77, 0.4)',
        backgroundColor: hovered ? 'rgba(244, 223, 204, 0.15)' : 'transparent',
      }}
    />
  );
}
