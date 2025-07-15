"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SectionHeadingProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export default function SectionHeading({ title, description, buttonText, buttonHref }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-[50rem] mx-auto mb-[var(--space-xl)]">
      <h2 className="section-headline mb-4 text-[var(--color-navy-blue)]">{title}</h2>
      <p className="mb-4">{description}</p>
      {buttonText && buttonHref && (
        <Button href={buttonHref} size="small" className="mx-auto bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]">
          {buttonText}
        </Button>
      )}
    </div>
  )
} 