"use client";

import { useState } from "react";
import MainHeading from "@/components/layout/headings/main-heading"
import { Button } from "@/components/ui/button"
import ApplicationCard from "@/components/features/cards/link-card"
import { getCampusApplicationUrl } from "@/utils/campuses"
import { campuses } from "@/content/campuses"

// Material Icons arrow_forward - Regular variant
const regularArrowSvg = (
  <Button variant="outline" size="small" className="px-1.5 py-1.5 outline-[var(--color-navy-blue)] text-[var(--color-navy-blue)]">
    <span className="material-icons-outlined !m-0 ml-2">
      arrow_forward
    </span>
  </Button>
);

// Material Icons arrow_forward - Inverted variant
const invertedArrowSvg = (
  <Button variant="alternate" size="small">
    Apply
    <span className="material-icons-outlined !m-0 ml-2">
      arrow_forward
    </span>
  </Button>
);

// State code to full name mapping (sorted by campus count, then alphabetically)
const stateNames: { [key: string]: string } = {
  'TX': 'Texas',           // 8 campuses
  'CA': 'California',      // 4 campuses
  'FL': 'Florida',         // 3 campuses
  'NC': 'North Carolina',  // 2 campuses
  'AZ': 'Arizona',         // 1 campus
  'CO': 'Colorado',        // 1 campus
  'GA': 'Georgia',         // 1 campus
  'NV': 'Nevada',          // 1 campus
  'NY': 'New York',        // 1 campus
  'OR': 'Oregon',          // 1 campus
  'TN': 'Tennessee',       // 1 campus
  'UT': 'Utah',            // 1 campus
  'WA': 'Washington'       // 1 campus
};

