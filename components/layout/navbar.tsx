"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { MegaMenu } from '@/components/features/mega-menu'
import NewsCarouselSidebar from '@/components/features/news-carousel-sidebar'
import { getAllNewsArticles } from '@/utils/content-loader.client'
import type { NewsArticle } from '@/utils/content-loader.client'

interface DropdownItem {
  title: string
  href: string
  description?: string
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
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  // Fetch news articles
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await getAllNewsArticles();
        setNewsArticles(articles);
      } catch (error) {
        console.error('Error loading news articles:', error);
      }
    };
    loadArticles();
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
            <Button variant="default" href="/learn-more">Learn more</Button>
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
        ],
      },
      {
        label: "FLORIDA",
        items: [
          { title: "Miami", href: "/miami", description: "K 10" },
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
    title: "Insights",
    href: "#",
    megaMenu: [
      {
        label: "Insights",
        items: [
          { title: "Blog", href: "/blog", description: "Blog articles" },
          { title: "In the News", href: "/news", description: "Media coverage and press" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
];

// Update navItems to use a function that returns the sidebar component
const createNavItems = (articles: NewsArticle[]): NavItem[] => [
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
    title: "Insights",
    href: "#",
    megaMenu: [
      {
        label: "Insights",
        items: [
          { title: "Blog", href: "/blog", description: "Blog articles" },
          { title: "In the News", href: "/news", description: "Media coverage and press" },
        ],
      },
    ],
    hasNewsSidebar: true,
  },
];

// Export a function to get nav items with articles
export const getNavItems = (articles: NewsArticle[]) => createNavItems(articles); 