import React from "react";
import VideoPlayer from "../ui/video-player";
import SectionHeading from "../layout/headings/section-heading";

export default function KidsNeedSection() {
  return (
    <section className="alpha-section bg-[var(--color-bg-muted)]">
      <SectionHeading
      title="Your Kids need two things to learn"
      description=""
      className="text-[var(--color-navy-blue)]"></SectionHeading>
      <div className="flex flex-col md:flex-row gap-6 mb-[var(--space-4xl)] justify-center">
        <div className="alpha-card w-full min-w-0 bg-[var(--color-sky-blue)] rounded-2xl p-6 max-w-[500px]">
          <h3 className="mb-4 text-[var(--color-navy-blue)] display-headline !text-[35px]">ACADEMICS AT THE RIGHT LEVEL AND PACE</h3>
          <p className="text-[var(--color-navy-blue)]">Our AI tutor gives students 1:1 personalized education, providing coursework at their individual pace and the appropriate level. Students progress with concept-based mastery and without any knowledge gaps.</p>
        </div>
        <div className="alpha-card w-full min-w-0 bg-[var(--color-primary)] rounded-2xl p-6 max-w-[500px]">
          <h3 className="mb-4 text-[var(--color-sky-blue)] display-headline !text-[35px]">MOTIVATION WITH THE RIGHT REWARD</h3>
          <p className="text-[var(--color-sky-blue)]">We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning.</p>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <VideoPlayer
          videoUrl="https://www.youtube.com/embed/ENdAWT6N0V4"
          posterImage="/assets/feature-video-overlays/how-alpha-works.png"
          posterAlt="How Alpha School Works Preview"
          aspectRatio="16/9"
          className="max-w-5xl rounded-[var(--radius-lg)]"
     
        />
      </div>
    </section>
  );
} 