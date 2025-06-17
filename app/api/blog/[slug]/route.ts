import { NextResponse } from 'next/server';
import { getArticleBySlug } from '@/utils/content-loader.server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    console.log('API: Starting single blog post request for slug:', params.slug);
    const article = await getArticleBySlug(params.slug, 'blog');
    
    if (!article) {
      console.log('API: Blog post not found');
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    console.log('API: Returning blog post:', article);
    return NextResponse.json(article);
  } catch (error) {
    console.error('API: Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
} 