"use client"

import { useState } from "react";

export function Tagline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`tag-blue ${className}`}>{children}</span>
  );
}

export interface GuideCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  className?: string;
}

export default function GuideCard({ image, name, role, bio, className = "" }: GuideCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative h-full rounded-[var(--radius-md)] overflow-hidden bg-white flex flex-col justify-end group ${className}`}
      style={{ minHeight: 400 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-0 flex flex-col gap-2 w-full">
        <div
          className="transition-colors duration-500 ease-in-out rounded-[var(--radius-md)] p-4 m-4 cursor-pointer bg-[var(--color-primary-light)]"
        >
          <div className={"transition-all duration-300 ease-in-out flex flex-col gap-2 items-start " + (hovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto overflow-visible')}>
            <span className="tag-blue">{role}</span>
            <h3 className="font-light uppercase text-lg leading-tight text-black">{name}</h3>
          </div>
          <p className={"text-sm leading-snug transition-all duration-300 ease-in-out m-0 " + (hovered ? 'opacity-100 h-auto overflow-visible' : 'opacity-0 h-0 overflow-hidden')}>{bio}</p>
        </div>
      </div>
    </div>
  );
} 