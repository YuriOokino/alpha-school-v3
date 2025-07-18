"use client"

import React from "react";
import Divider from "@/components/layout/divider";
import { CampusApplicationLink } from "@/components/ui/campus-application-link";

interface CampusMetadata {
  name: string;
  grades: string;
  address: string;
  email: string;
  heroImage: string;
  applicationStatus?: string;
  customTitle?: string;
  customDescription?: string;
}

interface CampusHeadingProps {
  campus: CampusMetadata;
  variant?: "default" | "blue";
  className?: string;
  tagline?: string;
}

export default function CampusHeading({ 
  campus, 
  variant = "blue",
  className = "",
  tagline = "Alpha School"
}: CampusHeadingProps) {
  const variantClass =
    variant === "blue"
      ? "bg-[var(--color-primary)] text-white"
      : "";
      
  return (
    <div className="w-screen min-h-[400px]">
      <div className={`media-heading-content ${variantClass} text-[var(--color-sky-blue)] ${className} h-full`}>
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-start gap-[var(--space-2xl)] h-full">
          <div className="flex-1 min-w-0 w-full">
            {tagline && (
              <div className="flex justify-start mb-4">
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
              className="heading-style-h2 text-left w-full max-w-4xl mb-4"
              tabIndex={-1}
            >
              Private School in {campus.name}
            </h1>
            
            {/* Campus Details */}
            <p className="font-semibold text-left mb-2">{campus.grades}</p>
            <p className="centered-icon-text mb-4 text-left">
              <span className="material-icons-outlined mr-1">location_on</span>
              {campus.address.toLowerCase().includes('to be announced') ? (
                campus.address
              ) : (
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(campus.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {campus.address}
                </a>
              )}
            </p>
            <p className="mb-2 text-left">
              <strong>Email:</strong> {campus.email}
            </p>
            
            {/* Application Link */}
            <div className="flex justify-start mt-[var(--space-md)]">
              <CampusApplicationLink 
                campusName={campus.name} 
                className="centered-icon-text bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]"
              >
                Apply Today<span className="material-icons-outlined">arrow_forward</span>
              </CampusApplicationLink>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full sm:flex-1 sm:min-w-0 flex justify-center items-center">
            <div className="w-full h-[280px] md:h-[350px] rounded-[var(--radius-lg)] overflow-hidden">
              <img 
                src={campus.heroImage} 
                alt={`${campus.name} Campus`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider direction="up" fill="var(--color-primary)" />
    </div>
  );
} 