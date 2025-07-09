import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import { Button } from "@/components/ui/button"
import ApplicationCard from "@/components/features/cards/application-card"
import { getCampusApplicationUrl } from "@/utils/campuses"
import { campuses } from "@/content/campuses"

// SVGs
const arrowSvg = (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.865234" width="34.1352" height="34.1352" rx="17.0676" fill="currentColor"/>
    <path d="M21.1753 21.3099L23.175 21.3099L23.175 11.8248H13.6898V13.8245H19.761L12.9827 20.6028L14.3969 22.0171L21.1753 15.2387L21.1753 21.3099Z" fill="white"/>
  </svg>
);

export default function AdmissionFormsPage() {
  return (
    <>
      {/* Main Title Section */}
      <MainHeading 
        description={
          <>
            Please select the campus you'd like to apply to below.
            <br />
            Please note Alpha School charges a non-refundable fee of $100 as part of the application process.
            </>
        }
      >
        Admission Applications
      </MainHeading>
      {/* Campus Card Grid Section */}
      <section className="alpha-section">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campuses.map(campus => (
              <ApplicationCard
                key={campus.name}
                arrowSvg={arrowSvg}
                campusName={campus.name}
                stateCode={campus.stateCode}
                href={getCampusApplicationUrl(campus.name)}
              />
            ))}
            <div className="col-span-1 md:col-span-3 flex justify-center">
              <div className="alpha-card bg-[var(--color-light-green)] max-w-2xl mt-[var(--space-xl)]">
                <h2 className="heading-style-h5 mb-2">Placeholder Heading</h2>
                <p className="mb-4">This is a placeholder paragraph for the Bring Alpha to your City card. Add your custom message here.</p>
                <Button href="/bring-alpha-to-your-city" className="bg-[var(--color-dark-green)]">Bring Alpha to your City</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 