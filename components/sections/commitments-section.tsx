import BenefitCard from "@/components/features/benefit-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const commitments = [
  {
    title: "Love School",
    description: "Alpha students love school – it's engaging, inspiring, and built for them.",
    link: "/the-program#love-school"
  },
  {
    title: "Learn 2x in 2 Hours",
    description: "Alpha students learn twice as fast as their peers and rank in the top 1% nationwide.",
    link: "/the-program#learn-2x"
  },
  {
    title: "Learn Life Skills",
    description: "Alpha students spend afternoons developing life skills and exploring their personas.",
    link: "/the-program#lifeskills-workshops"
  }
];

export default function CommitmentsSection() {
  return (
    <section className="alpha-section bg-white">
      <h2 className="section-headline text-center text-[#111827] mb-[var(--space-lg)]">Alpha's 3 Commitments</h2>
      <div className="w-full bg-[var(--color-primary)] rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-lg)] justify-between items-stretch">
        {commitments.map((commitment, index) => (
          <div key={index} className="flex-1 flex flex-col items-start bg-transparent">
            <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
              <span className="block w-5 h-5 rounded-full bg-[var(--color-primary-light)]" />
              <span className="block w-5 h-5 rounded-full bg-[var(--color-primary-light)]" />
              <span className="block w-5 h-5 rounded-full bg-[var(--color-primary-light)]" />
              <span className="block w-5 h-5 rounded-full bg-[var(--color-primary-light)]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[var(--color-primary-light)]">{commitment.title}</h3>
            <p className="text-white mb-4">{commitment.description}</p>
            <Button variant="lightBlue" href={commitment.link} className="gap-2">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"/>
              </svg>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
} 