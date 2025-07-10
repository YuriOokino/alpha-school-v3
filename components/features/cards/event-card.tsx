"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export interface EventCardProps {
  url: string
  image: {
    src: string
    alt?: string
  }
  date: string // e.g. "Oct 16, 2025 at 9:30 AM"
  locationTag: string // e.g. "ALPHA MIAMI"
  category: string // e.g. "SHOWCASE"
  title: string
  address: string // e.g. "8000 SW 56th St, Miami, FL 33155"
  className?: string
  buttonClassName?: string
  variant?: 'scheme1' | 'scheme2'
}

export default function EventCard({
  url,
  image,
  date,
  locationTag,
  category,
  title,
  address,
  className = "",
  buttonClassName = "",
  variant = 'scheme1'
}: EventCardProps) {
  
  // Variant styles
  const variantStyles = {
    scheme1: {
      card: 'bg-[var(--color-sky-blue)]',
      title: 'text-[var(--color-navy-blue)]',
      text: 'text-[var(--color-navy-blue)]',
      button: 'bg-[var(--color-navy-blue)]',
      buttonText: 'text-white',
      filledTagBg: '!bg-[var(--color-navy-blue)]',
      filledTagText: 'text-[var(--color-sky-blue)]',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-navy-blue)]',
      outlineTagBorder: 'border-[var(--color-navy-blue)]'
    },
    scheme2: {
      card: 'bg-[var(--color-light-green)]',
      title: 'text-[var(--color-dark-green)]',
      text: 'text-[var(--color-dark-green)]',
      button: 'bg-[var(--color-dark-green)]',
      buttonText: 'text-[var(--color-light-green)]',
      filledTagBg: 'bg-[var(--color-dark-green)]',
      filledTagText: 'text-[var(--color-light-green)]',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-dark-green)]',
      outlineTagBorder: 'border-[var(--color-dark-green)]'
    }
  }

  const styles = variantStyles[variant]

  return (
    <Card className={`${styles.card} rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col justify-between border-0 shadow-none w-full max-w-[320px] group ${className}`}>
      <Link href={url} className="w-full h-[200px] rounded-[var(--radius-sm)] overflow-hidden mb-[var(--space-md)] block relative">
        <Image
          src={image.src}
          alt={image.alt || title}
          fill
          className="object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-y-2">
        <div className="flex gap-2">
          <span className={`tag-filled ${styles.filledTagBg} ${styles.filledTagText}`}>{locationTag}</span>
          <span className={`tag-outline ${styles.outlineTagBg} ${styles.outlineTagText} ${styles.outlineTagBorder}`}>{category}</span>
        </div>
        <Link href={url}>
          <h3 className={`heading-style-h5 ${styles.title}`}>{title}</h3>
        </Link>
        <div className={`${styles.text} text-sm flex items-center gap-1`}>
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className={`${styles.text} text-sm flex items-top gap-1`}>
          <MapPin className="h-4 w-4" />
          <span>{address}</span>
        </div>
      </div>
      <Button href={url} className={`w-full mt-[var(--space-sm)] ${styles.button} ${styles.buttonText} ${buttonClassName}`}>
        Register now<span className="material-icons-outlined">arrow_forward</span>
      </Button>
    </Card>
  )
} 