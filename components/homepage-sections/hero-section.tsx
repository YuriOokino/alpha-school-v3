import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos";
import Divider from "@/components/layout/divider";

export default function HeroSection() {
  return (
    <>
      {/* Hero Content Block */}
      <div className="bg-[var(--color-primary)] text-white pt-[var(--space-4xl)] pb-12">
        <div className="container mx-auto px-4 text-center animate-fade-in-blur">
          <h1 className="display-headline leading-[1.4] mb-6 max-w-[800px] mx-auto">
          Crush academics. Build life skills. Love school.</h1>
          <p className="md:text-xl mb-8 max-w-3xl mx-auto">
            Campuses in Austin, Brownsville, Miami, and many more new locations launching soon.
          </p>
          <div className="flex justify-center gap-4">
          <Button variant="alternate" size="small" href="/the-program">Alpha Program<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          <Button variant="alternate" size="small" href="/locations">Alpha Campuses<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          <Button variant="alternate" size="small" href="/events">Alpha Events<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative">
        {/* Top Divider - overlaps from content to video */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Divider fill="var(--color-primary)" direction="up" />
        </div>
        
        {/* Video */}
        <div className="bg-black relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
            src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
          />
          {/* Curved bottom overlay */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-white rotate-180" style={{
            clipPath: 'url(#dividerClipPath)'
          }}></div>
        </div>
        
        {/* SVG clip-path definition using our divider's path */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="dividerClipPath" clipPathUnits="objectBoundingBox">
              <path d="M0 0H1C1 0 0.697 0.8 0.5 0.8C0.303 0.8 0 0 0 0Z"/>
            </clipPath>
          </defs>
        </svg>
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