import MediaHeading from "@/components/layout/headings/media-heading"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/features/cards/event-card"
import { loadEvents } from "@/utils/content-loader.server"
import { CampusApplicationLink } from "@/components/ui/campus-application-link"
import VideoPlayer from "@/components/ui/video-player"
import EventsCarousel from "@/components/features/content-blocks/events-carousel"
import Divider from "@/components/layout/divider"
import StarseedsCard from "@/components/features/content-blocks/starseeds-card"
import CampusGallerySection from "@/components/features/content-blocks/campus-gallery-section"
import WelcomeSection from "@/components/features/content-blocks/welcome-section"
import { campuses } from "@/content/campuses"

export default async function NashvillePage() {
  const events = await loadEvents()
  const campus = campuses.find(c => c.name === "Nashville")
  
  if (!campus) {
    throw new Error("Nashville campus not found in campus data")
  }
  
  // Configuration flags - customize these for each campus
  const hasGallery = false // Set to false if this campus doesn't have a gallery
  const hasStarseeds = true // Set to false if this campus doesn't have Starseeds program
  
  // Welcome section content - customize for each campus
  const welcomeLeftColumn = (
    <>
      <p className="mb-2">Alpha's Nashville campus offers an educational experience that revolutionizes education. With the power of AI and personalized learning, students complete core academics in just two hours each morning. Afternoons are dedicated to workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
    </>
  )
  
  const welcomeRightColumn = (
    <>
      <p className="mb-2">At Alpha, we believe that students thrive when they are engaged, challenged, and inspired by their learning environment. Our innovative model fosters a love of school, encourages independence, and equips students with the tools they need to succeed academically and in life.</p>
      <p>Bringing Alpha School's three commitments—love school, learn 2x in 2 hours, and master life skills—to your city. <strong>Alpha Nashville is launching soon and now accepting applications.</strong></p>
    </>
  )
  
  const galleryImages = [
    { src: "/assets/locations/nashville/gallery/nashville-1.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-2.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-3.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-4.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-5.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-6.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-7.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-8.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-9.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-10.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-11.webp", alt: "Nashville campus photo" },
    { src: "/assets/locations/nashville/gallery/nashville-12.webp", alt: "Nashville campus photo" }
  ]

  return (
    <main className="bg-[var(--color-bg-muted)]">
      {/* Main Title Section */}
      <MediaHeading
        variant="blue"
        tagline="Alpha School"
        media={<img src="/assets/locations/nashville/hero/nashville-hero.webp" alt="Nashville Campus" />}
      >
        Private School in Nashville
        <p className="font-semibold">{campus.grades}</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined">location_on</span>{campus.address}</p>
        <p className="mb-2">
          <strong>Email:</strong> {campus.email}
        </p>
        <CampusApplicationLink 
          campusName="Nashville" 
          className="centered-icon-text mt-[var(--space-md)] bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]"
        >
          Apply Today<span className="material-icons-outlined">arrow_forward</span>
        </CampusApplicationLink>
      </MediaHeading>

      {/* Welcome Section */}
      <WelcomeSection 
        cityName="Nashville"
        leftColumn={welcomeLeftColumn}
        rightColumn={welcomeRightColumn}
      />
      
      {/* Optional Video Section */}
      {/* Uncomment and customize if this campus has a main video
      <div className="alpha-section">
        <div className="flex justify-center">
          <VideoPlayer
            videoUrl="https://youtu.be/VIDEO_ID"
            posterImage="/assets/feature-video-overlays/nashville-video-preview.webp"
            posterAlt="Nashville Campus Video Preview"
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
          cityName="Nashville"
          className={!hasGallery ? 'hidden' : ''}
        />
      )}

      {/* Starseeds Section - Always set up, conditionally hidden */}
      {hasStarseeds && (
        <section className={`alpha-section bg-white ${!hasStarseeds ? 'hidden' : ''}`}>
          <StarseedsCard 
            cityName="Nashville"
            email={campus.email}
          />
        </section>
      )}

      {/* Campus & Resources Section */}
      <section className="alpha-section bg-white">
        <div className="campus-info">
          <div className="flex-1">
            <h2 className="heading-style-h2 mb-4">Nashville Campus</h2>
            <ul className="body-text mb-4">
              <li>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00006 12.3335C10.2061 12.3335 12.0001 10.5395 12.0001 8.3335C12.0001 6.1275 10.2061 4.3335 8.00006 4.3335C5.79406 4.3335 4.00006 6.1275 4.00006 8.3335C4.00006 10.5395 5.79406 12.3335 8.00006 12.3335ZM8.00006 6.3335C9.10306 6.3335 10.0001 7.2305 10.0001 8.3335C10.0001 9.4365 9.10306 10.3335 8.00006 10.3335C6.89706 10.3335 6.00006 9.4365 6.00006 8.3335C6.00006 7.2305 6.89706 6.3335 8.00006 6.3335Z" fill="currentColor"/>
                      <path d="M7.42009 20.1475C7.58934 20.2684 7.79211 20.3333 8.00009 20.3333C8.20806 20.3333 8.41084 20.2684 8.58009 20.1475C8.88409 19.9325 16.0291 14.7735 16.0001 8.3335C16.0001 3.9225 12.4111 0.333496 8.00009 0.333496C3.58909 0.333496 8.80377e-05 3.9225 8.80377e-05 8.3285C-0.028912 14.7735 7.11609 19.9325 7.42009 20.1475ZM8.00009 2.3335C11.3091 2.3335 14.0001 5.0245 14.0001 8.3385C14.0211 12.7765 9.61209 16.7615 8.00009 18.0685C6.38909 16.7605 1.97909 12.7745 2.00009 8.3335C2.00009 5.0245 4.69109 2.3335 8.00009 2.3335Z" fill="currentColor"/>
                    </svg>
                    <strong>{campus.grades}</strong>
                  </div>
                  {campus.address}
                </div>
              </li>
            </ul>
            <p className="body-text mb-2">
              <strong>Email:</strong> {campus.email}
            </p>
            <CampusApplicationLink 
              campusName="Nashville" 
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
          e.locationTag.toLowerCase().includes("nashville") || 
          e.title.toLowerCase().includes("nashville") || 
          e.address.toLowerCase().includes("nashville")
        ).length > 0 ? (
          <EventsCarousel 
            events={events} 
            locationFilter="nashville" 
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
            <p className="body-text mb-4">No events currently scheduled for Nashville.</p>
            <Button variant="outline" href="/events">
              View all events
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}