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
        <div className="flex items-center transition-colors gap-1 cursor-pointer">
          <button
            onClick={prevItem}
            className="w-5 h-5 flex items-center justify-center rounded-full focus:outline-none"
            aria-label="Previous"
            style={{ background: 'transparent' }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path d="M8 2L4 6L8 10" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextItem}
            className="w-5 h-5 flex items-center justify-center rounded-full focus:outline-none"
            aria-label="Next"
            style={{ background: 'transparent' }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path d="M4 2L8 6L4 10" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
              <div className="tag-filled !bg-[var(--color-primary)] text-[var(--color-sky-blue)]">{item.date}</div>
              <div className="tag-outline !border-[var(--color-primary)] !text-[var(--color-primary)]">{item.type === "news" ? "News" : "Blog"}</div>
            </div>
            <Link href={`/blog/${item.slug}`}>
              <h6 className="heading-style-uppercase">{item.title}</h6>
            </Link>
            <div className="centered-text-icon">
              <Link href={`/blog/${item.slug}`}>
                <Button variant="link" className="text-[var(--color-primary)]">Read More<span className="material-icons-outlined text-[var(--color-primary)]">arrow_forward</span></Button>
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