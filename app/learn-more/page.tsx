"use client"
// This is a copy of the learn-more page for design testing purposes

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SimpleCarousel from "@/components/features/simple-carousel"
import WhatsNextSection from "@/components/sections/whats-next-section"

export default function LearnMorePage() {
  // Contact form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isParent, setIsParent] = useState("");
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);

  const schoolOptions = [
    "Alpha School Austin",
    "Alpha High School Austin",
    "Alpha New York City",
    "Alpha Scottsdale",
    "Alpha School Brownsville",
    "Alpha School Houston",
    "Alpha School Miami",
    "Alpha School Santa Barbara",
    "Alpha School Orlando",
    "Alpha School Palm Beach",
    "Alpha Fort Worth",
    "Alpha School Tampa",
  ];

  const handleSchoolChange = (school: string) => {
    setSelectedSchools((prev) =>
      prev.includes(school)
        ? prev.filter((s) => s !== school)
        : [...prev, school]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just log the values
    console.log({ firstName, lastName, email, phone, street, city, state, zip, isParent, selectedSchools, howDidYouHear, additionalInfo, consent });
  };

  // Prepare card data
  const carouselCards = [
    {
      title: "Admissions",
      description: "Select your campus, submit your application, and take the first step toward providing your child with an education built for the future.",
      button: "Apply Now!"
    },
    {
      title: "Bring Alpha to your City",
      description: "Interested in our new locations, starting a Micro School, or looking to see Alpha in your area? Be part of our movement to redefine education by bringing Alpha to new communities.",
      button: "Get in Touch"
    },
    {
      title: "Careers",
      description: "Thanks for your interest! All hiring is handled exclusively through Crossover. While we don't conduct casual interviews or respond directly to inquiries, we invite you to explore the exciting career opportunities available.",
      button: "Discover Careers"
    },
    {
      title: "Press",
      description: "Interested in featuring Alpha School in your story or learning more about our innovative approach to education? We're happy to connect. <span class='font-bold'>Media inquiries welcome.</span>",
      button: "Contact Press"
    },
    {
      title: null,
      description: "Need to <span class='font-bold'>request a transcript or test scores?</span><br/>Email <span class='font-bold'>registrar@alpha.school</span>",
      button: null
    }
  ];

  return (
    <main>
      <section className="alpha-section">
        <h1 className="section-headline text-center mb-[var(--space-md)]">Learn More</h1>
        <p className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-[var(--space-lg)]">
          Discover more about Alpha School, our philosophy, and how we empower students to thrive in a modern world.
        </p>
        <div className="alpha-section">
          <div className="max-w-[1200px] mx-auto">
            <SimpleCarousel
              items={carouselCards}
              visibleCards={2}
              className="mx-auto"
              renderItem={(card, idx) => (
                <div className="px-6">
                  <Card key={idx} className="bg-[#FFD1D1] text-[#5C2727] rounded-3xl p-6 flex flex-col gap-4 shadow-none border-0 h-full">
                    {card.title && <h2 className="text-2xl font-bold mb-2">{card.title}</h2>}
                    <p className="mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: card.description }} />
                    {card.button && <Button variant="maroon">{card.button}</Button>}
                  </Card>
                </div>
              )}
            />
          </div>
        </div>
        {/* Contact Form below cards */}
        <div className="alpha-section">
          <div className="bg-[#B9EDFF] text-[#111827] rounded-[40px] p-16 flex flex-col gap-4 shadow-none border-0 mx-auto">
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Street Address</label>
                  <Input
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">State</label>
                  <Input
                    type="text"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">City</label>
                  <Input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Zip</label>
                  <Input
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Are you a parent or guardian of a student?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isParent"
                      value="yes"
                      checked={isParent === "yes"}
                      onChange={() => setIsParent("yes")}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isParent"
                      value="no"
                      checked={isParent === "no"}
                      onChange={() => setIsParent("no")}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Which Alpha School location are you interested in?</label>
                <div>
                  {schoolOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedSchools.includes(option)}
                        onChange={() => handleSchoolChange(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="howDidYouHear" className="block mb-1 font-medium">How did you hear about us?</label>
                <Input
                  id="howDidYouHear"
                  type="text"
                  value={howDidYouHear}
                  onChange={e => setHowDidYouHear(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block mb-1 font-medium">Additional Information/Questions?</label>
                <Textarea
                  id="additionalInfo"
                  className="min-h-[140px]"
                  value={additionalInfo}
                  onChange={e => setAdditionalInfo(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="consent"
                  type="checkbox"
                  className="mr-2"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                <label htmlFor="consent" className="text-sm">
                  I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollments. Message & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
              <Button type="submit" variant="default">Submit</Button>
            </form>
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  )
} 