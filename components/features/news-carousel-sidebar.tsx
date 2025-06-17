import React, { useState } from "react";
import ArticleCard from "@/components/features/article-card";
import SimpleCarousel from "@/components/features/simple-carousel";
import type { NewsArticle } from "@/utils/content-loader.client";

interface NewsCarouselSidebarProps {
  articles: NewsArticle[];
}

export default function NewsCarouselSidebar({ articles = [] }: NewsCarouselSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If no articles, show a message
  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col h-full scheme-pink bg-[var(--color-warm)] rounded-[var(--radius-lg)] p-[var(--space-md)]">
        <div className="flex items-center justify-between w-full mb-4">
          <h3 className="heading-style-h4">In the News</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-center text-gray-500">
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
    <div className="flex flex-col h-full scheme-pink bg-[var(--color-warm)] rounded-[var(--radius-lg)] p-[var(--space-md)]">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="heading-style-h4">In the News</h3>
        <div className="flex items-center rounded-full bg-[#6B3535] hover:bg-[var(--color-warm-dark)] transition-colors px-0.5 py-0.5 gap-1 cursor-pointer">
          <button
            onClick={prevItem}
            className="w-5 h-5 flex items-center justify-center rounded-full focus:outline-none"
            aria-label="Previous"
            style={{ background: 'transparent' }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path d="M8 2L4 6L8 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextItem}
            className="w-5 h-5 flex items-center justify-center rounded-full focus:outline-none"
            aria-label="Next"
            style={{ background: 'transparent' }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <path d="M4 2L8 6L4 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <SimpleCarousel
        items={articles}
        renderItem={(item) => (
          <ArticleCard
            key={item.id}
            imageSrc={item.image}
            imageAlt={item.title}
            title={item.title}
            date={item.date}
            href={`/news/${item.id}`}
            titleClassName="heading-style-uppercase"
            variant="sidebar"
            buttonClassName="bg-[var(--color-warm-dark)] text-white hover:bg-[#7a3535]"
          />
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