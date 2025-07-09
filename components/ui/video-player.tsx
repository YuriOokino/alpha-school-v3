"use client"

import React, { useState } from "react"

interface VideoPlayerProps {
  videoUrl: string
  posterImage: string
  posterAlt?: string
  className?: string
  width?: string | number
  height?: string | number
}

export function VideoPlayer({ 
  videoUrl, 
  posterImage, 
  posterAlt = "Video preview", 
  className = "",
  width = "100%",
  height = 480 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative rounded-[var(--radius-lg)] overflow-hidden ${className}`} style={{ width, height }}>
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
          <img
            src={posterImage}
            alt={posterAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
            <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 ml-1">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`${videoUrl}?autoplay=1&muted=0`}
          className="w-[calc(100%+40px)] h-[calc(100%+40px)] -top-5 -left-5 relative"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={posterAlt}
        />
      )}
    </div>
  )
}

export default VideoPlayer 