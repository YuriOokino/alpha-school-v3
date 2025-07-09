"use client"

import React from "react";
import { getCurrentCampuses, getUpcomingCampuses, type CampusMetadata } from "@/utils/campuses";
import LocationCard from "@/components/features/cards/location-card";
import MainHeading from "@/components/layout/headings/main-heading";
import CampusMap from "@/components/features/content-blocks/CampusMap";
import Carousel from "@/components/ui/carousel";
import Divider from "@/components/layout/divider";


export default function LocationsPage() {
  const [currentCampuses, setCurrentCampuses] = React.useState<CampusMetadata[]>([]);
  const [upcomingCampuses, setUpcomingCampuses] = React.useState<CampusMetadata[]>([]);

  React.useEffect(() => {
    const loadCampuses = async () => {
      const current = await getCurrentCampuses();
      const upcoming = await getUpcomingCampuses();
      setCurrentCampuses(current);
      setUpcomingCampuses(upcoming);
    };
    loadCampuses();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-bg-muted)]">
      <MainHeading
      variant="blue"
      tagline="Locations"
      description="Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville).
Please select your desired campus location to find out more details."
      >Alpha School Campuses
      </MainHeading>
      <div className="flex flex-col justify-center">
        <div className="alpha-container  my-[var(--space-4xl)]">
          <div className="flex flex-col gap-4 max-w-[1000px] mx-auto p-12 bg-[var(--color-light-green)] rounded-[var(--radius-md)] p-[var(--space-md)]">
          <h2 className="heading-style-h3">Find the nearest Alpha School</h2>
        <input type="search" placeholder="Enter your zip code" className="w-full" />
        </div>
        </div>
      </div>

      <Divider fill="white" />
   

        <div className="alpha-section bg-white">
          <h2 className="heading-style-h3 mb-[var(--space-lg)] col-span-full">Current Locations</h2>
          <div className="grid gap-4 mb-[var(--space-xl)] mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, 320px)' }}>
            {currentCampuses.map((campus) => (
              <LocationCard
                key={campus.name}
                {...campus}
                className="w-[320px] bg-[var(--color-sky-blue)] flex-shrink-0 group text-black"
                tagClassName="!bg-[var(--color-navy-blue)] !text-white"
                tuitionClassName=""
              />
            ))}
        </div>
        <div className="alpha-section bg-white">
          <h2 className="heading-style-h3 mb-[var(--space-lg)] col-span-full">Upcoming Locations</h2>
          <div className="grid gap-4 mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, 320px)' }}>
            {upcomingCampuses.map((campus) => (
              <LocationCard
                key={campus.name}
                {...campus}
                buttonClassName="bg-[var(--color-dark-green)]"
                className="w-[320px] bg-[var(--color-light-green)] flex-shrink-0 group text-black"
                tagClassName="!bg-[var(--color-dark-green)] text-white"
                tuitionClassName=""
              />
            ))}
          </div>
        </div>
      </div>
    <CampusMap />
  </main>
);
} 