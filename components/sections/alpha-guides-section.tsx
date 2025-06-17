"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { guides } from "@/content/guides"
import BenefitCard from "@/components/features/benefit-card"
import SectionHeading from "@/components/features/section-heading"
import Carousel from "@/components/features/carousel"
import GuideCard from "@/components/features/guide-card"

const benefits = [
  {
    title: "GUIDANCE",
    description: "Adults, whether teachers or parents, become 'Guides,' shifting the traditional teacher-student relationship to offer motivational and emotional support."
  },
  {
    title: "SUPPORT",
    description: "Assist students with AI-powered learning, help them develop life skills, and pursue their passions."
  },
  {
    title: "MOTIVATION",
    description: "We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning."
  }
];

type Guide = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function AlphaGuidesSection() {
  return (
    <section className="alpha-section bg-white">
      <SectionHeading 
        title="The Alpha Guides"
        description="At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to supporting students' emotional and motivational needs and teaching life skills. This impactful transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners."
        buttonText="Explore our program"
        buttonHref="/the-program"
      />
      
      {/* Light Blue Info Block - Commitments Style */}
      <BenefitCard 
        benefits={benefits}
        className="bg-[var(--color-primary-light)] mb-[var(--space-xl)] [&>div>div>span]:bg-[var(--color-primary)] [&>div>h3]:text-[var(--color-primary)] [&>div>p]:text-[var(--color-text-main)]"
      />
      
      <Carousel
        items={guides}
        renderItem={(guide) => (
          <GuideCard {...guide} className="px-2 max-w-[340px] flex-shrink-0 group text-black" />
        )}
        visibleCards={3.5}
        className="w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] relative bg-[var(--color-primary)]"
        title="Meet our Guides"
        titleClassName="text-[var(--color-primary-light)]"
        buttonText="View all Guides"
        buttonHref="/guides"
        buttonVariant="lightBlue"
        navigationDotsColor={{
          active: "bg-[var(--color-primary-light)]",
          inactive: "bg-[var(--color-primary-light)] opacity-30"
        }}
        navigationArrowsColor={{
          background: "bg-[var(--color-primary-light)]",
          icon: "var(--color-primary)"
        }}
      />
    </section>
  )
}
