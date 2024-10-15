import { Logo } from '@/components/logo';
import { buttonVariants } from '@/components/ui/button';
import { getUserBySession } from '@/server/auth';
import { PieChart } from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';

export async function SiteHeader() {
  const user = await getUserBySession();
  return (
    <header>
      <nav className="container flex items-center justify-between gap-2 p-4">
        <Logo />
        {user ? (
          <Link
            href={'/dashboard'}
            className={buttonVariants({ variant: 'secondary' })}
          >
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
