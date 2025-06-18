"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainHeading from "@/components/layout/headings/main-heading";
import WhatsNextSection from "@/components/layout/navigation/whats-next-section";
import FeatureCard from "@/components/features/content-blocks/feature-card";
import SimpleCarousel from "@/components/ui/simple-carousel";
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

// Auto-play carousel component based on SimpleCarousel
function AutoPlayCarousel({
  items,
  renderItem,
  visibleCards = 3,
  className = "",
  showNavigation = true
}: {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  visibleCards?: number;
  className?: string;
  showNavigation?: boolean;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const cardWidth = 100 / visibleCards;

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * cardWidth}%)`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${cardWidth}%` }}
                className="px-2 flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showNavigation && (
        <div className="flex items-center justify-between mt-4">
          {/* Dots */}
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevItem}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-muted-hover)]"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextItem}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-muted-hover)]"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
          <Button variant="default" href="mailto:admissions@alpha.school" target="_blank">Schedule Tour</Button>
          <Button variant="default" href="/events">View Showcase</Button>
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
          <Button href="#" variant="default">Apply now</Button>
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
          <h4 className="font-semibold mb-2">Required Documents to Submit Before Shadow Day or Student Observation:</h4>
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
          <h4 className="font-semibold mb-2">Required Documents to Sign:</h4>
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
          <h4 className="font-semibold mb-2">What's next?</h4>
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
    <div>
      <h2 className="text-3xl font-bold mb-4">Admissions Application</h2>
      <p className="text-lg mb-8 text-gray-600">
        Here's a step-by-step guide to making your application process smooth and simple.
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        {admissionsSteps.map((step) => (
          <AccordionItem value={step.key} key={step.key}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  const EnrollmentContent = () => (
    <div>
      <h2 className="text-3xl font-bold mb-4">Enrollment Process</h2>
      <p className="text-lg mb-8 text-gray-600">
        Next step – finalizing your enrollment and preparing for an incredible educational journey with Alpha.
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        {enrollmentSteps.map((step) => (
          <AccordionItem value={step.key} key={step.key}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  const PlaceholderMedia = ({ title }: { title: string }) => (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
      <div className="text-center">
        <div className="text-4xl mb-2">📋</div>
        <div className="text-sm">{title} Media</div>
        <div className="text-xs opacity-60">Placeholder</div>
      </div>
    </div>
  );

  return (
    <div>
      <MainHeading
        variant="primary"
        description="Ready to get started? Here's everything you need to know about applying to Alpha School."
      >
        Applications are open!
      </MainHeading>
      
      <section className="alpha-section">
        <div className="space-y-8">
          
          {/* Admissions Application FeatureCard */}
          <FeatureCard 
            media={<PlaceholderMedia title="Admissions" />}
          >
            <AdmissionsContent />
          </FeatureCard>

          {/* Enrollment Process FeatureCard */}
          <FeatureCard 
            media={<PlaceholderMedia title="Enrollment" />}
          >
            <EnrollmentContent />
          </FeatureCard>
          
        </div>
      </section>

      {/* New Alpha Section with Colored Content Card */}
      <section className="alpha-section">
        <h2 className="section-headline text-center mb-8">Important details</h2>
        <div className="section-content scheme-lightblue">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Important Details */}
            <div className="space-y-8">
              {/* Deposit Section */}
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-[var(--color-primary)]">Deposit</h3>
                <p className="text-[var(--color-text-main)] mb-4">
                  Once admission is offered to a student, a $1,000 non-refundable deposit is required to secure your student's spot at Alpha. <strong>This deposit will be deducted from your overall tuition balance.</strong>
                </p>
              </div>

              {/* Sibling Discounts Section */}
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-[var(--color-primary)]">Sibling Discounts</h3>
                <p className="text-[var(--color-text-main)] mb-4">
                  We offer a 5% discount on tuition for the second child and beyond in families with two or more children enrolled at our school.
                </p>
              </div>

              {/* Immunization Requirements Section */}
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-[var(--color-primary)] flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-primary)]">
                    <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM9 5V11H11V5H9ZM9 13V15H11V13H9Z" fill="currentColor"/>
                  </svg>
                  Immunization Requirements
                </h3>
              </div>

              {/* Admissions Downloads Section */}
              <div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-[var(--color-primary)]">Admissions Downloads</h3>
                <div className="space-y-2">
                  <div>
                    <a href="#" className="text-[var(--color-primary)] hover:underline transition-colors">
                      Previous School Records
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-[var(--color-primary)] hover:underline transition-colors">
                      Physical Exam Form
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-[var(--color-primary)] hover:underline transition-colors">
                      Immunization Form
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <p className="text-[var(--color-text-main)] mb-8">
                We would be delighted to answer any questions you may have about the admissions and enrollment process.
              </p>
              
              <div className="space-y-8">
                {/* Alpha School Austin */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-400"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Alpha School Austin</h4>
                    <p className="text-[var(--color-text-main)]">Joanna Lovejoy | admissions@alpha.school</p>
                  </div>
                </div>

                {/* Alpha School Miami */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-400"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Alpha School Miami</h4>
                    <p className="text-[var(--color-text-main)]">Debby Lichtner | admissions.miami@alpha.school</p>
                  </div>
                </div>

                {/* Alpha School Brownsville */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-400"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Alpha School Brownsville</h4>
                    <p className="text-[var(--color-text-main)]">Kathrine Ledesma | admissions.brownsville@alpha.school</p>
                  </div>
                </div>

                {/* Alpha Expansion Schools */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-400"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Alpha Expansion Schools</h4>
                    <p className="text-[var(--color-text-main)]">Rachel Goodlad | rachel.goodlad@alpha.school</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alpha School Campuses Section */}
      <section className="alpha-section">
        <SectionHeading
          title="Alpha School Campuses"
          description="Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville). Please select your desired campus location to find out more details."
        />
        
        <AutoPlayCarousel
          items={campuses}
          renderItem={(campus) => (
            <LocationCard
              key={campus.name}
              heroImage={campus.heroImage}
              name={campus.name}
              address={campus.address}
              tuition={campus.tuition}
              applicationStatus={campus.applicationStatus}
              buttonHref={campus.buttonHref}
              className="h-full"
            />
          )}
          visibleCards={3.25}
          className="mb-8"
        />
      </section>
      
      <WhatsNextSection />
    </div>
  );
}
