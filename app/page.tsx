"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommitmentCard from "@/components/features/content-blocks/commitment-card"
import React, { useState, useRef, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import FeatureCard from "@/components/features/content-blocks/feature-card"
import SimpleCarousel from "@/components/ui/simple-carousel"
import LocationCard from "@/components/features/cards/location-card"
import SectionHeading from "@/components/layout/headings/section-heading"
import { getAllCampuses, getUpcomingCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"

// Import the new components at the top of the file
import TestimonialsSection from "@/components/homepage-sections/testimonials-section"
import AlphaGuidesSection from "@/components/homepage-sections/alpha-guides-section"
import CampusMapSection from "@/components/homepage-sections/CampusMapSection"
import HeroSection from "@/components/homepage-sections/hero-section"
import CommitmentsSection from "@/components/homepage-sections/commitments-section"
import KidsNeedSection from "@/components/homepage-sections/kids-need-section"
import { ArrowLeft, ArrowRight } from "lucide-react"
import LocationsCarouselSection from "@/components/homepage-sections/locations-carousel-section"

export default function Home() {
  const [campuses, setCampuses] = useState<CampusMetadata[]>([]);

  useEffect(() => {
    const loadCampuses = async () => {
      const upcomingCampuses = await getUpcomingCampuses();
      setCampuses(upcomingCampuses);
    };
    loadCampuses();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CommitmentsSection />

      <KidsNeedSection />

      <LocationsCarouselSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Alpha Guides Section */}
      <AlphaGuidesSection />

      <CampusMapSection />

      {/* What's Next Section */}
      <WhatsNextSection />
    </main>
  )
}
