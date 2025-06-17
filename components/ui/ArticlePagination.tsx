import React from "react";
import Link from "next/link";

interface ArticlePaginationProps {
  currentIndex: number;
  items: any[];
  basePath: string;
  idKey?: string; // 'slug' or 'id', default 'slug'
}

const ArticlePagination: React.FC<ArticlePaginationProps> = ({ currentIndex, items, basePath, idKey = 'slug' }) => {
  return (
    <div className="flex justify-between items-start mt-12">
      {/* Previous Article */}
      <div className="flex flex-col" style={{ flexBasis: '50%', maxWidth: '50%' }}>
        <span className="text-lg text-[var(--color-text-main)] mb-1">Previous</span>
        {currentIndex > 0 ? (
          <Link
            href={`${basePath}/${items[currentIndex - 1][idKey]}`}
            className="heading-style-h4 text-[var(--color-text-main)] truncate"
            style={{ maxWidth: '100%' }}
          >
            {items[currentIndex - 1].title}
          </Link>
        ) : null}
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-16 bg-gray-200 mx-8" />

      {/* Next Article */}
      <div className="flex flex-col items-end ml-auto" style={{ flexBasis: '50%', maxWidth: '50%' }}>
        <span className="text-lg text-[var(--color-text-main)] mb-1">Next</span>
        {currentIndex < items.length - 1 ? (
          <Link
            href={`${basePath}/${items[currentIndex + 1][idKey]}`}
            className="heading-style-h4 text-[var(--color-text-main)] truncate text-right"
            style={{ maxWidth: '100%' }}
          >
            {items[currentIndex + 1].title}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ArticlePagination; 