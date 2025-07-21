"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainHeading from "@/components/layout/headings/main-heading";
import FeatureCard from "@/components/features/content-blocks/feature-card";
import Carousel from "@/components/ui/carousel";
import LocationCard from "@/components/features/cards/location-card";
import SectionHeading from "@/components/layout/headings/section-heading";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getAllCampuses } from "@/utils/campuses";
import type { CampusMetadata } from "@/utils/campuses";
import Divider from "@/components/layout/divider";



const admissionsSteps = [
  {
    key: 'attend-showcase',
    title: '1. Attend a Showcase or Schedule a Tour',
    content: (
      <>
        <div className="text-sm text-gray-600">
          Discover our unique learning approach and explore the environment that sets Alpha apart.
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="primary" href="mailto:admissions@alpha.school" target="_blank">Schedule Tour</Button>
          <Button variant="outline" className="outline-[var(--color-primary)] !text-[var(--color-primary)]" href="/events">View Showcase</Button>
        </div>
      </>
    )
  },
  {
    key: 'submit-application',
    title: '2. Submit Application Form',
    content: (
      <>
        <div className="text-sm text-gray-600">
          Complete our comprehensive application form with student information, academic history, and family details.
        </div>
        <div className="flex gap-3 mt-4">
          <Button href="/admission-forms" variant="primary">Apply now</Button>
        </div>
      </>
    )
  },
  {
    key: 'shadow-day',
    title: '3. Shadow Day',
    content: (
      <>
        <div className="text-sm text-gray-600">
          After submitting an application and attending a showcase, tour, or having an individual conversation with admissions, you will be eligible to schedule your Shadow Day. This day will let your child experience Alpha firsthand. During their visit, students engage with our core skills AI applications and participate in life skills-focused afternoon workshops.
        </div>
        <div className="mt-4">
          <h4 className="heading-style-h6 mb-2">Required Documents to Submit Before Shadow Day or Student Observation:</h4>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Allergy or medication details
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Emergency contact information
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Current school records (grades 2-8)
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="heading-style-h6 mb-2">Required Documents to Sign:</h4>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Liability Waiver
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Photo/Video Consent Form
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Data Collection Consent Form
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Your dedicated admissions counselor will work with you to schedule the ideal day for your student to visit.
        </div>
      </>
    )
  },
];

const enrollmentSteps = [
  {
    key: 'meet-coordinator',
    title: '1. Meet with Your Admissions Coordinator',
    content: (
      <>
        <div className="text-sm text-gray-600">
          During your meeting, we will review the MAP exam results, feedback from your child's Shadow Day or Observation, and discuss your academic goals. Our admissions team will also address any remaining questions to ensure your family is fully informed and confident in your decision.
        </div>
      </>
    )
  },
  {
    key: 'finalize-enrollment',
    title: '2. Finalize Enrollment',
    content: (
      <>
        <div className="text-sm text-gray-600">
          Review admissions enrollment offer and complete the following:
        </div>
        <div className="mt-4">
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Student Enrollment Form
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Tuition Agreement
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Submit a non-refundable $1,000 tuition deposit
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Complete the Family Medical and Financial sections
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          The deposit is refundable and is credited towards tuition once enrolled.
        </div>
      </>
    )
  },
  {
    key: 'welcome-family',
    title: '3. Welcome to the Alpha Family',
    content: (
      <>
        <div className="text-sm text-gray-600">
          Congratulations on joining the Alpha community! We are thrilled to embark on this transformative journey of growth and opportunity together. We're excited to have you as part of our family!
        </div>
        <div className="mt-4">
          <h4 className="heading-style-h6 mb-2">What's next?</h4>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Connect with our Dean of Parents
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Set up and engage with ParentSquare
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'var(--color-primary)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Meet and connect with our vibrant Alpha parent community
            </li>
          </ul>
        </div>
      </>
    )
  },
];

