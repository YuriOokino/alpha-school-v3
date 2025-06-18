import { Metadata } from 'next'
import { campuses } from '../content/campuses'

export interface CampusMetadata {
  name: string
  status: 'current' | 'upcoming'
  address: string
  tuition: string
  grades: string
  email: string
  heroImage: string
  buttonHref: string
  applicationStatus?: string
}

export async function getAllCampuses(): Promise<CampusMetadata[]> {
  return campuses
}

export async function getCurrentCampuses(): Promise<CampusMetadata[]> {
  return campuses.filter(campus => campus.status === 'current')
}

export async function getUpcomingCampuses(): Promise<CampusMetadata[]> {
  return campuses.filter(campus => campus.status === 'upcoming')
}

export async function getCampusBySlug(slug: string): Promise<CampusMetadata | undefined> {
  return campuses.find(campus => campus.name.toLowerCase() === slug.toLowerCase())
}

export async function getCampusesByState(state: string): Promise<CampusMetadata[]> {
  return campuses.filter(campus => campus.address === state)
}

// New utility functions for application URLs
export function getCampusApplicationUrl(campusName: string, grade?: string): string {
  const campus = campuses.find(c => c.name.toLowerCase() === campusName.toLowerCase())
  if (!campus) return '/application'
  
  const campusSlug = campus.name.toLowerCase()
  const gradeSuffix = grade ? `_${grade}` : '_k8' // Default to k8 if no grade specified
  return `/application?submission_campus=${campusSlug}${gradeSuffix}`
}

export function parseCampusFromUrl(param: string | null): CampusMetadata | null {
  if (!param) return null
  
  // Extract campus name from parameter (e.g., "austin_k8" -> "austin")
  const campusName = param.split('_')[0]
  
  // Find matching campus (case-insensitive)
  return campuses.find(campus => 
    campus.name.toLowerCase() === campusName.toLowerCase()
  ) || null
}

export function getCampusByApplicationParam(param: string): CampusMetadata | null {
  return parseCampusFromUrl(param)
} 