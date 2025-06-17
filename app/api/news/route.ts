import { NextResponse } from 'next/server';
import { getAllNewsArticles } from '@/utils/content-loader.server';

export async function GET() {
  try {
    console.log('API: Starting news articles request');
    const articles = await getAllNewsArticles();
    console.log('API: Found articles:', articles.length);
    
    if (articles.length === 0) {
      console.log('API: No articles found');
      return NextResponse.json([]);
    }
    
    console.log('API: Returning articles:', articles);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('API: Error fetching news articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news articles' },
      { status: 500 }
    );
  }
} 