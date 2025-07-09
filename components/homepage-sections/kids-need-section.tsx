import React from "react";

export default function KidsNeedSection() {
  return (
    <section className="alpha-section">
      <h2 className="section-headline mb-[var(--space-lg)]">YOUR KIDS NEED TWO THINGS TO LEARN</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-[var(--space-xl)] justify-center">
        <div className="alpha-card flex-1 min-w-[280px] bg-[#D6E4FF] rounded-2xl p-6 max-w-[500px]">
          <h3 className="mb-2 text-[#222]">ACADEMICS AT THE RIGHT LEVEL AND PACE</h3>
          <p className="text-[#222]">Our AI tutor gives students 1:1 personalized education, providing coursework at their individual pace and the appropriate level. Students progress with concept-based mastery and without any knowledge gaps.</p>
        </div>
        <div className="alpha-card flex-1 min-w-[280px] bg-[var(--color-primary)] rounded-2xl p-6 max-w-[500px]">
          <h3 className="mb-2 text-white">MOTIVATION WITH THE RIGHT REWARD</h3>
          <p className="text-white">We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl aspect-video rounded-[var(--radius-lg)] overflow-hidden bg-black flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/ENdAWT6N0V4?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falpha.school&widgetid=1&forigin=https%3A%2F%2Falpha.school%2F&aoriginsup=1&gporigin=https%3A%2F%2Falpha.school%2Fnews%2F&vf=3"
            title="How Alpha School Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0 rounded-[var(--radius-lg)]"
          />
        </div>
      </div>
    </section>
  );
} 