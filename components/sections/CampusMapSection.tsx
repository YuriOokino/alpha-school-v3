"use client";
import dynamic from "next/dynamic";

const CampusMap = dynamic(() => import("@/components/features/CampusMap"), { ssr: false });

export default function CampusMapSection() {
  return (
    <section className="alpha-section mb-24">
      <h2 className="section-headline text-center text-[#111827] mb-[var(--space-lg)]">Choose Your Campus</h2>
      <CampusMap />
    </section>
  );
} 