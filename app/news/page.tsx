"use client"

import { useState, useEffect } from "react"
import MainHeading from "@/components/layout/headings/main-heading"
import WhatsNextSection from "@/components/layout/navigation/whats-next-section"
import ArticleCard from "@/components/features/cards/article-card"
import Link from "next/link"
import articlesData from '@/content/articles.json'

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

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Filter only news articles from the merged data
      const newsArticles = (articlesData as Article[]).filter(article => article.type === 'news');
      setArticles(newsArticles);
      setError(null);
    } catch (err) {
      console.error('Error loading articles:', err);
      setError(err instanceof Error ? err.message : 'Failed to load news articles');
    } finally {
      setIsLoading(false);
    }
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
                  category="News"
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