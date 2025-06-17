"use client";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/features/feature-card";
import { useState } from "react";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import Link from "next/link";

export default function TheProgramPage() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);

  return (
    <>
      <MainHeading
        description="At Alpha, we are redefining education with three commitments to families:"
        actions={
          <>
            <Button variant="default">
              <Link href="#love-school">Love School</Link>
            </Button>
            <Button variant="default">
              <Link href="#learn-2x">Learn 2X in 2 Hours</Link>
            </Button>
            <Button variant="default">
              <Link href="#lifeskills-workshops">Lifeskills Workshops</Link>
            </Button>
          </>
        }
      >
        Welcome to Alpha: Where Learning Transforms Lives
      </MainHeading>
      <section className="alpha-section">
        {/* Intro Section: horizontal layout, no card, no background */}
        <section className="flex flex-col md:flex-row gap-[var(--space-xl)] items-stretch mb-[var(--space-2xl)]">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[20px] text-[hsl(var(--color-primary))] mb-4">
              What if your child could crush academics in just 2 hours and spend the rest of their day unlocking limitless potential?
            </h2>
            <p className="mb-4">
              Alpha's 2hr Learning model harnesses the power of AI technology to provide each student with 1:1 learning, accelerating mastery and giving them the gift of time.
            </p>
            <p className="mb-4">
              With core academics completed in the mornings, they can use their afternoons to explore tons of workshops that allow them to pursue their passions and learn real-world skills at school.
            </p>
            <p>
              <strong>The truth is clear:</strong> Your kids can accomplish twice as much if they're not sitting in a one-size-fits-all classroom for 6 hours. Alpha students are limitless, and we've built a limitless environment that unlocks their potential.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[#888] flex items-center justify-center">
              {!showVideo1 && (
                <>
                  <img
                    src="/assets/feature-video-overlays/How-our-School-Works.webp"
                    alt="Preview Overlay"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={() => setShowVideo1(true)}
                    aria-label="Play video"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 0C24.673 0 0 24.673 0 55C0 85.327 24.673 110 55 110C85.327 110 110 85.327 110 55C110 24.673 85.327 0 55 0ZM55 99C30.7395 99 11 79.2605 11 55C11 30.7395 30.7395 11 55 11C79.2605 11 99 30.7395 99 55C99 79.2605 79.2605 99 55 99Z" fill="white"/>
                        <path d="M38.5 82.5L82.5 55L38.5 27.5V82.5Z" fill="white"/>
                      </svg>
                    </div>
                  </button>
                </>
              )}
              {showVideo1 && (
                <iframe
                  src="VIDEO_URL_1"
                  title="Alpha School Day Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-[var(--radius-md)]"
                />
              )}
            </div>
          </div>
        </section>
        <div className="my-[var(--space-xl)]" />
        <FeatureCard
          id="love-school"
          media={
            <div className="relative w-full h-full">
              {!showVideo2 && (
                <>
                  <img
                    src="/assets/feature-video-overlays/Kids-Will-Love-School.webp"
                    alt="Kids Will Love School Preview"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={() => setShowVideo2(true)}
                    aria-label="Play video"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 0C24.673 0 0 24.673 0 55C0 85.327 24.673 110 55 110C85.327 110 110 85.327 110 55C110 24.673 85.327 0 55 0ZM55 99C30.7395 99 11 79.2605 11 55C11 30.7395 30.7395 11 55 11C79.2605 11 99 30.7395 99 55C99 79.2605 79.2605 99 55 99Z" fill="white"/>
                        <path d="M38.5 82.5L82.5 55L38.5 27.5V82.5Z" fill="white"/>
                      </svg>
                    </div>
                  </button>
                </>
              )}
              {showVideo2 && (
                <iframe
                  src="VIDEO_URL_2"
                  title="Kids Will Love School Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-[var(--radius-md)]"
                />
              )}
            </div>
          }
          className="scheme-lightblue"
        >
          <span className="tag-blue mb-6">ALPHA SCHOOL | COMMITMENT #1</span>
          <h2 className="text-[2rem] font-extrabold mb-4">Kids Will Love School</h2>
          <p className="mb-4">At Alpha, we believe that when engagement meets high standards, it nurtures a lifelong passion for learning.</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Student-Centered Approach:</strong> Our students are captains of their educational journey. Regular surveys and 1:1 guide interactions ensure their voices are heard and needs are met.</li>
            <li><strong>Exceptional Guides:</strong> From "Limitless Launches" to personalized motivational models, our guides make every student feel valued and motivated.</li>
            <li><strong>Designed for Joy:</strong> Through creative field trips like Mobile Squad and unique in-school programs, we create an environment where students thrive and are excited to take on challenges.</li>
          </ul>
        </FeatureCard>
        <div className="my-[var(--space-xl)]" />
        <FeatureCard
          id="learn-2x"
          media={
            <div className="relative w-full h-full">
              {!showVideo3 && (
                <>
                  <img
                    src="/assets/feature-video-overlays/The-Results.webp"
                    alt="The Results Preview"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={() => setShowVideo3(true)}
                    aria-label="Play video"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 0C24.673 0 0 24.673 0 55C0 85.327 24.673 110 55 110C85.327 110 110 85.327 110 55C110 24.673 85.327 0 55 0ZM55 99C30.7395 99 11 79.2605 11 55C11 30.7395 30.7395 11 55 11C79.2605 11 99 30.7395 99 55C99 79.2605 79.2605 99 55 99Z" fill="white"/>
                        <path d="M38.5 82.5L82.5 55L38.5 27.5V82.5Z" fill="white"/>
                      </svg>
                    </div>
                  </button>
                </>
              )}
              {showVideo3 && (
                <iframe
                  src="VIDEO_URL_3"
                  title="The Results Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-[var(--radius-md)]"
                />
              )}
            </div>
          }
          className="scheme-blue"
        >
          <span className="tag-blue mb-6">ALPHA SCHOOL | COMMITMENT #2</span>
          <h2 className="text-[2rem] font-extrabold mb-4">Learn 2X in 2 Hours</h2>
          <p className="mb-4">Through advanced technologies and mastery-based learning, students at Alpha complete core subjects in just two hours daily.</p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li><strong>2.6x Growth:</strong> On average, Alpha students grow 2.6 times faster than peers on nationally normed MAP tests.</li>
            <li><strong>99th Percentile:</strong> The majority of students consistently outperform national averages.</li>
            <li><strong>Top Performers:</strong> Our best students achieve up to 6.5x growth.</li>
          </ul>
          <h3 className="font-bold mb-2">How We Do It:</h3>
          <p>Alpha combines adaptive AI for personalized 1:1 learning, mastery-based methods for deep understanding, and time management techniques like Pomodoro to keep students focused and thriving.</p>
        </FeatureCard>
        <div className="my-[var(--space-xl)]" />
        <FeatureCard
          id="lifeskills-workshops"
          media={
            <div className="relative w-full h-full">
              {!showVideo4 && (
                <>
                  <img
                    src="/assets/feature-video-overlays/Lifeskills-Workshops.webp"
                    alt="Lifeskills Workshops Preview"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={() => setShowVideo4(true)}
                    aria-label="Play video"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 0C24.673 0 0 24.673 0 55C0 85.327 24.673 110 55 110C85.327 110 110 85.327 110 55C110 24.673 85.327 0 55 0ZM55 99C30.7395 99 11 79.2605 11 55C11 30.7395 30.7395 11 55 11C79.2605 11 99 30.7395 99 55C99 79.2605 79.2605 99 55 99Z" fill="white"/>
                        <path d="M38.5 82.5L82.5 55L38.5 27.5V82.5Z" fill="white"/>
                      </svg>
                    </div>
                  </button>
                </>
              )}
              {showVideo4 && (
                <iframe
                  src="VIDEO_URL_4"
                  title="Lifeskills Workshops Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-[var(--radius-md)]"
                />
              )}
            </div>
          }
          className="scheme-lightblue"
        >
          <span className="tag-blue mb-6">ALPHA SCHOOL | COMMITMENT #3</span>
          <h2 className="text-[2rem] font-extrabold mb-4">Life Skills for the Future</h2>
          <p className="mb-4">Alpha isn't just about academics. We're preparing students for life by teaching essential, actionable skills.</p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li><strong>Workshops with Purpose:</strong> Every session includes innovative workshops focusing on our 24 Life Skills. From public speaking to coding, entrepreneurship, and outdoor education, these experiences build grit, creativity, and adaptability.</li>
            <li><strong>Experiential Learning:</strong> Whether it's solving a 45-second pit stop challenge or exploring the breadth of global art styles, our workshops teach students how to navigate the real world with confidence.</li>
            <li><strong>Life-Long Impact:</strong> From learning how to learn to mastering communication, students leave Alpha equipped for success in an ever-evolving world.</li>
          </ul>
        </FeatureCard>
      </section>
      <WhatsNextSection />
    </>
  );
} 