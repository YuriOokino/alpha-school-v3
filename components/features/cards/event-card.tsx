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
}: EventCardProps) {
  return (
    <Card className={`scheme-light rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col border-0 shadow-none max-w-[340px] flex-shrink-0 group ${className}`} style={{ height: 480, width: 340 }}>
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
          <span className="tag-primary">{locationTag}</span>
          <span className="tag-outline">{category}</span>
        </div>
        <Link href={url}>
          <h3 className="heading-style-h5">{title}</h3>
        </Link>
        <div className="text-[var(--color-primary)] text-sm flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="text-[var(--color-primary)] text-sm flex items-top gap-1">
          <MapPin className="h-4 w-4" />
          <span>{address}</span>
        </div>
      </div>
      <Button href={url} className="centered-icon-text mt-4">
        Register now<span className="material-icons-outlined">arrow_forward</span>
      </Button>
    </Card>
  )
} 