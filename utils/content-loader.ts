import type { BaseContent, BlogPost, NewsArticle, ContentWithSlug } from './content-loader.server';

// Client-side function to get all news articles
export async function getAllNewsArticles(): Promise<ContentWithSlug<NewsArticle>[]> {
  const response = await fetch('/api/news');
  if (!response.ok) {
    throw new Error('Failed to fetch news articles');
  }
  return response.json();
}

// Client-side function to get all blog posts
export async function getAllBlogPosts(): Promise<ContentWithSlug<BlogPost>[]> {
  const response = await fetch('/api/blog');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

// Client-side function to get a single article by slug
export async function getArticleBySlug<T extends BaseContent>(
  slug: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const response = await fetch(`/api/${type}/${slug}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch ${type} article`);
  }
  return response.json();
}

// Client-side function to get a single article by ID
export async function getContentById<T extends BaseContent>(
  id: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const response = await fetch(`/api/${type}/id/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch ${type} article`);
  }
  return response.json();
} 