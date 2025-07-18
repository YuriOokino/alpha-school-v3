import MediaHeading from "@/components/layout/headings/media-heading"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/features/cards/event-card"
import { loadEvents } from "@/utils/content-loader.server"
import { CampusApplicationLink } from "@/components/ui/campus-application-link"
import VideoPlayer from "@/components/ui/video-player"
import EventsCarousel from "@/components/features/content-blocks/events-carousel"
import Divider from "@/components/layout/divider"
import StarseedsCard from "@/components/layout/campus-pages/starseeds-card"
import CampusGallerySection from "@/components/features/content-blocks/campus-gallery-section"
import WelcomeSection from "@/components/features/content-blocks/welcome-section"
import { shouldShowGoogleMapsLink, getGoogleMapsUrl } from "@/utils/campuses"

export default async function CampusPageTemplate() {
  const events = await loadEvents()
  
  // Configuration flags - customize these for each campus
  const hasGallery = true // Set to false if this campus doesn't have a gallery
  const hasStarseeds = true // Set to false if this campus doesn't have Starseeds program
  
  // Welcome section content - customize for each campus
  const welcomeLeftColumn = (
    <>
      <p className="mb-2">Alpha's [CITY NAME] campus offers an educational experience that revolutionizes education, inspiring and motivating kids to be limitless.</p>
      <p className="mb-2">With the power of AI and personalized learning, students complete core academics in just two hours each morning, leaving afternoons for workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
    </>
  )
  
  const welcomeRightColumn = (
    <>
      <p className="mb-2">Alpha is built around the philosophy that kids who love school work harder, step out of their comfort zones, connect with each other, and take ownership of their growth and future.</p>
      <p>[CAMPUS HISTORY] - Alpha [CITY NAME] is now delivering on their commitments to every student: love school, learn 2h a day, and master life skills.</p>
    </>
  )
  
  const galleryImages = [
    { src: "/assets/locations/[city]/gallery/[city]-1.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-2.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-3.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-4.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-5.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-6.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-7.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-8.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-9.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-10.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-11.webp", alt: "[CITY NAME] campus photo" },
    { src: "/assets/locations/[city]/gallery/[city]-12.webp", alt: "[CITY NAME] campus photo" }
  ]

  return (
    <main className="bg-[var(--color-bg-muted)]">
      {/* Main Title Section */}
      <MediaHeading
        variant="blue"
        tagline="Alpha School"
        media={<img src="assets/locations/[city]/hero/[city]-hero.webp" alt="[CITY NAME] Campus" />}
      >
        Private School in [CITY NAME]
        <p className="font-semibold">PK - 8th Grade</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">location_on</span>[FULL ADDRESS]</p>
        <p className="mb-2">
          <strong>Email:</strong> admissions.[city]@alpha.school
        </p>
        <CampusApplicationLink 
          campusName="[CITY NAME]" 
          className="centered-icon-text mt-[var(--space-md)] bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]"
        >
          Apply Today<span className="material-icons-outlined">arrow_forward</span>
        </CampusApplicationLink>
      </MediaHeading>

      {/* Welcome Section */}
      <WelcomeSection 
        cityName="[CITY NAME]"
        leftColumn={welcomeLeftColumn}
        rightColumn={welcomeRightColumn}
      />
      
      {/* Optional Video Section */}
      {/* Uncomment and customize if this campus has a main video
      <div className="alpha-section">
        <div className="flex justify-center">
          <VideoPlayer
            videoUrl="https://youtu.be/VIDEO_ID"
            posterImage="/assets/feature-video-overlays/[city]-video-preview.webp"
            posterAlt="[CITY NAME] Campus Video Preview"
            aspectRatio="16/9"
            className="max-w-5xl rounded-[var(--radius-lg)]"
          />
        </div>
      </div>
      */}

      {/* Curve Divider */}
      <div className="bg-[var(--color-bg-muted)]">
        <Divider direction="down" fill="white" />
      </div>

      {/* Photo Gallery Section - Always set up, conditionally hidden */}
      {hasGallery && (
        <CampusGallerySection 
          images={galleryImages}
          cityName="[CITY NAME]"
          className={!hasGallery ? 'hidden' : ''}
        />
      )}

      {/* Starseeds Section - Always set up, conditionally hidden */}
      {hasStarseeds && (
        <section className={`alpha-section bg-white ${!hasStarseeds ? 'hidden' : ''}`}>
          <StarseedsCard 
            cityName="[CITY NAME]"
            email="admissions.[city]@alpha.school"
          />
        </section>
      )}

      {/* Campus & Resources Section */}
      <section className="alpha-section bg-white">
        <div className="campus-info">
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">[CITY NAME] Campus</h2>
            <ul className="body-text mb-4">
              <li>
                {/* Only show Google Maps link if address is not a placeholder */}
                {shouldShowGoogleMapsLink("[FULL ADDRESS]") ? (
                  <a 
                    href={getGoogleMapsUrl("[FULL ADDRESS]")}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                          <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                        </svg>
                        <strong>PK - 8th Grade</strong>
                      </div>
                      [FULL ADDRESS]
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                        <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                      </svg>
                      <strong>PK - 8th Grade</strong>
                    </div>
                    [FULL ADDRESS]
                  </div>
                )}
              </li>
            </ul>
            <p className="body-text mb-2">
              <strong>Email:</strong> admissions.[city]@alpha.school
            </p>
            <CampusApplicationLink 
              campusName="[CITY NAME]" 
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
              <Button variant="outline" radius="small" className="uppercase outline-[var(--color-dark-green)] icon-text-center mr-4" href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank">
                Tuition Overview
                <span className="material-icons-outlined">file_download</span>
              </Button>
              <Button radius="small" className="mr-4 bg-[var(--color-dark-green)] text-[var(--color-light-green)] uppercase" href="/video-library">
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
          e.locationTag.toLowerCase().includes("[city]") || 
          e.title.toLowerCase().includes("[city]") || 
          e.address.toLowerCase().includes("[city]")
        ).length > 0 ? (
          <EventsCarousel 
            events={events} 
            locationFilter="[city]" 
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
            <p className="body-text mb-4">No events currently scheduled for [CITY NAME].</p>
            <Button variant="outline" href="/events">
              View all events
            </Button>
          </div>
        )}
      </section>
    </main>
  )
} 