import Gallery from "@/components/features/content-blocks/gallery"

interface GalleryImage {
  src: string
  alt: string
}

interface CampusGallerySectionProps {
  images: GalleryImage[]
  cityName: string
  className?: string
}

export default function CampusGallerySection({ images, cityName, className = "" }: CampusGallerySectionProps) {
  return (
    <div className={`${className} mb-[var(--space-4xl)]` }>
      <h2 className="heading-style-h2 text-center mb-16">Campus Gallery</h2>
      <Gallery images={images} />
    </div>
  )
} 