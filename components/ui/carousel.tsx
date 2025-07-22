"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  visibleCards?: number | { mobile: number; desktop: number };
  className?: string;
  title?: string;
  titleClassName?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: "default" | "outline" | "link" | "lightBlue" | "navyBlue" | "darkGreen" | "filter" | "filterOutline" | "primary" | "underline" | "alternate" | "disabled" | null | undefined;
  variant?: 'scheme1' | 'scheme2' | 'scheme3' | 'scheme4' | 'scheme5';

  navigationDotsColor?: {
    active: string;
    inactive: string;
  };
  navigationArrowsColor?: {
    background: string;
    icon: string;
  };
  sliderButtonColor?: string;
  progressBarBackgroundColor?: string;
}

// Variant styles for carousel
const carouselVariantStyles = {
  scheme1: {
    carouselBackground: "bg-[var(--color-bg-muted)]",
    titleColor: "text-black",
    buttonVariant: "default" as const,
    arrowButtonBackground: "bg-white",
    arrowIconColor: "black",
    sliderButtonColor: "bg-white",
    progressBarBackgroundColor: "bg-[#E3E1EC]"
  },
  scheme2: {
    carouselBackground: "bg-[var(--color-bg-muted)]",
    titleColor: "text-[var(--color-navy-blue)]",
    buttonVariant: "navyBlue" as const,
    arrowButtonBackground: "bg-[var(--color-navy-blue)]",
    arrowIconColor: "white",
    sliderButtonColor: "bg-[var(--color-navy-blue)]",
    progressBarBackgroundColor: "bg-[#E3E1EC]"
  },
  scheme3: {
    carouselBackground: "bg-[var(--color-bg-muted)]",
    titleColor: "text-[var(--color-dark-green)]",
    buttonVariant: "darkGreen" as const,
    arrowButtonBackground: "bg-[var(--color-dark-green)]",
    arrowIconColor: "var(--color-light-green)",
    sliderButtonColor: "bg-[var(--color-dark-green)]",
    progressBarBackgroundColor: "bg-[#E3E1EC]"
  },
  scheme4: {
    carouselBackground: "bg-[var(--color-bg-muted)]",
    titleColor: "text-[var(--color-primary)]",
    buttonVariant: "primary" as const,
    arrowButtonBackground: "bg-[var(--color-primary)]",
    arrowIconColor: "white",
    sliderButtonColor: "bg-[var(--color-primary)]",
    progressBarBackgroundColor: "bg-[#E3E1EC]"
  },

  scheme5: {
    carouselBackground: "bg-[var(--color-navy-blue)]",
    titleColor: "text-white",
    buttonVariant: "primary" as const,
    arrowButtonBackground: "bg-[var(--color-sky-blue)]",
    arrowIconColor: "var(--color-navy-blue)",
    sliderButtonColor: "bg-[var(--color-navy-blue)]",
    progressBarBackgroundColor: "bg-[var(--color-sky-blue)]"
  }
}

