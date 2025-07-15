// Define interfaces for our content types
export interface BaseContent {
  id: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  content: string;
}

export interface BlogPost extends BaseContent {
  type: 'blog';
}

export interface NewsArticle extends BaseContent {
  type: 'news';
  authorName: string;
  authorRole?: string;
  authorBio?: string;
}

export type ContentWithSlug<T extends BaseContent> = T & { slug: string };

// Function to get a single article by slug
export async function getArticleBySlug(slug: string): Promise<NewsArticle | BlogPost | null> {
  try {
    console.log('Client: Fetching article by slug:', slug);
    const response = await fetch(`/api/blog/${slug}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Client: Failed to fetch article:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }
    
    const article = await response.json();
    console.log('Client: Received article:', article);
    
    if (!article) {
      console.error('Client: Invalid article format:', article);
      throw new Error(`Invalid article format`);
    }
    
    return article;
  } catch (error) {
    console.error(`Client: Error loading article ${slug}:`, error);
    throw error;
  }
}

// Function to get all articles
export async function getAllArticles<T extends BaseContent & { type: 'blog' | 'news' }>(): Promise<ContentWithSlug<T>[]> {
  try {
    console.log('Client: Fetching all articles');
    const response = await fetch(`/api/blog`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Client: Failed to fetch articles:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    
    const articles = await response.json();
    console.log('Client: Received articles:', articles.length);
    
    if (!Array.isArray(articles)) {
      console.error('Client: Invalid articles format:', articles);
      throw new Error(`Invalid articles format`);
    }
    
    return articles;
  } catch (error) {
    console.error(`Client: Error loading articles:`, error);
    return [];
  }
}

// Specific functions for blog and news
export async function getAllNewsArticles(): Promise<ContentWithSlug<NewsArticle>[]> {
  const allArticles = await getAllArticles<NewsArticle>();
  return allArticles.filter(article => article.type === 'news');
}

export async function getAllBlogPosts(): Promise<ContentWithSlug<BlogPost>[]> {
  const allArticles = await getAllArticles<BlogPost>();
  return allArticles.filter(article => article.type === 'blog');
}

// Function to get a single article by ID
export async function getContentById<T extends BaseContent & { type: 'news' | 'blog' }>(
  id: string
): Promise<ContentWithSlug<T> | null> {
  const articles = await getAllArticles<T>();
  return articles.find(article => article.id === id) || null;
} 