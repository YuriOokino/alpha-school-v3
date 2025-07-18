"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import MainHeading from "@/components/layout/headings/main-heading";
import VideoPlayer from "@/components/ui/video-player";
import Divider from "@/components/layout/divider";
import FeatureCard from "@/components/features/content-blocks/feature-card";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const useInView = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return [ref, hasAnimated] as const;
};

export default function TheProgramPage() {
  const [showVideo1, setShowVideo1] = useState(false);
  const isMobile = useIsMobile();
  const [ref1, hasAnimated1] = useInView();
  const [ref2, hasAnimated2] = useInView();
  const [ref3, hasAnimated3] = useInView();

  return (
    <main className="bg-[var(--color-bg-muted)]">
      <MainHeading
        variant="blue"
        tagline="The program"
        taglineVariant="blue"
        description="At Alpha, we are redefining education with three commitments to families:"
        actions={
          <>
            <Button variant="outline" size="small" className="outline-white text-white"
              href="#love-school">Love School<span className="material-icons-outlined">arrow_circle_right</span>
            </Button>
            <Button variant="outline" size="small" className="outline-white text-white"
              href="#learn-2x">Learn 2x in 2 hours<span className="material-icons-outlined">arrow_circle_right</span>
            </Button>
              <Button variant="outline" size="small" className="outline-white text-white"
              href="#lifeskills-workshops">Lifeskills Workshop<span className="material-icons-outlined">arrow_circle_right</span> 
            </Button>
          </>
        }
      >
        Welcome to Alpha: Where Learning Transforms Lives
      </MainHeading>
      
      <section className="alpha-section">
        {/* Intro Section: horizontal layout, no card, no background */}
        <div className={`${isMobile ? 'flex flex-col gap-6' : 'two-column-flex'} mb-[var(--space-2xl)]`}>
          <h2 className={`heading-style-h3 text-[var(--color-navy-blue)] ${isMobile ? 'text-2xl leading-tight' : ''}`}>
            What if your child could crush academics in just 2 hours?
          </h2>
          <div className={isMobile ? 'space-y-4' : ''}>
            <p className="mb-4">
              Alpha's 2hr Learning model harnesses the power of AI technology to provide each student with 1:1 learning, accelerating mastery and giving them the gift of time.
            </p>
            <p className="mb-4">
              With core academics completed in the mornings, they can use their afternoons to explore tons of workshops that allow them to pursue their passions and learn real-world skills at school.
            </p>
            
              <h6>The truth is clear</h6>
              <p>Your kids can accomplish twice as much if they're not sitting in a one-size-fits-all classroom for 6 hours. Alpha students are limitless, and we've built a limitless environment that unlocks their potential.
            </p>
          </div>
          </div>
          <VideoPlayer
            videoUrl="https://www.youtube.com/watch?v=udRcIlMwqb0"
            posterImage="/assets/feature-video-overlays/how-alpha-works.png"
  
            posterAlt="How Alpha School Works"
            aspectRatio="16/9"
            className="w-full"
          />
</section>
          <Divider fill="white" direction="down" />
{ /* Commitments */}

      <section className="alpha-section bg-white">
        <div 
          ref={ref1}
          className={`alpha-card !p-[var(--space-lg)] bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] mb-16 ${
            hasAnimated1 ? 'animate-fade-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto ${isMobile ? 'mb-4' : ''}`}>
            <div className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] mx-auto mb-4">
              Commitment #1
            </div>
            <h2 className={`display-headline ${isMobile ? 'text-3xl leading-tight' : ''}`}>Kids will love school</h2>
            <p>
              At Alpha, we believe that when engagement meets high standards, it nurtures a lifelong passion for learning.
            </p>
          </div>
          <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row gap-8'} items-start`}>
            {/* Left column: text */}
            <div className="flex-1">
              <ul className={`list-disc pl-6 space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                <li>
                  <strong>Student centered approach:</strong> Our students are captains of their educational journey. Regular surveys and 1:1 guide interactions ensure their voices are heard and needs are met.
                </li>
                <li>
                  <strong>Exceptional guides:</strong> From "Limitless Launches" to personalized motivational models, our guides make every student feel valued and motivated.
                </li>
                <li>
                  <strong>Designed for joy:</strong> Through creative field trips like Mobile Squad and unique in-school programs, we create an environment where students thrive and are excited to take on challenges.
                </li>
              </ul>
            </div>
            {/* Right column: video */}
            <div className={`flex-1 flex items-center justify-center w-full ${isMobile ? 'order-first' : ''}`}>
              <VideoPlayer
                videoUrl="https://youtu.be/abqqOY47-NA"
                posterImage="/assets/the-program-overlays/the-alpha-guides.png"
                aspectRatio="4/3"
                className="w-full max-w-md"
                posterAlt="The Alpha Guides"
                textOverlay="The Alpha Guides"
              />
            </div>
          </div>
        </div>

        <div 
          ref={ref2}
          className={`alpha-card !p-[var(--space-lg)] bg-[var(--color-light-green)] text-[var(--color-dark-green)] mb-16 ${
            hasAnimated2 ? 'animate-fade-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto ${isMobile ? 'mb-8' : ''}`}>
            <div className="tagline bg-[var(--color-dark-green)] text-[var(--color-light-green)] mx-auto mb-4">
              Commitment #2
            </div>
            <h2 className={`display-headline ${isMobile ? 'text-3xl leading-tight' : ''}`}>learn 2x in 2 hours</h2>
            <p>
              Through advanced technologies and mastery-based learning, students at Alpha complete core subjects in just two hours daily.
            </p>
          </div>
          <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row gap-8'} items-start`}>
            {/* Left column: video */}
            <div className={`flex-1 flex items-center justify-center w-full ${isMobile ? 'order-first' : ''}`}>
              <VideoPlayer
                videoUrl="https://youtu.be/Qm6M7_TAVR0"
                posterImage="/assets/the-program-overlays/the-results.png"
                aspectRatio="4/3"
                className="w-full max-w-md"
                posterAlt="The Results"
                textOverlay="The Results"
              />
            </div>
            {/* Right column: text */}
            <div className="flex-1">
              <ul className={`list-disc pl-6 space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                <li>
                  <strong>2.6x Growth:</strong> On average, Alpha students grow 2.6 times faster than peers on nationally normed MAP tests.
                </li>
                <li>
                  <strong>Top Performers:</strong> Our best students achieve up to 6.5x growth.
                </li>
                <li>
                  <strong>Top 1-2% nationally:</strong> The majority of students consistently outperform national averages.
                </li>
              </ul>
              <h6 className={`font-semibold mt-4 mb-2 ${isMobile ? 'text-base' : ''}`}>How we do it</h6>
              <p className={isMobile ? 'text-sm' : ''}>
                Alpha combines adaptive AI for personalized 1:1 learning, mastery-based methods for deep understanding, and time management techniques like Pomodoro to keep students focused and thriving.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={ref3}
          className={`alpha-card !p-[var(--space-lg)] bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] mb-16 ${
            hasAnimated3 ? 'animate-fade-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto ${isMobile ? 'mb-8' : ''}`}>
            <div className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] mx-auto mb-4">
              Commitment #3
            </div>
            <h2 className={`display-headline ${isMobile ? 'text-3xl leading-tight' : ''}`}>Lifeskills For the future</h2>
            <p>
              At Alpha, we believe that when engagement meets high standards, it nurtures a lifelong passion for learning.
            </p>
          </div>
          <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row gap-8'} items-start`}>
            {/* Left column: text */}
            <div className="flex-1">
              <ul className={`list-disc pl-6 space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                <li>
                  <strong>Workshops with purpose:</strong> Every session includes innovative workshops focusing on our 24 Life Skills. From public speaking to coding, entrepreneurship, and outdoor education, these experiences build grit, creativity, and adaptability.
                </li>
                <li>
                  <strong>Experiential Learning:</strong> Whether it's solving a 45-second pit stop challenge or exploring the breadth of global art styles, our workshops teach students how to navigate the real world with confidence.
                </li>
                <li>
                  <strong>Life-long Impact:</strong> From learning how to learn to mastering communication, students leave Alpha equipped for success in an ever-evolving world.
                </li>
              </ul>
            </div>
            {/* Right column: video */}
            <div className={`flex-1 flex items-center justify-center w-full ${isMobile ? 'order-first' : ''}`}>
              <VideoPlayer
                videoUrl="https://youtu.be/770I1E2VWhk"
                posterImage="/assets/the-program-overlays/lifeskills-workshops.png"
                aspectRatio="4/3"
                className="w-full max-w-md"
                posterAlt="Lifeskills Workshops"
                textOverlay="Lifeskills Workshops"
              />
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
} 