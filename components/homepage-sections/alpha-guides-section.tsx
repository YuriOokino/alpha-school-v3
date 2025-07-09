"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { guides } from "@/content/guides"
import BenefitCard from "@/components/features/content-blocks/benefit-card"
import SectionHeading from "@/components/layout/headings/section-heading"
import Carousel from "@/components/ui/carousel"
import GuideCard from "@/components/features/cards/guide-card"

const benefits = [
  {
    title: "GUIDANCE",
    description: "Adults, whether teachers or parents, become 'Guides', shifting the traditional teacher-student relationship to offer motivational and emotional support."
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
      <div className="two-column-flex mb-[var(--space-xl)]">
        <div>
        <h2 className="mb-4">More than Teachers: The Alpha Guides</h2>
        <Button variant="default" className="max-w-[200px]">Explore our program</Button>
      </div>
      <div>
        <p>At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to supporting students' emotional and motivational needs and teaching life skills. This impactful transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners.</p>
      </div>
      </div>
      
      <BenefitCard 
        benefits={benefits}
        className="bg-[var(--color-primary-light)] mb-[var(--space-xl)] [&>div>div>span]:bg-[var(--color-primary)] [&>div>h3]:text-[var(--color-primary)] [&>div>p]:text-[var(--color-text-main)]"
      />
      
      <Carousel
        items={guides}
        renderItem={(guide) => (
          <GuideCard {...guide} className="flex-shrink-0 group" />
        )}
        visibleCards={3.9}
        className="bg-[var(--color-bg-muted)]"
        title="Meet our Guides"
        buttonText="View all Guides"
        buttonHref="/guides"
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
