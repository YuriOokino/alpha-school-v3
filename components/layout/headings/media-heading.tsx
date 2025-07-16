"use client"

import React from "react";
import Divider from "@/components/layout/divider";

interface MediaHeadingProps {
  children: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  tagline?: React.ReactNode;
  variant?: "default" | "blue";
  media?: React.ReactNode;
}

export default function MediaHeading({ 
  children, 
  description, 
  actions, 
  className = "",
  tagline,
  variant = "default",
  media
}: MediaHeadingProps) {
  const variantClass =
    variant === "blue"
      ? "bg-[var(--color-primary)] text-white"
      : "";
  return (
    <div className="w-screen min-h-[400px]">
      <div className={`media-heading-content ${variantClass} text-[var(--color-sky-blue)] ${className}`}>
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-start gap-[var(--space-2xl)]">
          <div className="flex-1 min-w-0 w-full">
            {tagline && (
              <div className="flex justify-center md:justify-start mb-4">
                <p className={`tagline ${
                  variant === "blue"
                    ? "bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] px-4 py-1 rounded-[var(--radius-pill)] inline-block"
                    : ""
                }`}>
                  {tagline}
                </p>
              </div>
            )}
            <h1
              className={`heading-style-h2 text-center md:text-left w-full max-w-4xl mx-auto md:mx-0 mb-4 ${className}`.trim()}
              tabIndex={-1}
            >
              {Array.isArray(children) ? children[0] : children}
            </h1>
            {Array.isArray(children) ? children.slice(1) : null}
            {description && (
              <div className="text-center md:text-left w-full max-w-4xl mx-auto md:mx-0 mb-4">
                {description}
              </div>
            )}
            {actions && (
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                {actions}
              </div>
            )}
          </div>
          {media && (
            <div className="flex-1 min-w-0 flex justify-center items-center">
              <div className="w-full h-auto rounded-[var(--radius-lg)] overflow-hidden">{media}</div>
            </div>
          )}
        </div>
      </div>
      <Divider direction="up" fill="var(--color-primary)" />
    </div>
  );
} 