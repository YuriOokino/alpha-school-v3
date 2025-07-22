import { Button } from "@/components/ui/button"
import { CampusApplicationLink } from "@/components/ui/campus-application-link"

interface CampusData {
  name: string
  grades: string
  address: string
  email: string
}

interface ResourcesCardProps {
  campus: CampusData
  className?: string
}

export default function ResourcesCard({ campus, className = "" }: ResourcesCardProps) {
  return (
    <div className={`max-w-[1100px] mb-[var(--space-4xl)] mx-auto ${className}`}>
      <div className="bg-[var(--color-light-green)] text-[var(--color-dark-green)] w-[95%] min-h-[400px] m-auto rounded-[var(--radius-lg)] p-[var(--space-lg)] flex flex-col md:flex-row gap-[var(--space-xl)] items-start">
        <div className="flex-1">
          <h2 className="heading-style-h2 mb-4">{campus.name} Campus</h2>
          <ul className="body-text mb-4">
            <li>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined">location_on</span>
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
            campusName={campus.name} 
            className="centered-icon-text mt-[var(--space-md)] md:mt-[var(--space-sm)]bg-[var(--color-dark-green)]"
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
              School schedule<span className="material-icons-outlined">file_download</span>
            </Button>
            <Button variant="outline" radius="small" className="uppercase outline-[var(--color-dark-green)] icon-text-center mr-4" href="/downloads/Alpha School - Tuition Overview.pdf" target="_blank">
              Tuition Overview<span className="material-icons-outlined">file_download</span>
            </Button>
            <Button radius="small" className="mr-4 bg-[var(--color-dark-green)] text-[var(--color-light-green)] uppercase" href="/video-library">
              Video library
            </Button>
            <Button variant="outline" radius="small" className="mr-4 outline-[var(--color-dark-green)] icon-text-centered uppercase" href="/downloads/Alpha School 25-26 Calendar.pdf" target="_blank">
              24/25 Calendar<span className="material-icons-outlined">file_download</span>
            </Button>
            <Button variant="outline" radius="small" className="outline-[var(--color-dark-green)] icon-text-centered uppercase" href="#" target="_blank">
              View brochure<span className="material-icons-outlined">file_download</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
