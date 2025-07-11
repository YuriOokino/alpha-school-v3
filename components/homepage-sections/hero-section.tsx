import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos";
import Divider from "@/components/layout/divider";

export default function HeroSection() {
  return (
    <>
      {/* Hero Content Block */}
      <div className="bg-white text-[var(--color-navy-blue)] pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="section-headline mb-6 max-w-4xl mx-auto">
          Crush academics. Build life skills. Love school.          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Campuses in Austin, Brownsville, and Miami—and many more new locations launching soon.
          </p>
          <div className="flex justify-center gap-4">
          <Button className="bg-[var(--color-navy-blue)]" href="/the-program">Alpha Program</Button>
          <Button className="bg-[var(--color-navy-blue)]" href="/locations">Alpha Campusese</Button>
          <Button className="bg-[var(--color-navy-blue)]" href="/events">Alpha Events</Button>
          </div>
        </div>
      </div>

      {/* Video Section with Overlapping Dividers */}
      <div className="relative">
        {/* Top Divider - overlaps from content to video */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Divider fill="white" direction="up" />
        </div>
        
        <div className="bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
            src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
          />
        </div>
        
        {/* Bottom Divider - overlaps video to logos section */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <Divider fill="white" direction="down" />
        </div>
      </div>

      {/* Featured In Section */}
      <div className="bg-white pb-16">
        <div className="container mx-auto text-center">
          <p className="text-sm uppercase tracking-wider mb-16 text-[var(--color-text-muted)]">As Featured In</p>
          <FeaturedLogos />
        </div>
      </div>
    </>
  );
} 