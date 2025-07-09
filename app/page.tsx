"use client";
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from "react"

import { getUpcomingCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"
import StatsSection from "@/components/homepage-sections/stats-section"
import CommitmentsSection from "@/components/homepage-sections/commitments-section"
import EventCard from "@/components/features/cards/event-card"
import eventsData from "@/content/events/events.json"
import Carousel from "@/components/ui/carousel"
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos"
import LocationsCarouselSection from "@/components/homepage-sections/locations-carousel-section"
import TestimonialsSection from "@/components/homepage-sections/testimonials-section"
import AlphaGuidesSection from "@/components/homepage-sections/alpha-guides-section"
import KidsNeedSection from "@/components/homepage-sections/kids-need-section"
import VideoPlayer from "@/components/ui/video-player"

export default function Home() {
  const [campuses, setCampuses] = useState<CampusMetadata[]>([]);
  const events = eventsData.events;

  useEffect(() => {
    const loadCampuses = async () => {
      const upcomingCampuses = await getUpcomingCampuses();
      setCampuses(upcomingCampuses);
    };
    loadCampuses();
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
    <main className="min-h-screen">
     

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-10 text-center text-[var(--color-navy-blue)]">
          <h1 className="section-headline mb-6 max-w-4xl mx-auto">
          Crush academics. Build life skills. Love school.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Campuses in Austin, Brownsville, and Miami—and seven new locations launching soon.
          </p>
          <Button variant="default" href="/learn-more">Learn More</Button>
        </div>
        
 {/* Hero */}
 <div className="pt-20 pb-16 rounded-b-[var(--radius-lg)] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 left-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100%', minWidth: '100%' }}
          src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
        />
        {/* Featured In Section */}
        <div className="relative z-10 container mx-auto px-4 pt-4 pb-16">
          <p className="text-center text-sm uppercase tracking-wider mb-8 text-[var(--color-muted)]">As Featured In</p>
          <FeaturedLogos />
        </div>
  </div>


      <CommitmentsSection />

      {/* Kids Need Section */}
      <KidsNeedSection />
      { /* Stats section */}

      <StatsSection />
      <LocationsCarouselSection />

      <TestimonialsSection />
      <AlphaGuidesSection />

      {/* Events & Programs Section */}
      {events.length > 0 && (
        <section className="alpha-section">
          <Carousel
            items={events}
            renderItem={(event) => (
              <EventCard {...event} url={`/events/${event.slug}`} className="max-w-[340px] flex-shrink-0 group" />
            )}
            title="Events & programs"
            visibleCards={4.5}
            className= "bg-[var(--color-bg-muted)]"
            buttonText="View all Events"
            buttonHref="/events"
            buttonVariant="default"
            navigationDotsColor={{
              active: "bg-[#000000]",
              inactive: "bg-[#000000] opacity-30"
            }}
            navigationArrowsColor={{
              background: "bg-[#ffffff]",
              icon: "#000000"
            }}
          />
        </section>
      )}
    </main>
  )
}
