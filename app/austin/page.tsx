import MediaHeading from "@/components/layout/headings/media-heading"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/features/cards/event-card"
import { loadEvents } from "@/utils/content-loader.server"
import { CampusApplicationLink } from "@/components/ui/campus-application-link"
import VideoPlayer from "@/components/ui/video-player"
import EventsCarousel from "@/components/features/content-blocks/events-carousel"

export default async function AustinPage() {
  const events = await loadEvents()
  
  return (
    <main className="bg-[var(--color-bg-muted)]">
      {/* Main Title Section */}
      <MediaHeading
        variant="blue"
        tagline="Alpha School"
        media={<img src="assets/locations/austin/hero/austin-hero.webp" alt="Austin Campus" />}
      >
        Private School in Austin
        <p className="font-semibold">PK4 - 6th Grade</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">location_on</span>1201 Spyglass Drive, Austin, Texas 78746</p>
        
        <p className="font-semibold">
          7th - 8th Grade</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">location_on</span>201 Colorado Street, Austin, Texas 78701</p>
        <p className="mb-2">
          <strong>Email:</strong> admissions@alpha.school
        </p>
        <CampusApplicationLink 
          campusName="Austin" 
          className="centered-icon-text mt-[var(--space-md)] bg-[var(--color-sky-blue)] text-black hover:bg-[var(--color-sky-blue)]"
        >
          Apply Today<span className="material-icons-outlined">arrow_forward</span>
        </CampusApplicationLink>
      </MediaHeading>

      {/* Welcome Section */}
      <div className="alpha-section">
        <div className="grid grid-rows-2 md:grid-cols-2 gap-8 mb-[var(--space-2xl)]">
          <div>
            <h2 className="heading-style-h2 mb-4">Welcome to the Future of Education</h2>
          </div>
          <div></div>
          <div>
            <p className="mb-2">Imagine a school where students love to learn.</p>
            <p className="mb-2">At Alpha Austin, our revolutionary 2 Hour Learning model combines cutting-edge technology with personalized, one-on-one academic instruction, empowering students to rank in the top 1-2% nationally.</p>
          </div>
          <div>
            <p className="mb-2">Afternoons focus on life skills through hands-on workshops, preparing students to thrive beyond academics. With our guides, students receive tailored support to meet their unique potential. At Alpha Austin, we're not just preparing students for tests; we're preparing them for limitless futures.</p>
            <p>Alpha Austin is open and enrolling. Come see how we're redefining education – join us for a showcase!</p>
          </div>
        </div>
        <div className="flex justify-center">
          <VideoPlayer
            videoUrl="https://player.vimeo.com/video/941700697"
            posterImage="/assets/feature-video-overlays/austin-video-preview.webp"
            posterAlt="Austin Campus Video Preview"
            aspectRatio="16/9"
            className="max-w-5xl rounded-[var(--radius-lg)]"
          />
        </div>
      </div>
      {/* Curve Divider */}
      <div className="bg-[var(--color-bg-muted)]">
        <svg width="1440" height="83" viewBox="0 0 1440 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 83H1440C1440 83 1003.04 0 720 0C436.96 0 0 83 0 83Z" fill="white"/>
        </svg>
      </div>
      {/* Campus & Resources Section */}
      <section className="alpha-section bg-white">
        <div className="bg-[var(--color-light-green)] w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-start bg-[var(--color-bg-muted)]">
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">Austin Campus</h2>
            <ul className="body-text mb-4">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=1201+Spyglass+Drive+Austin+Texas+78746" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                        <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                      </svg>
                      <strong>PK4 - 6th Grade</strong>
                    </div>
                    1201 Spyglass Drive, Austin, Texas 78746
                  </div>
                </a>
              </li>
              <li className="mt-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=201+Colorado+Street+Austin+Texas+78701" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                        <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                      </svg>
                      <strong>7th - 8th Grade</strong>
                    </div>
                    201 Colorado Street, Austin, Texas 78701
                  </div>
                </a>
              </li>
            </ul>
            <p className="body-text mb-2">
              <strong>Email:</strong> admissions@alpha.school
            </p>
            <CampusApplicationLink 
          campusName="Austin" 
          className="centered-icon-text mt-[var(--space-md)] bg-[var(--color-dark-green)]"
        >
          Apply Today<span className="material-icons-outlined">arrow_forward</span>
        </CampusApplicationLink>
          </div>
          <div className="flex-1">
            <h2 className="heading-style-h5 mb-4">Quick Resources</h2>
            <div className="space-y-2">
              <Button radius="small" className="mr-4 bg-[var(--color-dark-green)] text-[var(--color-light-green)] uppercase" href="/admission">
                Admission Guide
              </Button>
              <Button variant="outline" radius="small" className="icon-text-center outline-[var(--color-dark-green)] uppercase" href="/downloads/Alpha School - Sample School Schedule.pdf">
                School schedule
                <span className="material-icons-outlined">file_download</span>
              </Button>
              <Button variant="outline" radius="small" className="uppercase outline-[var(--color-dark-green)]uppercase icon-text-center mr-4" href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank">
                Tuition Overview
                <span className="material-icons-outlined">file_download</span>
              </Button>
              <Button radius="small"className="mr-4 bg-[var(--color-dark-green)] text-[var(--color-light-green)] uppercase" href="/video-library">
                Video library
              </Button>
              <Button variant="outline" radius="small" className="mr-4 outline-[var(--color-dark-green)] icon-text-centered uppercase" href="/downloads/Alpha School 25-26 Calendar.pdf" target="_blank">
                24/25 Calendar
                <span className="material-icons-outlined">file_download</span>
              </Button>
              <Button variant="outline" radius="small" className="outline-[var(--color-dark-green)] icon-text-centered uppercase" href="#" target="_blank">
                View brochure
                <span className="material-icons-outlined">file_download</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Programs Section */}
      <section className="alpha-section bg-white">
        <h2 className="heading-style-h2 text-center mb-4">Events & Programs</h2>
        <p className="body-text text-center mb-8 max-w-2xl mx-auto">
          Explore our showcases to tour the campus, and enjoy our camps and afterschool programs offering exciting, hands-on experiences for kids.
        </p>
        {events.filter(e => 
          e.locationTag.toLowerCase().includes("austin") || 
          e.title.toLowerCase().includes("austin") || 
          e.address.toLowerCase().includes("austin")
        ).length > 0 ? (
          <EventsCarousel 
            events={events} 
            locationFilter="austin" 
            className="bg-[var(--color-bg-muted)]"
            navigationDotsColor={{
              active: "bg-[var(--color-navy-blue)]",
              inactive: "bg-[#B0B0B0]"
            }}
            navigationArrowsColor={{
              background: "bg-[var(--color-navy-blue)]",
              icon: "white"
            }}
          />
        ) : (
          <div className="text-center">
            <p className="body-text mb-4">No events currently scheduled for Austin.</p>
            <Button variant="outline" href="/events">
              View all events
            </Button>
          </div>
        )}
      </section>
    </main>
  )
} 