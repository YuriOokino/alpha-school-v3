"use client"

import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  tagline?: React.ReactNode;
  variant?: "default" | "blue";
}

export default function MainHeading({ 
  children, 
  description, 
  actions, 
  className = "",
  tagline,
  variant = "default"
}: MainHeadingProps) {
  const variantClass =
    variant === "blue"
      ? "bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]"
      : "";
  return (
    <div className="w-screen min-h-[400px]">
      <div className={`${variantClass} py-[var(--space-3xl)] text-[var(--color-sky-blue)]`}>
        {tagline && (
          <div className="flex justify-center mb-4">
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
          className={`text-center max-w-[60vw] mx-auto mb-4 ${className}`.trim()}
          tabIndex={-1}
        >
          {children}
        </h1>
        {description && (
          <div className="text-center max-w-[60vw] mx-auto">
            {description}
          </div>
        )}
        {actions && (
          <div className="flex flex-wrap justify-center gap-4">
            {actions}
          </div>
        )}
      </div>
      <svg width="1440" height="83" viewBox="0 0 1440 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H1440C1440 0 1003.04 83 720 83C436.96 83 0 0 0 0Z" fill="#2A3C82"/>
</svg>
    </div>
  );
} 