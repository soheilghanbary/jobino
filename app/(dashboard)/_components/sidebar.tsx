'use client';
import { Logo } from '@/components/logo';
import { sidebarLinks } from '@/config/site';
import { SidebarLink } from './sidebar-link';

export function DashboardSidebar() {
  return (
    <aside className="w-56 space-y-2">
      <Logo />
      <hr className="border-border/40" />
      <div className="flex flex-col gap-2">
        {sidebarLinks.map((s) => (
          <SidebarLink key={s.label} {...s} />
        ))}
      </div>
    </aside>
  );
}
