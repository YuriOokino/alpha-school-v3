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
  slug: string;
}

export interface NewsArticle extends BaseContent {
  type: 'news';
  slug: string;
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
export async function getArticleBySlug<T extends BaseContent & { type: 'news' | 'blog'; slug: string }>(
  slug: string
): Promise<ContentWithSlug<T> | null> {
  console.log('Server: Loading article by slug:', slug);
  const projectRoot = path.resolve(process.cwd());
  
  try {
    // Load all articles from the JSON file
    const articlesPath = path.join(projectRoot, 'content', 'articles.json');
    if (!fs.existsSync(articlesPath)) {
      console.log('Server: Articles file not found');
      return null;
    }

    const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf-8')) as T[];
    const article = articlesData.find((article: T) => article.slug === slug);

    if (!article) {
      console.log('Server: Article not found:', slug);
      return null;
    }

    console.log('Server: Article loaded successfully:', article.id);
    return {
      ...article,
      slug
    };
  } catch (error) {
    console.error('Server: Error loading article:', error);
    return null;
  }
}

// Function to get all articles with their slugs
export async function getAllArticlesWithSlugs<T extends BaseContent & { type: 'news' | 'blog'; slug: string }>(
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T>[]> {
  const slugs = getArticleFiles(type);
  console.log('Getting articles for slugs:', slugs);
  
  const articles: ContentWithSlug<T>[] = [];
  
  for (const slug of slugs) {
    const article = await getArticleBySlug<T>(slug);
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
  return getAllArticlesWithSlugs<NewsArticle>('news');
}

export async function getAllBlogPosts(): Promise<ContentWithSlug<BlogPost>[]> {
  return getAllArticlesWithSlugs<BlogPost>('blog');
}

// Function to get a single article by ID
export async function getContentById<T extends BaseContent & { type: 'news' | 'blog'; slug: string }>(
  id: string,
  type: 'news' | 'blog'
): Promise<ContentWithSlug<T> | null> {
  const articles = await getAllArticlesWithSlugs<T>(type);
  return articles.find(article => article.id === id) || null;
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  locationTag: string
  category: string
  address: string
  image: {
    src: string
    alt?: string
  }
  slug: string
  registrationType: 'internal' | 'external'
  registrationUrl: string
  descriptionTitle?: string
  description?: string
  multipleDates?: boolean
  dates?: Array<{
    id: string
    title: string
    date: string
    time: string
    ageRange?: string
    price?: string
    soldOut?: boolean
    description?: string
  }>
}

export async function loadEvent(slug: string): Promise<Event | undefined> {
  const events = await loadEvents()
  return events.find(event => event.slug === slug)
}

export async function loadEvents(): Promise<Event[]> {
  try {
    const eventsFilePath = path.join(process.cwd(), 'content/events/events.json')
    const fileContents = await fs.promises.readFile(eventsFilePath, 'utf8')
    const data = JSON.parse(fileContents) as { events: Event[] }
    
    const processedEvents: Event[] = []
    
    for (const event of data.events) {
      // Handle Austin summer camp with multiple dates
      if (event.id === 'austin-summer-camp' && event.multipleDates && event.dates) {
        // Pass the original event with all dates - let the card handle displaying them
        // Make sure to use the original slug
        const originalEvent = {
          ...event,
          slug: 'austin-summer-camp' // Ensure it uses the original slug
        }
        processedEvents.push(originalEvent)
      } else {
        // Regular events with single dates
        processedEvents.push(event)
      }
    }
    
    const sortedEvents = processedEvents.sort((a, b) => {
      // Handle date ranges by using the start date
      const getStartDate = (dateStr: string) => {
        if (!dateStr) return '9999-12-31' // Put events without dates at the end
        if (dateStr.includes(' - ')) {
          return dateStr.split(' - ')[0] + ', 2025'
        }
        return dateStr
      }
      const dateA = new Date(getStartDate(a.date)).getTime()
      const dateB = new Date(getStartDate(b.date)).getTime()
      return dateB - dateA
    })

    return sortedEvents
  } catch (error) {
    console.error('Error loading events:', error)
    return []
  }
} 