export default function AdmissionPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [campuses, setCampuses] = useState<CampusMetadata[]>([]);

  useEffect(() => {
    const loadCampuses = async () => {
      const allCampuses = await getAllCampuses();
      setCampuses(allCampuses);
    };
    loadCampuses();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const DropdownArrow = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg 
      width="12" 
      height="8" 
      viewBox="0 0 12 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform duration-700 ease-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="M10.293 0.626312L5.99997 4.91931L1.70697 0.626312L0.292969 2.04031L5.99997 7.74731L11.707 2.04031L10.293 0.626312Z" fill="currentColor"/>
    </svg>
  );

  const AdmissionsContent = () => (
    <Accordion type="single" collapsible className="space-y-4">
      {admissionsSteps.map((step) => (
        <AccordionItem value={step.key} key={step.key}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>{step.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  const EnrollmentContent = () => (
    <Accordion type="single" collapsible className="space-y-4">
      {enrollmentSteps.map((step) => (
        <AccordionItem value={step.key} key={step.key}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>{step.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div>
      <MainHeading
        description="Ready to get started? Here's everything you need to know about applying to Alpha School."
        variant="blue"
        taglineVariant="blue"
        tagline="Admission guide"
      >
        Applications are open!
      </MainHeading>
      
      <section className="alpha-section">
        <div className="space-y-16">
          {/* Admissions Application Section */}
          <div className="two-column-flex max-w-5xl mx-auto mb-24">
            {/* Left: Heading and Description */}
            <div className="flex-1">
              <h2 className="heading-style-h4 mb-4">Admission Application</h2>
              <p>
                Here's a step-by-step guide to making your application process smooth and simple.
              </p>
            </div>
            {/* Right: Accordion */}
            <div className="flex-1">
              <AdmissionsContent />
            </div>
          </div>

          {/* Enrollment Process Section */}
          <div className="two-column-flex max-w-5xl mx-auto">
            {/* Left: Heading and Description */}
            <div className="flex-1">
              <h2 className="heading-style-h4 mb-4">Enrollment Process</h2>
              <p>
                Next step – finalizing your enrollment and preparing for an incredible educational journey with Alpha.
              </p>
            </div>
            {/* Right: Accordion */}
            <div className="flex-1">
              <EnrollmentContent />
            </div>
          </div>
        </div>
      </section>

<Divider fill="white" backgroundColor="var(--color-bg-muted)" direction="up"/>
      <section className="alpha-section bg-[var(--color-bg-muted)]">
        <SectionHeading
          title="Important details"
          description="We would be delighted to answer any questions you may have about the admissions and enrollment process."
          buttonText="Contact Us"
          buttonHref="mailto:admissions@alpha.school"
          buttonVariant="darkGreen"
          className="text-[var(--color-dark-green)]"
        />
        <div className="alpha-card !p-[var(--space-xl)] bg-[var(--color-light-green)] max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Important Details */}
            <div className="space-y-8">
              {/* Deposit Section */}
              <div>
                <h3 className="heading-style-h5 text-[var(--color-dark-green)]">Deposit</h3>
                <p className="mb-4">
                  Once admission is offered to a student, a $1,000 non-refundable deposit is required to secure your student's spot at Alpha. <strong>This deposit will be deducted from your overall tuition balance.</strong>
                </p>
              </div>

              {/* Sibling Discounts Section */}
              <div>
                <h3 className="heading-style-h5 text-[var(--color-dark-green)]">Sibling Discounts</h3>
                <p className="mb-4">
                  We offer a 5% discount on tuition for the second child and beyond in families with two or more children enrolled at our school.
                </p>
              </div>

              {/* Admissions Downloads Section */}
              <div>
                <h3 className="text-[var(--color-dark-green)] heading-style-h5 mb-4">Admissions Downloads</h3>
                <div className="space-y-3">
                  <Button variant="outline" radius="small" href="https://docs.google.com/document/d/1KUh840CMAaCN3XNEJeoXvUclzel0y9Ub/edit?tab=t.0" className="icon-text-center uppercase text-[var(--color-dark-green)] outline-[var(--color-dark-green)]">
                      Previous School Records<span className="material-icons-outlined text-[20px]">file_download</span>
                  </Button>
                  <Button variant="darkGreen" radius="small" href="https://drive.google.com/file/d/1Qll3MKJwUUzkryhhNC8kp5PR14Sagfx1/view?usp=sharing" className="icon-text-center uppercase text-[var(--color-dark-green)] outline-[var(--color-dark-green)]">
                      Physical exam form<span className="material-icons-outlined text-[20px]">file_download</span>
                  </Button>
                  <Button variant="outline" radius="small" href="https://drive.google.com/file/d/1QK_fclEeSDZ_hPNUp1Ca6pI9E4rpo79L/view?usp=sharing" className="icon-text-center uppercase text-[var(--color-dark-green)] outline-[var(--color-dark-green)]">
                      Immunization form<span className="material-icons-outlined text-[20px]">file_download</span>
                  </Button>
                </div>
              </div>

              {/* Immunization Requirements Section */}
              
                <div>
                  <button
                    onClick={() => toggleSection('immunization-requirements')}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h4 className="heading-style-h6 text-[var(--color-dark-green)] centered-icon-text"><span className="material-icons-outlined mr-1">info</span>Immunization Requirements</h4>
                    <span className={`material-icons-outlined transition-transform duration-200 text-[var(--color-dark-green)] ${expandedSection === 'immunization-requirements' ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedSection === 'immunization-requirements' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-3 pt-4">
                      <div className="space-y-2">
                        <div className="flex flex-col items-start gap-2">
                          <p>Alpha School requires all students to comply with immunization requirements mandated by their respective state Departments of Health. Each student must provide the appropriate immunization certification or an approved exemption before enrollment. Exemptions, where permissible, must adhere to state-specific guidelines, which may vary by location.</p>
                       <p><strong>For more information on the required immunizations please visit the following:</strong></p> 
                        <div className="centered-icon-text indent-2"><span className="material-icons-outlined">file_download</span><a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-14.pdf" target="_blank" rel="noopener noreferrer">Texas</a></div>
                        <div className="centered-icon-text indent-2"><span className="material-icons-outlined">file_download</span><a href="https://www.floridahealth.gov/programs-and-services/immunization/children-and-adolescents/school-immunization-requirements/index.html" target="_blank" rel="noopener noreferrer">Florida</a></div>

                        <div className="centered-icon-text indent-2"><span className="material-icons-outlined">file_download</span><a href="https://cdphe.colorado.gov/schoolrequiredvaccines" target="_blank" rel="noopener noreferrer">Colorado</a></div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>

            {/* Right Column - Contact Information */}
            <div>
             <h4 className="heading-style-h5 text-[var(--color-dark-green)] mb-6">Alpha School Contacts</h4>
              
              <div className="space-y-8">
                {/* Alpha School Austin */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0 overflow-hidden"
                    style={{ backgroundImage: "url('/assets/school-contacts/austin-contact.webp')" }}
                  >
                  </div>
                  <div>
                    <h6 className="text-[var(--color-dark-green)] mb-1">Alpha School Austin</h6>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">account_circle</span>
                      Joanna Lovejoy
                      </p>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">mail_outline</span>
                      <a href="mailto:admissions@alpha.school">admissions@alpha.school</a>
                    </p>
                  </div>
                </div>

                {/* Alpha School Miami */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0 overflow-hidden"
                    style={{ backgroundImage: "url('/assets/school-contacts/miami-contact.webp')" }}
                  >
                  </div>
                  <div>
                    <h6 className="text-[var(--color-dark-green)] mb-1">Alpha School Miami</h6>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">account_circle</span>
                      Debby Lichtner
                    </p>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">mail_outline</span>
                      <a href="mailto:admissions.miami@alpha.school">admissions.miami@alpha.school</a>
                    </p>
                  </div>
                </div>

                {/* Alpha School Brownsville */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0 overflow-hidden"
                    style={{ backgroundImage: "url('/assets/school-contacts/brownsville-contact.webp')" }}
                  >
                  </div>
                  <div>
                    <h6 className="text-[var(--color-dark-green)] mb-1">Alpha School Brownsville</h6>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">account_circle</span>
                      Kathrine Ledesma
                    </p>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">mail_outline</span>
                      <a href="mailto:admissions.brownsville@alpha.school">admissions.brownsville@alpha.school</a>
                    </p>
                  </div>
                </div>

                {/* Alpha Expansion Schools */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0 overflow-hidden"
                    style={{ backgroundImage: "url('/assets/school-contacts/expansion-contact.webp')" }}
                  >
                  </div>
                  <div>
                    <h6 className="text-[var(--color-dark-green)] mb-1">Alpha Expansion Schools</h6>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">account_circle</span>
                      Rachel Goodlad
                    </p>
                    <p className="centered-icon-text">
                      <span className="material-icons-outlined mr-1">mail_outline</span>
                      <a href="mailto:rachel.goodlad@alpha.school">rachel.goodlad@alpha.school</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider fill="white" backgroundColor="var(--color-bg-muted)" direction="down"/>

      {/* Alpha School Campuses Section */}
      <section className="alpha-section">
        <SectionHeading
          title="Alpha School Campuses"
          description="Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville). Please select your desired campus location to find out more details."
          className="text-[var(--color-navy-blue)]"
          buttonText="View all campuses"
          buttonHref="/locations"
          buttonVariant="navyBlue"
        />
        
        <Carousel
          items={campuses}
          variant="scheme2"
          renderItem={(campus: CampusMetadata) => (
            <LocationCard
              key={campus.name}
              heroImage={campus.heroImage}
              name={campus.name}
              address={campus.address}
              tuition={campus.tuition}
              applicationStatus={campus.applicationStatus}
              buttonHref={campus.buttonHref}
              tuitionClassName=""
              className="h-full"
            />
          )}
  
         
        />
      </section>
      
    </div>
  );
}
