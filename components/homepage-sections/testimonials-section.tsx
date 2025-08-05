"use client"

import React, { useState, useEffect, useRef } from "react"
import { testimonials } from "@/content/testimonials"
import SectionHeading from "@/components/layout/headings/section-heading"
import { Button } from "@/components/ui/button"
import Carousel from "@/components/ui/carousel"

export default function TestimonialsSection() {
  const [openVideo, setOpenVideo] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
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



return (
  <section className="alpha-section">

      <div className="alpha-container two-column-flex mb-[var(--space-md)] md:mb-[var(--space-2xl)]">
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
      
      <Carousel
        items={testimonials}
        renderItem={(testimonial, idx) => (
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
        )}
        visibleCards={{ mobile: 1, desktop: 2.5 }}
        variant="scheme1"
        className={styles.background}
      />
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
