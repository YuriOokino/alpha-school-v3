"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MainHeading from "@/components/layout/headings/main-heading";
import VideoPlayer from "@/components/ui/video-player";
import Divider from "@/components/layout/divider";
import FeatureCard from "@/components/features/content-blocks/feature-card";
import Link from "next/link";

export default function TheProgramPage() {
  const [showVideo1, setShowVideo1] = useState(false);

  return (
    <main className="bg-[var(--color-bg-muted)]">
      <MainHeading
        variant="blue"
        tagline="The program"
        taglineVariant="blue"
        description="At Alpha, we are redefining education with three commitments to families:"
        actions={
          <>
            <Button variant="lightBlue">
              <Link href="#love-school">Love School</Link>
            </Button>
            <Button variant="lightBlue">
              <Link href="#learn-2x">Learn 2x in 2 hours</Link>
            </Button>
            <Button variant="lightBlue">
              <Link href="#lifeskills-workshops">Lifeskills Workshop</Link>
            </Button>
          </>
        }
      >
        Welcome to Alpha: Where Learning Transforms Lives
      </MainHeading>
      
      <section className="alpha-section">
        {/* Intro Section: horizontal layout, no card, no background */}
        <div className="two-column-flex mb-[var(--space-2xl)]">
          <h2 className="heading-style-h4">
            What if your child could crush academics in just 2 hours and spend the rest of their day unlocking limitless potential?
          </h2>
          <div>

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
            posterImage="/assets/feature-video-overlays/the-program.webp"
  
            posterAlt="How Alpha School Works"
            aspectRatio="16/9"
            className="w-full"
          />
</section>
          <Divider fill="white" direction="down" />
{ /* Commitments */}


      <section className="alpha-section bg-white">
        <div id="love-school" className="alpha-card bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] !p-[var(--space-lg)] rounded-[var(--radius-lg)] mb-16">
          <div className="flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto">
            <div className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] mx-auto">
              Commitment #1
            </div>
            <h2 className="heading-style-h3">Kids will love school</h2>
            <p className="text-lg">
              At Alpha, we believe that when engagement meets high standards, it nurtures a lifelong passion for learning.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left column: text */}
            <div className="flex-1">
              <ul className="list-disc pl-6 space-y-3">
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
            <div className="flex-1 flex items-center justify-center w-full">
              <VideoPlayer
                videoUrl="https://youtu.be/abqqOY47-NA"
                posterImage="/assets/feature-video-overlays/love-school.webp"
                aspectRatio="4/3"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>


<div id="learn-2x" className="alpha-card bg-[var(--color-light-green)] text-[var(--color-dark-green)] !p-[var(--space-lg)] rounded-[var(--radius-lg)] mb-16">
  <div className="flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto">
    <div className="tagline bg-[var(--color-dark-green)] text-[var(--color-light-green)] mx-auto">
      Commitment #2
    </div>
    <h2 className="heading-style-h3">learn 2x in 2 hours</h2>
    <p>
      Through advanced technologies and mastery-based learning, students at Alpha complete core subjects in just two hours daily.
    </p>
  </div>
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Left column: video */}
    <div className="flex-1 flex items-center justify-center w-full">
      <VideoPlayer
        videoUrl="https://youtu.be/Qm6M7_TAVR0"
        posterImage="/assets/feature-video-overlays/learn-2x.webp"
        aspectRatio="4/3"
        className="w-full max-w-md"
      />
    </div>
    {/* Right column: text */}
    <div className="flex-1">
      <p></p>
      <ul className="list-disc pl-6 space-y-3">
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
      <h6 className="font-semibold mt-6 mb-2">How we do it</h6>
      <p>
        Alpha combines adaptive AI for personalized 1:1 learning, mastery-based methods for deep understanding, and time management techniques like Pomodoro to keep students focused and thriving.
      </p>
    </div>
  </div>
</div>


<div id="lifeskills-workshops" className="alpha-card bg-[var(--color-sky-blue)] !p-[var(--space-lg)] text-[var(--color-navy-blue)] rounded-[var(--radius-lg)] mb-16">
          <div className="flex flex-col gap-2 mb-16 text-center align-center max-w-xl mx-auto">
            <div className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] mx-auto">
              Commitment #3
            </div>
            <h2 className="heading-style-h3">Lifeskills For the future</h2>
            <p>
              At Alpha, we believe that when engagement meets high standards, it nurtures a lifelong passion for learning.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left column: text */}
            <div className="flex-1">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Workshops with purpose:</strong> Every session includes innovative workshops focusing on our 24 Life Skills. From public speaking to coding, entrepreneurship, and outdoor education, these experiences build grit, creativity, and adaptability.
                </li>
                <li>
                  <strong>Experiential Learning:</strong> Whether it’s solving a 45-second pit stop challenge or exploring the breadth of global art styles, our workshops teach students how to navigate the real world with confidence.
                </li>
                <li>
                  <strong>Life-long Impact:</strong> From learning how to learn to mastering communication, students leave Alpha equipped for success in an ever-evolving world.
                </li>
              </ul>
            </div>
            {/* Right column: video */}
            <div className="flex-1 flex items-center justify-center w-full">
              <VideoPlayer
                videoUrl="https://youtu.be/770I1E2VWhk"
                posterImage="/assets/feature-video-overlays/lifeskills-workshops.webp"
                aspectRatio="4/3"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  );
} 