import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ArticleCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  href: string;
  className?: string;
  titleClassName?: string;
  variant?: 'default' | 'sidebar';
  buttonClassName?: string;
}

export default function ArticleCard({ imageSrc, imageAlt, title, date, href, className, titleClassName, variant = 'default', buttonClassName }: ArticleCardProps) {
  // Determine card classes based on variant
  const baseCardClass = 'alpha-card flex flex-col h-full';
  const variantClass = variant === 'sidebar' ? 'sidebar-variant p-0 bg-transparent shadow-none' : '';
  const cardClass = `${baseCardClass}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`;

  return (
    <div className={cardClass}>
      <Link href={href}>
        <img src={imageSrc} alt={imageAlt} className="w-full mb-4 rounded-[var(--radius-sm)]" />
      </Link>
      <Link href={href}>
        <h2 className={`heading-style-h3 mb-2${titleClassName ? ` ${titleClassName}` : ''}`}>{title}</h2>
      </Link>
      <p className="text-[var(--color-text-muted)] mb-4">{date}</p>
      <div className="mt-auto">
        <Button href={href} className={buttonClassName}>Read More</Button>
      </div>
    </div>
  );
} 