"use client"

import React, { useMemo } from "react"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/features/cards/event-card"

interface Event {
  slug: string
  image: {
    src: string
    alt?: string
  }
  date?: string
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
  locationTag: string
  category: string
  title: string
  address: string
}

interface EventListProps {
  events: Event[]
  campusName: string
  className?: string
}

export default function EventList({ events, campusName, className = "" }: EventListProps) {
  // Filter events for this campus
  const campusEvents = useMemo(() => {
    return events.filter(e => 
      e.locationTag?.toLowerCase().includes(campusName.toLowerCase()) || 
      e.title?.toLowerCase().includes(campusName.toLowerCase()) || 
      e.address?.toLowerCase().includes(campusName.toLowerCase())
    )
  }, [events, campusName])

  if (campusEvents.length === 0) {
    return (
      <section className={`alpha-section bg-white ${className}`}>
        <h2 className="heading-style-h2 text-center mb-4">Events & Programs</h2>
        <p className="body-text text-center mb-8 max-w-2xl mx-auto">
          Explore our showcases to tour the campus, and enjoy our camps and afterschool programs offering exciting, hands-on experiences for kids.
        </p>
        <div className="text-center">
          <p className="body-text mb-4">No events currently scheduled for {campusName}.</p>
          <Button variant="default" size="small" className="centered-icon-text" href="/events">
            View more events<span className="material-icons-outlined">arrow_circle_right</span>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className={`alpha-section bg-white ${className}`}>
      <h2 className="heading-style-h2 text-center mb-4 text-[var(--color-navy-blue)]">Events & Programs</h2>
      <p className="body-text text-center mb-8 max-w-2xl mx-auto">
        Explore our showcases to tour the campus, and enjoy our camps and afterschool programs offering exciting, hands-on experiences for kids.
      </p>

      {/* View All Events Button */}
      <div className="text-center mb-8">
        <Button variant="navyBlue" size="small" className="centered-icon-text" href="/events">
          View all events<span className="material-icons-outlined">arrow_circle_right</span>
        </Button>
      </div>

      {/* Events Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {campusEvents.map((event) => (
          <EventCard 
            key={event.slug}
            {...event}
            url={`/events/${event.slug}`}
            variant="scheme1"
          />
        ))}
      </div>
    </section>
  )
}
