"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import FeatureCard from "@/components/features/feature-card";
import SimpleCarousel from "@/components/features/simple-carousel";
import LocationCard from "@/components/features/location-card";
import SectionHeading from "@/components/features/section-heading";
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
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${items.length * cardWidth}%`,
            transform: `translateX(-${activeIndex * cardWidth}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{ width: `${cardWidth}%` }}
              className="px-2"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      {showNavigation && items.length > visibleCards && (
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={prevItem}
            className="rounded-full p-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button
            variant="outline"
            onClick={nextItem}
            className="rounded-full p-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
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
          <Button variant="default">Schedule Tour</Button>
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
          <Button variant="default">Start Application</Button>
          <Button variant="default">Download Form</Button>
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
          Your child will spend a day with our students to experience our unique learning approach and see if Alpha School is the right fit.
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="default">Book Shadow Day</Button>
          <Button variant="default">Learn More</Button>
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
          Schedule a personal meeting with your dedicated admissions coordinator to discuss your family's needs and expectations.
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="default">Schedule Meeting</Button>
          <Button variant="default">Contact Team</Button>
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
          Complete enrollment paperwork, submit required documents, and secure your child's spot at Alpha School.
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="default">Complete Enrollment</Button>
          <Button variant="default">Upload Documents</Button>
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
          Join our community! Receive orientation materials, meet your child's guides, and prepare for the start of an amazing educational journey.
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="default">Get Orientation</Button>
          <Button variant="default">Meet Guides</Button>
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
              image={campus.image}
              title={campus.name}
              address={campus.address}
              tuition={campus.tuition}
              buttonText={campus.buttonText}
              buttonHref={campus.buttonHref}
              newsHeading={campus.newsHeading}
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
