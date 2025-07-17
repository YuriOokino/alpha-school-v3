import { useEffect, useRef } from 'react';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Dynamically import LocomotiveScroll to avoid SSR issues
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        // Initialize Locomotive Scroll
        scrollRef.current = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: true,
          lerp: 0.1, // Linear interpolation (smoothness)
          multiplier: 1, // Scroll speed multiplier
          class: 'is-revealed',
          reloadOnContextChange: true,
          touchMultiplier: 2,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
        });
      });
    }

    // Cleanup on unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return scrollRef.current;
}; 