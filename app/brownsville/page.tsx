import MainHeading from "@/components/layout/main-heading"
import WhatsNextSection from "@/components/sections/whats-next-section"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/features/feature-card"
import Gallery from "@/components/features/gallery"
import EventCard from "@/components/features/event-card"
import { events } from "@/content/events"

export default async function BrownsvillePage() {

  return (
    <main>
      {/* Main Title Section */}
      <MainHeading>
        Alpha School | Private School in Brownsville
      </MainHeading>

      {/* Welcome Section */}
      <section className="alpha-section">
        <FeatureCard
          className="scheme-lightblue"
          media={{
            video: "https://youtu.be/Da9pAmD2CxQ?si=I0JryXdWXMzUhpF0",
            poster: "/assets/feature-video-overlays/brownsville-video-preview.webp"
          }}
        >
          <h2 className="heading-style-h2 mb-4">Welcome to the Future of Education</h2>
          <p className="mb-4">
            Alpha's Brownsville campus offers an educational experience that revolutionizes education, inspiring and motivating kids to be limitless. With the power of AI and personalized learning, students complete core academics in just two hours each morning, leaving afternoons for workshops that nurture creativity, teach real-world skills, and fuel individual passions.
          </p>
          <p className="mb-4">
            Alpha is built around the philosophy that kids who love school work harder, step out of their comfort zones, connect with each other, and take ownership of their growth and future.
          </p>
          <p>
            Opened in 2022 to serve the South Texas community, Alpha Brownsville is now the academic network's fastest-growing campus, delivering on their commitments to every student: love school, learn 2h a day, and master life skills.
          </p>
        </FeatureCard>
      </section>

      {/* Photo Gallery Section */}
      <section className="alpha-section">
        <Gallery 
          images={[
            { src: "/assets/brownsville/brownsville-1.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-2.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-3.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-4.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-5.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-6.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-7.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-8.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-9.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-10.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-11.webp", alt: "Brownsville campus photo" },
            { src: "/assets/brownsville/brownsville-12.webp", alt: "Brownsville campus photo" }
          ]} 
        />
      </section>

      {/* Starseeds Section */}
      <section className="alpha-section">
        <FeatureCard
          className="bg-[var(--color-bg-muted)]"
          media={
            <img
              src="/assets/starseed.webp"
              alt="Starseeds at Alpha Brownsville"
              className="w-full h-full object-cover"
              draggable={false}
            />
          }
        >
          <h2 className="heading-style-h2 mb-4">Starseeds (PreK3 & PreK4)</h2>
          <p className="mb-4">
            At Alpha Brownsville Starseeds, we believe every child is born curious, capable, and ready to explore the world. Our PreK3 & PreK4 program blends structured learning with joyful discovery, offering a balance of reading, phonics, math, art, foreign language, music, movement, STEAM, and even aquatic confidence! With a nurturing environment that fosters independence, creativity, and social-emotional growth, your little one will love learning every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="mailto:admissions.brownsville@alpha.school">Find Out More</Button>
            <Button variant="outline">View Brochure</Button>
          </div>
        </FeatureCard>
      </section>

      {/* Campus & Resources Section */}
      <section className="alpha-section">
        <div className="scheme-pink w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-start bg-[var(--color-bg-muted)]">
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">Brownsville Campus</h2>
            <ul className="body-text mb-4">
              <li><strong>PK - 8th Grade</strong></li>
              <li>591 N. Central Avenue Brownsville, TX 78521</li>
            </ul>
            <p className="body-text mb-2">
              <strong>Email:</strong> admissions.brownsville@alpha.school
            </p>
            <Button variant="default" className="mt-[var(--space-md)]" href="/application">
              Apply Today!
            </Button>
          </div>
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">Quick Resources</h2>
            <div className="flex flex-col gap-3 mb-4">
              <Button variant="maroon" className="w-full flex justify-between items-center text-white" href="/admission">
                Admission Guide
                <span className="ml-2 flex-shrink-0" aria-hidden="true">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.293 12.793L6.707 14.207L13.414 7.49997L6.707 0.792969L5.293 2.20697L9.586 6.49997H0V8.49997H9.586L5.293 12.793Z" fill="currentColor"/>
                    </svg>
                </span>
              </Button>
              <Button variant="maroon" className="w-full flex justify-between items-center text-white" href="/video-library">
                Video Library
                <span className="ml-2 flex-shrink-0" aria-hidden="true">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.293 12.793L6.707 14.207L13.414 7.49997L6.707 0.792969L5.293 2.20697L9.586 6.49997H0V8.49997H9.586L5.293 12.793Z" fill="currentColor"/>
                    </svg>
                </span>
              </Button>
              <Button variant="outline" className="w-full flex justify-between items-center" href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank">
                Tuition Overview
                <span className="ml-2 flex-shrink-0" aria-hidden="true">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9L11 5.25H8.75V0H7.25V5.25H5L8 9Z" fill="currentColor"/>
                    <path d="M14 10.5H2V5.25H0.5V10.5C0.5 11.3273 1.17275 12 2 12H14C14.8273 12 15.5 11.3273 15.5 10.5V5.25H14V10.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </Button>
              <Button variant="outline" className="w-full flex justify-between items-center" href="/downloads/Alpha School - Sample School Schedule.pdf" target="_blank">
                School Schedule
                <span className="ml-2 flex-shrink-0" aria-hidden="true">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9L11 5.25H8.75V0H7.25V5.25H5L8 9Z" fill="currentColor"/>
                    <path d="M14 10.5H2V5.25H0.5V10.5C0.5 11.3273 1.17275 12 2 12H14C14.8273 12 15.5 11.3273 15.5 10.5V5.25H14V10.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </Button>
              <Button variant="outline" className="w-full flex justify-between items-center" href="/downloads/Alpha School 25-26 Calendar.pdf" target="_blank">
                24/25 Calendar
                <span className="ml-2 flex-shrink-0" aria-hidden="true">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9L11 5.25H8.75V0H7.25V5.25H5L8 9Z" fill="currentColor"/>
                    <path d="M14 10.5H2V5.25H0.5V10.5C0.5 11.3273 1.17275 12 2 12H14C14.8273 12 15.5 11.3273 15.5 10.5V5.25H14V10.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </Button>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Events & Programs Section */}
      <section className="alpha-section">
        <h2 className="heading-style-h2 text-center mb-4">EVENTS & PROGRAMS</h2>
        <p className="body-text text-center mb-8 max-w-2xl mx-auto">
          Explore our showcases to tour the campus, and enjoy our camps and afterschool programs offering exciting, hands-on experiences for kids.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap gap-[var(--space-xl)] justify-center">
          {events.filter(e => e.location.toLowerCase().includes("brownsville")).map((event, idx) => (
            <div className="max-w-md w-full" key={event.url + idx}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
        <div className="text-center no-events-container" style={{ display: 'none' }}>
          <Button variant="outline" href="/events">
            View events
          </Button>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const events = ${JSON.stringify(events)};
            const brownsvilleEvents = events.filter(e => e.location.toLowerCase().includes("brownsville"));
            const noEventsContainer = document.querySelector('.no-events-container');
            const eventsContainer = document.querySelector('.flex.flex-col');
            
            if (brownsvilleEvents.length === 0) {
              noEventsContainer.style.display = 'block';
              eventsContainer.style.display = 'none';
            }
          });
        `
      }} />

      {/* WhatsNextSection */}
      <WhatsNextSection />
    </main>
  )
} 