export default function Carousel({
  items,
  renderItem,
  visibleCards = { mobile: 1, desktop: 3.5 },
  className = "",
  title,
  titleClassName = "",
  buttonText,
  buttonHref,
  buttonVariant,
  variant = 'scheme1',

  navigationDotsColor = {
    active: "bg-white",
    inactive: "bg-[#B0B0B0]"
  },
  navigationArrowsColor,
  sliderButtonColor,
  progressBarBackgroundColor
}: CarouselProps) {
  // Apply variant styles if no custom colors are provided
  const variantStyles = carouselVariantStyles[variant];
  const finalCarouselBackground = className || variantStyles.carouselBackground;
  const finalTitleColor = titleClassName || variantStyles.titleColor;
  const finalButtonVariant = buttonVariant || variantStyles.buttonVariant;
  const finalArrowButtonBackground = navigationArrowsColor?.background || variantStyles.arrowButtonBackground;
  const finalArrowIconColor = navigationArrowsColor?.icon || variantStyles.arrowIconColor;
  const finalSliderButtonColor = sliderButtonColor || variantStyles.sliderButtonColor;
  const finalProgressBarBackgroundColor = progressBarBackgroundColor || variantStyles.progressBarBackgroundColor;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Handle responsive visibleCards with resize listener
  const getVisibleCards = () => {
    if (typeof visibleCards === 'object') {
      const isMobile = windowWidth < 768;
      return isMobile ? visibleCards.mobile : visibleCards.desktop;
    }
    return visibleCards;
  };
  
  const currentVisibleCards = getVisibleCards();
  
  // Fixed sizes - cards and gaps never change
  const CARD_WIDTH = 320; // Fixed card width in pixels
  const GAP_SIZE = 16; // Fixed gap between cards in pixels
  
  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleDrag(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleDrag(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const min = 4 + 16; // 4px margin + 16px dot width
    const max = rect.width - 4 - 16; // track width - 4px margin - 16px dot width
    const clamped = Math.max(min, Math.min(x, max));
    const percent = (clamped - min) / (max - min);
    const newIndex = Math.round(percent * (items.length - 1));
    setActiveIndex(Math.max(0, Math.min(newIndex, items.length - 1)));
  };

  const handleDotDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleDrag(e);
  };

  const DOT_SIZE = 32; // px
  const MARGIN = 4; // px

  const handleDrag = (e: React.MouseEvent | MouseEvent) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const min = MARGIN + DOT_SIZE / 2;
    const max = rect.width - MARGIN - DOT_SIZE / 2;
    const clamped = Math.max(min, Math.min(x, max));
    const percent = (clamped - min) / (max - min);
    const newIndex = Math.round(percent * (items.length - 1));
    setActiveIndex(Math.max(0, Math.min(newIndex, items.length - 1)));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeIndex < items.length - 1) {
      nextItem();
    }
    if (isRightSwipe && activeIndex > 0) {
      prevItem();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Resize listener for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div 
      className={`w-full rounded-[var(--radius-lg)] pt-[var(--space-md)] md:pt-[var(--space-lg)] pb-[var(--space-md)] md:pb-[var(--space-lg)] relative ${finalCarouselBackground}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pr-[var(--space-sm)] md:pr-[var(--space-lg)]">
        {(title || buttonText) && (
          <div className="ml-[var(--space-sm)] md:ml-[var(--space-lg)] flex flex-col md:flex-row items-start md:items-center md:justify-between mb-[var(--space-lg)] md:mb-[var(--space-lg)] md:gap-[var(--space-md)] gap-[var(--space-sm)]">
            {title && <h2 className={`heading-style-h4 md:heading-style-h4 ${finalTitleColor}`}>{title}</h2>}
            {buttonText && buttonHref && (
              <div><Button variant={finalButtonVariant} className="gap-2" href={buttonHref}>
                {buttonText}
                <span className="material-icons-outlined">arrow_forward</span>
              </Button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              gap: `${GAP_SIZE}px`,
              transform: `translateX(-${activeIndex * (CARD_WIDTH + GAP_SIZE)}px)`,
              marginLeft: 'clamp(var(--space-sm), 4vw, var(--space-lg))',
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${CARD_WIDTH}px`, minWidth: `${CARD_WIDTH}px` }}
                className="flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pr-[var(--space-sm)] md:pr-[var(--space-lg)] pl-[var(--space-sm)] md:pl-[var(--space-lg)]">
        {/* Navigation below cards */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-[var(--space-sm)] md:mt-[var(--space-lg)] gap-[var(--space-md)] md:gap-0">
          {/* Navigation Indicators - left */}
          <div className="hidden md:flex gap-2">
            <div className="flex-1 min-w-[200px]">
              <div
                ref={progressBarRef}
                className={`w-full ${finalProgressBarBackgroundColor} rounded-full h-6 cursor-pointer relative p-0.5`}
                onMouseDown={handleMouseDown}
                onClick={handleClick} // optional: allow click-to-jump
              >
                {/* Switch-style draggable dot */}
                <div
                  className={`absolute top-0.5 w-5 h-5 ${finalSliderButtonColor} rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 ease-out`}
                  style={{
                    left: `calc(2px + ${(items.length === 1 ? 0 : activeIndex / (items.length - 1))} * (100% - 20px))`
                  }}
                  onMouseDown={handleDotDown}
                />
              </div>
              
            </div>
          </div>
          {/* Arrows - right */}
          <div className="flex h-6">
            <button
              onClick={prevItem}
              disabled={activeIndex === 0}
              className={`w-8 flex items-center justify-center rounded-l-full ${finalArrowButtonBackground} disabled:opacity-50 border-r border-black/10`}
              aria-label="Previous"
            >
              <span className="material-icons-outlined text-sm" style={{ color: finalArrowIconColor }}>chevron_left</span>
            </button>
            <button
              onClick={nextItem}
              disabled={activeIndex === items.length - 1}
              className={`w-8 flex items-center justify-center rounded-r-full ${finalArrowButtonBackground} disabled:opacity-50`}
              aria-label="Next"
            >
              <span className="material-icons-outlined text-sm" style={{ color: finalArrowIconColor }}>chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 