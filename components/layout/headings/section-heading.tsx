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
      <h2 className="section-headline font-bold mb-6">{title}</h2>
      <p className="text-lg mb-8 text-[#111827]">{description}</p>
      {buttonText && buttonHref && (
        <Button href={buttonHref} className="mx-auto">
          {buttonText}
        </Button>
      )}
    </div>
  )
} 