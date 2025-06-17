import React from "react";
import { getCurrentCampuses, getUpcomingCampuses } from "@/utils/campuses";
import LocationCard from "@/components/features/location-card";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";

export default async function LocationsPage() {
  const currentCampuses = await getCurrentCampuses();
  const upcomingCampuses = await getUpcomingCampuses();

  return (
    <main className="min-h-screen">
      <MainHeading
      description="Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville).
Please select your desired campus location to find out more details."
      >Alpha School Campuses
      </MainHeading>
      <div className="alpha-section">
        <h2 className="mb-[var(--space-lg)]">Current Locations</h2>
        <div className="section-content bg-[var(--color-bg-muted)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentCampuses.map((campus) => (
              <LocationCard key={campus.name} {...campus} />
            ))}
          </div>
        </div>
      </div>
      <div className="alpha-section">
        <h2 className="mb-[var(--space-lg)]">Upcoming Locations</h2>
        <div className="section-content bg-[var(--color-bg-muted)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {upcomingCampuses.map((campus) => (
            <LocationCard key={campus.name} {...campus} />
          ))}
        </div>
        </div>
      </div>
        <WhatsNextSection />
    </main>
  );
} 