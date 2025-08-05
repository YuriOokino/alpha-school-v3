import fs from 'fs'
import path from 'path'

// Campus data interface
interface Campus {
  name: string
  stateCode: string
  status: 'current' | 'upcoming'
  address: string
  tuition: string
  grades: string
  email: string
  heroImage: string
  buttonHref: string
  applicationStatus: string
}

// Read campus data
function getCampusData(): Campus[] {
  const campusIndexPath = path.join(process.cwd(), 'content', 'campuses', 'index.ts')
  const content = fs.readFileSync(campusIndexPath, 'utf-8')
  
  // Extract the campuses array using regex
  const campusesMatch = content.match(/export const campuses = (\[[\s\S]*?\])/)
  if (!campusesMatch) {
    throw new Error('Could not find campuses array in index.ts')
  }
  
  // Parse the campuses array (this is a simplified approach)
  // In a real implementation, you might want to use a proper TypeScript parser
  const campusesString = campusesMatch[1]
  
  // For now, we'll use a simple approach to extract campus names
  const campusNames = campusesString.match(/name:\s*"([^"]+)"/g)?.map(match => {
    return match.match(/name:\s*"([^"]+)"/)?.[1]
  }).filter(Boolean) || []
  
  return campusNames.map(name => ({
    name: name!,
    stateCode: 'TX', // Default, would need to be extracted from actual data
    status: 'upcoming' as const,
    address: 'Location to be announced soon',
    tuition: '$40,000',
    grades: 'K-8th Grade',
    email: `admissions.${name!.toLowerCase().replace(/\s+/g, '')}@alpha.school`,
    heroImage: `/assets/locations/${name!.toLowerCase().replace(/\s+/g, '-')}/hero/${name!.toLowerCase().replace(/\s+/g, '-')}-hero.webp`,
    buttonHref: `/${name!.toLowerCase().replace(/\s+/g, '-')}`,
    applicationStatus: 'Applications Open'
  }))
}

// Generate campus page content
function generateCampusPage(campus: Campus): string {
  const cityName = campus.name
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-')
  
  return `import CampusHeading from "@/components/layout/campus-pages/campus-heading"
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

export default async function ${cityName.replace(/\s+/g, '')}Page() {
  const events = await loadEvents()
  const campus = campuses.find(c => c.name === "${cityName}")
  
  if (!campus) {
    throw new Error("${cityName} campus not found in campus data")
  }
  
  // Configuration flags - customize these for each campus
  const hasGallery = false // Set to true if this campus has a gallery
  const hasStarseeds = false // Set to true if this campus has Starseeds program
  
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
}`
}

// Main function to generate all campus pages
function generateAllCampusPages() {
  try {
    const campuses = getCampusData()
    const appDir = path.join(process.cwd(), 'app')
    
    console.log(`Found ${campuses.length} campuses in index.ts`)
    
    for (const campus of campuses) {
      const citySlug = campus.name.toLowerCase().replace(/\s+/g, '-')
      const pageDir = path.join(appDir, citySlug)
      const pagePath = path.join(pageDir, 'page.tsx')
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true })
        console.log(`Created directory: ${pageDir}`)
      }
      
      // Check if page already exists
      if (fs.existsSync(pagePath)) {
        console.log(`Page already exists for ${campus.name}, overwriting...`)
      }
      
      // Generate and write the page
      const pageContent = generateCampusPage(campus)
      fs.writeFileSync(pagePath, pageContent)
      
      console.log(`Generated page for ${campus.name}: ${pagePath}`)
    }
    
    console.log('✅ Campus page generation complete!')
    console.log('\\nNext steps:')
    console.log('1. Review generated pages and customize content as needed')
    console.log('2. Add campus-specific welcome section content')
    console.log('3. Set hasGallery and hasStarseeds flags in each page')
    console.log('4. Add gallery images to /public/assets/locations/[campus]/gallery/ if needed')
    console.log('5. Customize campus data in content/campuses/index.ts')
    
  } catch (error) {
    console.error('❌ Error generating campus pages:', error)
    process.exit(1)
  }
}

// Run the script
if (require.main === module) {
  generateAllCampusPages()
} 