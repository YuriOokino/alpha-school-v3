"use client"

import React, { useState, useEffect, useRef } from "react"
import { testimonials } from "@/content/testimonials"
import SectionHeading from "@/components/layout/headings/section-heading"
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCardsCount = 2.5;
  const cardWidth = 430; // Reduced from 480px to 430px
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const testimonialVideoUrl = "https://player.vimeo.com/video/1033250050?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=1";

  // Variant styles for carousel
  const carouselVariantStyles = {
    scheme1: {
      background: 'bg-[var(--color-primary)]',
      button: 'bg-white',
      buttonText: 'text-[var(--color-primary)]',
      sliderDot: 'bg-[var(--color-primary)]',
      sliderTrack: 'bg-gray-200'
    },
    scheme2: {
      background: 'bg-[var(--color-sky-blue)]',
      button: 'bg-white',
      buttonText: 'text-[var(--color-navy-blue)]',
      sliderDot: 'bg-[var(--color-navy-blue)]',
      sliderTrack: 'bg-white opacity-80'
    },
    scheme3: {
      background: 'bg-[var(--color-light-green)]',
      button: 'bg-[var(--color-dark-green)]',
      buttonText: 'text-[var(--color-light-green)]',
      sliderDot: 'bg-[var(--color-dark-green)]',
      sliderTrack: 'bg-gray-200'
    },
    scheme4: {
      background: 'bg-[var(--color-bg-muted)]',
      button: 'bg-white',
      buttonText: 'text-[var(--color-primary)]',
      sliderDot: 'bg-[var(--color-primary)]',
      sliderTrack: 'bg-gray-200'
  }
}

  // Choose your carousel variant here
  const carouselVariant = 'scheme2'; // Change this to switch schemes
  const styles = carouselVariantStyles[carouselVariant];

const testimonials = [
  {
    quote: "I love Alpha because I can learn at my own pace whether I'm ahead or behind the class.",
    imageAlt: "Student 1",
    imageSrc: "/assets/students/chloe.webp",
    variant: "variant-blue",
    grade: "3rd",
    age: "8",
    name: "Chloe"
  },
  {
    quote: "One of the reasons I love Alpha is because we have our own currency that motivates us to do more work.",
    imageAlt: "Student 2",
    imageSrc: "/assets/students/lulu.webp",
    variant: "variant-light-blue",
    grade: "4th",
    age: "9",
    name: "Lulu"
  },
  {
    quote: "What I love about Alpha is the freedom we get here that isn't like another school.",
    imageAlt: "Student 3",
    imageSrc: "/assets/students/rosie.webp",
    variant: "variant-green",
    grade: "5th",
    age: "10",
    name: "Rosie"
  },
  {
    quote: "There's no hand holding, and I get to learn at my own pace.",
    imageAlt: "Student 4",
    imageSrc: "/assets/students/marshall.webp",
    variant: "variant-blue",
    grade: "6th",
    age: "11",
    name: "Marshall"
  },
];

  // Duplicate testimonials multiple times for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];



  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? duplicatedTestimonials.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === duplicatedTestimonials.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

const progressBarRef = React.useRef<HTMLDivElement>(null);
const DOT_SIZE = 32; // px
const MARGIN = 4; // px
const handleDotDown = (e: React.MouseEvent) => {
  setIsDragging(true);
  e.preventDefault();
};
const [isDragging, setIsDragging] = React.useState(false);
const handleMouseDown = (e: React.MouseEvent) => {
  setIsDragging(true);
  handleDrag(e);
};
const handleClick = (e: React.MouseEvent) => {
  handleDrag(e);
};
const handleDrag = (e: React.MouseEvent | MouseEvent) => {
  if (!progressBarRef.current) return;
  const rect = progressBarRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const min = MARGIN + DOT_SIZE / 2;
  const max = rect.width - MARGIN - DOT_SIZE / 2;
  const clamped = Math.max(min, Math.min(x, max));
  const percent = (clamped - min) / (max - min);
  const newIndex = Math.round(percent * (duplicatedTestimonials.length - 1));
  setActiveIndex(Math.max(0, Math.min(newIndex, duplicatedTestimonials.length - 1)));
  
  // Pause auto-scroll when user drags the slider
  setIsPaused(true);
  setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
};
// Intersection Observer for scroll animations
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards(prev => [...prev, index]);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  cardRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => observer.disconnect();
}, []);

React.useEffect(() => {
  if (!isDragging) return;
  const handleMove = (e: MouseEvent) => handleDrag(e);
  const handleUp = () => setIsDragging(false);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleUp);
  return () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleUp);
  };
}, [isDragging]);

