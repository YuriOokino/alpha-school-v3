import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"

export default function AdmissionFormsPage() {
  return (
    <>
      {/* Main Title Section */}
      <MainHeading 
        variant="default"
        description={
          <>
            Please select the campus you'd like to apply to below.
            <br />
            Please note Alpha School charges a non-refundable fee of $100 as part of the application process.
            <br />
            <strong>Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville)</strong>
          </>
        }
      >
        Admission Applications
      </MainHeading>
      
      {/* Campus Button Grid Section */}
      <section className="alpha-section">
        <div className="section-content p-0 bg-transparent shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Button>Austin</Button>
            <Button>Santa Barbara</Button>
            <Button>Alpha High Austin</Button>
            <Button>New York</Button>
            <Button>Brownsville</Button>
            <Button>Orlando</Button>
            <Button>Fort Worth</Button>
            <Button>Phoenix</Button>
            <Button>Houston</Button>
            <Button>Tampa</Button>
            <Button>Miami</Button>
            <Button>Palm Beach</Button>
            <div className="col-span-1 md:col-span-2">
              <div className="alpha-card scheme-pink">
                <h2 className="heading-style-h5 mb-2">Placeholder Heading</h2>
                <p className="mb-4">This is a placeholder paragraph for the Bring Alpha to your City card. Add your custom message here.</p>
                <Button variant="maroon">Bring Alpha to your City</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </>
  )
} 