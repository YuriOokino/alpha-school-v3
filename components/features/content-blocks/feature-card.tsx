"use client";
import React, { ReactNode, useState } from "react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  media: ReactNode | { video: string; poster: string };
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({ media, children, className, ...rest }: FeatureCardProps) {
  const [playVideo, setPlayVideo] = useState(false);

  let mediaContent: ReactNode;
  if (
    media &&
    typeof media === "object" &&
    "video" in media &&
    "poster" in media
  ) {
    // Video preview logic
    const video = media.video as string;
    const poster = media.poster as string;
    mediaContent = !playVideo ? (
      <button
        className="w-full h-full aspect-video relative group"
        onClick={() => setPlayVideo(true)}
        style={{
          outline: "none",
          border: "none",
          background: `url(${poster}) center center / cover no-repeat`,
          borderRadius: "var(--radius-md)",
          padding: 0,
        }}
        aria-label="Play video"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          {/* Play icon */}
          <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
            <polygon points="26,20 48,32 26,44" fill="#fff" />
          </svg>
        </span>
      </button>
    ) : (
      <div className="absolute inset-0">
        <iframe
          src={video.includes("vimeo.com") 
            ? video.replace("player.vimeo.com/video/", "player.vimeo.com/video/").replace(/\?.*$/, "?autoplay=1&controls=1&background=0&transparent=1")
            : video.replace("youtu.be/", "www.youtube.com/embed/")}
          title="Video"
          className="w-full h-full rounded-[var(--radius-md)]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  } else {
    mediaContent = media;
  }

  return (
    <div {...rest} className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-stretch ${className || ''}`}>
      <div className="flex-1 flex flex-col justify-top">
        {children}
      </div>
      {mediaContent && (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden flex items-center justify-center relative bg-transparent">
            <div className="absolute inset-0">
              {mediaContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}