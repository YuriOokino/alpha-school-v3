"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
        <div className="flex">
          <Button variant="ghost" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
