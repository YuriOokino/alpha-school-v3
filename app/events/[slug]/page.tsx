"use client"
import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState, useEffect } from "react"
import SectionHeading from "@/components/layout/headings/section-heading"
import { useParams } from "next/navigation"

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
    
    if (slug) {
      loadEventData()
    }
  }, [slug])
  
  // Form state
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [zip, setZip] = useState("");
  const [child1Name, setChild1Name] = useState("");
  const [child1Age, setChild1Age] = useState("");
  const [child2Name, setChild2Name] = useState("");
  const [child2Age, setChild2Age] = useState("");
  const [additionalChildren, setAdditionalChildren] = useState("");
  const [allergies, setAllergies] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ parentFirstName, parentLastName, parentEmail, parentPhone, relationship, zip, child1Name, child1Age, child2Name, child2Age, additionalChildren, allergies, howHeard, consent });
  };

  return (
    <main>
      <MainHeading variant="blue" tagline="Events">
        {eventData?.title || "Event"}
      </MainHeading>
      <section className="alpha-section">
        <div className="flex flex-col md:flex-row gap-[var(--space-lg)] md:items-start">
          {/* Left Column */}
          <div className="alpha-card scheme-pink w-full md:w-2/5">
            <h3 className="mb-[var(--space-md)]">Event Details</h3>
            <div className="flex items-center gap-2 mb-1">
              {/* Calendar SVG */}
              <span>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9.3335H6V11.3335H4V9.3335ZM4 13.3335H6V15.3335H4V13.3335ZM8 9.3335H10V11.3335H8V9.3335ZM8 13.3335H10V15.3335H8V13.3335ZM12 9.3335H14V11.3335H12V9.3335ZM12 13.3335H14V15.3335H12V13.3335Z" fill="currentColor"/>
                  <path d="M2 20.3335H16C17.103 20.3335 18 19.4365 18 18.3335V4.3335C18 3.2305 17.103 2.3335 16 2.3335H14V0.333496H12V2.3335H6V0.333496H4V2.3335H2C0.897 2.3335 0 3.2305 0 4.3335V18.3335C0 19.4365 0.897 20.3335 2 20.3335ZM16 6.3335L16.001 18.3335H2V6.3335H16Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{eventData?.date || "Date TBD"}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              {/* Clock SVG */}
              <span>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0.333496C4.486 0.333496 0 4.8195 0 10.3335C0 15.8475 4.486 20.3335 10 20.3335C15.514 20.3335 20 15.8475 20 10.3335C20 4.8195 15.514 0.333496 10 0.333496ZM10 18.3335C5.589 18.3335 2 14.7445 2 10.3335C2 5.9225 5.589 2.3335 10 2.3335C14.411 2.3335 18 5.9225 18 10.3335C18 14.7445 14.411 18.3335 10 18.3335Z" fill="currentColor"/>
                  <path d="M11 5.3335H9V11.3335H15V9.3335H11V5.3335Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{eventData?.time || "Time TBD"}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {/* Location SVG */}
              <span>
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                  <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{eventData?.address || "Location TBD"}</span>
            </div>
            {eventData?.registrationType === 'external' ? (
              <a href={eventData.registrationUrl} target="_blank" rel="noopener noreferrer">
                <Button className="mb-4">
                  Register
                </Button>
              </a>
            ) : (
              <Button href="#register" className="mb-4">Register</Button>
            )}
            <p className="text-sm mt-2">Due to high demand, please only RSVP if you are certain you can attend. If you are unable to participate due to illness, please notify us as soon as possible.</p>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            <h2 className="heading-style-h3 mb-[var(--space-sm)]">{eventData?.descriptionTitle || eventData?.title || "Event Title"}</h2>
            {eventData?.description ? (
              <div 
                className="mb-[var(--space-sm)]"
                dangerouslySetInnerHTML={{ __html: eventData.description }}
              />
            ) : (
              <p className="mb-[var(--space-sm)]">Event description will be available soon.</p>
            )}
            </div>
            </div>

            {/* Center Card */}
            <div className="mt-[var(--space-3xl)]">
            <SectionHeading title="Why Attend?" description="Come experience Alpha's Core Beliefs"></SectionHeading></div>
            <div className="bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] mt-[var(--space-lg)]">
              <div className="flex flex-col md:flex-row gap-[var(--space-md)]">
                {/* Left Column - Text Content */}
                <div className="md:w-1/2">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="currentColor"/>
                        <path d="M7.99902 11.587L5.70002 9.29203L4.28802 10.708L8.00103 14.413L14.707 7.70703L13.293 6.29303L7.99902 11.587Z" fill="currentColor"/>
                      </svg>
                      </span>
                      <span>
                        <b>See the model in action</b> – Learn how students thrive academically while also developing confidence, purpose, and independence. Our two-hour academic model frees up the day for what really matters: discovering passions and becoming the kind of person who can lead, collaborate, and create.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="currentColor"/>
                        <path d="M7.99902 11.587L5.70002 9.29203L4.28802 10.708L8.00103 14.413L14.707 7.70703L13.293 6.29303L7.99902 11.587Z" fill="currentColor"/>
                      </svg>
                      </span>
                      <span>
                        <b>Educators who are not like other teachers</b> – Our world-class educators guide students through the academic and life skills parts of their day, through social-emotional challenges and into being self-directed learners. Hear how they spark curiosity, build strong relationships, and motivate students to grow every day.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="currentColor"/>
                        <path d="M7.99902 11.587L5.70002 9.29203L4.28802 10.708L8.00103 14.413L14.707 7.70703L13.293 6.29303L7.99902 11.587Z" fill="currentColor"/>
                      </svg>
                      </span>
                      <span>
                        <b>Experience a day in the life</b> – Discover how each day begins with intention, is filled with purpose, and ends with growth. From setting a growth mindset in the morning to afternoon workshops in leadership, goal-setting, and communication, see what sets this experience apart.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="currentColor"/>
                        <path d="M7.99902 11.587L5.70002 9.29203L4.28802 10.708L8.00103 14.413L14.707 7.70703L13.293 6.29303L7.99902 11.587Z" fill="currentColor"/>
                      </svg>
                      </span>
                      <span>
                        <b>Connect with families</b> – Join a community of like-minded parents who are reimagining what learning should be. You'll meet others on the same journey and leave inspired by what's possible for your child.
                        </span>
                    </li>
                  </ul>
                </div>
                
                {/* Right Column - Image */}
                <div className="md:w-1/2">
                  <div className="w-full h-48 bg-gray-200 rounded-[var(--radius-md)] flex items-center justify-center">
                    <span className="text-gray-500">Event Image</span>
                  </div>
                </div>
              </div>
            </div>
       
        {/* Registration Form */}
        <div id="register"className="alpha-section mt-[var(--space-3xl)]">
          <SectionHeading title="Register Today" description="Don't miss out!" /> 
          <div className="alpha-form">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="parentFirstName" className="block mb-1 font-medium">Parent First Name<span>*</span></label>
                  <Input id="parentFirstName" type="text" value={parentFirstName} onChange={e => setParentFirstName(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="parentLastName" className="block mb-1 font-medium">Parent Last Name<span>*</span></label>
                  <Input id="parentLastName" type="text" value={parentLastName} onChange={e => setParentLastName(e.target.value)} required />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="parentEmail" className="block mb-1 font-medium">Parent Email<span>*</span></label>
                  <Input id="parentEmail" type="email" value={parentEmail} onChange={e => setParentEmail(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="parentPhone" className="block mb-1 font-medium">Parent Phone Number<span>*</span></label>
                  <Input id="parentPhone" type="text" value={parentPhone} onChange={e => setParentPhone(e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="relationship" className="block mb-1 font-medium">Relationship to Student(s)</label>
                  <Input id="relationship" type="text" value={relationship} onChange={e => setRelationship(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="zip" className="block mb-1 font-medium">Zip Code<span>*</span></label>
                  <Input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="child1Name" className="block mb-1 font-medium">Child 1 Full Name</label>
                  <Input id="child1Name" type="text" value={child1Name} onChange={e => setChild1Name(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="child1Age" className="block mb-1 font-medium">Child 1 Age</label>
                  <Input id="child1Age" type="text" value={child1Age} onChange={e => setChild1Age(e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="child2Name" className="block mb-1 font-medium">Child 2 Full Name</label>
                  <Input id="child2Name" type="text" value={child2Name} onChange={e => setChild2Name(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="child2Age" className="block mb-1 font-medium">Child 2 Age</label>
                  <Input id="child2Age" type="text" value={child2Age} onChange={e => setChild2Age(e.target.value)} />
                </div>
              </div>
              <div>
                <label htmlFor="additionalChildren" className="block mb-1 font-medium">Additional Child Name(s) and Age(s)</label>
                <Input id="additionalChildren" type="text" value={additionalChildren} onChange={e => setAdditionalChildren(e.target.value)} />
              </div>
              <div>
                <label htmlFor="allergies" className="block mb-1 font-medium">Allergies & Dietary Preferences<span>*</span></label>
                <Input id="allergies" type="text" value={allergies} onChange={e => setAllergies(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="howHeard" className="block mb-1 font-medium">How did you hear about us?</label>
                <select 
                  id="howHeard" 
                  value={howHeard} 
                  onChange={e => setHowHeard(e.target.value)}
                  className="flex h-12 w-full rounded-md border-0 bg-white px-3 py-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
              <Button type="submit" variant="default">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  );
} 