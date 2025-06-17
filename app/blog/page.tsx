'use client';

import { useState, useEffect } from 'react';
import MainHeading from "@/components/layout/main-heading";
import WhatsNextSection from "@/components/sections/whats-next-section";
import ArticleCard from "@/components/features/article-card";
import Link from "next/link";

interface BlogPost {
  id: string;
  type: 'blog';
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  content: string;
  slug: string;
}

export default function BlogPage() {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blog`);
        if (!response.ok) {
          throw new Error("Failed to load blog articles");
        }
        const blogArticles = await response.json();
        setArticles(blogArticles);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog articles");
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  if (isLoading) {
    return <div className="alpha-section">Loading blog articles...</div>;
  }

  if (error) {
    return <div className="alpha-section text-red-500">{error}</div>;
  }

  return (
    <main>
      <MainHeading description="Read the latest blog posts, insights, and stories from Alpha School.">
        Blog
      </MainHeading>

      <section className="alpha-section">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search blog..."
            className="p-2 border rounded-lg flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Blog Grid */}
        {filteredArticles.length === 0 ? (
          <p>No blog articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            {filteredArticles.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`}>
                <ArticleCard
                  imageSrc={item.image}
                  imageAlt={item.title}
                  title={item.title}
                  date={item.date}
                  href={`/blog/${item.slug}`}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      <WhatsNextSection />
    </main>
  );
} 