interface CampusIntroMetadata {
  cityName: string;
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  className?: string;
}

interface CampusIntroProps {
  campus: CampusIntroMetadata;
  className?: string;
}

export default function CampusIntro({ 
  campus, 
  className = "" 
}: CampusIntroProps) {
  return (
    <div className={`alpha-section ${className}`}>
      <div>
        <h2 className="section-headline-left heading-style-h2 text-[var(--color-navy-blue)] mb-8">Welcome to the Future of Education</h2>
      </div>
      <div className="two-column-flex">
        <div>
          {campus.leftColumn}
        </div>
        <div>
          {campus.rightColumn}
        </div>
      </div>
    </div>
  )
} 