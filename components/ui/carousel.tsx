"use client"

import React, { useState } from "react"
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
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "lightBlue" | "maroon" | "pink" | "filter" | "filterOutline";
  navigationDotsColor?: {
    active: string;
    inactive: string;
  };
  navigationArrowsColor?: {
    background: string;
    icon: string;
  };
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
  navigationDotsColor = {
    active: "bg-white",
    inactive: "bg-[#B0B0B0]"
  },
  navigationArrowsColor = {
    background: "bg-white",
    icon: "#111827"
  }
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 100 / visibleCards;

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] relative ${className}`}>
      {(title || buttonText) && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
          {title && <h3 className={`section-headline font-bold ${titleClassName}`}>{title}</h3>}
          {buttonText && buttonHref && (
            <Button variant={buttonVariant} className="gap-2" href={buttonHref}>
              {buttonText}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"/>
              </svg>
            </Button>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${items.length * cardWidth}%`,
              transform: `translateX(-${activeIndex * cardWidth}%)`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
                className="px-2 flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation below cards */}
      <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
        {/* Dots - left */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === activeIndex ? navigationDotsColor.active : navigationDotsColor.inactive} transition-colors`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Arrows - right */}
        <div className="flex gap-3">
          <button
            onClick={prevItem}
            disabled={activeIndex === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${navigationArrowsColor.background} disabled:opacity-50`}
            aria-label="Previous"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M13 15l-5-5 5-5" stroke={navigationArrowsColor.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextItem}
            disabled={activeIndex === items.length - 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${navigationArrowsColor.background} disabled:opacity-50`}
            aria-label="Next"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7 5l5 5-5 5" stroke={navigationArrowsColor.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 