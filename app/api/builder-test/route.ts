import { NextResponse } from 'next/server';

const BUILDER_API_KEY = 'c21fb5dbf8ba48058349b93cb8b88f4f';

interface BuilderEvent {
  id: string;
  name: string;
  data: {
    title: string;
    date: string;
    time: string;
    locationTag: string;
    category: string;
    address: string;
    image: {
      src: string;
      alt: string;
    };
    slug: string;
    registrationType: 'internal' | 'external';
    registrationUrl: string;
    descriptionTitle: string;
    description: string;
  };
}

interface BuilderResponse {
  results: BuilderEvent[];
}

export async function GET() {
  try {
    // Add cache-busting parameters to force fresh data
    const timestamp = Date.now();
    const response = await fetch(
      `https://cdn.builder.io/api/v3/content/events?apiKey=${BUILDER_API_KEY}&cachebust=${timestamp}&noCache=true`,
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Builder.io');
    }

    const builderData: BuilderResponse = await response.json();

    // Return both raw Builder.io data and transformed data for testing
    return NextResponse.json({
      raw: builderData,
      transformed: builderData.results.map(item => ({
        id: item.id,
        ...item.data
      }))
    });

  } catch (error) {
    console.error('Error fetching from Builder.io:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch from Builder.io',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 