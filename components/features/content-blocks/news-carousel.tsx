"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

const newsItems = [
  "Sign up for 2025 Summer Camps at Alpha School!",
  "New campus opening in Dallas this fall",
  "Alpha students score 40% higher on standardized tests",
  "Join our upcoming parent information session",
]

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-blue-700 text-white relative">
      <div className="flex items-center">
        <div className="bg-blue-900 py-3 px-6 font-medium">Latest News</div>
        <div className="flex-1 overflow-hidden py-3 px-6">
          <div className="whitespace-nowrap">{newsItems[currentIndex]}</div>
        </div>
        <div className="flex h-10">
          <button
            onClick={prevSlide}
            className="w-10 flex items-center justify-center rounded-l-full bg-white hover:bg-gray-100 disabled:opacity-50 border-r border-gray-300"
            aria-label="Previous"
          >
            <span className="material-icons-outlined text-blue-700">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 flex items-center justify-center rounded-r-full bg-white hover:bg-gray-100 disabled:opacity-50"
            aria-label="Next"
          >
            <span className="material-icons-outlined text-blue-700">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  )
}
