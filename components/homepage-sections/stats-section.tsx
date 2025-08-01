import React from "react";
import AnimatedSection from "@/components/ui/animated-section";

export default function StatsSection() {
  return (
    <section className="alpha-section bg-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-[var(--space-lg)] md:mb-[var(--space-xl)] gap-[var(--space-md)] md:gap-[var(--space-lg)]">
        <h2 className="m-0 text-[var(--color-navy-blue)]">REAL RESULTS FOR REAL LIFE SKILLS</h2>
        <p className="max-w-xl body-text m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <AnimatedSection animation="fade-up" delay={200}>
        <div
          className="w-full flex flex-col lg:flex-row text-[var(--color-navy-blue)] justify-between gap-[var(--space-md)] bg-[var(--color-primary-light)] rounded-[var(--radius-lg)] md:p-[var(--space-lg)] p-[var(--space-md)]"
        >
        <div className="flex-1 flex flex-col min-w-[200px]">
          <div className="display-headline !text-[80px] lg:!text-[100px] text-[var(--color-navy-blue)] mb-4 whitespace-nowrap">2x</div>
          <h3 className="heading-style-h4 mb-4">Times Faster</h3>
          <div className="body-text">Students learn at least 2x faster than their peers in traditional school.</div>
        </div>
        <div className="flex-1 flex flex-col min-w-[200px]">
          <div className="display-headline !text-[80px] lg:!text-[100px] text-[var(--color-navy-blue)] mb-4 whitespace-nowrap">6.5x</div>
          <h3 className="heading-style-h4 mb-4">Faster Growth</h3>
          <div className="body-text">The top 20% students show 6.5x growth</div>
        </div>
        <div className="flex-1 flex flex-col min-w-[200px]">
          <div className="display-headline !text-[80px] lg:!text-[100px] text-[var(--color-navy-blue)] mb-4 whitespace-nowrap">1-2%</div>
          <h3 className="heading-style-h4 mb-4 ">Top Ranking</h3>
          <div className="body-text">Our classes score in the the top 1-2% nationally across the board.</div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 