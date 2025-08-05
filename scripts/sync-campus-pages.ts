import fs from 'fs'
import path from 'path'
import { campuses } from '../content/campuses'

interface CampusPageData {
  hasGallery: boolean
  hasStarseeds: boolean
  customContent?: string
}

function loadExistingPageData(campusName: string): CampusPageData | null {
  const pagePath = path.join(process.cwd(), 'app', campusName.toLowerCase().replace(/\s+/g, '-'), 'page.tsx')
  
  if (!fs.existsSync(pagePath)) {
    return null
  }

  const content = fs.readFileSync(pagePath, 'utf-8')
  
  // Extract current settings
  const hasGalleryMatch = content.match(/const hasGallery = (true|false)/)
  const hasStarseedsMatch = content.match(/const hasStarseeds = (true|false)/)
  
  return {
    hasGallery: hasGalleryMatch ? hasGalleryMatch[1] === 'true' : false,
    hasStarseeds: hasStarseedsMatch ? hasStarseedsMatch[1] === 'true' : false
  }
}

function generateCampusPage(campus: any, existingData?: CampusPageData) {
  const cityName = campus.name
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-')
  const pageDir = path.join(process.cwd(), 'app', citySlug)
  const pagePath = path.join(pageDir, 'page.tsx')

  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true })
  }

  // Use existing settings or defaults
  const hasGallery = existingData?.hasGallery ?? false
  const hasStarseeds = existingData?.hasStarseeds ?? false

  const pageContent = `import CampusHeading from "@/components/layout/campus-pages/campus-heading"
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

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

export default async function ${cityName.replace(/\s+/g, '')}Page() {
  const events = await loadEvents()
  const campus = campuses.find(c => c.name === "${cityName}")
  
  if (!campus) {
    throw new Error("${cityName} campus not found in campus data")
  }
  
  // Configuration flags - customize these for each campus
  const hasGallery = ${hasGallery} // Set to true if this campus has a gallery
  const hasStarseeds = ${hasStarseeds} // Set to true if this campus has Starseeds program
  
  // Welcome section content - customize for each campus
  const welcomeLeftColumn = (
    <>
      <p className="mb-2">Alpha's ${cityName} campus offers an educational experience that revolutionizes education. With the power of AI and personalized learning, students complete core academics in just two hours each morning. Afternoons are dedicated to workshops that nurture creativity, teach real-world skills, and fuel individual passions.</p>
    </>
  )
  
  const welcomeRightColumn = (
    <>
      <p className="mb-2">At Alpha, we believe that students thrive when they are engaged, challenged, and inspired by their learning environment. Our innovative model fosters a love of school, encourages independence, and equips students with the tools they need to succeed academically and in life.</p>
      <p>Bringing Alpha School's three commitments—love school, learn 2x in 2 hours, and master life skills—to your city. <strong>Alpha ${cityName} is launching soon and now accepting applications.</strong></p>
    </>
  )
  
  // Load gallery images dynamically
  const galleryImages = hasGallery ? loadGalleryImages("${cityName}") : []

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
          cityName: "${cityName}",
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
            posterImage="/assets/feature-video-overlays/${citySlug}-video-preview.webp"
            posterAlt="${cityName} Campus Video Preview"
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
            cityName="${cityName}"
            className={!hasGallery ? 'hidden' : ''}
          />
        )}

        {/* Starseeds Section - Always set up, conditionally hidden */}
        {hasStarseeds && (
          <StarseedsCard 
            cityName="${cityName}"
            email={campus.email}
            className={!hasStarseeds ? 'hidden' : ''}
          />
        )}

        {/* Campus & Resources Section */}
        <ResourcesCard campus={campus} />

        {/* Events & Programs Section */}
        <EventList events={events} campusName="${cityName}" />
      </section>
    </main>
  )
}
`

  fs.writeFileSync(pagePath, pageContent)
  console.log(`✅ Generated/Updated page for ${cityName}`)
}

function removeCampusPage(campusName: string) {
  const citySlug = campusName.toLowerCase().replace(/\s+/g, '-')
  const pageDir = path.join(process.cwd(), 'app', citySlug)
  
  if (fs.existsSync(pageDir)) {
    fs.rmSync(pageDir, { recursive: true, force: true })
    console.log(`🗑️  Removed page for ${campusName}`)
  }
}

function syncCampusPages() {
  console.log('🔄 Starting campus page sync...')
  
  // Get all existing campus directories
  const appDir = path.join(process.cwd(), 'app')
  const existingDirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== 'api' && name !== 'events' && name !== 'blog' && name !== 'faq' && name !== 'guides' && name !== 'learn-more' && name !== 'locations' && name !== 'privacy-policy' && name !== 'the-program' && name !== 'video-library' && name !== 'admission' && name !== 'admission-forms' && name !== 'application' && name !== 'bring-alpha-to-your-city')

  // Get campus names from index
  const indexCampusNames = campuses.map(c => c.name.toLowerCase().replace(/\s+/g, '-'))
  
  // Remove pages for campuses not in index
  existingDirs.forEach(dir => {
    if (!indexCampusNames.includes(dir)) {
      const campusName = dir.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      removeCampusPage(campusName)
    }
  })
  
  // Generate/update pages for campuses in index
  campuses.forEach(campus => {
    const existingData = loadExistingPageData(campus.name)
    generateCampusPage(campus, existingData)
  })
  
  console.log('✅ Campus page sync complete!')
  console.log('\\nNext steps:')
  console.log('1. Review generated pages and customize content as needed')
  console.log('2. Set hasGallery and hasStarseeds flags in each page')
  console.log('3. Add gallery images to /public/assets/locations/[campus]/gallery/ if needed')
  console.log('4. Customize welcome section content for each campus')
}

// Run the sync
syncCampusPages() 