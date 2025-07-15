import { NextResponse } from 'next/server';
import { loadEvents } from '@/utils/content-loader.server';

export async function GET() {
  try {
    const events = await loadEvents();
    
    return NextResponse.json(events);
  } catch (error) {
    console.error('API: Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
} 