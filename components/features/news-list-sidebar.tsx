import React from 'react';
import Link from 'next/link';
import type { NewsArticle } from '@/utils/content-loader.client';

interface NewsListSidebarProps {
  articles: NewsArticle[];
}

const NewsListSidebar: React.FC<NewsListSidebarProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div className="text-gray-500">No other news articles available.</div>;
  }

  return (
    <aside>
      <h3 className="font-bold text-lg mb-4">More Posts</h3>
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article.id} className="flex items-start space-x-3">
            <Link href={`/news/${article.id}`} className="block w-20 h-16 flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="rounded-md object-cover w-20 h-16"
              />
            </Link>
            <div className="flex-1">
              <Link href={`/news/${article.id}`} className="block font-semibold text-sm leading-tight text-gray-900 mb-1">
                {article.title.length > 60 ? article.title.slice(0, 57) + '...' : article.title}
              </Link>
              <Link href={`/news/${article.id}`} className="text-xs font-bold">Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NewsListSidebar; 