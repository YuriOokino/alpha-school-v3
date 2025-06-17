import React from 'react';
import Link from 'next/link';
import LocationCard from './location-card';
import ArticleCard from "@/components/features/article-card";
import NewsCarouselSidebar from '@/components/features/news-carousel-sidebar';

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MegaMenuGroup {
  label: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  groups: MegaMenuGroup[];
  sidebar?: React.ReactNode;
  onLinkClick?: () => void;
}

export function MegaMenu({ groups, sidebar, onLinkClick }: MegaMenuProps) {
  // Always display 3 group columns, pad with empty groups if needed
  const groupColumns = [
    ...groups.slice(0, 3),
    ...Array(Math.max(0, 3 - groups.length)).fill({ label: '', items: [] })
  ];
  const gridClass = 'grid grid-cols-4 gap-8 p-8 mx-auto justify-items-stretch w-full';

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[var(--radius-lg)] z-50 border-t-2 border-gray-100 w-full">
      <div className={gridClass}>
        {groupColumns.map((group, idx) => (
          <div key={idx} className="flex-1">
            {group.label && (
              <span className="inline-block mb-4 px-3 py-1 rounded bg-[var(--color-warm)] text-[var(--color-warm-dark)] font-semibold text-xs uppercase tracking-wide">
                {group.label}
              </span>
            )}
            <ul className="space-y-4">
              {group.items.map((item: MegaMenuItem) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex flex-col group transition-colors" onClick={onLinkClick}>
                    <span className="font-medium flex items-center">
                      {item.title}
                    </span>
                    {item.description && (
                      <span className="text-sm text-gray-600">{item.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex-1 flex flex-col h-full">
          {sidebar ? sidebar : <NewsCarouselSidebar articles={[]} />}
        </div>
      </div>
    </div>
  );
} 