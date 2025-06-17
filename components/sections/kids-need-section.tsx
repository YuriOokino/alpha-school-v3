import FeatureCard from "@/components/features/feature-card"

export default function KidsNeedSection() {
  return (
    <section className="alpha-section">
      <FeatureCard
        media={
          <div className="w-full aspect-video rounded-[var(--radius-md)] overflow-hidden bg-black flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/ENdAWT6N0V4?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falpha.school&widgetid=1&forigin=https%3A%2F%2Falpha.school%2F&aoriginsup=1&gporigin=https%3A%2F%2Falpha.school%2Fnews%2F&vf=3"
              title="How Alpha School Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        }
        className="scheme-lightblue"
      >
        <h2 className="section-headline text-[#111827] mb-[var(--space-lg)]">Your kids need two things to learn</h2>
        <div className="mb-[var(--space-md)]">
          <h3 className="font-bold text-[#111827] mb-[var(--space-xs)]">Academics at the right level and pace</h3>
          <p className="body-text text-[#111827]">Our AI tutor gives students 1:1 personalized education, providing coursework at their individual pace and the appropriate level. Students progress with concept-based mastery and without any knowledge gaps.</p>
        </div>
        <div>
          <h3 className="font-bold text-[#111827] mb-[var(--space-xs)]">Motivation with the right reward</h3>
          <p className="body-text text-[#111827]">We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning.</p>
        </div>
      </FeatureCard>
    </section>
  )
} 