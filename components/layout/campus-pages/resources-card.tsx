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
    <div className={`max-w-[1100px] mb-[var(--space-4xl)] mx-auto animate-on-scroll animate-fade-up ${className}`}>
      <div className="bg-[var(--color-light-green)] text-[var(--color-dark-green)] w-[95%] min-h-[400px] m-auto rounded-[var(--radius-lg)] p-[var(--space-lg)] flex flex-col md:flex-row gap-[var(--space-xl)] items-start">
        <div className="flex-1">
          <h2 className="heading-style-h2 mb-4">{campus.name} Campus</h2>
          <p className="heading-style-h5 mb-4">{campus.grades}</p>
          <p className="centered-icon-text mb-2">
            <span className="material-icons-outlined mr-1">location_on</span>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(campus.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link-effect"
            >
              {campus.address}
            </a>
          </p>
          <p className="centered-icon-text mb-4">
            <span className="material-icons-outlined mr-1">mail_outline</span>
            <a href={`mailto:${campus.email}`} className="hover-link-effect">
              {campus.email}
            </a>
          </p>
          <CampusApplicationLink 
            campusName={campus.name} 
            className="centered-icon-text mt-[var(--space-md)] md:mt-[var(--space-sm)] bg-[var(--color-dark-green)]"
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
