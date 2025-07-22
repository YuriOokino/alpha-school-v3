import React, { useState } from "react";
import Link from "next/link";
import ArticleCard from "@/components/features/cards/article-card";
import SimpleCarousel from "@/components/ui/simple-carousel";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  type: 'blog' | 'news';
  title: string;
  date: string;
  authorName: string;
  authorRole?: string;
  authorBio?: string;
  summary: string;
  image: string;
  content: string;
  slug: string;
}

interface NewsCarouselSidebarProps {
  articles: Article[];
}

export default function NewsCarouselSidebar({ articles = [] }: NewsCarouselSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If no articles, show a message
  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col h-full bg-[var(--color-sky-blue)] rounded-[var(--radius-lg)] p-[var(--space-md)]">
        <div className="flex items-center justify-between w-full mb-4">
          <h3 className="heading-style-h4">In the News</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          No news articles available at the moment.
        </div>
      </div>
    );
  }

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--color-sky-blue)] rounded-[var(--radius-lg)] p-[var(--space-md)]">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="heading-style-h5">In the News</h3>
        <div className="flex h-6">
          <button
            onClick={prevItem}
            className="w-8 flex items-center justify-center rounded-l-full bg-[var(--color-navy-blue)] hover:bg-[var(--color-navy-blue)]/80 disabled:opacity-50 border-r border-[var(--color-navy-blue)]/20"
            aria-label="Previous"
          >
            <span className="material-icons-outlined text-sm text-[var(--color-sky-blue)]">chevron_left</span>
          </button>
          <button
            onClick={nextItem}
            className="w-8 flex items-center justify-center rounded-r-full bg-[var(--color-navy-blue)] hover:bg-[var(--color-navy-blue)]/80 disabled:opacity-50"
            aria-label="Next"
          >
            <span className="material-icons-outlined text-sm text-[var(--color-sky-blue)]">chevron_right</span>
          </button>
        </div>
      </div>
      <SimpleCarousel
        items={articles}
        renderItem={(item) => (
          <div key={item.id} className="flex flex-col gap-[var(--space-sm)]">
            <Link href={`/blog/${item.slug}`}>
              <img src={item.image} alt={item.title} className="w-full aspect-[3/2] object-cover rounded-[var(--radius-md)]" />
            </Link>
            <div className="flex gap-2">
              <div className="tag-filled !bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]">{item.date}</div>
              <div className="tag-outline !border-[var(--color-navy-blue)] !text-[var(--color-primary)]">{item.type === "news" ? "News" : "Blog"}</div>
            </div>
            <Link href={`/blog/${item.slug}`}>
              <h6 className="heading-style-uppercase">{item.title}</h6>
            </Link>
            <div className="centered-text-icon">
              <Link href={`/blog/${item.slug}`}>
                                 <div className="flex items-center gap-1">
                   <Button variant="link" className="text-[var(--color-navy-blue)] hover:underline">Read More</Button>
                   <span className="material-icons-outlined text-[var(--color-navy-blue)]">arrow_forward</span>
                 </div>
              </Link>
            </div>
          </div>
        )}
        visibleCards={1}
        className="flex-1"
        showNavigation={false}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
        itemClassName="px-0"
      />
    </div>
  );
} 