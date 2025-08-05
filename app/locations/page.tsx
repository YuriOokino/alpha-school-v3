import LocationsClient from "./locations-client";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

export default function LocationsPage() {
  return <LocationsClient />;
} 