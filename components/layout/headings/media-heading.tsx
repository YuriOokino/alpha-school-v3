"use client"

import React from "react";

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
      ? "bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]"
      : "";
  return (
    <div className="w-screen min-h-[400px]">
      <div className={`${variantClass} py-[var(--space-3xl)] text-[var(--color-sky-blue)]`}>
        <div className="flex flex-col md:flex-row max-w-[90vw] mx-auto items-center gap-8">
          <div className="flex-1 min-w-0">
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
              className={`heading-style-h2 text-center md:text-left max-w-[60vw] mx-auto md:mx-0 mb-4 ${className}`.trim()}
              tabIndex={-1}
            >
              {Array.isArray(children) ? children[0] : children}
            </h1>
            {Array.isArray(children) ? children.slice(1) : null}
            {description && (
              <div className="text-center md:text-left max-w-[60vw] mx-auto md:mx-0 mb-4">
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
      <svg width="1440" height="83" viewBox="0 0 1440 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1440C1440 0 1003.04 83 720 83C436.96 83 0 0 0 0Z" fill="#2A3C82"/>
      </svg>
    </div>
  );
} 