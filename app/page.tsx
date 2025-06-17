"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommitmentCard from "@/components/features/commitment-card"
import React, { useState, useRef, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import MainHeading from "@/components/layout/main-heading"
import WhatsNextSection from "@/components/sections/whats-next-section"
import FeatureCard from "@/components/features/feature-card"
import SimpleCarousel from "@/components/features/simple-carousel"
import LocationCard from "@/components/features/location-card"
import SectionHeading from "@/components/features/section-heading"
import { getAllCampuses, getUpcomingCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"

// Import the new components at the top of the file
import TestimonialsSection from "@/components/sections/testimonials-section"
import AlphaGuidesSection from "@/components/sections/alpha-guides-section"
import CampusMapSection from "@/components/sections/CampusMapSection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/ui/carousel"
import HeroSection from "@/components/sections/hero-section"
import CommitmentsSection from "@/components/sections/commitments-section"
import KidsNeedSection from "@/components/sections/kids-need-section"
import { ArrowLeft, ArrowRight } from "lucide-react"
import LocationsCarouselSection from "@/components/sections/locations-carousel-section"

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
