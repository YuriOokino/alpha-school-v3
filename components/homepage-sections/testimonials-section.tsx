"use client"

import React, { useState } from "react"
import { testimonials } from "@/content/testimonials"
import SectionHeading from "@/components/layout/headings/section-heading"
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const visibleCards = 2.5;
  const cardWidth = 430; // Reduced from 480px to 430px

  const testimonialVideoUrl = "https://player.vimeo.com/video/1033250050?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1";

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


const testimonials = [
  {
    quote: "I love Alpha because I can learn at my own pace whether I’m ahead or behind the class.",
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
    quote: "What I love about Alpha is the freedom we get here that isn’t like another school.",
    imageAlt: "Student 3",
    imageSrc: "/assets/students/rosie.webp",
    variant: "variant-green",
    grade: "5th",
    age: "10",
    name: "Rosie"
  },
  {
    quote: "There’s no hand holding, and I get to learn at my own pace.",
    imageAlt: "Student 4",
    imageSrc: "/assets/students/marshall.webp",
    variant: "variant-blue",
    grade: "6th",
    age: "11",
    name: "Marshall"
  },
];
return (
  <section className="alpha-section bg-white">

      <div className="two-column-flex mb-[var(--space-2xl)]">
        <h2>
          Their voices speak of their success
        </h2>
        <p>
          See what Alpha students and families say about learning 2x faster, building confidence, and loving school again.
        </p>
      </div>
      <div className="testimonial-videos-cards-grid flex flex-col md:flex-row justify-center gap-y-6 md:gap-x-8 max-w-6xl mx-auto">
        {/* Left column */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 md:pb-[200px] items-end md:items-end w-full md:w-[500px]">
          {/* Top left card */}
          <div className="alpha-card bg-[var(--color-navy-blue)] w-full md:w-[340px] p-6">
            <h6 className="text-white mb-4">
              “{testimonials[0].quote}”
            </h6>
            <Button size="small" className="bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_arrow</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center">
              <img
                src={testimonials[0].imageSrc}
                alt={testimonials[0].imageAlt}
                className="testimonial-video-image w-full h-[180px] md:h-[200px] rounded-xl object-cover"
              />
            </div>
          </div>
          {/* Bottom left card */}
          <div className="alpha-card bg-[var(--color-light-green)] w-full p-6">
            <h6 className="text-[var(--color-dark-green)] mb-4">
              “{testimonials[2].quote}”
            </h6>
            <Button size="small" className="bg-[var(--color-dark-green)] text-[var(--color-light-green)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_arrow</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center">
              <img
                src={testimonials[2].imageSrc}
                alt={testimonials[2].imageAlt}
                className="testimonial-video-image w-full h-[180px] md:h-[400px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 md:pt-[200px] items-start w-full md:w-[500px]">
          {/* Top right card */}
          <div className="alpha-card bg-[var(--color-sky-blue)] w-full p-6">
            <h6 className="text-[var(--color-navy-blue)] mb-4">
              “{testimonials[1].quote}”
            </h6>
            <Button size="small" className="bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_arrow</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center">
              <img
                src={testimonials[1].imageSrc}
                alt={testimonials[1].imageAlt}
                className="testimonial-video-image w-full h-[180px] md:h-[300px] rounded-xl object-cover"
              />
            </div>
          </div>
          {/* Bottom right card */}
          <div className="alpha-card bg-[var(--color-navy-blue)] w-full md:w-[380px] p-6">
            <h6 className="text-white mb-4">
              “{testimonials[3].quote}”
            </h6>
            <Button size="small" className="bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] centered-icon-text mb-4" onClick={() => setOpenVideo(true)}>
              <span className="material-icons-outlined">play_arrow</span> Watch
            </Button>
            <div className="testimonial-video-image-wrapper flex justify-center">
              <img
                src={testimonials[3].imageSrc}
                alt={testimonials[3].imageAlt}
                className="testimonial-video-image w-full h-[180px] md:h-[250px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] relative">
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
                          <h5 className="text-[var(--color-text-main)] font-bold">{testimonial.name}</h5>
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
