import { useRef, useEffect } from 'react';

interface UseCSSAnimationOptions {
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale';
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useCSSAnimation({
  animation = 'fade-up',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  delay = 0
}: UseCSSAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial classes
    element.classList.add('animate-on-scroll', `animate-${animation}`);
    
    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animated class to trigger the animation
            element.classList.add('animated');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, threshold, rootMargin, delay]);

  return ref;
} 