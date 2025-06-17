"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";

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
    country: "",
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
        <div className="bg-[var(--color-primary-light)] text-black rounded-[var(--radius-lg)] p-16 flex flex-col gap-4 shadow-none border-0 mx-auto max-w-[1200px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-1 font-medium">First name<span className="text-red-500">*</span></label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-1 font-medium">Last name<span className="text-red-500">*</span></label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email<span className="text-red-500">*</span></label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="city" className="block mb-1 font-medium">City<span className="text-red-500">*</span></label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="country" className="block mb-1 font-medium">Country<span className="text-red-500">*</span></label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="zip" className="block mb-1 font-medium">Zip Code<span className="text-red-500">*</span></label>
                <Input
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Are you the parent or guardian of a student?<span className="text-red-500">*</span></label>
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

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone number<span className="text-red-500">*</span></label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="howDidYouHear" className="block mb-1 font-medium">How did you hear about us?<span className="text-red-500">*</span></label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Please Select</option>
                {howDidYouHearOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                />
                <span className="text-sm">
                  I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollments. Message & data rates may apply. Reply STOP to opt out.
                </span>
              </label>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <WhatsNextSection />
    </>
  );
} 