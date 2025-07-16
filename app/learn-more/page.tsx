"use client"
// This is a copy of the learn-more page for design testing purposes

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import MainHeading from "@/components/layout/headings/main-heading"

const howDidYouHearOptions = [
  "Google Search",
  "Social Media",
  "Friend/Family",
  "Event",
  "Other"
];

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

  return (
    <main>
      
        <MainHeading

          tagline="Learn more"
          taglineVariant="blue"
          description="Discover more about Alpha School, our philosophy, and how we empower students to thrive in a modern world."
        >
          We're happy to hear from you
        </MainHeading>
        
        <section className="alpha-section">
          <div className="alpha-form">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                  <div className="gap-4">
                    <h2 className="heading-style-h5 mb-4">Admissions</h2>
                    <p className="mb-4">Select your campus, submit your application, and take the first step toward providing your child with an education built for the future.</p>
                    <Button size="small" href="/application">Apply Now<span className="ml-2 material-icons-outlined text-base">arrow_circle_right</span></Button>
                  </div>
                </div>
                <div>
                  <div className="gap-4">
                    <h2 className="heading-style-h5 mb-4">Bring Alpha to your City</h2>
                    <p className="mb-4">Interested in our new locations, starting a Micro School, or looking to see Alpha in your area? Be part of our movement to redefine education by bringing Alpha to new communities.</p>
                    <Button size="small" href="/bring-alpha-to-your-city">Get in Touch<span className="ml-2 material-icons-outlined text-base">arrow_circle_right</span></Button>
                  </div>
                </div>
                <div>
                  <div className="gap-4">
                    <h2 className="heading-style-h5 mb-4">Careers</h2>
                    <p className="mb-4">Thanks for your interest! All hiring is handled exclusively through Crossover. While we don't conduct casual interviews or respond directly to inquiries, we invite you to explore the exciting career opportunities available.</p>
                    <Button size="small">Discover Careers<span className="ml-2 material-icons-outlined text-base">arrow_circle_right</span></Button>
                  </div>
                </div>
                <div>
                  <div className="gap-4">
                    <h2 className="heading-style-h5 mb-4">Press</h2>
                    <p className="mb-4">Interested in featuring Alpha School in your story or learning more about our innovative approach to education? We're happy to connect. <span className="font-bold">Media inquiries welcome.</span></p>
                    <Button size="small">Contact Press<span className="ml-2 material-icons-outlined text-base">arrow_circle_right</span></Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="field-wrapper">
                  <label htmlFor="firstName" className="xs-label">First Name<span>*</span></label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
                <div className="field-wrapper">
                  <label htmlFor="lastName" className="xs-label">Last Name<span>*</span></label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="field-wrapper">
                  <label htmlFor="email" className="xs-label">Email<span>*</span></label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
                <div className="field-wrapper">
                  <label htmlFor="phone" className="xs-label">Phone Number<span>*</span></label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
              </div>
              <div className="field-wrapper">
                <label htmlFor="street" className="xs-label">Street Address<span>*</span></label>
                <Input id="street" value={street} onChange={e => setStreet(e.target.value)} required className="field-input" />
              </div>
              <div className="flex gap-4">
                <div className="field-wrapper flex-1">
                  <label htmlFor="city" className="xs-label">City<span>*</span></label>
                  <Input
                    id="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
                <div className="field-wrapper flex-1">
                  <label htmlFor="state" className="xs-label">State<span>*</span></label>
                  <Input
                    id="state"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                    className="field-input"
                  />
                </div>
                <div className="field-wrapper flex-1">
                  <label htmlFor="zip" className="xs-label">Zip Code<span>*</span></label>
                  <Input
                    id="zip"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                    className="field-input"
                    type="text"
                    pattern="^\d{5}(-\d{4})?$"
                    maxLength={10}
                  />
                </div>
              </div>
              <div>
                <label className="xs-label">Are you a parent or guardian of a student?</label>
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
                <label className="xs-label">Which Alpha School location are you interested in?</label>
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
              <div className="field-wrapper">
              <label htmlFor="howDidYouHear" className="xs-label">How did you hear about us?<span>*</span></label>
              <select
                id="howDidYouHear"
                value={howDidYouHear}
                onChange={e => setHowDidYouHear(e.target.value)}
                required
                className="field-input"
              >
                <option value="" disabled>Please Select</option>
                {howDidYouHearOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
              <div className="field-wrapper">
                <label htmlFor="additionalInfo" className="xs-label">Additional Information/Questions?</label>
                <Textarea
                  id="additionalInfo"
                  value={additionalInfo}
                  onChange={e => setAdditionalInfo(e.target.value)}
                  className="field-input"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                <label htmlFor="consent" className="text-sm">
                  I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollment. Messages & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
       
      </section>
    </main>
  )
} 