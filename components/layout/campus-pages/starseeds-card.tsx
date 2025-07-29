import { Button } from "@/components/ui/button"

interface StarseedsCardProps {
  cityName: string
  email: string
  className?: string
}

export default function StarseedsCard({ cityName, email, className = "" }: StarseedsCardProps) {
  return (
      <div className={`alpha-card bg-[var(--color-sky-blue)] !p-[var(--space-lg)] flex flex-col md:flex-row gap-[var(--space-lg)] mb-[var(--space-4xl)] animate-on-scroll animate-fade-up ${className}`}>
      <div className="flex-1">
        <img
          src="/assets/starseed.webp"
          alt={`Starseeds at Alpha ${cityName}`}
          className="w-full h-full object-cover rounded-[var(--radius-lg)]"
          draggable={false}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="heading-style-h2 mb-4">Starseeds (PreK3 & PreK4)</h2>
        <p className="mb-4">
          At Alpha {cityName} Starseeds, we believe every child is born curious, capable, and ready to explore the world. Our PreK3 & PreK4 program blends structured learning with joyful discovery, offering a balance of reading, phonics, math, art, foreign language, music, movement, STEAM, and even aquatic confidence! With a nurturing environment that fosters independence, creativity, and social-emotional growth, your little one will love learning every day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="navyBlue" href={`mailto:${email}`}>Find Out More</Button>
          <Button variant="outline">View Brochure</Button>
        </div>
      </div>
    </div>
  )
} 