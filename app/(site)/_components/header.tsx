import { Logo } from '@/components/logo';
import { buttonVariants } from '@/components/ui/button';
import { getUserBySession } from '@/server/auth';
import {
  BriefcaseBusiness,
  LayoutList,
  type LucideIcon,
  PieChart,
  Users2,
} from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';

type NavLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const NavLink = ({ href, label, icon: Icon }: NavLinkProps) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-md px-4 py-2 font-semibold text-foreground/80 text-sm duration-100 hover:text-foreground"
  >
    <Icon className="size-4" />
    {label}
  </Link>
);

const NavLinks = () => {
  return (
    <div className="hidden flex-1 items-center gap-2 pr-4 md:flex">
      <NavLink href="/jobs" label="مشاغل" icon={BriefcaseBusiness} />
      <NavLink href="/categories" label="دسته بندی ها" icon={LayoutList} />
      <NavLink href="/contact" label="ارتباط با ما" icon={Users2} />
    </div>
  );
};

export async function SiteHeader() {
  const user = await getUserBySession();
  return (
    <header className="shadow-sm">
      <nav className="container flex items-center justify-between gap-4 p-4">
        <Logo />
        <NavLinks />
        {user ? (
          <Link href={'/dashboard'} className={buttonVariants()}>
            <PieChart className="size-4" />
            داشبورد
          </Link>
        ) : (
          <LoginModal />
        )}
      </nav>
    </header>
  );
}
