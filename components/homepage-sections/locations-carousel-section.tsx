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
    <section className="alpha-section bg-white">
      <Carousel
        items={campuses}
        renderItem={(campus) => (
          <LocationCard
            {...campus}
            variant="scheme1"
          />
        )}
        visibleCards={3.5}
        className="bg-[var(--color-bg-muted)]"
        title="Alpha New Locations"
        buttonText="View all Locations"
        buttonHref="/locations"
        buttonVariant="default"
        navigationDotsColor={{
          active: "bg-[var(--color-navy-blue)]",
          inactive: "bg-[var(--color-navy-blue)] opacity-30"
        }}
        navigationArrowsColor={{
          background: "bg-[var(--color-navy-blue)]",
          icon: "var(--color-sky-blue)"
        }}
      />
    </section>
  )
} 