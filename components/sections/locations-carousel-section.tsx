"use client"

import React from "react"
import Carousel from "@/components/features/carousel"
import LocationCard from "@/components/features/location-card"
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
        className="w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] relative bg-[var(--color-warm-dark)]"
        title="Alpha New Locations"
        titleClassName="text-[var(--color-warm)]"
        buttonText="View all Locations"
        buttonHref="/locations"
        buttonVariant="pink"
        navigationDotsColor={{
          active: "bg-[var(--color-warm)]",
          inactive: "bg-[var(--color-warm)] opacity-30"
        }}
        navigationArrowsColor={{
          background: "bg-[var(--color-warm)]",
          icon: "var(--color-warm-dark)"
        }}
      />
    </section>
  )
} 