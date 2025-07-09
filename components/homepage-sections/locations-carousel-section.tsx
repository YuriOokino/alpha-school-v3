"use client"

import React from "react"
import Carousel from "@/components/ui/carousel"
import LocationCard from "@/components/features/cards/location-card"
import { getAllCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"

export default function LocationsCarouselSection() {
  const [campuses, setCampuses] = React.useState<CampusMetadata[]>([]);

  React.useEffect(() => {
    const loadCampuses = async () => {
      const allCampuses = await getAllCampuses();
      const upcomingCampuses = allCampuses.filter(campus => campus.status === 'upcoming');
      setCampuses(upcomingCampuses);
    };
    loadCampuses();
  }, []);

  return (
    <section className="alpha-section">
      <Carousel
        items={campuses}
        renderItem={(campus) => (
          <LocationCard
            {...campus}
            className="max-w-[340px] flex-shrink-0 group text-black"
          />
        )}
        visibleCards={3.5}
        className="w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] relative bg-[var(--color-bg-muted)]"
        title="Alpha New Locations"
        buttonText="View all Locations"
        buttonHref="/locations"
        buttonVariant="default"
        navigationDotsColor={{
          active: "bg-[var(--color-primary)]",
          inactive: "bg-[#000000] opacity-30"
        }}
        navigationArrowsColor={{
          background: "bg-[var(--color-primary)]",
          icon: "#ffffff"
        }}
      />
    </section>
  )
} 