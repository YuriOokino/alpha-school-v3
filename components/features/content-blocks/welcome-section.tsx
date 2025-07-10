interface WelcomeSectionProps {
  cityName: string
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
  className?: string
}

export default function WelcomeSection({ 
  cityName, 
  leftColumn,
  rightColumn,
  className = "" 
}: WelcomeSectionProps) {
  return (
    <div className={`alpha-section ${className}`}>
      <div>
        <h2 className="section-headline-left heading-style-h2 mb-8">Welcome to the Future of Education</h2>
      </div>
      <div className="two-column-flex mb-16">
        <div>
          {leftColumn}
        </div>
        <div>
          {rightColumn}
        </div>
      </div>
    </div>
  )
} 