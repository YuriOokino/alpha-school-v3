"use client"

import React from "react";
import { getCurrentCampuses, getUpcomingCampuses, type CampusMetadata } from "@/utils/campuses";
import { campuses } from "@/content/campuses";
import LocationCard from "@/components/features/cards/location-card";
import MainHeading from "@/components/layout/headings/main-heading";
import CampusMap from "@/components/features/content-blocks/CampusMap";
import Carousel from "@/components/ui/carousel";
import Divider from "@/components/layout/divider";
import { Button } from "@/components/ui/button";
import ApplicationCard from "@/components/features/cards/link-card";
import SectionHeading from "@/components/layout/headings/section-heading";


export default function LocationsPage() {
  const [currentCampuses, setCurrentCampuses] = React.useState<CampusMetadata[]>([]);
  const [upcomingCampuses, setUpcomingCampuses] = React.useState<CampusMetadata[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [currentCampusesToShow, setCurrentCampusesToShow] = React.useState<CampusMetadata[]>([]);
  const [upcomingCampusesToShow, setUpcomingCampusesToShow] = React.useState<CampusMetadata[]>([]);
  const [showLoadMoreCurrent, setShowLoadMoreCurrent] = React.useState(false);
  const [showLoadMoreUpcoming, setShowLoadMoreUpcoming] = React.useState(false);
  
  // State code to full name mapping
  const stateNames: { [key: string]: string } = {
  'TX': 'Texas',
  'FL': 'Florida',
  'NY': 'New York',
  'CA': 'California',
  'TN': 'Tennessee',
  'NC': 'North Carolina',
  'GA': 'Georgia',
  'AZ': 'Arizona',
  'NV': 'Nevada',
  'CO': 'Colorado',
  'UT': 'Utah',
  'WA': 'Washington',
  'OR': 'Oregon'
};
  
  // Get all unique campuses and states for suggestions
  const allSuggestions = React.useMemo(() => {
    const suggestions = new Set<string>();
    
    // Add campus names
    campuses.forEach(campus => {
      suggestions.add(campus.name);
    });
    
    // Add state names
    Object.values(stateNames).forEach(stateName => {
      suggestions.add(stateName);
    });
    
    // Add state codes
    Object.keys(stateNames).forEach(stateCode => {
      suggestions.add(stateCode);
    });
    
    return Array.from(suggestions).sort();
  }, []);

  const filteredCampuses = searchQuery.trim() === "" ? [] : campuses.filter((campus) => {
    const query = searchQuery.toLowerCase();
    const campusName = campus.name.toLowerCase();
    const stateCode = campus.stateCode.toLowerCase();
    const stateName = stateNames[campus.stateCode]?.toLowerCase() || '';
    const address = campus.address.toLowerCase();
    
    // Check if query matches campus name exactly or starts with it
    if (campusName.startsWith(query) || campusName === query) {
      return true;
    }
    
    // Check if query matches state code exactly or starts with it
    if (stateCode.startsWith(query) || stateCode === query) {
      return true;
    }
    
    // Check if query matches state name exactly or starts with it
    if (stateName.startsWith(query) || stateName === query) {
      return true;
    }
    
    // Check if query matches city name in address (more restrictive)
    const cityMatch = address.split(',')[0].toLowerCase().startsWith(query);
    if (cityMatch) {
      return true;
    }
    
    return false;
  });

  // Filter suggestions based on search query
  const filteredSuggestions = searchQuery.trim() === "" ? [] : allSuggestions.filter(suggestion => 
    suggestion.toLowerCase().startsWith(searchQuery.toLowerCase())
  ).slice(0, 5); // Limit to 5 suggestions

  React.useEffect(() => {
    const loadCampuses = async () => {
      try {
        const current = await getCurrentCampuses();
        const upcoming = await getUpcomingCampuses();
        
        console.log('Loaded campuses:', { current: current.length, upcoming: upcoming.length });
        
        setCurrentCampuses(current);
        setUpcomingCampuses(upcoming);
        
        // Initially show first 9 campuses (3 rows of 3)
        const initialCurrent = current.slice(0, 9);
        const initialUpcoming = upcoming.slice(0, 9);
        
        console.log('Initial campuses to show:', { current: initialCurrent.length, upcoming: initialUpcoming.length });
        
        setCurrentCampusesToShow(initialCurrent);
        setUpcomingCampusesToShow(initialUpcoming);
        
        // Show load more buttons if there are more campuses
        setShowLoadMoreCurrent(current.length > 9);
        setShowLoadMoreUpcoming(upcoming.length > 9);
      } catch (error) {
        console.error('Error loading campuses:', error);
      }
    };
    loadCampuses();
  }, []);

  const loadMoreCurrent = () => {
    const currentShown = currentCampusesToShow.length;
    const nextBatch = currentCampuses.slice(currentShown, currentShown + 9);
    setCurrentCampusesToShow([...currentCampusesToShow, ...nextBatch]);
    setShowLoadMoreCurrent(currentShown + 9 < currentCampuses.length);
  };

  const loadMoreUpcoming = () => {
    const upcomingShown = upcomingCampusesToShow.length;
    const nextBatch = upcomingCampuses.slice(upcomingShown, upcomingShown + 9);
    setUpcomingCampusesToShow([...upcomingCampusesToShow, ...nextBatch]);
    setShowLoadMoreUpcoming(upcomingShown + 9 < upcomingCampuses.length);
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg-muted)]">
      <MainHeading
      variant="blue"
      tagline="Locations"
      taglineVariant="blue"
      description="Alpha School tuition ranges from $40,000 upwards (Excluding Brownsville).
      Please select your desired campus location to find out more details."
     
      >Alpha School Campuses
      </MainHeading>
      <div className="alpha-section">
        <div className="alpha-card flex flex-col gap-8 justify-center items-center bg-[var(--color-navy-blue)] mx-auto w-fit">
          <h3 className="text-white text-center">Find a campus near you</h3>
          <div className="flex justify-center">
            <div className="field-wrapper relative !border !border-grey-400 w-fit">
              <label className="xs-label">Search</label>
              <input 
                type="search" 
                placeholder="Enter your city or state" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="!text-black w-[600px]"
              />
                          {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-lg z-10 max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
                {searchQuery.trim() !== "" && (
          <div className="mt-[var(--space-xl)]">
            {filteredCampuses.length > 0 ? (
              <>
                {/* Display first 3 results as campus preview cards */}
                <div className="grid gap-6 mx-auto mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))' }}>
                  {filteredCampuses.slice(0, 3).map((campus) => (
                    <div key={campus.name} className="bg-[var(--color-sky-blue)] !text-[var(--color-navy-blue)] p-[var(--space-xl)] rounded-[var(--radius-lg)]">
                      <div className="flex flex-col md:flex-row w-full items-center gap-8">
                        <div className="flex-1 min-w-0 w-full">
                          <div className="flex justify-start mb-4">
                            <p className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)] px-4 py-1 rounded-[var(--radius-pill)] inline-block">
                              Alpha School
                            </p>
                          </div>
                          <h2 className="heading-style-h2 mb-4">
                            Private School in {campus.name}
                          </h2>
                          <p className="font-semibold mb-2">{campus.grades}</p>
                          <p className="centered-icon-text mb-4">
                            <span className="material-icons-outlined">location_on</span>
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {campus.address}
                            </a>
                          </p>
                          <p className="mb-2">
                            <strong>Email:</strong> {campus.email}
                          </p>
                          <Button 
                            href={campus.buttonHref}
                            className="centered-icon-text mt-[var(--space-md)]"
                            variant="navyBlue"
                          >
                            View campus<span className="material-icons-outlined">arrow_forward</span>
                          </Button>
                        </div>
                        <div className="flex-1 min-w-0 flex justify-center items-center">
                          <div className="w-full h-auto rounded-[var(--radius-lg)] overflow-hidden">
                            <img 
                              src={campus.heroImage} 
                              alt={`${campus.name} Campus`}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Display remaining results in carousel if more than 3 */}
                {filteredCampuses.length > 3 && (
                  <div className="mt-8">
                    <Carousel
                      items={filteredCampuses.slice(3)}
                      
                      renderItem={(campus) => (
                        <LocationCard
                          key={campus.name}
                          {...campus}
                          className="w-[340px] bg-[var(--color-sky-blue)] flex-shrink-0 group text-black"
                          tagClassName="!bg-[var(--color-navy-blue)] !text-white"
                          tuitionClassName=""
                          variant="scheme1"
                        />
                      )}
                      title={`More ${(() => {
                        // Try to find state name from search query
                        const query = searchQuery.toLowerCase();
                        for (const [code, name] of Object.entries(stateNames)) {
                          if (name.toLowerCase().includes(query) || code.toLowerCase().includes(query)) {
                            return name;
                          }
                        }
                        // If no state match, use "Locations" as fallback
                        return "Locations";
                      })()} campuses`}
                      titleClassName="heading-style-h3 text-white"
                      variant="scheme5"
                     
                    />
                  </div>
                )}
              </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-lg">No campuses found in "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try searching for a different city or state</p>
                </div>
            )}
          </div>
        )}
        
    </div>
    <Divider fill="white" />
      <div className="alpha-section bg-white">
        <div className="mb-[var(--space-4xl)]">
        <SectionHeading description="A list of all of our current campuses" title="Current Locations"></SectionHeading>
        <div className="grid gap-4 mb-[var(--space-xl)] mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, 340px)', justifyContent: 'center' }}>
            {currentCampusesToShow.length > 0 ? (
              currentCampusesToShow.map((campus) => (
                <LocationCard
                variant="scheme1"
                  key={campus.name}
                  {...campus}
                  className="w-[340px] flex-shrink-0 group text-black"
                  tagClassName="!bg-[var(--color-navy-blue)] !text-white"
                  tuitionClassName=""
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p>Loading current campuses... ({currentCampusesToShow.length} shown, {currentCampuses.length} total)</p>
              </div>
            )}
        </div>
        {showLoadMoreCurrent && (
          <div className="flex justify-center mt-8">
            <Button 
              onClick={loadMoreCurrent}
              className="bg-[var(--color-navy-blue)] text-white hover:bg-[var(--color-navy-blue)]/90"
            >
              Load More Current Campuses ({currentCampusesToShow.length}/{currentCampuses.length})
            </Button>
          </div>
        )}

        </div>
        <div>
          <SectionHeading description="A list of all of our upcoming campuses" title="Upcoming Locations"></SectionHeading>
          <div className="grid gap-4 mb-[var(--space-xl)] mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, 340px)', justifyContent: 'center' }}>
            {upcomingCampusesToShow.length > 0 ? (
              upcomingCampusesToShow.map((campus) => (
                <LocationCard
                  key={campus.name}
                  {...campus}
                  variant="scheme2"
                  buttonClassName="bg-[var(--color-dark-green)]"
                  className="w-[340px] flex-shrink-0 group text-black"
                  tagClassName="!bg-[var(--color-dark-green)] text-white"
                  tuitionClassName=""
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p>Loading upcoming campuses... ({upcomingCampusesToShow.length} shown, {upcomingCampuses.length} total)</p>
              </div>
            )}
          </div>
          {showLoadMoreUpcoming && (
            <div className="flex justify-center mt-8">
              <Button 
                onClick={loadMoreUpcoming}
                variant="outline"
                size="small"
                className-="centered-icon-text"
              >
                Load More Campuses
              <span className="material-icons-outlined">expand_circle_down</span></Button>
            </div>
          )}

        </div>
      </div>

      <div className="alpha-section bg-white">
        <div className="alpha-card !rounded-[var(--radius-lg)] flex flex-col gap-4 justify-center items-center bg-[var(--color-sky-blue)] mx-auto">
          <h3 className="text-center">Campus Locations</h3>
          <p className="text-center">Find a school on the map</p>
          <CampusMap />
        </div>
      </div>
      
  </main>
);
} 