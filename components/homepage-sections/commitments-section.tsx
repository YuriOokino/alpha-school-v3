import { Button } from "@/components/ui/button";
import React from "react";

const commitments = [
  {
    title: "Love School",
    description: "Alpha students love school – it's engaging, inspiring, and built for them.",
    link: "/the-program#love-school"
  },
  {
    title: "Learn 2x in 2 Hours",
    description: "Alpha students learn twice as fast as their peers and rank in the top 1% nationwide.",
    link: "/the-program#learn-2x"
  },
  {
    title: "Learn Life Skills",
    description: "Alpha students spend afternoons developing life skills and exploring their personas.",
    link: "/the-program#lifeskills-workshops"
  }
];

export default function CommitmentsSection() {
  return (
    <section className="alpha-section bg-white">
      <div className="w-full bg-[var(--color-navy-blue)] rounded-[var(--radius-lg)] p-[var(--space-lg)] flex flex-col gap-[var(--space-xl)]">
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mb-[var(--space-md)] gap-4">
          <h2 className="text-[var(--color-sky-blue)] m-0">Alpha's 3 Commitments</h2>
          <Button href="/the-program" className="bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] centered-icon-text self-start">
            More about our program
            <span className="material-icons-outlined">arrow_forward</span>
          </Button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)] justify-start items-stretch">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex flex-col items-start bg-[var(--color-sky-blue)] rounded-[var(--radius-lg)] p-6 w-full">
              <div className="w-full flex justify-end mb-2">
                <Button href={commitment.link} size="icon" className="block bg-[var(--color-navy-blue)]" style={{ transform: 'rotate(-45deg)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"/>
                  </svg>
                </Button>
              </div>
              <div className="w-full flex items-center mb-[var(--space-md)] h-[80px]">
                {index === 0 ? (
                  <svg width="74" height="79" viewBox="0 0 74 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-navy-blue)]">
                    <path d="M4 44.9292L64.1408 44.9292" stroke="currentColor" strokeWidth="6.62685" strokeLinecap="round"/>
                    <path d="M8.85242 14.15C8.85242 12.32 10.3359 10.8365 12.1658 10.8365H57.5078C59.3377 10.8365 60.8212 12.32 60.8212 14.15V43.6522H8.85242V14.15Z" fill="currentColor"/>
                    <path d="M59.6951 2.21387C61.2478 2.21392 62.785 2.52215 64.2176 3.12109C65.6423 3.7168 66.935 4.58894 68.0223 5.68555H68.0233L68.0418 5.7041H68.0408C69.1375 6.79225 70.0097 8.08578 70.6053 9.51172C71.204 10.9452 71.5115 12.4835 71.5115 14.0371C71.5115 15.5909 71.2041 17.1298 70.6053 18.5635C70.0082 19.993 69.1327 21.289 68.032 22.3789L68.033 22.3799L53.1971 37.2275C52.822 37.6028 52.3127 37.8135 51.782 37.8135C51.2516 37.8133 50.7429 37.6027 50.368 37.2275L35.5359 22.3799V22.3789C34.4358 21.2888 33.5614 19.992 32.9647 18.5625C32.3663 17.129 32.0584 15.5905 32.0584 14.0371C32.0585 12.4839 32.3664 10.946 32.9647 9.5127C33.5616 8.08281 34.4354 6.78464 35.5359 5.69434C36.6253 4.59315 37.9225 3.71856 39.3514 3.12109C40.784 2.52217 42.3212 2.2139 43.8738 2.21387C45.4267 2.21387 46.9645 2.52204 48.3973 3.12109C49.6436 3.64221 50.7888 4.37493 51.784 5.28418C52.7793 4.37474 53.9252 3.64229 55.1717 3.12109C56.6044 2.52207 58.1423 2.21387 59.6951 2.21387Z" fill="currentColor" stroke="var(--color-navy-blue)" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M18.6439 58L25.3239 41.7369" stroke="currentColor" strokeWidth="6.62685" strokeLinecap="round"/>
                    <path d="M50.2437 58L43.0721 41.7369" stroke="currentColor" strokeWidth="6.62685" strokeLinecap="round"/>
                    <path d="M34.8291 58L34.8291 40.2733" stroke="currentColor" strokeWidth="6.62685" strokeLinecap="round"/>
                  </svg>
                ) : index === 1 ? (
                  <svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-navy-blue)]">
                    <path d="M22.5022 1.80264C20.8818 3.40421 20.8927 6.02427 22.5264 7.61233L37.3272 22L22.5264 36.3877C20.8927 37.9757 20.8818 40.5958 22.5022 42.1974C24.0774 43.7542 26.6086 43.7648 28.1968 42.2211L45.3114 25.5853C47.3314 23.6219 47.3314 20.3781 45.3114 18.4147L28.1968 1.7789C26.6086 0.235229 24.0774 0.245784 22.5022 1.80264Z" fill="currentColor"/>
                    <path d="M7.64599 1.7789C6.05789 0.235231 3.52665 0.245785 1.95147 1.80264C0.331056 3.40421 0.341935 6.02427 1.97559 7.61233L16.7764 22L1.9756 36.3877C0.341936 37.9757 0.331057 40.5958 1.95147 42.1974C3.52665 43.7542 6.05788 43.7648 7.64599 42.2211L24.7607 25.5853C26.7807 23.6219 26.7807 20.3781 24.7607 18.4147L7.64599 1.7789Z" fill="currentColor"/>
                  </svg>
                ) : index === 2 ? (
                  <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-navy-blue)]">
                    <circle cx="12" cy="13" r="12" fill="currentColor"/>
                    <circle cx="40" cy="41" r="12" fill="currentColor"/>
                    <circle cx="12" cy="41" r="12" fill="currentColor"/>
                    <path d="M49.2105 10.1053V6.31579C49.2105 4.92253 48.0775 3.78947 46.6842 3.78947H42.8947C42.8947 1.70021 41.1945 0 39.1053 0C37.016 0 35.3158 1.70021 35.3158 3.78947H31.5263C30.1331 3.78947 29 4.92253 29 6.31579V11.2181L29.8324 11.52C30.8455 11.8863 31.5263 12.8413 31.5263 13.8947C31.5263 14.9482 30.8455 15.9032 29.8324 16.2695L29 16.5714V21.4737C29 22.8669 30.1331 24 31.5263 24H36.4286L36.7305 23.1676C37.0968 22.1545 38.0518 21.4737 39.1053 21.4737C40.1587 21.4737 41.1137 22.1545 41.48 23.1676L41.7819 24H46.6842C48.0775 24 49.2105 22.8669 49.2105 21.4737V17.6842C51.2998 17.6842 53 15.984 53 13.8947C53 11.8055 51.2998 10.1053 49.2105 10.1053ZM49.2105 15.1579H46.6842L46.6804 21.4737H43.4657C42.5676 19.9326 40.9116 18.9474 39.1053 18.9474C37.2989 18.9474 35.6429 19.9326 34.7448 21.4737H31.5263V18.2552C33.0674 17.3571 34.0526 15.7011 34.0526 13.8947C34.0526 12.0884 33.0674 10.4324 31.5263 9.53432V6.31579H37.8421V3.78947C37.8421 3.45446 37.9752 3.13317 38.2121 2.89629C38.449 2.6594 38.7703 2.52632 39.1053 2.52632C39.4403 2.52632 39.7616 2.6594 39.9985 2.89629C40.2353 3.13317 40.3684 3.45446 40.3684 3.78947V6.31579H46.6842V12.6316H49.2105C49.5455 12.6316 49.8668 12.7647 50.1037 13.0015C50.3406 13.2384 50.4737 13.5597 50.4737 13.8947C50.4737 14.2297 50.3406 14.551 50.1037 14.7879C49.8668 15.0248 49.5455 15.1579 49.2105 15.1579Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <>
                    <span className="block w-5 h-5 rounded-full bg-[var(--color-sky-blue)]" />
                    <span className="block w-5 h-5 rounded-full bg-[var(--color-sky-blue)]" />
                    <span className="block w-5 h-5 rounded-full bg-[var(--color-sky-blue)]" />
                    <span className="block w-5 h-5 rounded-full bg-[var(--color-sky-blue)]" />
                  </>
                )}
              </div>
              <h3 className="text-[var(--color-navy-blue)] heading-style-h4 max-[1239px]:heading-style-h6 mb-4">{commitment.title}</h3>
              <p className="text-[var(--color-navy-blue)] mb-4">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 