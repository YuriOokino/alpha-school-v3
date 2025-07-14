import React from "react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  arrowSvg: React.ReactNode;
  subtitle: string;
  title: string;
  href: string;
  variant?: "default" | "lightBlue" | "navyBlue" | "lightGreen";
  size?: "sm" | "lg";
  className?: string;
}

const variants = {
  default: "bg-[var(--color-bg-muted)] text-black",
  lightBlue: "bg-[var(--color-sky-blue)] text-[var(--color-navy-blue)]",
  navyBlue: "bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]",
  lightGreen: "bg-[var(--color-light-green)] text-[var(--color-dark-green)]"
};



const sizes = {
  sm: {
    padding: "p-6",
    flexDirection: "flex-col",
    titleSize: "text-4xl",
    subtitleSize: "text-[18px]",
    gap: "gap-y-2",
    arrowSize: "w-5 h-5",
    borderRadius: "rounded-[var(--radius-md)]",
    justifyContent: ""
  },
  lg: {
    padding: "p-8",
    aspectRatio: "aspect-square", 
    flexDirection: "flex-col",
    titleSize: "text-9xl",
    subtitleSize: "heading-style-h4",
    gap: "gap-y-2",
    arrowSize: "w-6 h-6",
    borderRadius: "rounded-[var(--radius-lg)]",
    justifyContent: "justify-between"
  }
};

export default function LinkCard({ 
  arrowSvg, 
  subtitle, 
  title, 
  href, 
  variant = "default",
  size = "lg",
  className 
}: LinkCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "w-full flex duration-200 relative",
        size === "lg" ? sizes[size].aspectRatio : "",
        sizes[size].flexDirection,
        sizes[size].justifyContent,
        variants[variant],
        sizes[size].padding,
        sizes[size].borderRadius,
        className
      )}
    >
      {/* Arrow section - positioned top right */}
      <div className="absolute top-0 right-0 p-4">
        <span className={cn(
          "text-current",
          sizes[size].arrowSize
        )}>
          {arrowSvg}
        </span>
      </div>
      
      {/* Spacer div for large variant to push content down */}
      {size === "lg" && <div className="h-16"></div>}
      
      {/* Content section */}
      <div className={cn(
        "flex flex-col items-start",
        sizes[size].gap
      )}>
        <h1 
          className={cn(
            "leading-none",
            sizes[size].titleSize
          )}
          style={{ fontFamily: "'Bagel Fat One', cursive" }}
        >
          {title}
        </h1>
        <h4 className={cn(
          sizes[size].subtitleSize
        )}
       
        >
          {subtitle}
        </h4>
      </div>
    </a>
  );
} 