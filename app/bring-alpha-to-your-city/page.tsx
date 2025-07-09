"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainHeading from "@/components/layout/headings/main-heading";

const howDidYouHearOptions = [
  "Google Search",
  "Social Media",
  "Friend/Family",
  "Event",
  "Other"
];

export default function BringAlphaToYourCity() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    isParent: "",
    phone: "",
    howDidYouHear: "",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <MainHeading
        description={
          "To get started with an Alpha Expansion School in your area, we are looking for interested families just like you.\nReady to lead this educational revolution in your city? Let's begin! Fill out this form and let's meet for further discussion!"
        }
      >
        Bring Alpha to your City
      </MainHeading>

      <section className="alpha-section">
        <div className="bg-[var(--color-sky-blue)] text-black rounded-[var(--radius-lg)] p-16 flex flex-col gap-4 shadow-none border-0 mx-auto max-w-[1200px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="field-wrapper">
                  <label htmlFor="firstName" className="xs-label">First name<span>*</span></label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="field-wrapper">
                  <label htmlFor="lastName" className="xs-label">Last name<span>*</span></label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
              </div>
            </div>

            <div className="field-wrapper">
              <label htmlFor="email" className="xs-label">Email<span>*</span></label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field-input"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <div className="field-wrapper">
                  <label htmlFor="city" className="xs-label">City<span>*</span></label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="field-wrapper">
                  <label htmlFor="state" className="xs-label">State<span>*</span></label>
                  <Input 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleChange} 
                      required 
                      className="field-input"
                      onKeyPress={(e) => {
                        const char = String.fromCharCode(e.which);
                        if (/\d/.test(char)) {
                          e.preventDefault();
                        }
                      }}
                    />
                </div>
              </div>
              <div className="flex-1">
                <div className="field-wrapper">
                  <label htmlFor="zip" className="xs-label">Zip Code<span>*</span></label>
                  <Input 
                      id="zip" 
                      name="zip" 
                      value={formData.zip} 
                      onChange={handleChange} 
                      required 
                      className="field-input"
                      type="text"
                      pattern="^\d{5}(-\d{4})?$"
                      maxLength={10}
                      onKeyPress={(e) => {
                        const char = String.fromCharCode(e.which);
                        if (!/\d/.test(char) && e.which !== 8 && e.which !== 45) {
                          e.preventDefault();
                        }
                      }}
                    />
                </div>
              </div>
            </div>

            <div>
              <label className="xs-label">Are you the parent or guardian of a student?<span>*</span></label>
              <div className="flex gap-8 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isParent"
                    value="yes"
                    checked={formData.isParent === "yes"}
                    onChange={handleChange}
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isParent"
                    value="no"
                    checked={formData.isParent === "no"}
                    onChange={handleChange}
                    required
                  />
                  No
                </label>
              </div>
            </div>

            <div className="field-wrapper">
              <label htmlFor="phone" className="xs-label">Phone number<span>*</span></label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="field-input"
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="howDidYouHear" className="xs-label">How did you hear about us?<span>*</span></label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
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
              <label htmlFor="message" className="xs-label">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="field-input min-h-[100px]"
              />
            </div>

            <div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="smsConsent"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                />
                <label htmlFor="smsConsent" className="text-sm">
                  I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollments. Message & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
    </>
  );
} 