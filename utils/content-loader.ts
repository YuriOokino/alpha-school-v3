import type { BaseContent, BlogPost, NewsArticle, ContentWithSlug } from './content-loader.server';
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

// Client-side function to get all news articles
export async function getAllNewsArticles(): Promise<ContentWithSlug<NewsArticle>[]> {
  const newsArticles = (articlesData as Article[]).filter(article => article.type === 'news');
  return newsArticles as unknown as ContentWithSlug<NewsArticle>[];
}

// Client-side function to get all blog posts
export async function getAllBlogPosts(): Promise<ContentWithSlug<BlogPost>[]> {
  const blogArticles = (articlesData as Article[]).filter(article => article.type === 'blog');
  return blogArticles as unknown as ContentWithSlug<BlogPost>[];
}

// Client-side function to get a single article by slug
export async function getArticleBySlug<T extends BaseContent>(
  slug: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const article = (articlesData as Article[]).find(article => article.slug === slug && article.type === type);
  return article ? (article as unknown as ContentWithSlug<T>) : null;
}

// Client-side function to get a single article by ID
export async function getContentById<T extends BaseContent>(
  id: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const article = (articlesData as Article[]).find(article => article.id === id && article.type === type);
  return article ? (article as unknown as ContentWithSlug<T>) : null;
} 