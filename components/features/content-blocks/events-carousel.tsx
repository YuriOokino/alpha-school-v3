"use client"

import React from "react"
import Carousel from "@/components/ui/carousel"
import EventCard from "@/components/features/cards/event-card"

interface EventsCarouselProps {
  events: any[]
  locationFilter?: string
  title?: string
  className?: string
  variant?: 'scheme1' | 'scheme2' | 'scheme3' | 'scheme4'
  navigationDotsColor?: {
    active: string
    inactive: string
  }
  navigationArrowsColor?: {
    background: string
    icon: string
  }
}

export default function EventsCarousel({ 
  events, 
  locationFilter, 
  title,
  className = "bg-transparent p-0",
  variant = "scheme1",
  navigationDotsColor,
  navigationArrowsColor
}: EventsCarouselProps) {
  const filteredEvents = locationFilter 
    ? events.filter(e => 
        e.locationTag?.toLowerCase().includes(locationFilter.toLowerCase()) || 
        e.title?.toLowerCase().includes(locationFilter.toLowerCase()) || 
        e.address?.toLowerCase().includes(locationFilter.toLowerCase())
      )
    : events
  
  return (
    <Carousel
      items={filteredEvents}
      renderItem={(event) => (
        <EventCard {...event} url={`/events/${event.slug}`} />
      )}
      visibleCards={3.75}
      className={className}
      title={title}
      variant={variant}
      navigationDotsColor={navigationDotsColor}
      navigationArrowsColor={navigationArrowsColor}
    />
  )
} 