import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/layout/headings/section-heading"
import FeatureCard from "@/components/features/content-blocks/feature-card"

export default function BasePageTemplate() {
  return (
    <>
      {/* Main Title Section */}
      <MainHeading 
        variant="default"
        description="Add your main page description here"
        actions={
          <>
            <Button variant="default">Learn More</Button>
            <Button variant="outline">Contact Us</Button>
          </>
        }
      >
        Main Page Title
      </MainHeading>
      
      {/* Content Section with Section Heading */}
      <section className="alpha-section">
        <SectionHeading 
          title="Section Title"
          description="Add your section description here"
          buttonText="Learn More"
          buttonHref="/learn-more"
        />
        {/* Add your content here */}
      </section>
      
      {/* Content Section with Custom Styling */}
      <section className="alpha-section">
        <div className="section-content scheme-lightblue">
          <h2 className="heading-style-h2 mb-4">Section Title</h2>
          <p className="mb-4">Add your section description here</p>
          {/* Add your content here */}
        </div>
      </section>
      
      {/* Feature Card Section */}
      <section className="alpha-section">
        <FeatureCard 
          className="bg-[var(--color-bg-muted)]"
          media={{
            video: "https://player.vimeo.com/video/123456789",
            poster: "/placeholder.jpg"
          }}
        >
          <h3 className="text-xl font-bold mb-4">Feature Title</h3>
          <p className="text-gray-700 mb-4">
            Add your feature description here. This is where you can explain the key benefits or highlights of this feature.
          </p>
          <Button variant="default">Learn More</Button>
        </FeatureCard>
      </section>
      
      <WhatsNextSection />
    </>
  )
}
