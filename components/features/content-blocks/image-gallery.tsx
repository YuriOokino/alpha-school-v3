"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Campus image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
              selectedImage === index ? "ring-2 ring-[var(--color-warm-dark)]" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Campus image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 