"use client"

import GuideCard from "@/components/features/cards/guide-card"
import { guides } from "@/content/guides"
import MainHeading from "@/components/layout/headings/main-heading"
import { Button } from "@/components/ui/button"

export default function GuidesPage() {
  // Filter guides by location
  const austinGuides = guides.filter(guide => guide.location === "Austin")
  const brownsvilleGuides = guides.filter(guide => guide.location === "Brownsville")

  return (
    <main>
      <MainHeading variant="blue" description="At Alpha School, teachers become 'Guides,' shifting from their traditional roles to mentoring and motivating learners. With AI-powered support, they focus on emotional growth, life skills, and fostering a passion for learning—giving students the time and freedom to thrive.">Meet Our Guides</MainHeading>
      <section className="alpha-section">
       
        
        <div className="flex flex-col items-center w-full rounded-[var(--radius-lg)] bg-[var(--color-bg-muted)] py-12">
          <h3 className="section-headline mb-8">Austin</h3>
          <Button href="/austin" size="small" className="mb-[var(--space-lg)] centered-icon-text bg-[var(--color-navy-blue)] text-white">Discover Alpha Austin<span className="material-icons-outlined">arrow_forward</span></Button>
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto px-4">
            {austinGuides.map((guide, idx) => (
              <GuideCard
                key={idx}
                image={guide.image}
                name={guide.name}
                role={guide.role}
                bio={guide.bio}
                className="min-w-[286px] flex-1 max-w-[320px]"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-[var(--space-2xl)] rounded-[var(--radius-lg)] bg-[var(--color-bg-muted)] py-12">
          <h3 className="section-headline mb-8">Brownsville</h3>
          <Button href="/brownsville" size="small" className="mb-[var(--space-lg)] centered-icon-text bg-[var(--color-dark-green)] text-white">Discover Alpha Brownsville<span className="material-icons-outlined">arrow_forward</span></Button>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto px-4">
            {brownsvilleGuides.map((guide, idx) => (
              <GuideCard
                key={idx}
                image={guide.image}
                name={guide.name}
                role={guide.role}
                bio={guide.bio}
                className="min-w-[286px] flex-1 max-w-[320px]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 