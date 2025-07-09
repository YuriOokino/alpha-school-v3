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
import Divider from "@/components/layout/divider"
import HeroSection from "@/components/homepage-sections/hero-section"

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
