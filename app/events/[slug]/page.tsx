"use client"
import MediaHeading from "@/components/layout/headings/media-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState, useEffect } from "react"
import SectionHeading from "@/components/layout/headings/section-heading"
import { useParams } from "next/navigation"
import Divider from "@/components/layout/divider"
import Carousel from "@/components/ui/carousel"
import EventCard from "@/components/features/cards/event-card"

interface Event {
  id: string
  title: string
  date: string
  time: string
  locationTag: string
  category: string
  address: string
  image: {
    src: string
    alt?: string
  }
  slug: string
  registrationType: 'internal' | 'external'
  registrationUrl: string
  descriptionTitle?: string
  description?: string
}

export default function EventPage() {
  const params = useParams()
  const slug = params.slug as string
  const [eventData, setEventData] = useState<Event | null>(null)
  const [allEvents, setAllEvents] = useState<Event[]>([])
  
  // Load event data
  useEffect(() => {
    const loadEventData = async () => {
      try {
        const response = await fetch(`/api/events/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setEventData(data)
        }
      } catch (error) {
        console.error('Error loading event data:', error)
      }
    }
    
    const loadAllEvents = async () => {
      try {
        const response = await fetch('/api/events')
        if (response.ok) {
          const data = await response.json()
          setAllEvents(data)
        }
      } catch (error) {
        console.error('Error loading all events:', error)
      }
    }
    
    if (slug) {
      loadEventData()
      loadAllEvents()
    }
  }, [slug])
  
  // Form state
  const [parent1FirstName, setParent1FirstName] = useState("");
  const [parent1LastName, setParent1LastName] = useState("");
  const [parent1Email, setParent1Email] = useState("");
  const [parent1Phone, setParent1Phone] = useState("");
  const [parent1Relationship, setParent1Relationship] = useState("");
  const [parent2FirstName, setParent2FirstName] = useState("");
  const [parent2LastName, setParent2LastName] = useState("");
  const [parent2Email, setParent2Email] = useState("");
  const [parent2Phone, setParent2Phone] = useState("");
  const [parent2Relationship, setParent2Relationship] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [child1Name, setChild1Name] = useState("");
  const [child1Age, setChild1Age] = useState("");
  const [child2Name, setChild2Name] = useState("");
  const [child2Age, setChild2Age] = useState("");
  const [additionalChildren, setAdditionalChildren] = useState("");
  const [allergies, setAllergies] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [consent, setConsent] = useState(false);

  const relationshipOptions = [
    "Parent",
    "Guardian",
    "Grandparent",
    "Aunt/Uncle",
    "Other Family Member",
    "Legal Guardian",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ 
      parent1FirstName, parent1LastName, parent1Email, parent1Phone, parent1Relationship,
      parent2FirstName, parent2LastName, parent2Email, parent2Phone, parent2Relationship,
      address, city, state, zip, child1Name, child1Age, child2Name, child2Age, 
      additionalChildren, allergies, howHeard, consent 
    });
  };

  return (
    <main className="bg-[var(--color-bg-muted)]">
      <MediaHeading
        variant="blue"
        tagline={eventData?.category || "Event"}
        actions={<Button href="#register" variant="lightBlue" className="rounded-[var(--radius-pill)]">Register<span className="material-icons-outlined down-45">arrow_forward</span></Button>}
        media={
          <img src={eventData?.image?.src} alt={eventData?.image?.alt || "Event Image"} />
        }
      >
        {eventData?.title || "Event"}
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">calendar_today</span>{eventData?.date || "Date TBD"}</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">schedule</span>{eventData?.time || "Time TBD"}</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">location_on</span>{eventData?.address || "Location TBD"}</p>
      </MediaHeading>

      {/* Section 1 - Two Column Layout */}
      <section className="alpha-section ">
        <div className="two-column-flex">
          {/* Left Column - Description Title */}
          <div>
            <h2 className="heading-style-h3 mb-[var(--space-sm)]">
              A look inside Alpha's groundbreaking model
            </h2>
          </div>
          
          {/* Right Column - Description */}
          <div>
            <p className="mb-4">Step beyond traditional academics and discover how Alpha’s approach is redefining school.</p>
            <p className="mb-4">At this showcase, you'll experience how our students excel in core subjects in a fraction of the time—and spend the rest of the day building life skills that truly prepare them for the real world.</p>
            <p className="mb-4">At Alpha, students aren’t waiting for the future, they’re creating it. Join us and see how.</p>
          </div>
        </div>
      </section>

      <Divider fill="white" direction="down"/>

      {/* Registration Form */}
      <section className="alpha-section bg-white" >
        <div className="campus-info">
          Title
        </div>
        </section>
        <section className="alpha-section bg-white">
        <div className="alpha-form" id="register">
        <div className="m-auto flex !flex-col text-center !gap-0.5 mb-8 max-w-[800px]">

          <h4>Register today</h4>
          <p>Due to high demand, please only RSVP if you are certain you can attend. If you are unable to participate due to illness, please notify us as soon as possible.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h6>Parent/guardian #1 Information</h6>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent1FirstName" className="xs-label">Parent #1 First Name<span>*</span></label>
                <Input id="parent1FirstName" type="text" value={parent1FirstName} onChange={e => setParent1FirstName(e.target.value)} required className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent1LastName" className="xs-label">Parent #1 Last Name<span>*</span></label>
                <Input id="parent1LastName" type="text" value={parent1LastName} onChange={e => setParent1LastName(e.target.value)} required className="field-input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent1Email" className="xs-label">Parent #1 Email<span>*</span></label>
                <Input id="parent1Email" type="email" value={parent1Email} onChange={e => setParent1Email(e.target.value)} required className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent1Phone" className="xs-label">Parent #1 Phone Number<span>*</span></label>
                <Input id="parent1Phone" type="tel" value={parent1Phone} onChange={e => setParent1Phone(e.target.value)} required className="field-input" />
              </div>
            </div>
            <div className="field-wrapper">
              <label htmlFor="parent1Relationship" className="xs-label">Parent #1 Relationship to Student(s)</label>
              <select id="parent1Relationship" value={parent1Relationship} onChange={e => setParent1Relationship(e.target.value)} className="field-input">
                <option value="">Please Select</option>
                {relationshipOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <h6>Parent/guardian #2 Information</h6>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent2FirstName" className="xs-label">Parent #2 First Name</label>
                <Input id="parent2FirstName" type="text" value={parent2FirstName} onChange={e => setParent2FirstName(e.target.value)} className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent2LastName" className="xs-label">Parent #2 Last Name</label>
                <Input id="parent2LastName" type="text" value={parent2LastName} onChange={e => setParent2LastName(e.target.value)} className="field-input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent2Email" className="xs-label">Parent #2 Email</label>
                <Input id="parent2Email" type="email" value={parent2Email} onChange={e => setParent2Email(e.target.value)} className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="parent2Phone" className="xs-label">Parent #2 Phone Number</label>
                <Input id="parent2Phone" type="tel" value={parent2Phone} onChange={e => setParent2Phone(e.target.value)} className="field-input" />
              </div>
            </div>
            <div className="field-wrapper">
              <label htmlFor="parent2Relationship" className="xs-label">Parent #2 Relationship to Student(s)</label>
              <select id="parent2Relationship" value={parent2Relationship} onChange={e => setParent2Relationship(e.target.value)} className="field-input">
                <option value="">Please Select</option>
                {relationshipOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <h6>Address Information</h6>
            <div className="field-wrapper">
              <label htmlFor="address" className="xs-label">Street Address<span>*</span></label>
              <Input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="field-input" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="city" className="xs-label">City<span>*</span></label>
                <Input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="state" className="xs-label">State<span>*</span></label>
                <Input id="state" type="text" value={state} onChange={e => setState(e.target.value)} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="zip" className="xs-label">Zip Code<span>*</span></label>
                <Input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} required className="field-input" pattern="^\d{5}(-\d{4})?$" maxLength={10} onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (!/\d/.test(char) && e.which !== 8 && e.which !== 45) { e.preventDefault(); } }} />
              </div>
            </div>

            <h6>Student Information</h6>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="child1Name" className="xs-label">Child 1 Full Name</label>
                <Input id="child1Name" type="text" value={child1Name} onChange={e => setChild1Name(e.target.value)} className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="child1Age" className="xs-label">Child 1 Age</label>
                <Input id="child1Age" type="text" value={child1Age} onChange={e => setChild1Age(e.target.value)} className="field-input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 field-wrapper">
                <label htmlFor="child2Name" className="xs-label">Child 2 Full Name</label>
                <Input id="child2Name" type="text" value={child2Name} onChange={e => setChild2Name(e.target.value)} className="field-input" />
              </div>
              <div className="flex-1 field-wrapper">
                <label htmlFor="child2Age" className="xs-label">Child 2 Age</label>
                <Input id="child2Age" type="text" value={child2Age} onChange={e => setChild2Age(e.target.value)} className="field-input" />
              </div>
            </div>
            <div className="field-wrapper">
              <label htmlFor="additionalChildren" className="xs-label">Additional Child Name(s) and Age(s)</label>
              <Input id="additionalChildren" type="text" value={additionalChildren} onChange={e => setAdditionalChildren(e.target.value)} className="field-input" />
            </div>
            <div className="field-wrapper">
              <label htmlFor="allergies" className="xs-label">Allergies & Dietary Preferences<span>*</span></label>
              <Textarea id="allergies" value={allergies} onChange={e => setAllergies(e.target.value)} required className="field-input" />
            </div>
            <div className="field-wrapper">
              <label htmlFor="howHeard" className="xs-label">How did you hear about us?</label>
              <select 
                id="howHeard" 
                value={howHeard} 
                onChange={e => setHowHeard(e.target.value)}
                className="field-input"
              >
                <option value="">Select an option</option>
                <option value="social-media">Social Media</option>
                <option value="friend-family">Friend or Family</option>
                <option value="search">Search Engine</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="text-sm">
                I consent to Alpha School contacting me about this event and future communications.<span>*</span>
              </label>
            </div>
            <Button type="submit">
              Register
            </Button>
          </form>
        </div>

        <SectionHeading 
          title="More events" 
          description="Learn more about how Alpha works. Attend a virtual info session, drop by a school tour, or join one of our educational summer camps."
          buttonText="View all events"
          buttonHref="/events"
          buttonVariant="darkGreen"
          className="mt-[var(--space-4xl)] text-[var(--color-dark-green)]"
        />
        <Carousel
          items={allEvents.filter(event => event.slug !== slug)}
          renderItem={(event) => (
            <EventCard {...event} url={`/events/${event.slug}`} className="flex-shrink-0 group" variant="scheme2" />
          )}
          visibleCards={3.75}
          variant="scheme3"
        />
      </section>
    </main>
  );
} 