return (
  <section className="alpha-section">

      <div className="two-column-flex mb-[var(--space-md)] md:mb-[var(--space-2xl)]">
        <h2 className="text-[var(--color-navy-blue)]">
          Their voices speak of their success
        </h2>
        <p>
          See what Alpha students and families say about learning 2x faster, building confidence, and loving school again.
        </p>
      </div>
      <div className="testimonial-videos-cards-grid flex flex-col md:flex-row justify-center gap-y-6 md:gap-x-8 max-w-6xl mx-auto mb-[var(--space-lg)]">
        {/* Left column */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 md:pb-[200px] items-end md:items-end w-full md:w-[500px]">
          {/* Top left card */}
          <div 
            ref={(el) => { cardRefs.current[0] = el; }}
            data-index="0"
            className={`alpha-card bg-[#8B9BFF] w-full md:w-[340px] p-6 transition-all duration-700 ease-out transform ${
              visibleCards.includes(0) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h6 className="text-white mb-4">
              "{testimonials[0].quote}"
            </h6>
            <Button size="small" className="text-[#8B9BFF] bg-white centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_circle</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center group overflow-hidden w-full h-[180px] md:h-[200px] rounded-xl">
              <img
                src={testimonials[0].imageSrc}
                alt={testimonials[0].imageAlt}
                className="testimonial-video-image w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
          {/* Bottom left card */}
          <div 
            ref={(el) => { cardRefs.current[1] = el; }}
            data-index="1"
            className={`alpha-card bg-[#CBD1FF] w-full p-6 transition-all duration-700 ease-out transform ${
              visibleCards.includes(1) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h6 className="text-[var(--color-navy-blue)] mb-4">
              "{testimonials[2].quote}"
            </h6>
            <Button size="small" className="bg-[var(--color-navy-blue)] text-[#CBD1FF] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_circle</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center group overflow-hidden w-full h-[180px] md:h-[400px] rounded-xl">
              <img
                src={testimonials[2].imageSrc}
                alt={testimonials[2].imageAlt}
                className="testimonial-video-image w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 md:pt-[200px] items-start w-full md:w-[500px]">
          {/* Top right card */}
          <div 
            ref={(el) => { cardRefs.current[2] = el; }}
            data-index="2"
            className={`alpha-card bg-[var(--color-sky-blue)] w-full p-6 transition-all duration-700 ease-out transform ${
              visibleCards.includes(2) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h6 className="text-[var(--color-navy-blue)] mb-4">
              "{testimonials[1].quote}"
            </h6>
            <Button size="small" className="bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_circle</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center group overflow-hidden w-full h-[180px] md:h-[300px] rounded-xl">
              <img
                src={testimonials[1].imageSrc}
                alt={testimonials[1].imageAlt}
                className="testimonial-video-image w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
          {/* Bottom right card */}
          <div 
            ref={(el) => { cardRefs.current[3] = el; }}
            data-index="3"
            className={`alpha-card bg-[var(--color-navy-blue)] w-full md:w-[380px] p-6 transition-all duration-700 ease-out transform ${
              visibleCards.includes(3) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h6 className="text-white mb-4">
              "{testimonials[3].quote}"
            </h6>
            <Button size="small" className="bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_circle</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center group overflow-hidden w-full h-[180px] md:h-[250px] rounded-xl">
              <img
                src={testimonials[3].imageSrc}
                alt={testimonials[3].imageAlt}
                className="testimonial-video-image w-full h-full object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className={`w-full ${styles.background} py-[var(--space-sm)] md:py-[var(--space-lg)] rounded-[var(--radius-lg)] relative`}>
        <div className="relative flex items-center">
          <div className="overflow-hidden w-full">
            <div
              className={`flex gap-2 w-fit ${
                isPaused ? '' : 'animate-scroll-fast'
              }`}
              style={{
                marginLeft: 'clamp(var(--space-sm), 4vw, var(--space-lg))',
              }}
            >
              {duplicatedTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="px-2 max-w-[430px] flex-shrink-0"
                >
                  <div className="bg-white rounded-[var(--radius-md)] p-[var(--space-sm)] md:p-[var(--space-lg)] h-full">
                    <div className="flex flex-col gap-[var(--space-md)]">
                      <div className="flex items-center gap-[var(--space-sm)]">
                        <img 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h6 className="text-[var(--color-text-main)]">{testimonial.name}</h6>
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-[var(--space-sm)] md:mt-[var(--space-lg)] gap-[var(--space-md)] md:gap-0 px-[var(--space-sm)] md:px-[var(--space-lg)]">
          {/* Switch-style slider navigation - left */}
          <div className="hidden md:block w-[200px]">
            <div
              ref={progressBarRef}
              className={`w-full ${styles.sliderTrack} rounded-full h-6 cursor-pointer relative p-0.5`}
              onMouseDown={handleMouseDown}
              onClick={handleClick}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 ${styles.sliderDot} rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 ease-out`}
                style={{
                  left: `calc(2px + ${(duplicatedTestimonials.length === 1 ? 0 : activeIndex / (duplicatedTestimonials.length - 1))} * (100% - 20px))`
                }}
                onMouseDown={handleDotDown}
              />
            </div>
          </div>
          {/* Arrows - right */}
          <div className="flex h-6">
            <button
              onClick={prevTestimonial}
              className={`w-8 flex items-center justify-center rounded-l-full ${styles.button} disabled:opacity-50 border-r border-black/10`}
              aria-label="Previous"
            >
              <span className="material-icons-outlined text-sm" style={{ color: 'var(--color-navy-blue)' }}>chevron_left</span>
            </button>
            <button
              onClick={nextTestimonial}
              className={`w-8 flex items-center justify-center rounded-r-full ${styles.button} disabled:opacity-50`}
              aria-label="Next"
            >
              <span className="material-icons-outlined text-sm" style={{ color: 'var(--color-navy-blue)' }}>chevron_right</span>
            </button>
          </div>
        </div>
        

      </div>
      {openVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-4 relative max-w-3xl w-full">
      <button
        className="absolute top-2 right-2 text-black text-2xl"
        onClick={() => setOpenVideo(false)}
        aria-label="Close video"
      >
        ✕
      </button>
      <div className="w-full aspect-[16/9]">
        <iframe
          src={testimonialVideoUrl}
          title="Alpha - Student Testimonials Reel"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  </div>
)}
    </section>
  )
}
