import { NextResponse } from 'next/server';
import { loadEvents } from '@/utils/content-loader.server';

export async function GET() {
  try {
    console.log('API: Starting events request');
    const events = await loadEvents();
    console.log('API: Found events:', events.length);
    
    if (events.length === 0) {
      console.log('API: No events found');
      return NextResponse.json([]);
    }
    
    console.log('API: Returning events:', events);
    return NextResponse.json(events);
  } catch (error) {
    console.error('API: Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
} 