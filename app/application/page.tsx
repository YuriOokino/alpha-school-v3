"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MainHeading from "@/components/layout/headings/main-heading";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { campuses } from "@/content/campuses";
import { parseCampusFromUrl } from "@/utils/campuses";

const gradeOptions = [
  "PreK3", "PreK4", "K", "1", "2", "3", "4", "5", "6", "7", "8"
];
const relationshipOptions = [
  "Mother", "Father", "Guardian", "Other"
];
const referralOptions = [
  "Friend/Family", "Online Search", "Social Media", "Event", "Other"
];

function ApplicationForm() {
  const searchParams = useSearchParams();
  const submissionCampus = searchParams.get('submission_campus');
  
  const selectedCampus = parseCampusFromUrl(submissionCampus);

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
    campus: selectedCampus?.name || "",
  });

  // Update form data when campus changes
  useEffect(() => {
    if (selectedCampus) {
      setFormData(prev => ({
        ...prev,
        campus: selectedCampus.name
      }));
    }
  }, [selectedCampus]);

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
      <MainHeading 
        tagline={selectedCampus?.name}
        taglineVariant="green"
        description={
          <>
            <p>We are actively enrolling, offering an all-inclusive, revolutionary educational experience. If you have any questions about the admissions process, feel free to reach out to us at <a href="mailto:admissions@alpha.school">admissions@alpha.school</a>.</p>
            <p><strong>Alpha School requires a separate application and a non-refundable $100 fee for each child.</strong></p>
          </>
        }
      >
        Application Form
      </MainHeading>

      <section className="alpha-section">
        <div className="alpha-form">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Hidden campus field */}
            <input type="hidden" name="campus" value={formData.campus} />
            
            {/* Parent 1 & 2 Info */}
            <h6>Parent \ Guardian Information</h6>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="parent1FirstName" className="xs-label">Parent #1 First Name<span>*</span></label>
                <Input id="parent1FirstName" name="parent1FirstName" value={formData.parent1FirstName} onChange={handleChange} required className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="parent1LastName" className="xs-label">Parent #1 Last Name<span>*</span></label>
                <Input id="parent1LastName" name="parent1LastName" value={formData.parent1LastName} onChange={handleChange} required className="field-input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="parent1Email" className="xs-label">Parent #1 Email<span>*</span></label>
                <Input id="parent1Email" name="parent1Email" type="email" value={formData.parent1Email} onChange={handleChange} required className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="parent1Phone" className="xs-label">Parent #1 Phone<span>*</span></label>
                <Input id="parent1Phone" name="parent1Phone" type="tel" value={formData.parent1Phone} onChange={handleChange} required className="field-input" />
              </div>
            </div>
            <div className="field-wrapper">
              <label className="xs-label">Parent #1 Relationship to Student<span>*</span></label>
              <select name="parent1Relationship" value={formData.parent1Relationship} onChange={handleChange} required className="field-input">
                <option value="">Please Select</option>
                {relationshipOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label className="xs-label">Parent #2 First Name</label>
                <Input name="parent2FirstName" value={formData.parent2FirstName} onChange={handleChange} className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label className="xs-label">Parent #2 Last Name</label>
                <Input name="parent2LastName" value={formData.parent2LastName} onChange={handleChange} className="field-input"/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label className="xs-label">Parent #2 Email</label>
                <Input name="parent2Email" type="email" value={formData.parent2Email} onChange={handleChange} className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label className="xs-label">Parent #2 Phone</label>
                <Input name="parent2Phone" type="tel" value={formData.parent2Phone} onChange={handleChange} className="field-input" />
              </div>
            </div>
            <div className="field-wrapper">
              <label className="xs-label">Parent #2 Relationship to Student</label>
              <select name="parent2Relationship" value={formData.parent2Relationship} onChange={handleChange} className="field-input">
                <option value="">Please Select</option>
                {relationshipOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            {/* Address */}
            <h6>Address Information</h6>
            <div className="field-wrapper">
              <label htmlFor="address" className="xs-label">Street Address<span>*</span></label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required className="field-input" />
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="city" className="xs-label">City<span>*</span></label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="state" className="xs-label">State<span>*</span></label>
                <Input id="state" name="state" value={formData.state} onChange={handleChange} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="zip" className="xs-label">Zip Code<span>*</span></label>
                <Input id="zip" name="zip" value={formData.zip} onChange={handleChange} required className="field-input" type="text" pattern="^\d{5}(-\d{4})?$" maxLength={10} onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (!/\d/.test(char) && e.which !== 8 && e.which !== 45) { e.preventDefault(); } }} />
              </div>
            </div>
            {/* Student Info */}
            <h6>Student Information</h6>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="childFirstName" className="xs-label">Child's First Name<span>*</span></label>
                <Input id="childFirstName" name="childFirstName" value={formData.childFirstName} onChange={handleChange} required className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="childLastName" className="xs-label">Child's Last Name<span>*</span></label>
                <Input id="childLastName" name="childLastName" value={formData.childLastName} onChange={handleChange} required className="field-input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="childDOB" className="xs-label">Child's Date of Birth<span>*</span></label>
                <Input id="childDOB" name="childDOB" type="date" value={formData.childDOB} onChange={handleChange} required className="field-input cursor-pointer" onClick={(e) => { const target = e.target as HTMLInputElement; target.showPicker?.(); }} />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="childGrade" className="xs-label">Child's Current Grade Level<span>*</span></label>
                <select id="childGrade" name="childGrade" value={formData.childGrade} onChange={handleChange} required className="field-input">
                  <option value="">Please Select</option>
                  {gradeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="field-wrapper flex-1">
                <label htmlFor="childCurrentSchool" className="xs-label">Child's Current School (if applicable)</label>
                <Input id="childCurrentSchool" name="childCurrentSchool" value={formData.childCurrentSchool} onChange={handleChange} className="field-input" />
              </div>
              <div className="field-wrapper flex-1">
                <label htmlFor="childEnrollmentDate" className="xs-label">Child's Desired Enrollment Date<span>*</span></label>
                <Input id="childEnrollmentDate" name="childEnrollmentDate" type="date" value={formData.childEnrollmentDate} onChange={handleChange} required className="field-input cursor-pointer" onClick={(e) => { const target = e.target as HTMLInputElement; target.showPicker?.(); }} />
              </div>
            </div>
            {/* Open text areas */}
            <h6>Additional Information</h6>
            <div className="field-wrapper">
              <label htmlFor="aboutChild" className="xs-label">Please share anything about your child or your family you would like us to know<span>*</span></label>
              <Textarea id="aboutChild" name="aboutChild" value={formData.aboutChild} onChange={handleChange} rows={3} required className="field-input" />
            </div>
            <div className="field-wrapper">
              <label htmlFor="accommodations" className="xs-label">Are there any special accommodations or challenges your student(s) might have that you can share in order to help us place them in the best environment?<span>*</span></label>
              <Textarea id="accommodations" name="accommodations" value={formData.accommodations} onChange={handleChange} rows={3} required className="field-input" />
            </div>
            <div className="field-wrapper">
              <label htmlFor="referralSource" className="xs-label">How did you hear about us?<span>*</span></label>
              <select id="referralSource" name="referralSource" value={formData.referralSource} onChange={handleChange} required className="field-input">
                <option value="">Please Select</option>
                {referralOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" name="smsConsent" id="smsConsent" checked={formData.smsConsent} onChange={handleChange} />
              <label htmlFor="smsConsent" className="text-sm">
                I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollment. Messages & data rates may apply. Reply STOP to opt out.
              </label>
            </div>
            <div className="text-sm">
              <strong>Please note your registration is only complete once you've completed your payment successfully below.</strong>
            </div>
            <Button type="submit" variant="navyBlue">
              Continue to Payment
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default function ApplicationPage() {
  return (
    <Suspense fallback={<div className="alpha-section">Loading...</div>}>
      <ApplicationForm />
    </Suspense>
  );
} 