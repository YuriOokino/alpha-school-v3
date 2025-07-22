"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SectionHeadingProps {
  title: string
  description: string | React.ReactNode
  buttonText?: string
  buttonHref?: string
  className?: string
  buttonVariant?: 'default' | 'outline' | 'link' | 'primary' | 'lightBlue' | 'navyBlue' | 'darkGreen' | 'filter' | 'filterOutline' | 'alternate' | 'underline' | 'disabled'
}

export default function SectionHeading({ title, description, buttonText, buttonHref, className, buttonVariant }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-[50rem] mx-auto mb-[var(--space-xl)] ${className || ''}`}>
      <h2 className={'section-headline mb-4'}>{title}</h2>
      <p className="mb-4 text-black">{description}</p>
      {buttonText && buttonHref && (
        <Button href={buttonHref} size="small" variant={buttonVariant} className="mx-auto centered-icon-text">
          {buttonText}
          <span className="material-icons-outlined ml-1">arrow_circle_right</span></Button>
      )}
    </div>
  )
} 