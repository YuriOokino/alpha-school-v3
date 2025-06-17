"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import Link from "next/link";
import React from "react";
import VideoCard from "@/components/ui/video-card";
import { videoLibrary } from "@/content/video-library";

export default function VideoLibrary() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  
  // Get unique keys for filtering
  const uniqueKeys = Array.from(new Set(videoLibrary.map(video => video.key)));
  
  // Filter videos based on selected key
  const filteredVideos = selectedKey 
    ? videoLibrary.filter(video => video.key === selectedKey)
    : videoLibrary;

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
      <MainHeading description="Select a category to learn more about Alpha School!">
        Video Library
      </MainHeading>
      <section className="alpha-section">
        <div className="container">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant={selectedKey === null ? "filter" : "filterOutline"}
              onClick={() => setSelectedKey(null)}
            >
              All
            </Button>
            {uniqueKeys.map((key) => (
              <Button
                key={key}
                variant={selectedKey === key ? "filter" : "filterOutline"}
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
              src={openVideo.replace("watch?v=", "embed/") + "?autoplay=1"}
              title="Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-lg border-0"
            />
          </div>
        </div>
      )}
      <WhatsNextSection />
    </>
  );
}