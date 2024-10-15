import {
  BadgePlus,
  LayoutGrid,
  PieChart,
  Settings,
  Users2,
} from 'lucide-react';

export const site = {
  title: 'Welcome to Nix Starter',
  description: 'The Modern Next.js Stack',
};

export const sidebarLinks = [
  {
    label: 'پیشخوان',
    icon: PieChart,
    href: '/dashboard',
  },
  {
    label: 'ثبت آگهی شغلی',
    icon: BadgePlus,
    href: '/dashboard/new',
  },
  {
    label: 'آگهی های شغلی',
    icon: LayoutGrid,
    href: '/dashboard/jobs',
  },
  {
    label: 'درخواست ها',
    icon: Users2,
    href: '/reports',
  },
  {
    label: 'تنظیمات',
    icon: Settings,
    href: '/settings',
  },
];
