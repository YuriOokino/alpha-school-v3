"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NewsBannerProps {
  message?: string
  className?: string
}

export function NewsBanner({ 
  message = "🎉 New campuses opening this fall! Learn more about our expansion.",
  className = "" 
}: NewsBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Only show on homepage
    if (pathname === '/') {
      // Check if user has dismissed the banner
      const hasDismissed = localStorage.getItem('newsBannerDismissed')
      if (!hasDismissed) {
        setIsVisible(true)
      }
    }
  }, [pathname])

  const handleClose = () => {
    setIsClosing(true)
    // Remember that user dismissed it
    localStorage.setItem('newsBannerDismissed', 'true')
    setTimeout(() => {
      setIsVisible(false)
    }, 300) // Match the transition duration
  }

  if (!isVisible) return null

  return (
    <div 
      className={`w-full bg-[var(--color-sky-blue)] h-auto py-2 flex items-center justify-center relative transition-all duration-300 ease-out ${
        isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      } ${className}`}
    >
      <div className="flex items-center justify-center flex-1 px-12 sm:px-4">
        <span className="text-sm font-medium text-center">
          {message}{' '}
          <a 
            href="/locations" 
            className="underline hover:no-underline transition-all"
            style={{ color: 'var(--color-primary)' }}
          >
            Read more
          </a>
        </span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 p-1 hover:bg-white/10 rounded transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
} 