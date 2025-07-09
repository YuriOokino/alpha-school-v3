import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos";

export default function HeroSection() {
  return (
    <div className="relative pt-20 pb-16 rounded-b-[var(--radius-lg)] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-b-[var(--radius-lg)]"
          src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-center text-white">
        <h1 className="section-headline font-normal mb-6 max-w-4xl mx-auto drop-shadow-lg">
          A school where kids crush academics in 2 hours, build life skills through workshops, and thrive beyond the classroom.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
          Campuses in Austin, Brownsville, and Miami—and seven new locations launching soon.
        </p>
        <Button variant="default" href="/learn-more">Learn More</Button>
      </div>

      {/* Featured In Section */}
      <div className="relative z-10 container mx-auto px-4 pt-4 pb-16">
        <p className="text-center text-sm uppercase tracking-wider mb-8 text-white drop-shadow-lg">As Featured In</p>
        <FeaturedLogos />
      </div>
    </div>
  );
} 