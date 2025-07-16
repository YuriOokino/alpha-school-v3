"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown, Menu, X, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { MegaMenu } from '@/components/layout/navigation/mega-menu'
import NewsCarouselSidebar from '@/components/features/content-blocks/news-carousel-sidebar'
import articlesData from '@/content/articles.json'

interface Article {
  id: string;
  type: 'blog' | 'news';
  title: string;
  date: string;
  authorName: string;
  authorRole?: string;
  authorBio?: string;
  summary: string;
  image: string;
  content: string;
  slug: string;
}
import LinkCard from '@/components/features/cards/link-card'
import { useIsMobile } from '@/hooks/use-mobile'
import { useRouter } from 'next/navigation'

interface DropdownItem {
  title: string
  href: string
  description?: string
  style?: string
}

interface NavItem {
  title: string
  href: string
  megaMenu: { label: string; items: DropdownItem[] }[]
  hasNewsSidebar?: boolean
}

const newsItems = [
  "New campus opening in Dallas this fall",
  "Alpha students score 40% higher on standardized tests",
  "Join our upcoming parent information session",
]

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const [newsArticles, setNewsArticles] = useState<Article[]>([])
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const router = useRouter();

  // Load all articles from merged data
  useEffect(() => {
    try {
      // Get all articles from the merged data
      const allArticles = articlesData as Article[];
      setNewsArticles(allArticles);
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }, []);

  let megaMenuGroups = null;
  let megaMenuSidebar = null;
  const activeNavItem = navItems.find(item => item.title === activeDropdown);
  if (activeNavItem) {
    megaMenuGroups = activeNavItem.megaMenu;
    // Only create sidebar if the nav item has news sidebar enabled
    if (activeNavItem.hasNewsSidebar) {
      megaMenuSidebar = <NewsCarouselSidebar articles={newsArticles} />;
    }
  }

  // Handlers for hover logic
  const handleNavMouseEnter = (title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveDropdown(title)
    setIsNavHovered(true)
  }
  const handleNavMouseLeave = () => {
    setIsNavHovered(false)
    closeTimeout.current = setTimeout(() => {
      if (!isMenuHovered) setActiveDropdown(null)
    }, 120)
  }
  const handleMenuMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsMenuHovered(true)
  }
  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false)
    closeTimeout.current = setTimeout(() => {
      if (!isNavHovered) setActiveDropdown(null)
    }, 120)
  }
  const handleMegaMenuClose = () => setActiveDropdown(null);

  // Mobile menu rendering
  if (isMobile) {
    // Overlay for main menu or dropdown
    const showDropdown = !!activeMobileDropdown;
    const navList = showDropdown
      ? navItems.find(item => item.title === activeMobileDropdown)?.megaMenu || []
      : navItems;
    return (
      <header className="w-full bg-white z-50">
        <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/assets/logo-black.svg"
                alt="Alpha School Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          {/* Hamburger or close icon */}
          <div className="flex items-center">
            {!isMobileMenuOpen ? (
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <Menu className="h-8 w-8" />
              </button>
            ) : null}
          </div>
        </div>
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-[100] flex flex-col">
            {/* Top bar with logo and close/back icon */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200 bg-white">
              <Link href="/" className="flex items-center h-full">
                <Image
                  src="/assets/logo-black.svg"
                  alt="Alpha School Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <div>
                {showDropdown ? (
                  <button onClick={() => setActiveMobileDropdown(null)} aria-label="Back">
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                ) : (
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-8 w-8" />
                  </button>
                )}
              </div>
            </div>
            {/* Main nav or dropdown links */}
            <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
              {showDropdown ? (
                <>
                  {(navList as { label: string; items: DropdownItem[] }[]).map((group, idx) => (
                    <div key={group.label || idx} className="mb-8">
                      {group.label && (
                        <div className="tagline bg-[var(--color-light-green)] text-[var(--color-dark-green)] mb-4">
                          {group.label}
                        </div>
                      )}
                      <ul className="space-y-4">
                        {group.items.map((item) => (
                          <li key={item.title}>
                            <button
                              type="button"
                              onClick={() => {
                                router.push(item.href);
                                setIsMobileMenuOpen(false);
                              }}
                              className="flex flex-col group transition-colors w-full text-left"
                            >
                              <span className={`font-medium flex items-center ${item.style === 'underline' ? 'underline underline-offset-4' : ''}`}>{item.title}</span>
                              {item.description && (
                                <span className={`text-sm text-gray-600 ${item.style === 'underline' ? 'underline underline-offset-4' : ''}`}>{item.description}</span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="mt-4">
                    <NewsCarouselSidebar articles={newsArticles} />
                  </div>
                </>
              ) : (
                <>
                  {navItems.map((item) => (
                    <div key={item.title} className="w-full">
                      <button
                        type="button"
                        onClick={() => {
                          if (item.megaMenu && item.megaMenu.length > 0) {
                            setActiveMobileDropdown(item.title);
                          } else {
                            router.push(item.href);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="w-full flex flex-row items-center justify-between bg-[var(--color-light-green)] text-[var(--color-dark-green)] p-6 rounded-[var(--radius-md)] mb-4 hover:opacity-90 transition"
                      >
                        <span className="display-headline !text-[25px]">{item.title}</span>
                        <span className="w-8 h-8 flex items-center justify-center bg-[var(--color-dark-green)] text-white rounded-full">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 5L13 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                    </div>
                  ))}
                  <div className="mt-4">
                    <NewsCarouselSidebar articles={newsArticles} />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="w-full bg-white z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/assets/logo-black.svg"
              alt="Alpha School Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center h-full">
          <ul className="flex gap-8 items-center h-full">
            {navItems.map((item) => (
              <li
                key={item.title}
                className={`relative h-full flex items-center${item.megaMenu && item.megaMenu.length > 0 && item.hasNewsSidebar ? ' group' : ''}`}
                onMouseEnter={() => {
                  if (item.megaMenu && item.megaMenu.length > 0 && item.hasNewsSidebar) {
                    handleNavMouseEnter(item.title)
                  }
                }}
                onMouseLeave={() => {
                  if (item.megaMenu && item.megaMenu.length > 0 && item.hasNewsSidebar) {
                    handleNavMouseLeave()
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center text-base transition-colors duration-150 h-full`}
                >
                  {item.title}
                  {item.megaMenu && item.megaMenu.length > 0 && (
                    <ChevronRight
                      className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-90' : ''}`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* CTA Button */}
        <div className="hidden md:block ml-8">
            <Button variant="primary" href="/learn-more">Learn more</Button>
        </div>
        {/* MegaMenu rendered as sibling, not inside nav or li */}
        {activeNavItem && megaMenuGroups && (
          <div
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <MegaMenu
              groups={megaMenuGroups}
              sidebar={megaMenuSidebar}
              onLinkClick={handleMegaMenuClose}
            />
          </div>
        )}
      </div>
    </header>
  )
}

// Define nav items without the sidebar component
export const navItems: NavItem[] = [
  {
    title: "The Program",
    href: "/the-program",
    megaMenu: [
      {
        label: "Learn",
        items: [
          { title: "Love School", href: "/the-program#love-school", description: "Learn about our innovative approach" },
          { title: "Learn 2X in 2 Hours", href: "/the-program#learn-2x", description: "How we achieve more in less time" },
          { title: "Learn Life Skills", href: "/the-program#lifeskills-workshops", description: "Building essential skills for success" },
        ],
      },
      {
        label: "Media",
        items: [
          { title: "Alpha In Action", href: "/video-library", description: "Let our Students and parents show you what we're all about!" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
  {
    title: "Admission",
    href: "/admission",
    megaMenu: [],
    hasNewsSidebar: false,
  },
  {
    title: "Locations",
    href: "/locations",
    megaMenu: [
      {
        label: "TEXAS",
        items: [
          { title: "Austin", href: "/austin", description: "PK4-8" },
          { title: "Brownsville", href: "/brownsville", description: "PK 8" },
          { title: "Houston", href: "/houston", description: "Opening August 2025" },
          { title: "Fort Worth", href: "/fort-worth", description: "Opening August 2025" },
          { title: "", href: "/locations", description: "More →", style: "underline" },
        ],
      },
      {
        label: "FLORIDA",
        items: [          
          { title: "Miami", href: "/miami", description: "K 10"},
          { title: "Orlando", href: "/orlando", description: "Opening August 2025" },
          { title: "Tampa", href: "/tampa", description: "Opening August 2025" },
          { title: "Palm Beach", href: "/palm-beach", description: "Opening August 2025" },
          { title: "", href: "/locations", description: "More →" , style: "underline" },
        ],
      },
      {
        label: "MORE LOCATIONS",
        items: [
          { title: "", href: "/locations", description: "See all new locations →", style: "underline"  },
          { title: "New York City, New York", href: "/new-york-city", description: "Opening August 2025" },
          { title: "Santa Barbara, Arizona", href: "/santa-barbara", description: "Opening August 2025" },
          { title: "Scottsdale, California", href: "/scottsdale", description: "Opening August 2025" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
  {
    title: "Events",
    href: "/events",
    megaMenu: [],
    hasNewsSidebar: true,
  },
  {
    title: "Resources",
    href: "#",
    megaMenu: [
      {
        label: "Resources",
        items: [
          { title: "Video Library", href: "/video-library", description: "Dive into Alpha School" },
          { title: "Our Guides", href: "/guides", description: "Meet the amazing people at Alpha" },
          { title: "Admission Forms", href: "/admission-forms", description: "Apply to one of our campuses" },
        ],
      },

      {
        label: "Articles",
        items: [
          { title: "Blog and news", href: "/blog", description: "Inspiring posts and articles from Alpha" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
 
];

// Update navItems to use a function that returns the sidebar component
const createNavItems = (articles: Article[]): NavItem[] => [
  {
    title: "The Program",
    href: "/the-program",
    megaMenu: [
      {
        label: "Learn",
        items: [
          { title: "Love School", href: "/the-program#love-school", description: "Learn about our innovative approach" },
          { title: "Learn 2X in 2 Hours", href: "/the-program#learn-2x", description: "How we achieve more in less time" },
          { title: "Learn Life Skills", href: "/the-program#lifeskills-workshops", description: "Building essential skills for success" },
        ],
      },
      {
        label: "Media",
        items: [
          { title: "Alpha In Action", href: "/video-library", description: "Let our Students and parents show you what we're all about!" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
  {
    title: "Admission",
    href: "/admission",
    megaMenu: [],
    hasNewsSidebar: false,
  },
  {
    title: "Locations",
    href: "/locations",
    megaMenu: [
      {
        label: "TEXAS",
        items: [
          { title: "Austin", href: "#", description: "PK4-8" },
          { title: "Brownsville", href: "#", description: "PK 8" },
          { title: "Houston", href: "#", description: "Opening August 2025" },
          { title: "Fort Worth", href: "#", description: "Opening August 2025" },
        ],
      },
      {
        label: "FLORIDA",
        items: [
          { title: "Miami", href: "#", description: "K 10" },
          { title: "Orlando", href: "#", description: "Opening August 2025" },
          { title: "Tampa", href: "#", description: "Opening August 2025" },
          { title: "Palm Beach", href: "#", description: "Opening August 2025" },
        ],
      },
      {
        label: "MORE LOCATIONS",
        items: [
          { title: "New York City, New York", href: "#", description: "Opening August 2025" },
          { title: "Santa Barbara, Arizona", href: "#", description: "Opening August 2025" },
          { title: "Scottsdale, California", href: "#", description: "Opening August 2025" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
  {
    title: "Events",
    href: "/events",
    megaMenu: [],
    hasNewsSidebar: true,
  },
  {
    title: "Resources",
    href: "#",
    megaMenu: [
      {
        label: "Resources",
        items: [
          { title: "Video Library", href: "/video-library", description: "Dive into Alpha School" },
          { title: "Our Guides", href: "/guides", description: "Meet the amazing people at Alpha" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
  {
    title: "Blog",
    href: "/blog",
    megaMenu: [],
    hasNewsSidebar: false,
  },
];

// Export a function to get nav items with articles
export const getNavItems = (articles: Article[]) => createNavItems(articles); 