import React, { ReactNode } from "react";
import Image from "next/image";

interface FeaturedArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  className?: string;
}

export default function FeaturedArticle({ imageSrc, imageAlt, children, className, ...rest }: FeaturedArticleProps) {
  return (
    <div {...rest} className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-stretch ${className || ''}`}>
      <div className="flex-1 flex flex-col justify-top">
        {children}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[#888] flex items-center justify-center relative">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
} 