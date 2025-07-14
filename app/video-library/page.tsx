"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MainHeading from "@/components/layout/headings/main-heading";
import Link from "next/link";
import React from "react";
import VideoCard from "@/components/ui/video-card";
import { videoLibrary } from "@/content/video-library";

export default function VideoLibrary() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get unique keys for filtering
  const uniqueKeys = Array.from(new Set(videoLibrary.map(video => video.key)));
  
  // Filter videos based on selected key and search query
  const filteredVideos = videoLibrary.filter(video => {
    const matchesKey = !selectedKey || video.key === selectedKey;
    const matchesSearch = !searchQuery || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.key.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesKey && matchesSearch;
  });

  const keyLabels: Record<string, string> = {
    "introduction": "Introduction",
    "virtual-tour": "Virtual Tour",
    "life-skills": "Life Skills",
    "testimonial": "Testimonials",
    "workshops": "Workshops",
    "ai-apps": "AI Apps",
  };

  return (
    <>
      <MainHeading description="Select a category to learn more about Alpha School!"
      tagline="video library"
      taglineVariant="blue"
      variant="blue">
        Alpha in action
      </MainHeading>
      <section className="alpha-section">
        <div className="container">
        
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button 
              variant={selectedKey === null ? "filter" : "filterOutline"}
              radius="small"
              onClick={() => setSelectedKey(null)}
            >
              All
            </Button>
            {uniqueKeys.map((key) => (
              <Button
                key={key}
                variant={selectedKey === key ? "filter" : "filterOutline"}
                radius="small"
                onClick={() => setSelectedKey(key)}
              >
                {keyLabels[key] || key}
              </Button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredVideos.map((video, idx) => (
              <VideoCard 
                key={idx}
                url={video.url}
                thumbnail={
                  video.thumbnail && video.thumbnail !== "/placeholder.png"
                    ? video.thumbnail
                    : video.url.includes("youtube.com")
                      ? `https://img.youtube.com/vi/${video.url.split('v=')[1]}/hqdefault.jpg`
                      : "/placeholder.png"
                }
                name={video.title}
                onClick={() => setOpenVideo(video.url)}
              />
            ))}
          </div>
        </div>
      </section>
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={() => setOpenVideo(null)}
            >
              &times;
            </button>
            <iframe
              src={
                openVideo.includes("youtube.com") 
                  ? openVideo.replace("watch?v=", "embed/") + "?autoplay=1&muted=0&controls=1"
                  : openVideo.includes("youtu.be")
                    ? openVideo.replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1&muted=0&controls=1"
                  : openVideo.includes("vimeo.com") 
                    ? openVideo.replace("vimeo.com/", "player.vimeo.com/video/") + "?autoplay=1&muted=0&controls=1&badge=0&autopause=0&player_id=0&app_id=58479"
                    : openVideo
              }
              title="Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}