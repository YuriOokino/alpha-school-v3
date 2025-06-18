"use client"

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MainHeading from "@/components/layout/headings/main-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getAllNewsArticles } from "@/utils/content-loader.client";
import type { NewsArticle } from "@/utils/content-loader.client";
import NewsListSidebar from '@/components/features/content-blocks/news-list-sidebar';
import ArticlePagination from "@/components/ui/ArticlePagination";
import WhatsNextSection from "@/components/layout/navigation/whats-next-section";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [allArticles, setAllArticles] = useState<NewsArticle[]>([]);
  const [otherArticles, setOtherArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!slug) return;

    const loadArticle = async () => {
      try {
        setLoading(true);
        const fetchedArticle = await getArticleBySlug(slug, 'news');
        
        // Type guard to ensure we have a NewsArticle
        if (!fetchedArticle || fetchedArticle.type !== 'news') {
          setError('Article not found');
          return;
        }
        
        setArticle(fetchedArticle as NewsArticle);
        
        const allArticlesData = await getAllNewsArticles();
        setAllArticles(allArticlesData);
        setOtherArticles(allArticlesData.filter(a => a.id !== fetchedArticle.id));
        
        // Find the current article's index
        const currentArticleIndex = allArticlesData.findIndex(a => a.id === fetchedArticle.id);
        setCurrentIndex(currentArticleIndex);
        
        setError(null);
      } catch (err) {
        console.error('Error loading article:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [slug]);

  // Navigation functions
  const goToNextArticle = () => {
    if (currentIndex < otherArticles.length - 1) {
      const nextArticle = otherArticles[currentIndex + 1];
      window.location.href = `/news/${nextArticle.id}`;
    }
  };

  const goToPreviousArticle = () => {
    if (currentIndex > 0) {
      const prevArticle = otherArticles[currentIndex - 1];
      window.location.href = `/news/${prevArticle.id}`;
    }
  };

  // Helper to render content as paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((para: string, idx: number) => (
      <p key={idx} className="body-text mb-4">{para}</p>
    ));
  };

  if (loading) {
    return <div className="alpha-section">Loading article...</div>;
  }

  if (error || !article) {
    return <div className="alpha-section text-red-500">{error || 'Article not found'}</div>;
  }

  return (
    <>
      <div className="alpha-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <div className="mb-4">
              <div className="text-gray-600">
                By {article.authorName}
                {article.authorRole && (
                  <span className="ml-2">&mdash; {article.authorRole}</span>
                )}
              </div>
              <div className="text-gray-500 text-sm mt-1">{article.date}</div>
            </div>
            <img src={article.image} alt={article.title} className="w-full h-100 object-cover mb-4 rounded-[var(--radius-md)]" />
            <div className="prose max-w-none">{renderContent(article.content)}</div>
            
            {/* Author Bio Section */}
            <div className="alpha-card bg-[var(--color-bg-muted)] mt-[var(--space-lg)] mb-[var(--space-lg)]">
              <div className="heading-style-h4 mb-2">{article.authorName}</div>
              <div className="body-text max-w-3xl">
                {article.authorBio}
              </div>
            </div>
            
            <div className="mt-8 mb-8">
              <Link href="#">
                <Button className="alpha-btn-primary">Read More</Button>
              </Link>
            </div>
            
            {/* Pagination */}
            <ArticlePagination currentIndex={currentIndex} items={allArticles} basePath="/news" idKey="id" />
          </div>
          <div className="md:col-span-1">
            {/* Share on Social Media Widget */}
            <div className="mb-8">
              <div className="font-semibold mb-2">Share this article</div>
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="hover:opacity-80"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                {/* Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="hover:opacity-80"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z"/></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="hover:opacity-80"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
                </a>
              </div>
            </div>
            <NewsListSidebar articles={otherArticles} />
          </div>
        </div>
      </div>
      <WhatsNextSection />
    </>
  );
} 