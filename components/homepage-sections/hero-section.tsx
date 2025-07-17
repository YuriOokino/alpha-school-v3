import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedLogos from "@/components/features/content-blocks/FeaturedLogos";
import Divider from "@/components/layout/divider";

export default function HeroSection() {
  return (
    <>
      {/* Hero Content Block */}
      <div className="bg-[var(--color-primary)] text-white pt-[var(--space-xl)] md:pt-[var(--space-4xl)] pb-[var(--space-md)] md:pb-12">
        <div className="container mx-auto px-4 text-center animate-fade-in-blur">
          <h1 className="display-headline leading-[1.4] mb-6 max-w-[800px] mx-auto">
          Crush academics. Build life skills. Love school.</h1>
          <p className="md:text-xl mb-8 max-w-3xl mx-auto">
            Campuses in Austin, Brownsville, Miami, and many more new locations launching soon.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <Button variant="alternate" size="small" href="/the-program">Alpha Program<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          <Button variant="alternate" size="small" href="/locations">Alpha Campuses<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          <Button variant="alternate" size="small" href="/events">Alpha Events<span className="material-icons-outlined !m-0 ml-2">arrow_circle_right</span></Button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative">
        {/* Top Divider - overlaps from content to video */}
        <div className="absolute top-0 left-0 w-full md:h-24 h-16 bg-[var(--color-primary)] z-20" style={{
          clipPath: 'url(#dividerClipPath)'
        }}></div>
        <style jsx>{`
          @media (max-width: 768px) {
            .absolute.top-0 {
              clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 60%, 0 60%);
            }
            .absolute.bottom-0 {
              clip-path: polygon(0 100%, 100% 100%, 100% 40%, 50% 40%, 0 40%);
            }
          }
        `}</style>
        
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
          <div className="absolute bottom-0 left-0 w-full md:h-24 h-16 bg-white rotate-180" style={{
            clipPath: 'url(#dividerClipPath)'
          }}></div>
        </div>
        
        {/* SVG clip-path definitions */}
        <svg width="0" height="0" style={{ position: 'absolute' }} preserveAspectRatio="xMidYMid meet">
          <defs>
            <clipPath id="topDividerClipPath" clipPathUnits="objectBoundingBox">
              <path d="M0 0H1C1 0 0.697 0.8 0.5 0.8C0.303 0.8 0 0 0 0Z"/>
            </clipPath>
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