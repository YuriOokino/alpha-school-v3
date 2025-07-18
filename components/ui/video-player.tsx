"use client"

import React, { useState } from "react"

interface VideoPlayerProps {
  videoUrl: string
  posterImage: string
  posterAlt?: string
  className?: string
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9"
  overlayImage?: string
  textOverlay?: string
}

export function VideoPlayer({ 
  videoUrl, 
  posterImage, 
  posterAlt = "Video preview", 
  className = "",
  aspectRatio = "16/9",
  overlayImage,
  textOverlay
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const isVimeo = videoUrl.includes("vimeo.com");
  
  // Convert Vimeo/YouTube URLs to proper embed format and always enforce autoplay=1&muted=0
  const getEmbedUrl = (url: string) => {
    let embedUrl = url;
    if (url.includes("youtube.com")) {
      embedUrl = url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be")) {
      embedUrl = url.replace("youtu.be/", "www.youtube.com/embed/");
    } else if (url.includes("vimeo.com")) {
      embedUrl = url.replace("vimeo.com/", "player.vimeo.com/video/");
    }
    // Remove any existing autoplay or muted params, then append ours
    embedUrl = embedUrl.replace(/([?&])(autoplay|muted|controls|badge|autopause|player_id|app_id)=[^&]*/g, "");
    // Remove trailing ? or & if present
    embedUrl = embedUrl.replace(/[?&]$/, "");
    // Add our params
    const joinChar = embedUrl.includes("?") ? "&" : "?";
    if (embedUrl.includes("vimeo.com")) {
      return (
        embedUrl + joinChar + "autoplay=1&muted=0&controls=1&badge=0&autopause=0&player_id=0&app_id=58479"
      );
    }
    return embedUrl + joinChar + "autoplay=1&muted=0&controls=1";
  };

  const aspectRatioClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]"
  }

  return (
    <div className={`relative rounded-[var(--radius-lg)] overflow-hidden w-full ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
          <img
            src={posterImage}
            alt={posterAlt}
            className="w-full h-full object-cover"
          />
          {/* Additional black overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          {/* Custom overlay image */}
          {overlayImage && !textOverlay && (
            <img
              src={overlayImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Text overlay */}
          {textOverlay && (
            <div className="absolute inset-0 flex items-end mb-8 justify-center">
              <h4 className="display-headline text-[35px] text-center text-white px-4">{textOverlay}</h4>
            </div>
          )}
          {/* Play button overlay */}
          <div className="absolute inset-0 flex z-20 items-center justify-center hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 ml-1 md:w-8 md:h-8">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={getEmbedUrl(videoUrl)}
          className="w-full h-full"
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