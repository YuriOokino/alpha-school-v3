"use client"

import GuideCard from "@/components/features/guide-card"
import { guides } from "@/content/guides"
import WhatsNextSection from "@/components/sections/whats-next-section"

export default function GuidesPage() {
  return (
    <main>
      <section className="alpha-section">
        <h1 className="section-headline text-center mb-[var(--space-md)]">Meet Our Guides</h1>
        <p className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-[var(--space-lg)]">
          At Alpha School, teachers become 'Guides,' shifting from their traditional roles to mentoring and motivating learners. With AI-powered support, they focus on emotional growth, life skills, and fostering a passion for learning—giving students the time and freedom to thrive.
        </p>
        <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold">Austin</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
            {guides.map((guide, idx) => (
              <GuideCard
                key={idx}
                image={guide.image}
                name={guide.name}
                role={guide.role}
                bio={guide.bio}
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative mt-[var(--space-lg)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold">Brownsville</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
            {guides.map((guide, idx) => (
              <GuideCard
                key={`duplicate-${idx}`}
                image={guide.image}
                name={guide.name}
                role={guide.role}
                bio={guide.bio}
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  )
} 