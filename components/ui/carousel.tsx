"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  visibleCards?: number;
  className?: string;
  title?: string;
  titleClassName?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: "default" | "outline" | "link" | "lightBlue" | "navyBlue" | "darkGreen" | "filter" | "filterOutline" | "primary" | "underline" | "alternate" | "disabled" | null | undefined;
  variant?: 'scheme1' | 'scheme2' | 'scheme3' | 'scheme4';

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
  }
}

export default function Carousel({
  items,
  renderItem,
  visibleCards = 3.5,
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
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cardWidth = 100 / visibleCards;

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
    <div className={`w-full rounded-[var(--radius-lg)] pt-[var(--space-lg)] pb-[var(--space-lg)] relative ${finalCarouselBackground}`}>
      <div className="pr-[var(--space-lg)]">
        {(title || buttonText) && (
          <div className="ml-[var(--space-lg)] flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            {title && <h2 className={`${finalTitleColor}`}>{title}</h2>}
            {buttonText && buttonHref && (
              <Button variant={finalButtonVariant} className="gap-2" href={buttonHref}>
                {buttonText}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"/>
                </svg>
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${visibleCards * cardWidth}%`,
              transform: `translateX(-${activeIndex * cardWidth}%)`,
              marginLeft: 'var(--space-lg)',
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ flex: `0 0 340px` }}
                className="px-2 flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pr-[var(--space-xl)] pl-[var(--space-xl)]">
        {/* Navigation below cards */}
        <div className="flex items-center justify-between mt-[var(--space-lg)]">
          {/* Navigation Indicators - left */}
          <div className="flex gap-2">
            <div className="flex-1 min-w-[200px]">
              <div
                ref={progressBarRef}
                className={`w-full ${finalProgressBarBackgroundColor} rounded-full h-10 cursor-pointer relative`}
                onMouseDown={handleMouseDown}
                onClick={handleClick} // optional: allow click-to-jump
              >
                {/* Switch-style draggable dot */}
                <div
                  className={`absolute top-1 w-8 h-8 ${finalSliderButtonColor} rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 ease-out`}
                  style={{
                    left: `calc(4px + ${(items.length === 1 ? 0 : activeIndex / (items.length - 1))} * (100% - 40px))`
                  }}
                  onMouseDown={handleDotDown}
                />
              </div>
              
            </div>
          </div>
          {/* Arrows - right */}
          <div className="flex gap-3">
            <button
              onClick={prevItem}
              disabled={activeIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${finalArrowButtonBackground} disabled:opacity-50`}
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5" stroke={finalArrowIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextItem}
              disabled={activeIndex === items.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${finalArrowButtonBackground} disabled:opacity-50`}
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7 5l5 5-5 5" stroke={finalArrowIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 