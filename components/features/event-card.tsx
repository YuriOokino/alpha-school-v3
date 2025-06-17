"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  location: string // e.g. "Austin Campus"
  address: string // e.g. "8000 SW 56th St, Miami, FL 33155"
  description: string
  buttonText: string
}

export default function EventCard({
  url,
  image,
  date,
  locationTag,
  category,
  title,
  location,
  address,
  description,
  buttonText
}: EventCardProps) {
  return (
    <div className="bg-[var(--color-primary-light)] rounded-2xl flex flex-col overflow-hidden">
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={image.src}
          alt={image.alt || title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 mb-4">
          <span className="tag-blue">{locationTag}</span>
          <span className="tag-blue">{category}</span>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">{title}</h2>
        <h3 className="text-lg font-semibold mb-1">{location}</h3>
        <div className="flex items-center gap-2 mb-2 font-medium">
          <Calendar className="h-5 w-5" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 mb-4 font-medium">
          <MapPin className="h-5 w-5" />
          <span>{address}</span>
        </div>
        <p className="mb-4 text-[var(--color-text-main)]">{description}</p>
        <Link href={url} passHref legacyBehavior>
          <a className="block">
            <Button variant="default" className="w-full">
              {buttonText}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
} 