"use client"

import { useState } from "react"
import WhatsNextSection from "@/components/sections/whats-next-section"
import EventCard from "@/components/features/event-card"
import { events } from "@/content/events"

export default function EventsPage() {
  const [school, setSchool] = useState("");
  const [eventType, setEventType] = useState("");
  const [search, setSearch] = useState("");

  // Get unique schools and event types
  const schools = Array.from(new Set(events.map(e => e.locationTag)));
  const eventTypes = Array.from(new Set(events.map(e => e.category)));

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSchool = !school || event.locationTag === school;
    const matchesType = !eventType || event.category === eventType;
    const matchesSearch =
      !search ||
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    return matchesSchool && matchesType && matchesSearch;
  });

  return (
    <main>
      <section className="alpha-section">
        <h1 className="section-headline text-center mb-[var(--space-md)]">Programs and Events</h1>
        <p className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-[var(--space-lg)]">
        View all our upcoming events, summer camps and afterschool programs below!
        </p>
        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[var(--space-lg)]">
          <div className="relative">
            <select
              className="border rounded px-3 py-2 text-sm appearance-none pr-8 w-full"
              value={school}
              onChange={e => setSchool(e.target.value)}
            >
              <option value="">All Schools</option>
              {schools.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select
              className="border rounded px-3 py-2 text-sm appearance-none pr-8 w-full"
              value={eventType}
              onChange={e => setEventType(e.target.value)}
            >
              <option value="">All Event Types</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.3334C9.77498 16.333 11.4988 15.7388 12.897 14.6454L17.293 19.0414L18.707 17.6274L14.311 13.2314C15.405 11.833 15.9996 10.1088 16 8.33337C16 3.92237 12.411 0.333374 8 0.333374C3.589 0.333374 0 3.92237 0 8.33337C0 12.7444 3.589 16.3334 8 16.3334ZM8 2.33337C11.309 2.33337 14 5.02437 14 8.33337C14 11.6424 11.309 14.3334 8 14.3334C4.691 14.3334 2 11.6424 2 8.33337C2 5.02437 4.691 2.33337 8 2.33337Z" fill="black"/>
              </svg>
            </span>
            <input
              type="text"
              className="border rounded px-3 py-2 text-sm w-full pl-10"
              placeholder="Search events..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
          {filteredEvents.map((event, idx) => (
            <EventCard
              key={idx}
              url={event.url}
              image={event.image}
              date={event.date}
              locationTag={event.locationTag}
              category={event.category}
              title={event.title}
              location={event.location}
              address={event.address}
              description={event.description}
              buttonText={event.buttonText}
            />
          ))}
        </div>
      </section>
      <WhatsNextSection />
    </main>
  )
} 