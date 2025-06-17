"use client"

import { useState, useEffect } from "react"
import MainHeading from "@/components/layout/main-heading"
import WhatsNextSection from "@/components/sections/whats-next-section"
import ArticleCard from "@/components/features/article-card"
import Link from "next/link"
import type { NewsArticle } from "@/utils/content-loader.server"

export default function NewsPage() {
  const [articles, setArticles] = useState<(NewsArticle & { slug: string })[]>([]);
  const [selectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setIsLoading(true);
        console.log('Fetching articles from /api/news');
        
        // Use absolute URL to ensure proper routing
        const response = await fetch(`${window.location.origin}/api/news`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('API Error:', errorData);
          throw new Error(errorData.error || 'Failed to load news articles');
        }
        
        const newsArticles = await response.json();
        console.log('Received articles:', newsArticles);
        
        if (!Array.isArray(newsArticles)) {
          console.error('Invalid response format:', newsArticles);
          throw new Error('Invalid response format from server');
        }
        
        setArticles(newsArticles);
        setError(null);
      } catch (err) {
        console.error('Error loading articles:', err);
        setError(err instanceof Error ? err.message : 'Failed to load news articles');
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  // Filter news items based on search query
  const filteredNews = articles.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSearch
  })

  if (isLoading) {
    return <div className="alpha-section">Loading news articles...</div>;
  }

  if (error) {
    return <div className="alpha-section text-red-500">{error}</div>;
  }

  return (
    <main>
      <MainHeading
        description="Stay updated with the latest news, announcements, and stories from Alpha School."
      >
        News & Updates
      </MainHeading>

      <section className="alpha-section">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 border rounded-lg flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* News Grid */}
        {articles.length === 0 ? (
          <p>No news articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            {filteredNews.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`}>
                <ArticleCard
                  imageSrc={item.image}
                  imageAlt={item.title}
                  title={item.title}
                  date={item.date}
                  href={`/news/${item.slug}`}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      <WhatsNextSection />
    </main>
  )
} 