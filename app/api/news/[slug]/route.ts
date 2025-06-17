import { NextResponse } from 'next/server';
import { getArticleBySlug } from '@/utils/content-loader.server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    console.log('API: Starting single article request for slug:', params.slug);
    const article = await getArticleBySlug(params.slug, 'news');
    
    if (!article) {
      console.log('API: Article not found');
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    console.log('API: Returning article:', article);
    return NextResponse.json(article);
  } catch (error) {
    console.error('API: Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
} 