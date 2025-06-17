import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedLogos from "@/components/features/FeaturedLogos";

export default function HeroSection() {
  return (
    <div className="relative pt-20 pb-16 rounded-b-[var(--radius-lg)] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-[var(--radius-lg)]"
        style={{ minHeight: '100%', minWidth: '100%' }}
        src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full z-0 rounded-b-[var(--radius-lg)]" style={{ backgroundColor: 'rgba(0, 0, 237, 0.75)' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-center text-white">
        <h1 className="section-headline font-normal mb-6 max-w-4xl mx-auto">
          A school where kids crush academics in 2 hours, build life skills through workshops, and thrive beyond the classroom.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Campuses in Austin, Brownsville, and Miami—and seven new locations launching soon.
        </p>
        <Button variant="default" href="/learn-more">Learn More</Button>
      </div>

      {/* Featured In Section */}
      <div className="relative z-10 container mx-auto px-4 pt-4 pb-16">
        <p className="text-center text-sm uppercase tracking-wider mb-8 text-white">As Featured In</p>
        <FeaturedLogos />
      </div>
    </div>
  );
} 