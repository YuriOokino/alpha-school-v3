import React from "react"
import Link from "next/link"

interface Benefit {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
}

interface BenefitCardProps {
  benefits: Benefit[]
  className?: string
}

export default function BenefitCard({ benefits, className = "" }: BenefitCardProps) {
  return (
    <div className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-lg)] justify-between items-stretch ${className}`}>
      {benefits.map((benefit, index) => (
        <div key={index} className="flex-1 flex flex-col items-start bg-transparent">
          <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
            <span className="block w-5 h-5 rounded-full" />
            <span className="block w-5 h-5 rounded-full" />
            <span className="block w-5 h-5 rounded-full" />
            <span className="block w-5 h-5 rounded-full" />
          </div>
          <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
          <p className="mb-4">{benefit.description}</p>
          {benefit.buttonText && benefit.buttonLink && (
            <Link 
              href={benefit.buttonLink}
              className="mt-auto px-6 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold hover:opacity-90 transition-opacity"
            >
              {benefit.buttonText}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
} 