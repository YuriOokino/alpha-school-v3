'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import WhatsNextSection from "@/components/layout/navigation/whats-next-section";


interface BuilderEvent {
  id: string;
  title: string;
  date: string;
  time: number;
  locationTag: string;
  category: string;
  address: string;
  image: string;
  slug: string;
  registrationType: 'internal' | 'external';
  registrationUrl: string;
  descriptionTitle: string;
  description: string;
}

export default function BuilderTestPage() {
  const [events, setEvents] = useState<BuilderEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`/api/builder-test?cachebust=${timestamp}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.transformed || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Builder.io Events Test
          </h1>
          <p className="text-xl text-gray-600">
            Displaying events from Builder.io API
          </p>
        </div>
        {events.length === 0 ? (
          <div className="text-center text-gray-600">
            No events found in Builder.io
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/builder-test/${event.slug}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {event.image && (
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {event.category}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {event.locationTag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  
                  {event.descriptionTitle && (
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {event.descriptionTitle}
                    </p>
                  )}
                  
                  <div 
                    className="text-sm text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Registration: {event.registrationType}
                    </span>
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600">
                      View Details
                    </span>
                  </div>
                  
                  {event.address && (
                    <div className="mt-3">
                      <span className="text-sm text-blue-600">
                        View Location →
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Raw Data</h2>
          <pre className="text-sm text-gray-600 overflow-auto">
            {JSON.stringify(events, null, 2)}
          </pre>
        </div>
      </div>
      <WhatsNextSection />
    </div>
  );
} 