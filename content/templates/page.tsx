"use client"
import { Metadata } from "next"
import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"

export default function EventTemplatePage() {
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
    // For now, just log the values
    console.log({ parentFirstName, parentLastName, parentEmail, parentPhone, relationship, zip, child1Name, child1Age, child2Name, child2Age, additionalChildren, allergies, howHeard, consent });
  };

  return (
    <main>
      <MainHeading>
        Experience Alpha Fort Worth
      </MainHeading>
      <section className="alpha-section">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="alpha-card scheme-pink">
            <h3 className="text-xl font-bold mb-2">Parent Information Evening</h3>
            <div className="flex items-center gap-2 mb-1">
              {/* Calendar SVG */}
              <span>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9.3335H6V11.3335H4V9.3335ZM4 13.3335H6V15.3335H4V13.3335ZM8 9.3335H10V11.3335H8V9.3335ZM8 13.3335H10V15.3335H8V13.3335ZM12 9.3335H14V11.3335H12V9.3335ZM12 13.3335H14V15.3335H12V13.3335Z" fill="currentColor"/>
                  <path d="M2 20.3335H16C17.103 20.3335 18 19.4365 18 18.3335V4.3335C18 3.2305 17.103 2.3335 16 2.3335H14V0.333496H12V2.3335H6V0.333496H4V2.3335H2C0.897 2.3335 0 3.2305 0 4.3335V18.3335C0 19.4365 0.897 20.3335 2 20.3335ZM16 6.3335L16.001 18.3335H2V6.3335H16Z" fill="currentColor"/>
                </svg>
              </span>
              <span>June 16, 2025</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              {/* Clock SVG */}
              <span>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0.333496C4.486 0.333496 0 4.8195 0 10.3335C0 15.8475 4.486 20.3335 10 20.3335C15.514 20.3335 20 15.8475 20 10.3335C20 4.8195 15.514 0.333496 10 0.333496ZM10 18.3335C5.589 18.3335 2 14.7445 2 10.3335C2 5.9225 5.589 2.3335 10 2.3335C14.411 2.3335 18 5.9225 18 10.3335C18 14.7445 14.411 18.3335 10 18.3335Z" fill="currentColor"/>
                  <path d="M11 5.3335H9V11.3335H15V9.3335H11V5.3335Z" fill="currentColor"/>
                </svg>
              </span>
              <span>5:30 - 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {/* Location SVG */}
              <span>
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                  <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                </svg>
              </span>
              <span>CEBA Ballroom, 3300 Bryant Irvin Rd, Fort Worth, TX 76109</span>
            </div>
            <Button variant="maroon" className="mb-4">Register</Button>
            <p className="text-sm mt-2">Due to high demand, please only RSVP if you are certain you can attend. If you are unable to participate due to illness, please notify us as soon as possible.</p>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Experience the Magic of Alpha in Fort Worth</h2>
            <p className="mb-4">Get an inside look at Alpha's groundbreaking learning model at this exclusive parent-only event.</p>
            <p className="mb-4">Parents will experience the magic of Alpha with our team, be able to connect with other families, and discover how our students excel in core academics in just two hours a day.</p>
            <p className="mb-4">Light appetizers and wine will be served.</p>
            <h3 className="font-semibold mb-2">Why Attend?</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><b>See Alpha in Action</b> – Hear firsthand how students excel in core academics in a fraction of the time of traditional schools and find and fuel their potential.</li>
              <li><b>Meet the Team</b> – Ask questions about academics, motivation, and daily life at Alpha—discover how our model can transform your child's education.</li>
              <li><b>Connect with Families</b> – Meet like-minded parents who share your vision for education and join our founding family community—building relationships that will support both you and your child along the way.</li>
            </ul>
            <p>Join us as you consider what's next for your child—at Alpha our kids are not waiting for the future, they're designing it.</p>
          </div>
        </div>
        {/* Registration Form */}
        <div className="scheme-primary-light mt-12">
          <form className="space-y-4 max-w-4xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="parentFirstName" className="block mb-1 font-medium">Parent First Name<span className="text-red-500">*</span></label>
                <Input id="parentFirstName" type="text" value={parentFirstName} onChange={e => setParentFirstName(e.target.value)} required />
              </div>
              <div className="flex-1">
                <label htmlFor="parentLastName" className="block mb-1 font-medium">Parent Last Name<span className="text-red-500">*</span></label>
                <Input id="parentLastName" type="text" value={parentLastName} onChange={e => setParentLastName(e.target.value)} required />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="parentEmail" className="block mb-1 font-medium">Parent Email<span className="text-red-500">*</span></label>
                <Input id="parentEmail" type="email" value={parentEmail} onChange={e => setParentEmail(e.target.value)} required />
              </div>
              <div className="flex-1">
                <label htmlFor="parentPhone" className="block mb-1 font-medium">Parent Phone Number<span className="text-red-500">*</span></label>
                <Input id="parentPhone" type="text" value={parentPhone} onChange={e => setParentPhone(e.target.value)} required />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="relationship" className="block mb-1 font-medium">Relationship to Student(s)</label>
                <Input id="relationship" type="text" value={relationship} onChange={e => setRelationship(e.target.value)} />
              </div>
              <div className="flex-1">
                <label htmlFor="zip" className="block mb-1 font-medium">Zip Code<span className="text-red-500">*</span></label>
                <Input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} required />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="child1Name" className="block mb-1 font-medium">Child 1 Full Name</label>
                <Input id="child1Name" type="text" value={child1Name} onChange={e => setChild1Name(e.target.value)} />
              </div>
              <div className="flex-1">
                <label htmlFor="child1Age" className="block mb-1 font-medium">Child 1 Age</label>
                <Input id="child1Age" type="text" value={child1Age} onChange={e => setChild1Age(e.target.value)} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="child2Name" className="block mb-1 font-medium">Child 2 Full Name</label>
                <Input id="child2Name" type="text" value={child2Name} onChange={e => setChild2Name(e.target.value)} />
              </div>
              <div className="flex-1">
                <label htmlFor="child2Age" className="block mb-1 font-medium">Child 2 Age</label>
                <Input id="child2Age" type="text" value={child2Age} onChange={e => setChild2Age(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="additionalChildren" className="block mb-1 font-medium">Additional Child Name(s) and Age(s)</label>
              <Input id="additionalChildren" type="text" value={additionalChildren} onChange={e => setAdditionalChildren(e.target.value)} />
            </div>
            <div>
              <label htmlFor="allergies" className="block mb-1 font-medium">Allergies & Dietary Preferences<span className="text-red-500">*</span></label>
              <Input id="allergies" type="text" value={allergies} onChange={e => setAllergies(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="howHeard" className="block mb-1 font-medium">How did you hear about us?</label>
              <Input id="howHeard" type="text" value={howHeard} onChange={e => setHowHeard(e.target.value)} />
            </div>
            <div className="flex items-center">
              <input id="consent" type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mr-2" />
              <label htmlFor="consent" className="text-sm">I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollments. Message & data rates may apply. Reply STOP to opt out.</label>
            </div>
            <Button type="submit" variant="default">Submit</Button>
          </form>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  );
}
