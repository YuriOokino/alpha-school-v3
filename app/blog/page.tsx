'use client';

import { useState, useEffect } from 'react';
import MainHeading from "@/components/layout/headings/main-heading";
import ArticleCard from "@/components/features/cards/article-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import articlesData from '@/content/articles.json';

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

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Load articles directly from the JSON file
      setArticles(articlesData as Article[]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load articles");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Define blog categories
  const categories = ["All", "AI", "News", "Blog"];

  // Helper function to parse date strings like "May 26th, 2025"
  const parseDate = (dateString: string): Date => {
    // Remove ordinal indicators (st, nd, rd, th)
    const cleanDate = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
    return new Date(cleanDate);
  };

  // Helper function to extract and trim article content
  const getArticleExcerpt = (content: string, maxLength: number = 200): string => {
    // Remove HTML tags and get plain text
    const textContent = content.replace(/<[^>]*>/g, '');
    // Trim to maxLength and add ellipsis if needed
    return textContent.length > maxLength ? textContent.substring(0, maxLength) + '...' : textContent;
  };

  // Get the most recent article for the featured card
  const getMostRecentArticle = (): Article | null => {
    if (articles.length === 0) return null;
    
    const sortedByDate = [...articles].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Newest first
    });
    
    return sortedByDate[0];
  };

  const featuredArticle = getMostRecentArticle();

  // Filter articles (excluding the featured article)
  const filteredArticles = articles.filter(article => {
    // Exclude the featured article from the regular grid
    if (featuredArticle && article.slug === featuredArticle.slug) {
      return false;
    }
    
    const matchesCategory = !category || category === "All" || (() => {
      const title = article.title.toLowerCase();
      const summary = article.summary.toLowerCase();
      
      if (category === "AI") return title.includes("ai") || summary.includes("ai") || title.includes("artificial intelligence") || summary.includes("artificial intelligence");
      if (category === "News") return article.type === "news";
      if (category === "Blog") return article.type === "blog";
      return false;
    })();
    
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      !search ||
      article.title?.toLowerCase().includes(searchTerm) ||
      article.authorName?.toLowerCase().includes(searchTerm) ||
      (article.summary && article.summary.toLowerCase().includes(searchTerm));
    
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    // Sort by date based on sortBy selection
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortBy === "newest" 
      ? dateB.getTime() - dateA.getTime() // Newest to oldest
      : dateA.getTime() - dateB.getTime(); // Oldest to newest
  });

  if (isLoading) {
    return <div className="alpha-section">Loading blog articles...</div>;
  }

  if (error) {
    return <div className="alpha-section text-red-500">{error}</div>;
  }

  return (
    <main>
      <MainHeading tagline="Blog" taglineVariant="blue"description="Read the latest blog posts, news articles, insights, and stories from Alpha School.">
      Insights, News, and Ideas
      </MainHeading>

      <section className="alpha-section">
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-[var(--space-lg)]">
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Filter by Category</label>
              <select
                className="field-input"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Sort by</label>
              <select
                className="field-input"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="newest">Newest to Oldest</option>
                <option value="oldest">Oldest to Newest</option>
              </select>
            </div>
            <div className="field-wrapper border border-gray-300">
              <label className="xs-label">Search Blog</label>
              <input
                type="text"
                className="field-input"
                placeholder="Search blog..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

                  {/* Featured Article Card */}
                  {featuredArticle && (
                    <div className="featured-article-card rounded-[var(--radius-lg)] flex flex-col lg:flex-row bg-[var(--color-sky-blue)] p-[var(--space-lg)] gap-[var(--space-xl)] group mb-[var(--space-xl)]" style={{ padding: 'var(--space-lg)', gap: 'var(--space-xl)' }}>
                      <style jsx>{`
                        @media (max-width: 1326px) {
                          .featured-article-card {
                            padding: var(--space-md) !important;
                            gap: var(--space-md) !important;
                          }
                        }
                      `}</style>
                      <div className="flex flex-col flex-1 justify-between h-[350px]">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-2">
                            <div className="tagline bg-[var(--color-navy-blue)] text-[var(--color-sky-blue)]">{featuredArticle.date}</div>
                            <div className="tagline border border-[var(--color-navy-blue)] text-[var(--color-navy-blue)]">{featuredArticle.type === "news" ? "News" : "Blog"}</div>
                          </div>
                          <div><h4 className="text-[var(--color-navy-blue)]">{featuredArticle.title}</h4></div>
                          <p>{getArticleExcerpt(featuredArticle.content)}</p>
                        </div>
                        <div>
                          <Link href={`/blog/${featuredArticle.slug}`}>
                            <Button variant="navyBlue"className="centered-text-icon">Read More<span className="material-icons-outlined">arrow_forward</span></Button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 overflow-hidden rounded-[var(--radius-lg)]">
                        <img 
                          src={featuredArticle.image} 
                          alt={featuredArticle.title} 
                          className="rounded-[var(--radius-lg)] w-full h-full object-cover image-hover-effect"
                        />
                      </div>
                    </div>
                  )}

                  {/* Regular Article Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {filteredArticles.map((item) => (
                      <div key={item.slug} className="w-full max-w-[300px]">
                        <Link href={`/blog/${item.slug}`}>
                          <ArticleCard
                            imageSrc={item.image}
                            imageAlt={item.title}
                            title={item.title}
                            date={item.date}
                            category={item.type === "news" ? "News" : "Blog"}
                            href={`/blog/${item.slug}`}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
        </div>
      </section>

    </main>
  );
} 