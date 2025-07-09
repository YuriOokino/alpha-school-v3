import Link from 'next/link';
import { Button } from './button';
import { getCampusApplicationUrl } from '@/utils/campuses';

interface CampusApplicationLinkProps {
  campusName: string;
  grade?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'primary' | 'lightBlue' | 'maroon' | 'pink' | 'filter' | 'filterOutline' | 'link';
  size?: 'default' | 'sm' | 'fullWidth' | 'icon';
}

export function CampusApplicationLink({
  campusName,
  grade,
  children,
  className,
  variant = 'default',
  size = 'default'
}: CampusApplicationLinkProps) {
  const applicationUrl = getCampusApplicationUrl(campusName, grade);
  
  return (
    <Link href={applicationUrl}>
      <Button variant={variant} size={size} className={className}>
        {children || `Apply to ${campusName}`}
      </Button>
    </Link>
  );
} 