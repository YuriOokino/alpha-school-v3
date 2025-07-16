"use client"

import { useState, useEffect } from "react"

import EventCard from "@/components/features/cards/event-card"
import MainHeading from "@/components/layout/headings/main-heading"

export default function EventsPage() {
  const [school, setSchool] = useState("");
  const [eventType, setEventType] = useState("");
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };
    
    loadEvents();
  }, []);

  // Get unique schools and event types
  const schools = Array.from(new Set(events.map(e => e.locationTag)));
  const eventTypes = Array.from(new Set(events.map(e => e.category)));

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSchool = !school || event.locationTag === school;
    const matchesType = !eventType || event.category === eventType;
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      !search ||
      event.title?.toLowerCase().includes(searchTerm) ||
      event.locationTag?.toLowerCase().includes(searchTerm) ||
      event.category?.toLowerCase().includes(searchTerm) ||
      event.address?.toLowerCase().includes(searchTerm) ||
      event.date?.toLowerCase().includes(searchTerm) ||
      event.id?.toLowerCase().includes(searchTerm);
    return matchesSchool && matchesType && matchesSearch;
  });

  return (
    <main>
      <MainHeading variant="blue" tagline="Events" taglineVariant="blue"description="View all our upcoming events, summer camps and afterschool programs below!">
        Programs and Events
      </MainHeading>
      <section className="alpha-section">
       
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-[var(--space-lg)]">
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Filter by School</label>
              <select
                className="field-input"
                value={school}
                onChange={e => setSchool(e.target.value)}
              >
                <option value="">All Schools</option>
                {schools.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Filter by Event Type</label>
              <select
                className="field-input"
                value={eventType}
                onChange={e => setEventType(e.target.value)}
              >
                <option value="">All Event Types</option>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Search Events</label>
              <input
                type="text"
                className="field-input"
                placeholder="Search events..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div
            className="inline-grid gap-[var(--space-md)] mx-auto"
            style={{ gridTemplateColumns: 'repeat(3, auto)' }}
          >
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                url={`/events/${event.slug}`}
                image={event.image}
                date={event.date}
                locationTag={event.locationTag}
                category={event.category}
                title={event.title}
                address={event.address}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 