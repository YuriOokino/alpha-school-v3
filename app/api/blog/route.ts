import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/utils/content-loader.server';

export async function GET() {
  try {
    console.log('API: Starting blog articles request');
    const articles = await getAllBlogPosts();
    console.log('API: Found articles:', articles.length);
    
    if (articles.length === 0) {
      console.log('API: No articles found');
      return NextResponse.json([]);
    }
    
    console.log('API: Returning articles:', articles);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('API: Error fetching blog articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog articles' },
      { status: 500 }
    );
  }
} 