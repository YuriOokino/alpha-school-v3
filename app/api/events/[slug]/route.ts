import { NextResponse } from 'next/server';
import { loadEvent } from '@/utils/content-loader.server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    console.log('API: Starting single event request for slug:', params.slug);
    const event = await loadEvent(params.slug);
    
    if (!event) {
      console.log('API: Event not found');
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    
    console.log('API: Returning event:', event);
    return NextResponse.json(event);
  } catch (error) {
    console.error('API: Error fetching event:', error);
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
} 