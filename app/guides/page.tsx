"use client"

import GuideCard from "@/components/features/cards/guide-card"
import { guides } from "@/content/guides"
import MainHeading from "@/components/layout/headings/main-heading"
import Carousel from "@/components/ui/carousel"

export default function GuidesPage() {
  // Filter guides by location
  const austinGuides = guides.filter(guide => guide.location === "Austin")
  const brownsvilleGuides = guides.filter(guide => guide.location === "Brownsville")

  return (
    <main>
      <MainHeading variant="blue" description="At Alpha School, teachers become 'Guides,' shifting from their traditional roles to mentoring and motivating learners. With AI-powered support, they focus on emotional growth, life skills, and fostering a passion for learning—giving students the time and freedom to thrive."
      tagline="Alpha guides"
      taglineVariant="blue"
      
      >Meet Our Guides</MainHeading>
      <section className="alpha-section">
        
        <Carousel
          items={austinGuides}
          renderItem={(guide, idx) => (
            <GuideCard
              key={idx}
              image={guide.image}
              name={guide.name}
              role={guide.role}
              bio={guide.bio}
              className="min-w-[286px] flex-1 max-w-[320px]"
            />
          )}
          title="Austin"
          buttonText="Discover Alpha Austin"
          buttonHref="/austin"
          buttonVariant="navyBlue"
          visibleCards={3.9}
          className="bg-[var(--color-bg-muted)] mb-[var(--space-2xl)]"
          navigationDotsColor={{
            active: "bg-[var(--color-navy-blue)]",
            inactive: "bg-[var(--color-navy-blue)] opacity-30"
          }}
          navigationArrowsColor={{
            background: "bg-[var(--color-navy-blue)]",
            icon: "var(--color-sky-blue)"
          }}
        />

        <Carousel
          items={brownsvilleGuides}
          renderItem={(guide, idx) => (
            <GuideCard
              key={idx}
              image={guide.image}
              name={guide.name}
              role={guide.role}
              bio={guide.bio}
              className="min-w-[286px] flex-1 max-w-[320px]"
            />
          )}
          title="Brownsville"
          buttonText="Discover Alpha Brownsville"
          buttonHref="/brownsville"
          buttonVariant="navyBlue"
          visibleCards={3.9}
          className="bg-[var(--color-bg-muted)]"
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
    </main>
  )
} 