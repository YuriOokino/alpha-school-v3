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
        <div className="flex flex-col gap-[var(--space-4xl)]">
       
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
              variant="blue"
            />
          )}
          title="Austin"
          buttonText="Discover Alpha Austin"
          buttonHref="/austin"
          variant="scheme2"
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
              variant="green"
            />
          )}
          variant="scheme3"
          title="Brownsville"
          buttonText="Discover Alpha Brownsville"
          buttonHref="/brownsville"
          

          
        />
        </div>
      </section>
    </main>
  )
} 