"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export interface EventCardProps {
  url: string
  image: {
    src: string
    alt?: string
  }
  date?: string // e.g. "Oct 16, 2025 at 9:30 AM"
  dates?: Array<{
    id: string
    title: string
    date: string
    time: string
    ageRange?: string
    price?: string
    soldOut?: boolean
    description?: string
  }>
  locationTag: string // e.g. "ALPHA MIAMI"
  category: string // e.g. "SHOWCASE"
  title: string
  address: string // e.g. "8000 SW 56th St, Miami, FL 33155"
  className?: string
  buttonClassName?: string
  variant?: 'scheme1' | 'scheme2' | 'scheme3'
}

export default function EventCard({
  url,
  image,
  date,
  dates,
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
      filledTagBg: '!bg-[var(--color-dark-green)]',
      filledTagText: '!text-[var(--color-light-green)]',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-dark-green)]',
      outlineTagBorder: 'border-[var(--color-dark-green)]'
    },
    scheme3: {
      card: 'bg-[var(--color-sky-blue)]',
      title: 'text-[var(--color-primary)]',
      text: 'text-[var(--color-primary)]',
      button: 'bg-[var(--color-primary)]',
      buttonText: 'text-white',
      filledTagBg: '!bg-[var(--color-primary)]',
      filledTagText: '!text-white',
      outlineTagBg: 'bg-transparent',
      outlineTagText: 'text-[var(--color-primary)]',
      outlineTagBorder: 'border-[var(--color-primary)]'
    }
  }

  const styles = variantStyles[variant]

  return (
    <Card className={`${styles.card} rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col border-0 shadow-none w-full max-w-[340px] h-[500px] group ${className}`}>
      {/* 1. Image */}
      <Link href={url} className="w-full h-[200px] rounded-[var(--radius-sm)] overflow-hidden mb-[var(--space-md)] block relative">
        <Image
          src={image.src}
          alt={image.alt || title}
          fill
          className="object-cover transition-transform duration-300 scale-105 group-hover:scale-100"
        />
      </Link>
      
      {/* 2. Content wrapper */}
      <div className="flex-1 flex flex-col gap-y-2 h-full">
        <div className="flex gap-2 mb-2">
          <span className={`tag-filled ${styles.filledTagBg} ${styles.filledTagText}`}>{locationTag}</span>
          <span className={`tag-outline ${styles.outlineTagBg} ${styles.outlineTagText} ${styles.outlineTagBorder}`}>{category}</span>
        </div>
        <Link href={url}>
          <h3 className={`heading-style-h5 ${styles.title}`}>{title}</h3>
        </Link>
        {dates && dates.length > 0 ? (
          // Show multiple dates - only available ones
          <div className={`${styles.text} text-sm space-y-1`}>
            {dates.filter(dateInfo => !dateInfo.soldOut).map((dateInfo, index) => (
              <div key={dateInfo.id} className="flex items-center gap-1">
                <span className="material-icons-outlined">event</span>
                <span>{dateInfo.date}</span>
              </div>
            ))}
          </div>
        ) : (
          // Show single date
          <div className={`${styles.text} text-sm flex items-center gap-1`}>
            <span className="material-icons-outlined">event</span>
            <span>{date}</span>
          </div>
        )}
        <div className={`${styles.text} text-sm flex items-top gap-1`}>
          <span className="material-icons-outlined">location_on</span>
          <span>{address}</span>
        </div>
      </div>
      
      {/* 3. Button */}
      <Button href={url} className={`centered-text-icon w-full mt-[var(--space-sm)] ${styles.button} ${styles.buttonText} ${buttonClassName}`}>
        Register now<span className="material-icons-outlined">arrow_forward</span>
      </Button>
    </Card>
  )
} 