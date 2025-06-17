"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function Gallery({ images, className }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Handle next/prev with wrap-around
  const showPrev = useCallback(() => {
    if (openIndex !== null) setOpenIndex((openIndex - 1 + images.length) % images.length);
  }, [openIndex, images.length]);

  const showNext = useCallback(() => {
    if (openIndex !== null) setOpenIndex((openIndex + 1) % images.length);
  }, [openIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIndex, showPrev, showNext]);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-md)]">
        {images.map((img, idx) => (
          <button
            key={idx}
            className="aspect-square rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-muted)] flex items-center justify-center focus:outline-none"
            onClick={() => setOpenIndex(idx)}
            aria-label={`Expand image ${idx + 1}`}
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <Dialog open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
        {openIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow"
              aria-label="Close"
              type="button"
            >
              {/* X Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="relative max-w-3xl w-full p-4 flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow"
                aria-label="Previous image"
                type="button"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <img
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                className="rounded-[var(--radius-lg)] max-h-[80vh] w-auto object-contain mx-auto"
              />
              {/* Right Arrow */}
              <button
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow"
                aria-label="Next image"
                type="button"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
} 