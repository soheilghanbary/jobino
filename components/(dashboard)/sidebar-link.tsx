'use client';
import type { sidebarLinks } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarLink = ({
  label,
  icon: Icon,
  href,
}: (typeof sidebarLinks)[number]) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-4 rounded-md px-4 py-2 font-medium text-foreground/80 text-sm duration-100',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-muted/40 hover:text-foreground',
      )}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
};
