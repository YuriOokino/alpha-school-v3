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
    <main className="bg-white">
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

        <Divider fill="white" backgroundColor="var(--color-bg-muted)" direction="up"/>

         {/* Videos */}
        <section className="alpha-section bg-[var(--color-bg-muted)]">
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
          <div className="alpha-card !p-[var(--space-lg)] text-[var(--color-dark-green)] bg-[var(--color-light-green)] mt-[var(--space-3xl)] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-[var(--space-md)]">
  <div className="flex flex-col justify-between min-w-0 w-full md:w-1/2 lg:w-1/4">
    <div className="mb-[var(--space-lg)]">
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.75 0C69.8586 0 74 4.14137 74 9.25V64.75C74 69.8586 69.8586 74 64.75 74H9.25C4.14137 74 0 69.8586 0 64.75V9.25C0 4.14137 4.14137 0 9.25 0H64.75ZM54.2578 11.334C54.2578 10.4257 53.4423 9.73532 52.5488 9.8877L25.6221 14.4854C24.9191 14.6056 24.4053 15.2169 24.4053 15.9316V27.0469L24.4043 27.0479V51.3916C23.5262 51.3916 13.8683 50.6583 13.5752 56.6709C13.2822 62.6834 20.4535 64.2967 25.5771 62.5371C28.7562 61.4452 28.7939 59.017 28.7939 57.8438V28.791L49.876 25.1914V46.8457C48.996 46.8455 39.3408 46.113 39.0479 52.125C38.755 58.1375 45.9262 59.751 51.0498 57.9912C54.2289 56.8993 54.2666 54.4711 54.2666 53.2979V21.6211L54.2578 21.6221V11.334Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <h6 className="display-headline !text-[25px] mb-2">Groove generator</h6>
    <p className="mb-4 h-full">Create your own hit songs using AI technology and platforms.</p>
  </div>
  <div className="flex flex-col justify-between min-w-0 w-full md:w-1/2 lg:w-1/4 flex-grow">
    <div className="mb-[var(--space-lg)]">
      <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.371 14.4648C28.5901 14.4649 29.5088 15.473 29.8475 16.5947C30.4474 18.581 31.9358 19.8622 33.5907 20.6533C35.0847 21.3675 36.7042 21.674 37.8944 21.7412C39.0722 21.6742 40.6274 21.3683 42.0497 20.6553C43.6239 19.866 45.0272 18.5864 45.5927 16.5996C45.9141 15.4708 46.8337 14.465 48.0526 14.4648H56.1063C56.5945 14.4649 57.0687 14.6279 57.454 14.9277L61.8534 18.3525C61.7392 18.442 61.6245 18.5372 61.5116 18.6406C60.7748 19.3155 60.0608 20.2777 59.3934 21.3291C58.7258 22.381 58.1034 23.525 57.5507 24.5635C56.9976 25.6027 56.5149 26.536 56.1249 27.1699C55.5019 28.1822 54.8697 28.7968 54.3348 29.1543C53.8663 29.4674 53.4731 29.5822 53.2255 29.5957H53.1259C52.462 29.5957 52.0567 29.1706 51.8153 28.5791C51.5736 27.9865 51.4999 27.234 51.4999 26.6006C51.5 26.2898 51.5902 25.9831 51.7147 25.6719C51.7769 25.5164 51.8477 25.3602 51.9198 25.2021C51.9918 25.0442 52.0653 24.8831 52.1327 24.7207C52.4027 24.0701 52.5782 23.3735 52.1805 22.5781C51.9827 22.1825 51.7395 21.9265 51.4755 21.7803C51.2114 21.6341 50.9285 21.5989 50.6532 21.6426C50.104 21.7299 49.5824 22.1284 49.285 22.5742C49.1332 22.8019 49.0476 23.1771 49.0048 23.625C48.9618 24.0745 48.9618 24.6044 48.9862 25.1484C49.0351 26.237 49.1814 27.3868 49.2792 28.0713C49.3765 28.7526 49.3751 29.4518 49.0389 30.0645C48.7031 30.6761 48.0289 31.2094 46.7645 31.5498C46.3136 31.6711 45.7131 31.5187 45.0458 31.1963C44.3804 30.8747 43.6559 30.3878 42.9608 29.8506C41.5701 28.7756 40.3019 27.5037 39.8641 26.9688C39.6454 26.7013 39.3717 26.2998 39.0565 25.8516C38.742 25.4042 38.3864 24.9119 38.0067 24.4648C37.6272 24.018 37.2211 23.6146 36.8046 23.3477C36.388 23.0808 35.9563 22.9472 35.5282 23.0479C34.6777 23.248 34.2235 24.0021 34.1327 24.8916C34.042 25.7812 34.3126 26.8162 34.9218 27.5996C35.2673 28.0439 35.8882 28.5478 36.6503 29.0762C37.4132 29.6052 38.3217 30.1612 39.244 30.7109C40.1666 31.2608 41.103 31.804 41.9257 32.3076C42.7486 32.8115 43.455 33.2751 43.9169 33.6641C44.5701 34.2142 44.7566 34.8366 44.5731 35.377C44.3886 35.9198 43.8265 36.3928 42.954 36.6309C42.691 36.7026 42.3164 36.7151 41.871 36.6953C41.4265 36.6755 40.9143 36.6243 40.3768 36.5693C39.3034 36.4596 38.1268 36.3365 37.1942 36.4346C36.4563 36.5122 35.6277 36.7983 35.0516 37.293C34.7635 37.5405 34.5376 37.8413 34.4188 38.1953C34.2999 38.5499 34.2889 38.9562 34.4276 39.4121C34.6022 39.9856 35.0017 40.3651 35.5126 40.6035C36.0226 40.8415 36.6448 40.9399 37.2704 40.9521C37.8963 40.9644 38.5282 40.8905 39.0585 40.7832C39.5875 40.6761 40.0193 40.5349 40.244 40.4102C40.6856 40.1648 41.8067 39.4821 42.9764 39.0068C43.5612 38.7693 44.1562 38.5842 44.6825 38.5312C45.2095 38.4783 45.662 38.5588 45.9686 38.8418C46.4052 39.2449 46.5434 39.7235 46.494 40.2246C46.4444 40.7278 46.2054 41.2557 45.8856 41.752C45.2463 42.744 44.291 43.5995 43.9198 43.8691C43.386 44.2566 42.2246 44.8255 40.9335 45.3916C39.6436 45.9571 38.2269 46.5188 37.1854 46.8926C36.4472 47.1576 35.6897 47.6724 35.163 48.2695C34.6376 48.8654 34.3337 49.5536 34.5253 50.1611C34.6739 50.6318 34.92 50.9646 35.2303 51.1904C35.5402 51.4158 35.912 51.5338 36.3104 51.5791C37.1065 51.6696 38.0169 51.472 38.7714 51.2598C41.912 50.3761 43.8733 47.3314 44.4569 46.5547C44.75 46.1647 45.4081 45.3126 46.1503 44.6436C46.5214 44.309 46.9121 44.0215 47.287 43.8604C47.6619 43.6993 48.017 43.6663 48.3212 43.8301C48.4926 43.9225 48.6335 44.1097 48.7255 44.3867C48.8173 44.6637 48.8589 45.0283 48.8319 45.4707C48.7778 46.3558 48.4508 47.5482 47.7196 48.9619C47.3932 49.5929 47.0504 50.167 46.7313 50.7344C46.4126 51.3011 46.1174 51.8606 45.8876 52.459C45.4274 53.6575 45.2304 55.0112 45.6219 56.8984C45.8917 58.198 46.3795 59.0627 46.9803 59.585C47.5819 60.1077 48.2938 60.2848 49.0038 60.2178C50.4207 60.0839 51.8347 58.9761 52.3768 57.6885C52.5743 57.2194 52.6975 56.5653 52.7665 55.8301C52.8355 55.0939 52.8501 54.273 52.8319 53.4697C52.7955 51.8636 52.6248 50.3218 52.4764 49.6543C52.0863 47.8986 51.8915 44.8718 51.8915 44.1895C51.8916 44.0243 51.9376 43.7925 52.0399 43.5586C52.1424 43.3246 52.3002 43.0902 52.5194 42.9189C52.7381 42.7482 53.0196 42.639 53.3729 42.6543C53.7272 42.6698 54.157 42.8101 54.6698 43.1445C55.2252 43.5067 55.7105 44.1004 56.1444 44.8145C56.5781 45.5282 56.9586 46.3602 57.3065 47.1963C57.4804 47.6142 57.6468 48.033 57.8065 48.4385C57.8969 48.6678 57.988 48.892 58.0751 49.1104V62.0527C58.075 63.2648 57.0918 64.247 55.8798 64.2471H19.912C18.7 64.2469 17.7177 63.2648 17.7177 62.0527V42.6338C17.7172 41.3723 16.3466 40.5881 15.2587 41.2266C14.5828 41.6235 13.732 41.5651 13.1171 41.0791L1.23425 31.6865C0.117255 30.8036 0.123426 29.107 1.24695 28.2324L18.3378 14.9277C18.7231 14.6278 19.1981 14.4648 19.6864 14.4648H27.371ZM62.7079 53.0635C63.3108 53.0833 63.9909 53.3015 64.4891 53.9404C65.1059 54.7317 65.3288 55.4969 65.3221 56.1211C65.3154 56.7436 65.0797 57.2292 64.7753 57.4561C64.3647 57.7617 63.832 57.9504 63.3104 58C62.7892 58.0495 62.2743 57.9602 61.9003 57.7041C61.7132 57.576 61.4716 57.3299 61.243 57.0127C61.0142 56.695 60.7965 56.3035 60.66 55.8838C60.5237 55.4643 60.468 55.0146 60.5634 54.5811C60.659 54.1468 60.9056 53.7306 61.371 53.3799C61.4746 53.2992 61.66 53.2155 61.8915 53.1543C62.1239 53.0929 62.4067 53.0536 62.7079 53.0635ZM58.0751 43.9209C58.3603 44.2954 58.6999 44.6772 59.0624 45.0703C59.4389 45.4787 59.8394 45.9008 60.2245 46.3408C60.9947 47.2209 61.7073 48.1787 62.0516 49.2607C62.325 50.1204 61.9208 51.0629 61.2928 51.5801C60.9781 51.8391 60.6034 51.9943 60.2264 51.9766C59.8484 51.9587 59.4731 51.7671 59.1561 51.3447C58.8599 50.9498 58.571 50.3285 58.2704 49.6006C58.2051 49.4424 58.1418 49.2779 58.0751 49.1104V43.9209ZM58.6034 39.5361C60.438 39.2438 62.0148 39.7461 63.495 40.4297L62.6747 41.0791C62.0598 41.5649 61.2098 41.6234 60.5341 41.2266C59.4461 40.5875 58.0755 41.3721 58.0751 42.6338V43.9209C58.0637 43.9059 58.0511 43.8919 58.0399 43.877C57.456 43.0991 56.9965 42.1045 56.9843 41.2598C56.9783 40.8384 57.0837 40.4555 57.3378 40.1553C57.5919 39.8552 57.9989 39.6325 58.6034 39.5361ZM67.3446 37.3867C68.5377 37.4217 69.7176 37.555 70.5331 37.9043C71.5754 38.351 72.1684 39.5646 72.0575 40.6523C72.0018 41.1973 71.7689 41.7137 71.3261 42.0869C70.8828 42.4602 70.2316 42.6877 69.3456 42.6631C68.4603 42.6384 67.6151 42.3866 66.7792 42.0342C65.9438 41.6819 65.1138 41.2279 64.2626 40.8008C64.0091 40.6736 63.7535 40.549 63.495 40.4297L67.3446 37.3867ZM74.5458 28.2324C75.669 29.107 75.6752 30.8036 74.5585 31.6865L67.3446 37.3867C67.0253 37.3774 66.705 37.3744 66.3905 37.377C65.6447 37.3831 64.9294 37.4162 64.3339 37.4482C63.7375 37.4804 63.2625 37.5107 62.995 37.5107C62.7961 37.5108 62.2879 37.5356 61.7137 37.5234C61.1399 37.5112 60.5092 37.462 60.0751 37.3174C59.652 37.1764 59.3331 36.7176 59.2694 36.1729C59.2061 35.6304 59.3975 35.0072 59.9882 34.5449C61.1034 33.6725 62.6084 33.4047 64.0634 33.1602C64.7894 33.0381 65.5034 32.9211 66.1454 32.7373C66.7875 32.5534 67.3612 32.301 67.8065 31.9053C68.2497 31.5113 68.4697 31.1445 68.5389 30.8125C68.6081 30.48 68.5261 30.1866 68.3759 29.9424C68.2259 29.6987 68.0077 29.503 67.8036 29.3623C67.6002 29.2221 67.407 29.1343 67.3036 29.1084C66.9076 29.0094 65.8213 28.8131 64.5399 29.6016C63.9075 29.9907 62.4688 30.6729 61.0546 31.124C60.3474 31.3496 59.6478 31.5165 59.0594 31.5605C58.4686 31.6047 58.0009 31.5242 57.744 31.2676C57.2245 30.748 57.3609 30.0362 57.702 29.3418C57.8718 28.9962 58.0905 28.6586 58.2977 28.3584C58.5039 28.0598 58.7005 27.7948 58.8231 27.5986C58.8824 27.5039 59.0032 27.3564 59.1727 27.168C59.3418 26.98 59.5586 26.7525 59.8075 26.4961C60.3056 25.983 60.9339 25.3562 61.577 24.7061C62.2199 24.0561 62.878 23.3825 63.4344 22.7764C63.9901 22.1711 64.4468 21.6304 64.6864 21.2471C64.7655 21.1205 64.8526 20.9499 64.9374 20.7529L74.5458 28.2324ZM32.5028 32.332C30.6877 32.0868 29.6812 32.5505 29.1503 33.1846C28.6216 33.8162 28.5717 34.6094 28.6522 35.0127C28.8021 35.7619 29.5229 36.4537 30.4344 36.7617C31.3482 37.0704 32.4612 36.9966 33.4003 36.2061C34.1565 35.5691 34.2606 34.6427 34.0136 33.8584C33.7672 33.0769 33.1676 32.4219 32.5028 32.332ZM61.8534 18.3525C62.4837 17.8589 63.1309 17.5882 63.7811 17.6729C64.3497 17.747 64.7258 17.9586 64.9589 18.25C65.1914 18.5408 65.2782 18.9075 65.2782 19.2852C65.2781 19.7972 65.1168 20.3359 64.9374 20.7529L61.8534 18.3525Z"
          fill="currentColor"
        />
        <circle cx="31.2125" cy="49.3151" r="8.56164" fill="currentColor" />
      </svg>
    </div>
    <h6 className="display-headline !text-[25px] mb-2">Future fashion factory</h6>
    <p className="mb-4 h-full">Design tees via AI prompts and receive them post-camp.</p>
  </div>
  <div className="flex flex-col justify-between min-w-0 w-full md:w-1/2 lg:w-1/4">
    <div className="mb-[var(--space-lg)]">
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.830078 41.0244C2.43748 42.289 4.84112 43.9559 8.07324 45.6162C10.9085 47.0727 14.3769 48.5209 18.498 49.6895C18.696 56.5145 24.2912 61.9862 31.1641 61.9863C37.2406 61.9863 42.3169 57.709 43.5488 52.001C53.8757 51.207 61.7024 48.4264 67.1729 45.6162C70.405 43.9558 72.8086 42.289 74.416 41.0244C74.555 40.9151 74.6863 40.8062 74.8135 40.7031C73.1883 59.9142 57.0836 74.9998 37.4521 75C17.7171 75 1.54258 59.7552 0.0625 40.3994C0.294721 40.5934 0.549696 40.8038 0.830078 41.0244ZM37.4521 0C57.6375 0.000219014 74.0943 15.949 74.916 35.9326L74.3857 36.502C74.3832 36.5046 74.378 36.5104 74.3701 36.5186C74.3535 36.5357 74.3248 36.5649 74.2852 36.6045C74.2055 36.684 74.0794 36.8081 73.9062 36.9688C73.5596 37.2902 73.0242 37.7616 72.2979 38.333C70.8445 39.4763 68.6246 41.0204 65.6074 42.5703C60.6049 45.1401 53.3916 47.7342 43.8115 48.543C43.4124 41.9045 37.9028 36.6445 31.1641 36.6445C25.2297 36.6446 20.2483 40.7238 18.8711 46.2314C15.2228 45.1571 12.1516 43.8612 9.63867 42.5703C6.6213 41.0203 4.40062 39.4764 2.94727 38.333C2.2211 37.7617 1.68646 37.2902 1.33984 36.9688C1.16678 36.8082 1.04057 36.684 0.960938 36.6045C0.921354 36.5649 0.89257 36.5357 0.875977 36.5186C0.868243 36.5105 0.862021 36.5056 0.859375 36.5029L0 35.582C0.998473 15.7626 17.3847 0 37.4521 0ZM66.3799 22.0664C65.9137 21.3347 64.96 21.0601 64.168 21.458C63.376 21.8559 63.0271 22.785 63.3359 23.5957L63.4062 23.7568L63.7158 24.3799C63.819 24.5913 63.9223 24.8072 64.0264 25.0264L64.6592 26.3906L64.7393 26.5469C65.1754 27.2971 66.1173 27.6098 66.9248 27.2441C67.7323 26.8785 68.1188 25.9642 67.8428 25.1416L67.7783 24.9785L67.1201 23.5566C67.0111 23.3271 66.9017 23.1007 66.793 22.8779L66.4668 22.2188L66.3799 22.0664ZM58.7949 12.0938C58.0754 11.6086 57.0909 11.7379 56.5234 12.4189C55.956 13.1002 56.0069 14.0919 56.6143 14.7119L56.7432 14.8301L57.2715 15.2842C58.4808 16.3551 59.5295 17.5166 60.5088 18.8691C61.0634 19.6348 62.1335 19.8062 62.8994 19.252C63.6653 18.6973 63.8368 17.6263 63.2822 16.8604C62.1587 15.3086 60.9429 13.962 59.5449 12.7236L58.9346 12.1992L58.7949 12.0938ZM50.9248 7.14062C50.1183 6.82003 49.1835 7.15595 48.7744 7.94238C48.3655 8.72883 48.6272 9.68687 49.3525 10.1631L49.5039 10.252L50.8301 10.957C51.2555 11.1889 51.6655 11.4179 52.0605 11.6455C52.88 12.1176 53.9273 11.836 54.3994 11.0166C54.871 10.1974 54.5894 9.15083 53.7705 8.67871C53.1397 8.3153 52.479 7.95092 51.7871 7.58301L51.084 7.21289L50.9248 7.14062Z"
          fill="currentColor"
        />
        <circle cx="31.2125" cy="49.3151" r="8.56164" fill="currentColor" />
      </svg>
    </div>
    <h6 className="display-headline !text-[25px] mb-2">Pokemon AR-venture</h6>
    <p className="mb-4 h-full">Participate in a thrilling scavenger hunt that brings Pokemon to life through augmented reality.</p>
  </div>
  <div className="flex flex-col justify-between min-w-0 w-full md:w-1/2 lg:w-1/4">
    <div className="mb-[var(--space-lg)]">
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.55382"
          y="1.55382"
          width="71.4759"
          height="71.4759"
          rx="7.76911"
          stroke="currentColor"
          strokeWidth="3.10765"
          strokeLinejoin="round"
        />
        <circle cx="56.2482" cy="16.7814" r="9.32294" fill="currentColor" />
        <path
          d="M9.60532 37.7412L2 33.7647V67C2 69.7614 4.23858 72 7 72H67C69.7614 72 72 69.7614 72 67V35.4471L63.153 41.8706C63.153 41.8706 56.1685 30.4 49.9601 30.4C43.9772 30.4 39.2506 37.7412 39.2506 37.7412C39.2506 37.7412 31.9557 20 24.1951 20C16.4346 20 9.60532 37.7412 9.60532 37.7412Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.310765"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h6 className="display-headline !text-[25px] mb-2">Art-ificial intellignce</h6>
    <p className="mb-4 h-full">Craft with AI for a virtual reality gallery showcase and get a printed masterpiece to take home.</p>
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

        <Divider fill="white" backgroundColor="var(--color-bg-muted)" direction="down"/>


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