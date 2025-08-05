// Campus-specific configuration
// This file allows you to customize gallery and starseeds settings for each campus
// without needing to run sync scripts

export interface CampusConfig {
  hasGallery: boolean
  hasStarseeds: boolean
  customWelcomeContent?: {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
  }
}

export const campusConfig: Record<string, CampusConfig> = {
  'austin': { 
    hasGallery: true, 
    hasStarseeds: false 
  },
  'brownsville': { 
    hasGallery: true, 
    hasStarseeds: true 
  },
  'miami': { 
    hasGallery: true, 
    hasStarseeds: false 
  },
  'houston': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'fort-worth': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'scottsdale': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'tampa': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'new-york-city': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'santa-barbara': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'charlotte': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'raleigh': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'san-francisco': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'palm-beach': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'plano': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'lake-forest': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'chantilly': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'dorado': { 
    hasGallery: false, 
    hasStarseeds: false 
  },
  'austin-high': { 
    hasGallery: false, 
    hasStarseeds: false 
  }
}

// Helper function to get campus config
export function getCampusConfig(campusSlug: string): CampusConfig {
  return campusConfig[campusSlug] || { hasGallery: false, hasStarseeds: false }
} 