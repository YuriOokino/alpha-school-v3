"use client"

import { useState } from "react";

export function Tagline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`tag-default ${className}`}>{children}</span>
  );
}

export interface GuideCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  className?: string;
  variant?: "blue" | "green" | "primary";
  
}

export default function GuideCard({ image, name, role, bio, className, variant = "blue" }: GuideCardProps) {
  const [hovered, setHovered] = useState(false);
  
  // Variant styles
  const variantStyles = {
    blue: {
      tagBg: "!bg-[var(--color-navy-blue)]",
      tagText: "text-white",
      nameColor: "text-[var(--color-navy-blue)]",
      cardBg: "bg-[var(--color-primary-light)]"
    },
    green: {
      tagBg: "!bg-[var(--color-dark-green)]",
      tagText: "text-[var(--color-light-green)]",
      nameColor: "text-[var(--color-dark-green)]",
      cardBg: "bg-[var(--color-light-green)]"
    },
    primary: {
      tagBg: "!bg-[var(--color-primary)]",
      tagText: "text-white",
      nameColor: "text-[var(--color-primary)]",
      cardBg: "bg-[var(--color-sky-blue)]"
    }
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`relative w-full max-w-[340px] h-[400px] rounded-[var(--radius-md)] overflow-hidden flex flex-col justify-end group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-0 flex flex-col gap-2 w-full">
        <div
          className={`transition-colors duration-500 ease-in-out rounded-[var(--radius-md)] p-4 m-4 cursor-pointer ${styles.cardBg}`}
        >
          <div className={"transition-all duration-300 ease-in-out flex flex-col gap-2 items-start " + (hovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto overflow-visible')}>
            <span className={`tag-filled ${styles.tagBg} ${styles.tagText}`}>{role}</span>
            <h5 className={styles.nameColor}>{name}</h5>
          </div>
          <p className={"text-sm leading-snug transition-all duration-300 ease-in-out m-0 " + (hovered ? 'opacity-100 h-auto overflow-visible' : 'opacity-0 h-0 overflow-hidden')}>{bio}</p>
        </div>
      </div>
    </div>
  );
} 