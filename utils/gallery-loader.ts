import fs from 'fs'
import path from 'path'

export interface GalleryImage {
  src: string
  alt: string
}

export function loadGalleryImages(campusName: string): GalleryImage[] {
  const galleryPath = path.join(process.cwd(), 'public/assets/locations', campusName.toLowerCase(), 'gallery')
  
  try {
    // Check if gallery directory exists
    if (!fs.existsSync(galleryPath)) {
      return []
    }

    // Read all files in the gallery directory
    const files = fs.readdirSync(galleryPath)
    
    // Filter for image files and sort them
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)
      })
      .sort((a, b) => {
        // Extract numbers from filenames for natural sorting
        const numA = parseInt(a.match(/\d+/)?.[0] || '0')
        const numB = parseInt(b.match(/\d+/)?.[0] || '0')
        return numA - numB
      })

    // Convert to gallery image format
    return imageFiles.map(file => ({
      src: `/assets/locations/${campusName.toLowerCase()}/gallery/${file}`,
      alt: `${campusName} campus photo`
    }))
  } catch (error) {
    console.error(`Error loading gallery images for ${campusName}:`, error)
    return []
  }
} 