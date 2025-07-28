"use client"

import React, { useEffect } from 'react';

interface AnimationProviderProps {
  children: React.ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Global intersection observer for all animation elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Check for animation type
            const animationType = element.dataset.animation || 'fade-up';
            const delay = parseInt(element.dataset.delay || '0');
            
            // Apply animation with delay
            setTimeout(() => {
              element.classList.add('animated');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
} 