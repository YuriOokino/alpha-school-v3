"use client"
import MainHeading from "@/components/layout/headings/main-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState, useEffect } from "react"
import MediaHeading from "@/components/layout/headings/media-heading"
import SectionHeading from "@/components/layout/headings/section-heading"
import Divider from "@/components/layout/divider"
import VideoPlayer from "@/components/ui/video-player"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function AustinSummerCampPage() {
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Form state - all hooks must be called before any conditional returns
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const [parent1FirstName, setParent1FirstName] = useState("");
  const [parent1LastName, setParent1LastName] = useState("");
  const [parent1Email, setParent1Email] = useState("");
  const [parent1Phone, setParent1Phone] = useState("");
  const [parent2FirstName, setParent2FirstName] = useState("");
  const [parent2LastName, setParent2LastName] = useState("");
  const [parent2Email, setParent2Email] = useState("");
  const [parent2Phone, setParent2Phone] = useState("");
  const [parent1Relationship, setParent1Relationship] = useState("");
  const [parent2Relationship, setParent2Relationship] = useState("");
  const [address, setAddress] = useState("");

  const relationshipOptions = [
    "Mother", "Father", "Guardian", "Other"
  ];
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [child1Name, setChild1Name] = useState("");
  const [child1Age, setChild1Age] = useState("");
  const [child2Name, setChild2Name] = useState("");
  const [child2Age, setChild2Age] = useState("");
  const [additionalChildren, setAdditionalChildren] = useState("");
  const [allergies, setAllergies] = useState("");
  const [tshirtSizes, setTshirtSizes] = useState("");
  const [numCampers, setNumCampers] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [consent, setConsent] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await fetch('/api/events')
        const data = await response.json()
        const austinSummerCamp = data.find((e: any) => e.slug === 'austin-summer-camp')
        setEvent(austinSummerCamp)
      } catch (error) {
        console.error('Error loading event:', error)
      } finally {
        setLoading(false)
      }
    }

    loadEvent()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!event) {
    return <div>Event not found</div>
  }

  const handleSessionChange = (sessionId: string) => {
    setSelectedSessions((prev: string[]) =>
      prev.includes(sessionId)
        ? prev.filter((id: string) => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just log the values
    console.log({
      selectedSessions,
      parent1FirstName, parent1LastName, parent1Email, parent1Phone, parent1Relationship, parent2FirstName, parent2LastName, parent2Email, parent2Phone, parent2Relationship, address, city, state, zip, child1Name, child1Age, child2Name, child2Age, additionalChildren, allergies, tshirtSizes, numCampers, howHeard, consent
    });
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo("");
  };

  const allSessions = event.dates || [];

  return (
    <main className="bg-[var(--color-bg-muted)]">
      <MediaHeading
        variant="blue"
        tagline="Austin"
        actions={<Button href="#form-section" variant="lightBlue" className="rounded-[var(--radius-pill)]">Register<span className="material-icons-outlined down-45">arrow_forward</span></Button>}
        media={
          event.media.src.includes('.mp4') ? (
            <VideoPlayer
              videoUrl={event.image.src}
              posterImage="/assets/events/austin-summer-camp/summer-camp-hero-overlay.png"
              posterAlt={event.image.alt}
              className="w-full"
              aspectRatio="16/9"
            />
          ) : (
            <img src={event.image.src} alt={event.image.alt} />
          )
        }
      >
        {event.title}
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined mr-2">location_on</span>{event.address}</p>
        <p className="centered-icon-text mb-4"><span className="material-icons-outlined mr-2">email</span>{event.contact}</p>
      </MediaHeading>
      <section className="alpha-section bg-white">
        <div className="two-column-flex">
          {/* Left Column: Description */}
          <div className="flex-1">
            <h2 className="heading-style-h4 mb-4 text-[var(--color-navy-blue)]">{event.descriptionTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </div>
          {/* Right Column: Session Dropdowns */}
          <div className="flex-1">
            <Accordion type="single" collapsible className="space-y-4">
              {event.dates && event.dates.map((session: any) => (
                <AccordionItem value={session.id} key={session.id}>
                  <AccordionTrigger className="text-left">
                    <div className="flex flex-row items-center gap-x-4 w-full">
                      <span className={session.soldOut ? 'font-semibold line-through text-gray-400' : 'font-semibold'}>{session.title}</span>
                      {session.soldOut ? (
                        <span className="text-gray-500 font-medium text-base">SOLD OUT</span>
                      ) : (
                        <span className="text-sm text-gray-600">{session.date}</span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="centered-icon-text">
                        <span className="material-icons-outlined mr-2">schedule</span>
                        <span>{session.time}</span>
                      </div>
                      <div className="centered-icon-text">
                        <span className="material-icons-outlined mr-2">face</span>
                        <span>{session.ageRange}</span>
                      </div>
                      <div className="centered-icon-text">
                        <span className="material-icons-outlined mr-2">payments</span>
                        <span>{session.price}</span>
                      </div>
                      <Button 
                        className="mt-4" 
                        disabled={session.soldOut}
                        onClick={() => {
                          if (!session.soldOut) {
                            // Automatically select this session
                            if (!selectedSessions.includes(session.id)) {
                              setSelectedSessions([...selectedSessions, session.id]);
                            }
                            // Scroll to form section
                            document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Sign up
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
        </div>
        
        </section>

        <Divider fill="white" direction="up"/>

         {/* Videos */}
        <section className="alpha-section">
          <SectionHeading title="See what's awaiting you" description="Take a look at last year's workshop activities to know what's in store." className="text-[var(--color-primary)]" />
          <div className="two-column-flex">
            <div className="relative cursor-pointer group" onClick={() => openVideoModal("https://player.vimeo.com/video/839894581?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=1")}>
              <img 
                src="/assets/events/austin-summer-camp/demo-1-overlay.png" 
                alt="Summer Camp Video 1" 
                className="w-full h-auto rounded-[var(--radius-lg)]"
              />
              <div className="absolute inset-0 bg-black/40 rounded-[var(--radius-lg)]"></div>
              <div className="absolute inset-0 flex items-center justify-center hover:bg-black/10 transition-colors rounded-[var(--radius-lg)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 ml-1 md:w-8 md:h-8">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative cursor-pointer group" onClick={() => openVideoModal("https://player.vimeo.com/video/859137398?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=1")}>
              <img 
                src="/assets/events/austin-summer-camp/demo-2-overlay.png" 
                alt="Summer Camp Video 2" 
                className="w-full h-auto rounded-[var(--radius-lg)]"
              />
              <div className="absolute inset-0 bg-black/40 rounded-[var(--radius-lg)]"></div>
              <div className="absolute inset-0 flex items-center justify-center hover:bg-black/10 transition-colors rounded-[var(--radius-lg)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 ml-1 md:w-8 md:h-8">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
          <div className="alpha-card w-full flex gap-8 bg-[var(--color-light-green)] !p-[var(--space-lg)] m-auto text-[var(--color-dark-green)] mt-[var(--space-3xl)]">
     

              <div className="flex-1 gap-3"><h6 className="display-headline !text-[25px] mb-4">Groove generator</h6>
              <p className="mb-4">Create your own hit songs using AI technology and platforms.</p>
              </div>
              <div className="flex-1"><h6 className="display-headline !text-[25px] mb-4">Future fashion factory</h6>
              <p className="mb-4">Design tees via AI prompts and receive them post-camp.</p></div>
              <div className="flex-1 gap-3"><h6 className="display-headline !text-[25px] mb-4">Pokemon AR-venture</h6>
              <p>Participate in a thrilling scavenger hunt that brings Pokemon to life through augmented reality.</p>
              </div>
              <div className="flex-1 gap-3"><h6 className="display-headline !text-[25px] mb-4">Art-ificial intellignce</h6>
              <p>Craft with AI for a virtual reality gallery showcase and get a printed masterpiece to take home.</p>
              </div>
</div>
        </section>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 relative max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-black text-2xl"
                onClick={closeVideoModal}
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="w-full aspect-[16/9]">
                <iframe
                  src={selectedVideo}
                  title="Summer Camp Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        <Divider fill="white" direction="down"/>


     {/* Registration Form */}
      <section className="alpha-section bg-white" id="form-section">
          
          <div className="alpha-form">
          <div className="form-top-content">
                <h3 className="heading-style-h4">Book your spot!</h3>
                <p className="mb-8">Unlock a summer of innovation! Secure your spot today, limited spots available.</p>
              </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              
            <h6>Select Camp Sessions</h6>
          

              {/* Session Selection */}
              {allSessions.length > 0 && (
                
                <div>
                  
                  <div className="space-y-2">
                    {allSessions.map((session: any) => (
                      <div key={session.id} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={`session-${session.id}`}
                          checked={selectedSessions.includes(session.id)}
                          onChange={() => handleSessionChange(session.id)}
                          disabled={session.soldOut}
                          className="w-4 h-4"
                        />
                        <label 
                          htmlFor={`session-${session.id}`} 
                          className={`text-sm ${session.soldOut ? 'line-through text-gray-400' : ''}`}
                        >
                          <strong>{session.title}</strong> - {session.date}
                          {session.soldOut && <span className="ml-2 text-gray-500">(SOLD OUT)</span>}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h6>Parent/guardian #1 Information</h6>
              <div className="flex gap-4">
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent1FirstName" className="xs-label">Parent #1 First Name<span>*</span></label>
                  <Input id="parent1FirstName" type="text" value={parent1FirstName} onChange={e => setParent1FirstName(e.target.value)} required className="field-input" />
                </div>
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent1LastName" className="xs-label">Parent #1 Last Name<span>*</span></label>
                  <Input id="parent1LastName" type="text" value={parent1LastName} onChange={e => setParent1LastName(e.target.value)} required className="field-input" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent1Email" className="xs-label">Parent #1 Email<span>*</span></label>
                  <Input id="parent1Email" type="email" value={parent1Email} onChange={e => setParent1Email(e.target.value)} required className="field-input" />
                </div>
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent1Phone" className="xs-label">Parent #1 Phone Number<span>*</span></label>
                  <Input id="parent1Phone" type="tel" value={parent1Phone} onChange={e => setParent1Phone(e.target.value)} required className="field-input" />
                </div>
              </div>
                             <div className="field-wrapper">
                 <label htmlFor="parent1Relationship" className="xs-label">Parent #1 Relationship to Student(s)</label>
                 <select id="parent1Relationship" value={parent1Relationship} onChange={e => setParent1Relationship(e.target.value)} className="field-input">
                   <option value="">Please Select</option>
                   {relationshipOptions.map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
               </div>

              <h6>Parent/guardian #2 Information</h6>
              <div className="flex gap-4">
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent2FirstName" className="xs-label">Parent #2 First Name</label>
                  <Input id="parent2FirstName" type="text" value={parent2FirstName} onChange={e => setParent2FirstName(e.target.value)} className="field-input" />
                </div>
                <div className="flex-1 field-wrapper">
                  <label htmlFor="parent2LastName" className="xs-label">Parent #2 Last Name</label>
                  <Input id="parent2LastName" type="text" value={parent2LastName} onChange={e => setParent2LastName(e.target.value)} className="field-input" />
                </div>
              </div>
                             <div className="flex gap-4">
                 <div className="flex-1 field-wrapper">
                   <label htmlFor="parent2Email" className="xs-label">Parent #2 Email</label>
                   <Input id="parent2Email" type="email" value={parent2Email} onChange={e => setParent2Email(e.target.value)} className="field-input" />
                 </div>
                 <div className="flex-1 field-wrapper">
                   <label htmlFor="parent2Phone" className="xs-label">Parent #2 Phone Number</label>
                   <Input id="parent2Phone" type="tel" value={parent2Phone} onChange={e => setParent2Phone(e.target.value)} className="field-input" />
                 </div>
               </div>
               <div className="field-wrapper">
                 <label htmlFor="parent2Relationship" className="xs-label">Parent #2 Relationship to Student(s)</label>
                 <select id="parent2Relationship" value={parent2Relationship} onChange={e => setParent2Relationship(e.target.value)} className="field-input">
                   <option value="">Please Select</option>
                   {relationshipOptions.map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
               </div>
                             <h6>Address Information</h6>
               <div className="field-wrapper">
                 <label htmlFor="address" className="xs-label">Street Address<span>*</span></label>
                 <Input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="field-input" />
               </div>
               <div className="flex gap-4">
                 <div className="flex-1 field-wrapper">
                   <label htmlFor="city" className="xs-label">City<span>*</span></label>
                   <Input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
                 </div>
                 <div className="flex-1 field-wrapper">
                   <label htmlFor="state" className="xs-label">State<span>*</span></label>
                   <Input id="state" type="text" value={state} onChange={e => setState(e.target.value)} required className="field-input" onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (/\d/.test(char)) { e.preventDefault(); } }} />
                 </div>
                 <div className="flex-1 field-wrapper">
                   <label htmlFor="zip" className="xs-label">Zip Code<span>*</span></label>
                   <Input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} required className="field-input" pattern="^\d{5}(-\d{4})?$" maxLength={10} onKeyPress={(e) => { const char = String.fromCharCode(e.which); if (!/\d/.test(char) && e.which !== 8 && e.which !== 45) { e.preventDefault(); } }} />
                 </div>
               </div>
              
              <h6>Student Information</h6>
              <div className="flex gap-4">
                <div className="flex-1 field-wrapper">
                  <label htmlFor="child1Name" className="xs-label">Child #1 Full Name<span>*</span></label>
                  <Input id="child1Name" type="text" value={child1Name} onChange={e => setChild1Name(e.target.value)} required className="field-input" />
                </div>
                <div className="flex-1 field-wrapper">
                  <label htmlFor="child1Age" className="xs-label">Child #1 Age<span>*</span></label>
                  <Input id="child1Age" type="number" min="3" max="18" value={child1Age} onChange={e => setChild1Age(e.target.value)} required className="field-input" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 field-wrapper">
                  <label htmlFor="child2Name" className="xs-label">Child #2 Full Name</label>
                  <Input id="child2Name" type="text" value={child2Name} onChange={e => setChild2Name(e.target.value)} className="field-input" />
                </div>
                <div className="flex-1 field-wrapper">
                  <label htmlFor="child2Age" className="xs-label">Child #2 Age</label>
                  <Input id="child2Age" type="number" min="3" max="18" value={child2Age} onChange={e => setChild2Age(e.target.value)} className="field-input" />
                </div>
              </div>
              <div className="field-wrapper">
                <label htmlFor="additionalChildren" className="xs-label">Additional Child Name(s) and Age(s)</label>
                <Input id="additionalChildren" type="text" value={additionalChildren} onChange={e => setAdditionalChildren(e.target.value)} className="field-input" placeholder="e.g., John Smith (8), Jane Smith (6)" />
              </div>

              <h6>Additional Information</h6>
              <div className="field-wrapper">
                <label htmlFor="numCampers" className="xs-label">How many campers will be attending?<span>*</span></label>
                <select id="numCampers" value={numCampers} onChange={e => setNumCampers(e.target.value)} required className="field-input">
                  <option value="">Please Select</option>
                  {Array.from({ length: 9 }, (_, i) => i + 2).map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="field-wrapper">
                <label htmlFor="allergies" className="xs-label">Allergies & Dietary Preferences</label>
                <Textarea id="allergies" value={allergies} onChange={e => setAllergies(e.target.value)} rows={3} className="field-input" placeholder="e.g., Peanut allergy, Vegetarian" />
              </div>
              <div className="field-wrapper">
                <label htmlFor="tshirtSizes" className="xs-label">T-Shirt Sizes<span>*</span></label>
                <Input id="tshirtSizes" type="text" value={tshirtSizes} onChange={e => setTshirtSizes(e.target.value)} required className="field-input" placeholder="e.g., Child 1: M, Child 2: S, Parent: L" />
              </div>
              
              <div className="field-wrapper">
                <label htmlFor="howHeard" className="xs-label">How did you hear about us?</label>
                <select 
                  id="howHeard" 
                  value={howHeard} 
                  onChange={e => setHowHeard(e.target.value)}
                  className="field-input"
                >
                  <option value="">Select an option</option>
                  <option value="Community Member">Community Member</option>
                  <option value="Current Alpha Parent">Current Alpha Parent</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Google Advert">Google Advert</option>
                  <option value="Email">Email</option>
                  <option value="Article">Article</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                  <option value="Event">Event</option>
                  <option value="South Florida Business Journal">South Florida Business Journal</option>
                </select>
              </div>
              <p><strong>Please note your registration is only complete once you've completed your payment successfully below.</strong></p>
              <div className="flex items-start gap-2">
                <input id="consent" type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1" />
                <label htmlFor="consent" className="text-sm">
                  I agree to receive SMS messages from 2 Hour Learning regarding inquiry follow-up, invitations to events, and personalized updates about applications and enrollments. Message & data rates may apply. Reply STOP to opt out.
                </label>
              </div>
              <Button type="submit" disabled={selectedSessions.length === 0}>
                Continue to payment
              </Button>
            </form>
          </div>
      </section>
    </main>
  );
} 