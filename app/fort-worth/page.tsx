import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/features/feature-card"
import LocationCard from "@/components/features/location-card"
import WhatsNextSection from "@/components/sections/whats-next-section"
import EventCard from "@/components/features/event-card"
import { events } from "@/content/events"
import MainHeading from "@/components/layout/main-heading"

export const metadata: Metadata = {
  title: "Alpha School | Private School in Fort Worth",
  description: "Join Alpha School Fort Worth, where we're redefining education with our revolutionary 2 Hour Learning model and life skills workshops.",
}

export default async function FortWorthPage() {
  return (
    <main>
      {/* Main Title Section */}
      <MainHeading>
        Alpha School | Private School in Fort Worth
      </MainHeading>

      {/* Welcome Section */}
      <section className="alpha-section">
        <FeatureCard
          className="scheme-lightblue"
          media={
            <img 
              src="/assets/feature-video-overlays/fort-worth-video-preview.webp" 
              alt="Alpha School Fort Worth Campus" 
              className="w-full h-full object-cover rounded-[var(--radius-md)]"
            />
          }
        >
          <h2 className="heading-style-h2 mb-4">Welcome to the Future of Education</h2>
          <p className="mb-8">Alpha's Fort Worth campus offers an educational experience that revolutionizes education. With the power of AI and personalized learning, students complete core academics in just two hours each morning. Afternoons are dedicated to workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
          <p className="mb-8">At Alpha, we believe that students thrive when they are engaged, challenged, and inspired by their learning environment. Our innovative model fosters a love of learning, encourages independence, and equips students with the tools they need to succeed academically and in life.</p>
          <p>Bringing Alpha School's three commitments—love school, learn 2x in 2 hours, and master life skills—to your city. Alpha Fort Worth is launching in Fall 2025 and now accepting applications.</p>
        </FeatureCard>
      </section>

      {/* Campus & Resources Section */}
      <section className="alpha-section">
        <div className="scheme-pink w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-start bg-[var(--color-bg-muted)]">
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">Fort Worth Campus</h2>
            <ul className="body-text mb-4">
              <li>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                      <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                    </svg>
                    <strong>K - 8th Grade</strong>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=3300+Bryant+Irvin+Rd,+Fort+Worth,+TX+76109" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    3300 Bryant Irvin Rd., Fort Worth, TX 76109
                  </a>
                </div>
              </li>
            </ul>
            <p className="body-text mb-2">
              <strong>Email:</strong> admissions.fortworth@alpha.school
            </p>
            <Button variant="default" className="mt-[var(--space-md)]" href="/application">
              Apply today!
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
              <Button variant="outline" className="w-full flex justify-between items-center" href="/downloads/Alpha School Fort Worth Flipbook.pdf" target="_blank">
                View Brochure
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
        <h2 className="heading-style-h2 text-center mb-4">Events & Programs</h2>
        <p className="body-text text-center mb-8 max-w-2xl mx-auto">
          Explore our showcases to tour the campus, and enjoy our camps and afterschool programs offering exciting, hands-on experiences for kids.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap gap-[var(--space-xl)] justify-center">
          {events.filter(e => e.location.toLowerCase().includes("fort worth")).map((event, idx) => (
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
            const fortWorthEvents = events.filter(e => e.location.toLowerCase().includes("fort worth"));
            const noEventsContainer = document.querySelector('.no-events-container');
            const eventsContainer = document.querySelector('.flex.flex-col');
            
            if (fortWorthEvents.length === 0) {
              noEventsContainer.style.display = 'block';
              eventsContainer.style.display = 'none';
            }
          });
        `
      }} />

      <WhatsNextSection />
    </main>
  )
} 
