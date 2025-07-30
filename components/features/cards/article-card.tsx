import React from "react";
import Link from "next/link";

interface ArticleCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  category: string;
  href: string;
  className?: string;
  titleClassName?: string;
  variant?: 'default' | 'sidebar';
}

export default function ArticleCard({ imageSrc, imageAlt, title, date, category, href, className, titleClassName, variant = 'default' }: ArticleCardProps) {
  // Use CSS variables/globals for styling
  const contentClass = "flex flex-col gap-4 p-[var(--space-md)] h-[160px] bg-[var(--color-primary-light)] rounded-[var(--radius-md)]";
  const imageClass = "w-full aspect-[3/2] object-cover rounded-[var(--radius-md)]";

  return (
    <div className="flex flex-col gap-[var(--space-sm)] group h-[400px]">
      <Link href={href} className="overflow-hidden rounded-[var(--radius-md)]">
        <img src={imageSrc} alt={imageAlt} className={`${imageClass} image-hover-effect`} />
      </Link>
        
        <div className={contentClass}>
        <div className="flex gap-2">
          <div className="tag-filled !bg-[var(--color-navy-blue)] !text-[var(--color-primary-light)]">{date}</div>
          <div className="tag-outline !border-[var(--color-navy-blue)] !text-[var(--color-navy-blue)]">{category}</div>
        </div>
        <Link href={href}>
          <h6 className="line-clamp-2 overflow-hidden text-[var(--color-navy-blue)]">{title}</h6>
        </Link>
        </div>
        </div>

  );
} 