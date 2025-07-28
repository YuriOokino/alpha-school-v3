"use client";
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from "react"

import { getUpcomingCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"
import StatsSection from "@/components/homepage-sections/stats-section"
import CommitmentsSection from "@/components/homepage-sections/commitments-section"
import EventCard from "@/components/features/cards/event-card"
import Carousel from "@/components/ui/carousel"
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos"
import LocationsCarouselSection from "@/components/homepage-sections/locations-carousel-section"
import TestimonialsSection from "@/components/homepage-sections/testimonials-section"
import AlphaGuidesSection from "@/components/homepage-sections/alpha-guides-section"
import KidsNeedSection from "@/components/homepage-sections/kids-need-section"
import VideoPlayer from "@/components/ui/video-player"
import Divider from "@/components/layout/divider"
import HeroSection from "@/components/homepage-sections/hero-section"
import SectionHeading from "@/components/layout/headings/section-heading"
import AnimatedSection from "@/components/ui/animated-section"

export default function Home() {
  const [campuses, setCampuses] = useState<CampusMetadata[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const loadCampuses = async () => {
      const upcomingCampuses = await getUpcomingCampuses();
      setCampuses(upcomingCampuses);
    };
    
    const loadEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };
    
    loadCampuses();
    loadEvents();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  // Commitments data
  const commitments = [
    {
      title: "Love School",
      description: "Alpha students love school – it's engaging, inspiring, and built for them.",
      link: "/the-program#love-school"
    },
    {
      title: "Learn 2x in 2 Hours",
      description: "Alpha students learn twice as fast as their peers and rank in the top 1% nationwide.",
      link: "/the-program#learn-2x"
    },
    {
      title: "Learn Life Skills",
      description: "Alpha students spend afternoons developing life skills and exploring their personas.",
      link: "/the-program#lifeskills-workshops"
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg-muted)]">
      <HeroSection />
      <CommitmentsSection />
      <Divider fill="white" direction="up" />
      <KidsNeedSection />
      <Divider fill="white" direction="down" />
      <StatsSection />
      <LocationsCarouselSection />
      <Divider fill="white" direction="up" />
      <TestimonialsSection />
      <Divider fill="white" direction="down" />
      <AlphaGuidesSection />
      <Divider fill="white" direction="up" />
      <section id="demo" className="alpha-section my-8">
        <div className="flex flex-col items-center justify-center">
          <SectionHeading
          title="Alpha in action"
          className="text-[var(--color-primary)]"
          description="From student-led businesses to science challenges and news broadcasts, every day at Alpha is packed with purpose, energy, and real-world learning."
          buttonText="More videos"
          buttonHref="/video-library"
          buttonVariant="primary"
          >
          </SectionHeading>
          </div>
<AnimatedSection animation="fade-up" delay={300}>
<div className="flex justify-center"><VideoPlayer 
videoUrl=""
posterImage="/assets/feature-video-overlays/demo.png"
aspectRatio="16/9"
/></div>
</AnimatedSection>
      </section>
      <Divider fill="white" direction="down" />


      {/* Events & Programs Section */}
      {events.length > 0 && (
        <section className="alpha-section bg-white">
          <Carousel
            items={events}
            renderItem={(event) => (
              <EventCard {...event} url={`/events/${event.slug}`} className="flex-shrink-0 group" variant="scheme2" />
            )}
            title="Events & programs"
            buttonText="View all Events"
            buttonHref="/events"
            variant="scheme3" // Change this to switch carousel color schemes: 'scheme1', 'scheme2', 'scheme3', or 'scheme4'
          />
        </section>
      )}
    </main>
  )
}
