"use client";

import { useState } from "react";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const gradeOptions = [
  "PreK3", "PreK4", "K", "1", "2", "3", "4", "5", "6", "7", "8"
];
const relationshipOptions = [
  "Mother", "Father", "Guardian", "Other"
];
const referralOptions = [
  "Friend/Family", "Online Search", "Social Media", "Event", "Other"
];

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    parent1FirstName: "",
    parent1LastName: "",
    parent1Email: "",
    parent1Phone: "",
    parent1Relationship: "",
    parent2FirstName: "",
    parent2LastName: "",
    parent2Email: "",
    parent2Phone: "",
    parent2Relationship: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    childFirstName: "",
    childLastName: "",
    childDOB: "",
    childGrade: "",
    childCurrentSchool: "",
    childEnrollmentDate: "",
    aboutChild: "",
    accommodations: "",
    referralSource: "",
    smsConsent: false,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <MainHeading variant="primary">
        Application Form
      </MainHeading>

      <section className="alpha-section">
        <div className="scheme-lightblue rounded-[40px] p-8 md:p-16 shadow-none border-0 mx-auto max-w-[1200px]">
          <div className="mb-8 text-center space-y-4">
            <p>
              We are actively enrolling, offering an all-inclusive, revolutionary educational experience. If you have any questions about the admissions process, feel free to reach out to us at <a href="mailto:admissions@alpha.school" className="underline">admissions@alpha.school</a>.
            </p>
            <p>
              <strong>Alpha School requires a separate application and a non-refundable $100 fee for each child.</strong>
            </p>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Parent 1 & 2 Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #1 First Name<span className="text-red-500">*</span></label>
                  <Input name="parent1FirstName" value={formData.parent1FirstName} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #1 Last Name<span className="text-red-500">*</span></label>
                  <Input name="parent1LastName" value={formData.parent1LastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #1 Email<span className="text-red-500">*</span></label>
                  <Input name="parent1Email" type="email" value={formData.parent1Email} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #1 Phone<span className="text-red-500">*</span></label>
                  <Input name="parent1Phone" type="tel" value={formData.parent1Phone} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Parent #1 Relationship to Student<span className="text-red-500">*</span></label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="parent1Relationship" value={formData.parent1Relationship} onChange={handleChange} required>
                  <option value="">Please Select</option>
                  {relationshipOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #2 First Name</label>
                  <Input name="parent2FirstName" value={formData.parent2FirstName} onChange={handleChange} />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #2 Last Name</label>
                  <Input name="parent2LastName" value={formData.parent2LastName} onChange={handleChange} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #2 Email</label>
                  <Input name="parent2Email" type="email" value={formData.parent2Email} onChange={handleChange} />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Parent #2 Phone</label>
                  <Input name="parent2Phone" type="tel" value={formData.parent2Phone} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Parent #2 Relationship to Student</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="parent2Relationship" value={formData.parent2Relationship} onChange={handleChange}>
                  <option value="">Please Select</option>
                  {relationshipOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-1 font-medium">Street Address<span className="text-red-500">*</span></label>
                <Input name="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">City<span className="text-red-500">*</span></label>
                  <Input name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">State<span className="text-red-500">*</span></label>
                  <Input name="state" value={formData.state} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Zip Code<span className="text-red-500">*</span></label>
                  <Input name="zip" value={formData.zip} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Student Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Child's First Name<span className="text-red-500">*</span></label>
                  <Input name="childFirstName" value={formData.childFirstName} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Child's Last Name<span className="text-red-500">*</span></label>
                  <Input name="childLastName" value={formData.childLastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Child's Date of Birth<span className="text-red-500">*</span></label>
                  <Input name="childDOB" type="date" value={formData.childDOB} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Child's Current Grade Level<span className="text-red-500">*</span></label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="childGrade" value={formData.childGrade} onChange={handleChange} required>
                    <option value="">Please Select</option>
                    {gradeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Child's Current School (if applicable)</label>
                <Input name="childCurrentSchool" value={formData.childCurrentSchool} onChange={handleChange} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Child's Desired Enrollment Date<span className="text-red-500">*</span></label>
                <Input name="childEnrollmentDate" type="date" value={formData.childEnrollmentDate} onChange={handleChange} required />
              </div>
            </div>

            {/* Open text areas */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-1 font-medium">Please share anything about your child or your family you would like us to know<span className="text-red-500">*</span></label>
                <Textarea name="aboutChild" value={formData.aboutChild} onChange={handleChange} rows={3} required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Are there any special accommodations or challenges your student(s) might have that you can share in order to help us place them in the best environment?<span className="text-red-500">*</span></label>
                <Textarea name="accommodations" value={formData.accommodations} onChange={handleChange} rows={3} required />
              </div>
              <div>
                <label className="block mb-1 font-medium">How did you hear about us?<span className="text-red-500">*</span></label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="referralSource" value={formData.referralSource} onChange={handleChange} required>
                  <option value="">Please Select</option>
                  {referralOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" name="smsConsent" id="smsConsent" checked={formData.smsConsent} onChange={handleChange} />
                <label htmlFor="smsConsent" className="text-sm">
                  I agree to receive SMS messages from 7 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollment. Messages & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
            </div>
            <div className="text-sm">
              <strong>Please note your registration is only complete once you've completed your payment successfully below.</strong>
            </div>
            <div className="text-center">
              <Button type="submit">
                Continue to Payment
              </Button>
            </div>
          </form>
        </div>
      </section>

      
      <WhatsNextSection />
    </main>
  );
} 