export default function AdmissionFormsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedState, setExpandedState] = useState<string | null>(null);
  const [animationComplete, setAnimationComplete] = useState<string | null>(null);

  // Filter campuses based on search query (copied from locations page)
  const filteredCampuses = campuses.filter((campus) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    
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

  // Group filtered campuses by state code
  const campusesByState: { [stateCode: string]: typeof campuses } = {};
  filteredCampuses.forEach(campus => {
    if (!campusesByState[campus.stateCode]) {
      campusesByState[campus.stateCode] = [];
    }
    campusesByState[campus.stateCode].push(campus);
  });

  // Get sorted state codes with at least one campus - multiple campuses first, then alphabetically
  const sortedStateCodes = Object.keys(campusesByState).sort((a, b) => {
    const campusesA = campusesByState[a].length;
    const campusesB = campusesByState[b].length;
    
    // First sort by number of campuses (descending)
    if (campusesA !== campusesB) {
      return campusesB - campusesA;
    }
    
    // Then sort alphabetically by state name within each group
    const nameA = stateNames[a] || a;
    const nameB = stateNames[b] || b;
    return nameA.localeCompare(nameB);
  });

  const handleCardClick = (stateCode: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const hasMultipleCampuses = campusesByState[stateCode].length > 1;
    if (hasMultipleCampuses) {
      setExpandedState(expandedState === stateCode ? null : stateCode);
      
      // Set animation complete after transition duration
      if (expandedState === stateCode) {
        // Closing - clear immediately
        setAnimationComplete(null);
      } else {
        // Opening - wait for animation to complete
        setTimeout(() => {
          setAnimationComplete(stateCode);
        }, 300);
      }
    }
  };

  // Helper function to create rows based on screen size
  const createRows = (cardsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < sortedStateCodes.length; i += cardsPerRow) {
      rows.push(sortedStateCodes.slice(i, i + cardsPerRow));
    }
    return rows;
  };

  return (
    <>
      {/* Main Title Section */}
      <MainHeading 
        tagline="Admissions"
        taglineVariant="green"
        description={
          <>
            Please select the campus you'd like to apply to below.
            <br />
            Please note Alpha School charges a non-refundable fee of $100 as part of the application process.
          </>
        }
      >
        Apply to one of our campuses
      </MainHeading>
      
      {/* Campus Card Grid Section */}
      <section className="alpha-section">
        <div>
          <div className="field-wrapper mb-8 !border !border-gray-300">
            <label className="xs-label">Search for a campus</label>
            <input 
              type="search" 
              placeholder="Enter a city or state" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="field-input"
            />
          </div>
          
          {sortedStateCodes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No campuses found matching your search.</p>
            </div>
          )}

          {/* Mobile: 1 card per row */}
          <div className="block md:hidden space-y-4">
            {sortedStateCodes.map(stateCode => {
              const campusesInState = campusesByState[stateCode];
              const firstCampus = campusesInState[0];
              const hasMultipleCampuses = campusesInState.length > 1;
              const isExpanded = expandedState === stateCode;
              const subtitle = hasMultipleCampuses ? `${campusesInState.length} campuses` : firstCampus.name;
              
              return (
                <div key={stateCode} className="mb-4">
                  <div
                    className={`transition-[width,flex,opacity] duration-300 ease-out cursor-pointer overflow-hidden w-full`}
                  >
                    {!hasMultipleCampuses && (
                      <a 
                        href={getCampusApplicationUrl(firstCampus.name)}
                        className="absolute inset-0 z-10 pointer-events-none"
                        aria-label={`Apply to ${firstCampus.name}`}
                      />
                    )}
                    <div 
                      className={`w-full h-full p-8 rounded-[var(--radius-lg)] flex flex-col justify-between relative group ${
                        hasMultipleCampuses ? 'bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]' : 
                        'bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]'
                      }`}
                      onClick={hasMultipleCampuses ? (e) => handleCardClick(stateCode, e) : () => window.location.href = getCampusApplicationUrl(firstCampus.name)}
                    >
                      <div className={`absolute top-0 right-0 p-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        {hasMultipleCampuses ? regularArrowSvg : invertedArrowSvg}
                      </div>
                      <div className="h-16"></div>
                                                <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col items-start gap-y-2">
                              <h1 className="text-[60px] leading-none font-['Bagel_Fat_One'] m-0 transition-all duration-300">{stateCode}</h1>
                              <h4 className="heading-style-h5 m-0 h-[27px] overflow-hidden whitespace-nowrap transition-all duration-300">{subtitle}</h4>
                            </div>
                            {animationComplete === stateCode && (
                              <div className="flex flex-wrap gap-2 w-full">
                                {campusesInState.map((campus, index) => {
                                  // Deterministic button variant: 1 in 3 is filled, starting with outline
                                  const isDarkVariant = index % 3 === 2;
                                  return (
                                    <Button 
                                      key={campus.name}
                                      variant="outline" 
                                      radius="small"
                                      href={getCampusApplicationUrl(campus.name)}
                                      className={`uppercase outline-[var(--color-navy-blue)] ${
                                        isDarkVariant 
                                          ? 'bg-[var(--color-navy-blue)] text-white hover:bg-[var(--color-navy-blue)]/90' : ''
                                      }`}
                                    >
                                      {campus.name}
                                      <span className="material-icons-outlined !m-0 ml-1">arrow_circle_right</span>
                                    </Button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet: 2 cards per row */}
          <div className="hidden md:block lg:hidden space-y-4">
            {createRows(2).map((row, rowIndex) => {
              const expandedCardInRow = row.find(card => card === expandedState);
              
              return (
                <div key={rowIndex} className="flex gap-4 justify-center">
                  {row.map(stateCode => {
                    const campusesInState = campusesByState[stateCode];
                    const firstCampus = campusesInState[0];
                    const hasMultipleCampuses = campusesInState.length > 1;
                    const isExpanded = expandedState === stateCode;
                    const shouldHide = expandedState && expandedState !== stateCode && expandedCardInRow;
                    const subtitle = hasMultipleCampuses ? `${campusesInState.length} campuses` : firstCampus.name;
                    
                    return (
                      <div
                        key={stateCode}
                        className={`h-80 transition-[width,flex,opacity] duration-300 ease-out cursor-pointer overflow-hidden ${
                          isExpanded ? 'flex-1 min-w-[50%]' : 
                          shouldHide ? 'w-0 min-w-0 pointer-events-none opacity-0' : 
                          'w-[350px] flex-shrink-0'
                        }`}
                        style={{
                          display: shouldHide ? 'none' : 'flex'
                        }}
                      >
                        {!hasMultipleCampuses && (
                          <a 
                            href={getCampusApplicationUrl(firstCampus.name)}
                            className="absolute inset-0 z-10 pointer-events-none"
                            aria-label={`Apply to ${firstCampus.name}`}
                          />
                        )}
                        <div 
                          className={`w-full h-full p-8 rounded-[var(--radius-lg)] flex flex-col justify-between relative group ${
                            hasMultipleCampuses ? 'bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]' : 
                            'bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]'
                          }`}
                          onClick={hasMultipleCampuses ? (e) => handleCardClick(stateCode, e) : () => window.location.href = getCampusApplicationUrl(firstCampus.name)}
                        >
                          <div className={`absolute top-0 right-0 p-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            {hasMultipleCampuses ? regularArrowSvg : invertedArrowSvg}
                          </div>
                          <div className="h-16"></div>
                          <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col items-start gap-y-2 flex-shrink-0">
                              <h1 className="text-[80px] leading-none font-['Bagel_Fat_One'] m-0 transition-all duration-300">{stateCode}</h1>
                              <h4 className="heading-style-h5 m-0 h-[27px] overflow-hidden whitespace-nowrap transition-all duration-300">{subtitle}</h4>
                            </div>
                            {animationComplete === stateCode && (
                              <div className="flex flex-wrap gap-2 max-w-[50%] flex-shrink-0 self-end">
                                {campusesInState.map((campus, index) => {
                                  // Deterministic button variant: 1 in 3 is filled, starting with outline
                                  const isDarkVariant = index % 3 === 2;
                                  return (
                                    <Button 
                                      key={campus.name}
                                      variant="outline" 
                                      radius="small"
                                      href={getCampusApplicationUrl(campus.name)}
                                      className={`uppercase outline-[var(--color-navy-blue)] ${
                                        isDarkVariant 
                                          ? 'bg-[var(--color-navy-blue)] text-white hover:bg-[var(--color-navy-blue)]/90' : ''
                                      }`}
                                    >
                                      {campus.name}
                                      <span className="material-icons-outlined !m-0 ml-1">arrow_circle_right</span>
                                    </Button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          

          {/* Desktop: 3 cards per row */}
          <div className="hidden lg:block space-y-4">
            {createRows(3).map((row, rowIndex) => {
              const expandedCardInRow = row.find(card => card === expandedState);
              
              return (
                <div key={rowIndex} className="flex gap-4 justify-center">
                  {row.map(stateCode => {
                    const campusesInState = campusesByState[stateCode];
                    const firstCampus = campusesInState[0];
                    const hasMultipleCampuses = campusesInState.length > 1;
                    const isExpanded = expandedState === stateCode;
                    const shouldHide = expandedState && expandedState !== stateCode && expandedCardInRow;
                    const subtitle = hasMultipleCampuses ? `${campusesInState.length} campuses` : firstCampus.name;
                    
                    return (
                      <div
                        key={stateCode}
                        className={`h-96 transition-[width,flex,opacity] duration-300 ease-out cursor-pointer overflow-hidden ${
                          isExpanded ? 'flex-1 min-w-[50%]' : 
                          shouldHide ? 'w-0 min-w-0 pointer-events-none opacity-0' : 
                          'w-[350px] flex-shrink-0'
                        }`}
                        style={{
                          display: shouldHide ? 'none' : 'flex'
                        }}
                      >
                        {!hasMultipleCampuses && (
                          <a 
                            href={getCampusApplicationUrl(firstCampus.name)}
                            className="absolute inset-0 z-10 pointer-events-none"
                            aria-label={`Apply to ${firstCampus.name}`}
                          />
                        )}
                        <div 
                          className={`w-full h-full p-8 rounded-[var(--radius-lg)] flex flex-col justify-between relative group ${
                            hasMultipleCampuses ? 'bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]' : 
                            'bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]'
                          }`}
                          onClick={hasMultipleCampuses ? (e) => handleCardClick(stateCode, e) : () => window.location.href = getCampusApplicationUrl(firstCampus.name)}
                        >
                          <div className={`absolute top-0 right-0 p-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${hasMultipleCampuses ? 'group-hover:animate-unlock' : ''}`}>
                            {hasMultipleCampuses ? regularArrowSvg : invertedArrowSvg}
                          </div>
                          <div className="h-16"></div>
                          <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col items-start gap-y-2 flex-shrink-0">
                              <h1 className="text-[120px] leading-none font-['Bagel_Fat_One'] m-0 transition-all duration-300">{stateCode}</h1>
                              <h4 className="heading-style-h5 m-0 h-[27px] overflow-hidden whitespace-nowrap transition-all duration-300">{subtitle}</h4>
                            </div>
                            {animationComplete === stateCode && (
                              <div className="flex flex-wrap gap-2 max-w-[50%] flex-shrink-0 self-end">
                                {campusesInState.map((campus, index) => {
                                  // Deterministic button variant: 1 in 3 is filled, starting with outline
                                  const isDarkVariant = index % 3 === 2;
                                  return (
                                    <Button 
                                      key={campus.name}
                                      variant="outline" 
                                      radius="small"
                                      href={getCampusApplicationUrl(campus.name)}
                                      className={`uppercase outline-[var(--color-navy-blue)] ${
                                        isDarkVariant 
                                          ? 'bg-[var(--color-navy-blue)] text-white hover:bg-[var(--color-navy-blue)]/90' : ''
                                      }`}
                                    >
                                      {campus.name}
                                      <span className="material-icons-outlined !m-0 ml-1">arrow_circle_right</span>
                                    </Button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[var(--space-4xl)]">
          <div className="alpha-card flex flex-col gap-2 bg-[var(--color-light-green)] text-[var(--color-dark-green)] max-w-[600px] m-auto">
            <h5>Cannot find your city?</h5>
            <p>To get started with an Alpha Expansion School in your area, we are looking for interested families just like you. Ready to lead this educational revolution in your city?</p>
         <div><Button variant="darkGreen" href="/bring-alpha-to-your-city">Bring Alpha to Your city </Button></div>
        </div>
        </div>        
      </section>
    </>
  );
} 