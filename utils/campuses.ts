import { Metadata } from 'next'
import { campuses } from '@/content/campuses'

export interface CampusMetadata {
  name: string
  status: 'current' | 'upcoming'
  address: string
  tuition: string
  grades: string
  email: string
  image: string
  heroImage: string
  buttonHref: string
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