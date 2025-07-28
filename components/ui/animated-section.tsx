"use client"

import React, { useRef, useEffect } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-scale";
  threshold?: number;
  rootMargin?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  animation = "fade-up",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  className = "",
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = "0";
    element.style.transform = getInitialTransform(animation);
    element.style.transition = `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            element.style.opacity = "1";
            element.style.transform = "translateY(0) translateX(0) scale(1)";
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

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function getInitialTransform(animation: string): string {
  switch (animation) {
    case "fade-up":
      return "translateY(64px)";
    case "fade-left":
      return "translateX(-64px)";
    case "fade-right":
      return "translateX(64px)";
    case "fade-scale":
      return "scale(0.9)";
    default:
      return "translateY(64px)";
  }
} 