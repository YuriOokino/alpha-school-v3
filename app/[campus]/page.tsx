import { notFound } from 'next/navigation'
import { campuses } from '@/content/campuses'
import CampusHeading from "@/components/layout/campus-pages/campus-heading"
import { loadEvents } from "@/utils/content-loader.server"
import VideoPlayer from "@/components/ui/video-player"
import Divider from "@/components/layout/divider"
import StarseedsCard from "@/components/layout/campus-pages/starseeds-card"
import CampusGallerySection from "@/components/features/content-blocks/campus-gallery-section"
import CampusIntro from "@/components/layout/campus-pages/campus-intro"
import ResourcesCard from "@/components/layout/campus-pages/resources-card"
import EventList from "@/components/layout/campus-pages/event-list"
import { loadGalleryImages } from "@/utils/gallery-loader"
import { getCampusConfig } from "@/content/campus-config"

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

// Generate static params for all campuses
export async function generateStaticParams() {
  return campuses.map((campus) => ({
    campus: campus.name.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default async function CampusPage({ params }: { params: { campus: string } }) {
  // Find campus by slug
  const campus = campuses.find(c => 
    c.name.toLowerCase().replace(/\s+/g, '-') === params.campus
  )
  
  if (!campus) {
    notFound()
  }

  const events = await loadEvents()
  const config = getCampusConfig(params.campus)
  
  // Load gallery images dynamically
  const galleryImages = config.hasGallery ? loadGalleryImages(campus.name) : []

  // Welcome section content - customize for each campus
  const welcomeLeftColumn = (
    <>
      <p className="mb-2">Alpha's {campus.name} campus offers an educational experience that revolutionizes education. With the power of AI and personalized learning, students complete core academics in just two hours each morning. Afternoons are dedicated to workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
    </>
  )
  
  const welcomeRightColumn = (
    <>
      <p className="mb-2">At Alpha, we believe that students thrive when they are engaged, challenged, and inspired by their learning environment. Our innovative model fosters a love of school, encourages independence, and equips students with the tools they need to succeed academically and in life.</p>
      <p>Bringing Alpha School's three commitments—love school, learn 2x in 2 hours, and master life skills—to your city. <strong>Alpha {campus.name} is launching soon and now accepting applications.</strong></p>
    </>
  )

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
          cityName: campus.name,
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
            posterImage="/assets/feature-video-overlays/austin-video-preview.webp"
            posterAlt="Austin Campus Video Preview"
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
        {config.hasGallery && (
          <CampusGallerySection 
            images={galleryImages}
            cityName={campus.name}
            className={!config.hasGallery ? 'hidden' : ''}
          />
        )}

        {/* Starseeds Section - Always set up, conditionally hidden */}
        {config.hasStarseeds && (
          <StarseedsCard 
            cityName={campus.name}
            email={campus.email}
            className={!config.hasStarseeds ? 'hidden' : ''}
          />
        )}

        {/* Campus & Resources Section */}
        <ResourcesCard campus={campus} />

        {/* Events Section */}
        <EventList 
          events={events.filter(event => 
            event.campus?.toLowerCase().includes(campus.name.toLowerCase())
          )}
          cityName={campus.name}
        />
      </section>
    </main>
  )
} 