import fs from 'fs';
import path from 'path';

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
}

export type ContentWithSlug<T extends BaseContent> = T & { slug: string };

// Function to get all article files in a directory
export function getArticleFiles(directory: 'news' | 'blog'): string[] {
  const projectRoot = path.resolve(process.cwd());
  const contentPath = path.join(projectRoot, 'content', directory);
  console.log('Looking for files in:', contentPath);
  
  try {
    if (!fs.existsSync(contentPath)) {
      console.error('Content directory does not exist:', contentPath);
      return [];
    }
    
    const files = fs.readdirSync(contentPath)
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace(/\.json$/, ''));
    console.log('Found files:', files);
    return files;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

// Function to get a single article by slug
export async function getArticleBySlug<T extends BaseContent & { type: 'news' | 'blog' }>(
  slug: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  console.log('Server: Loading article by slug:', slug, 'type:', type);
  const projectRoot = path.resolve(process.cwd());
  const contentPath = path.join(projectRoot, 'content', type);
  
  try {
    // First try direct file name match
    let filePath = path.join(contentPath, `${slug}.json`);
    if (!fs.existsSync(filePath)) {
      // If not found, try to find by ID
      const files = fs.readdirSync(contentPath)
        .filter(file => file.endsWith('.json'));
      
      for (const file of files) {
        const content = JSON.parse(fs.readFileSync(path.join(contentPath, file), 'utf-8')) as T;
        if (content.id === slug) {
          filePath = path.join(contentPath, file);
          break;
        }
      }
    }

    if (!fs.existsSync(filePath)) {
      console.log('Server: Article not found:', slug);
      return null;
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
    console.log('Server: Article loaded successfully:', content.id);
    return {
      ...content,
      type,
      slug
    };
  } catch (error) {
    console.error('Server: Error loading article:', error);
    return null;
  }
}

// Function to get all articles with their slugs
export async function getAllArticlesWithSlugs<T extends BaseContent & { type: 'news' | 'blog' }>(
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T>[]> {
  const slugs = getArticleFiles(type);
  console.log('Getting articles for slugs:', slugs);
  
  const articles: ContentWithSlug<T>[] = [];
  
  for (const slug of slugs) {
    const article = await getArticleBySlug<T>(slug, type);
    if (article) {
      articles.push(article);
    }
  }
  
  console.log('Found valid articles:', articles.length);
  console.log('Valid articles:', articles);
  
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Specific functions for blog and news
export async function getAllNewsArticles(): Promise<ContentWithSlug<NewsArticle>[]> {
  console.log('Server: Loading all news articles');
  const projectRoot = path.resolve(process.cwd());
  const contentPath = path.join(projectRoot, 'content', 'news');
  
  try {
    const files = fs.readdirSync(contentPath)
      .filter(file => file.endsWith('.json'));
    
    const articles = files.map(file => {
      const content = JSON.parse(fs.readFileSync(path.join(contentPath, file), 'utf-8')) as NewsArticle;
      return {
        ...content,
        slug: content.id
      };
    });

    console.log('Server: Loaded articles:', articles.length);
    return articles;
  } catch (error) {
    console.error('Server: Error loading news articles:', error);
    return [];
  }
}

export async function getAllBlogPosts(): Promise<ContentWithSlug<BlogPost>[]> {
  return getAllArticlesWithSlugs<BlogPost>('blog');
}

// Function to get a single article by ID
export async function getContentById<T extends BaseContent & { type: 'news' | 'blog' }>(
  id: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const articles = await getAllArticlesWithSlugs<T>(type);
  return articles.find(article => article.id === id) || null;
} 