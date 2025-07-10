"use client"

import React from "react";
import { getCurrentCampuses, getUpcomingCampuses, type CampusMetadata } from "@/utils/campuses";
import { campuses } from "@/content/campuses";
import LocationCard from "@/components/features/cards/location-card";
import MainHeading from "@/components/layout/headings/main-heading";
import CampusMap from "@/components/features/content-blocks/CampusMap";
import Carousel from "@/components/ui/carousel";
import Divider from "@/components/layout/divider";
import { Button } from "@/components/ui/button";


export default function LocationsPage() {
  const [currentCampuses, setCurrentCampuses] = React.useState<CampusMetadata[]>([]);
  const [upcomingCampuses, setUpcomingCampuses] = React.useState<CampusMetadata[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredCampuses = searchQuery.trim() === "" ? [] : campuses.filter((campus) =>
    campus.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    campus.stateCode.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
    campus.address.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

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
      actions={
        <div className="field-wrapper mt-8 w-[400px]">
          <label className="xs-label">Find a campus near you</label>
          <input 
            type="search" 
            placeholder="Enter your city or state" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      }
      >Alpha School Campuses
      </MainHeading>
      <div className="alpha-section">
        <div className="two-column-flex">
          <div className="tag-filled !bg-[var(--color-sky-blue)] !text-[var(--color-navy-blue)]">Alpha School</div>
          <h2>Campus Name</h2>
        </div>
        <div>
          {searchQuery.trim() !== "" && (
            <>
                              {filteredCampuses.length > 0 ? (
                  filteredCampuses.map((campus) => (
                    <Button key={campus.name} className="centered-icon-text justify-between" variant="outline"radius="small">
                      {campus.name}, {campus.stateCode}<span className="material-icons-outlined">chevron_right</span>
                    </Button>
                  ))
              ) : (
                <div>No campuses found in {searchQuery}</div>
              )}
            </>
          )}


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