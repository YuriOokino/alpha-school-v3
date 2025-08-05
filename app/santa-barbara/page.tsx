import CampusHeading from "@/components/layout/campus-pages/campus-heading"
import { loadEvents } from "@/utils/content-loader.server"
import VideoPlayer from "@/components/ui/video-player"
import Divider from "@/components/layout/divider"
import StarseedsCard from "@/components/layout/campus-pages/starseeds-card"
import CampusGallerySection from "@/components/features/content-blocks/campus-gallery-section"
import CampusIntro from "@/components/layout/campus-pages/campus-intro"
import ResourcesCard from "@/components/layout/campus-pages/resources-card"
import EventList from "@/components/layout/campus-pages/event-list"
import { campuses } from "@/content/campuses"
import { loadGalleryImages } from "@/utils/gallery-loader"

export default async function SantaBarbaraPage() {
  const events = await loadEvents()
  const campus = campuses.find(c => c.name === "Santa Barbara")
  
  if (!campus) {
    throw new Error("Santa Barbara campus not found in campus data")
  }
  
  // Configuration flags - customize these for each campus
  const hasGallery = false // Set to true if this campus has a gallery
  const hasStarseeds = false // Set to true if this campus has Starseeds program
  
  // Welcome section content - customize for each campus
  const welcomeLeftColumn = (
    <>
      <p className="mb-2">Alpha's Santa Barbara campus offers an educational experience that revolutionizes education. With the power of AI and personalized learning, students complete core academics in just two hours each morning. Afternoons are dedicated to workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
    </>
  )
  
  const welcomeRightColumn = (
    <>
      <p className="mb-2">At Alpha, we believe that students thrive when they are engaged, challenged, and inspired by their learning environment. Our innovative model fosters a love of school, encourages independence, and equips students with the tools they need to succeed academically and in life.</p>
      <p>Bringing Alpha School's three commitments—love school, learn 2x in 2 hours, and master life skills—to your city. <strong>Alpha Santa Barbara is launching soon and now accepting applications.</strong></p>
    </>
  )
  
  // Load gallery images dynamically
  const galleryImages = hasGallery ? loadGalleryImages("Santa Barbara") : []

  return (
    <main className="bg-[var(--color-bg-muted)]">
      {/* Main Title Section */}
      <CampusHeading
        campus={campus}
        variant="blue"
      />

      {/* Welcome Section */}
      <CampusIntro 
        campus={{
          cityName: "Santa Barbara",
          leftColumn: welcomeLeftColumn,
          rightColumn: welcomeRightColumn
        }}
      />
      
      {/* Optional Video Section */}
      {/* Uncomment and customize if this campus has a main video
      <div className="alpha-section">
        <div className="flex justify-center">
          <VideoPlayer
            videoUrl="https://youtu.be/VIDEO_ID"
            posterImage="/assets/feature-video-overlays/santa-barbara-video-preview.webp"
            posterAlt="Santa Barbara Campus Video Preview"
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

      {/* Main Content Section - Gallery, Starseeds, Campus Info, Events */}
      <section className="alpha-section bg-white">
        {/* Photo Gallery Section - Always set up, conditionally hidden */}
        {hasGallery && (
          <CampusGallerySection 
            images={galleryImages}
            cityName="Santa Barbara"
            className={!hasGallery ? 'hidden' : ''}
          />
        )}

        {/* Starseeds Section - Always set up, conditionally hidden */}
        {hasStarseeds && (
          <StarseedsCard 
            cityName="Santa Barbara"
            email={campus.email}
            className={!hasStarseeds ? 'hidden' : ''}
          />
        )}

        {/* Campus & Resources Section */}
        <ResourcesCard campus={campus} />

        {/* Events & Programs Section */}
        <EventList events={events} campusName="Santa Barbara" />
      </section>
    </main>
  )
}
