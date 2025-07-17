import React from 'react';
import Link from 'next/link';
import NewsCarouselSidebar from '@/components/features/content-blocks/news-carousel-sidebar';

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  style?: string;
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
    <div className="absolute left-0 right-0 top-full bg-white rounded-b-[var(--radius-lg)] z-50 border-t-2 border-gray-100 w-full">
      <div className="grid grid-cols-4 gap-8 p-8 w-full">
        {groupColumns.map((group, idx) => (
          <div key={idx} className="flex-1">
            {group.label && (
              <div className="tagline bg-[var(--color-light-green)] text-[var(--color-dark-green)] mb-4">
                {group.label}
              </div>
            )}
            <ul className="space-y-4">
              {group.items.map((item: MegaMenuItem) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex flex-col group transition-colors" onClick={onLinkClick}>
                    <span className={`font-medium flex items-center ${item.style === 'underline' ? 'underline underline-offset-4' : ''}`}>
                      {item.title}
                    </span>
                    {item.description && (
                      <span className={`text-sm text-gray-600 ${item.style === 'underline' ? 'underline underline-offset-4' : ''}`}>{item.description}</span>
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