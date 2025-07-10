"use client"

import React from "react";
import Divider from "../divider";

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
    <div className="w-full">
      <div className={`main-heading-content ${variantClass} text-[var(--color-navy-blue)] ${className}`}>
        <div className="flex flex-col w-full max-w-6xl mx-auto items-center">
          <div className="flex-1 min-w-0 w-full">
            {tagline && (
              <div className="flex justify-center mb-4">
                <p className={`tagline ${
                  variant === "blue"
                    ? "bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)] px-4 py-1 rounded-[var(--radius-pill)] inline-block"
                    : "bg-[var(--color-light-green)] px-4 py-1 rounded-[var(--radius-pill)] inline-block"
                }`}>
                  {tagline}
                </p>
              </div>
            )}
            <h1
              className={`heading-style-h2 text-center w-full max-w-4xl mx-auto mb-4 ${className}`.trim()}
              tabIndex={-1}
            >
              {Array.isArray(children) ? children[0] : children}
            </h1>
            {Array.isArray(children) ? children.slice(1) : null}
            {description && (
              <div className="text-center w-full max-w-4xl mx-auto mb-4">
                {description}
              </div>
            )}
            {actions && (
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
      {variant !== "default" && (
        <Divider fill="var(--color-navy-blue)" direction="up" />
      )}
    </div>
  );
} 