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
    <section className={`alpha-section bg-white ${className}`}>
      <h2 className="heading-style-h2 text-center mb-8">Campus Gallery</h2>
      <Gallery images={images} />
    </section>
  )
} 