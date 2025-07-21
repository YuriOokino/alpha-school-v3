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

        title="Alpha New Locations"
        buttonText="View all Locations"
        buttonHref="/locations"
        variant="scheme2" // Change this to switch carousel color schemes: 'scheme1', 'scheme2', or 'scheme3'
      />
    </section>
  )
} 