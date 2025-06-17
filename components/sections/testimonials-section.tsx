"use client"

import React, { useState } from "react"
import { testimonials } from "@/content/testimonials"
import SectionHeading from "@/components/features/section-heading"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCards = 2.5;
  const cardWidth = 430; // Reduced from 480px to 430px

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="alpha-section bg-white">
      <SectionHeading 
        title="From Our Students"
        description="Hear from our students about their experience at Alpha School and how it has transformed their learning journey."
        buttonText="Read more testimonials"
        buttonHref="/testimonials"
      />
      
      <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
        <div className="relative flex items-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${testimonials.length * (100 / visibleCards)}%`,
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                  className="px-2 max-w-[430px] flex-shrink-0"
                >
                  <div className="bg-white rounded-[var(--radius-md)] p-[var(--space-lg)] h-full">
                    <div className="flex flex-col gap-[var(--space-md)]">
                      <div className="flex items-center gap-[var(--space-sm)]">
                        <img 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-[var(--color-text-main)]">{testimonial.name}</h3>
                          <p className="text-[var(--color-text-muted)] text-sm">{testimonial.grade}, {testimonial.age}</p>
                        </div>
                      </div>
                      <p className="text-[var(--color-text-main)]">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation below cards */}
        <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
          {/* Dots - left */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-[var(--color-warm-dark)]' : 'bg-[#B0B0B0]'} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrows - right */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              disabled={activeIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextTestimonial}
              disabled={activeIndex === testimonials.length - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
