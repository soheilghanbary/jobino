import { Pickaxe } from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';

const Logo = () => (
  <Link
    href={'/'}
    className="inline-flex items-center gap-2 font-black text-lg text-primary"
  >
    <Pickaxe className="size-5" />
    جابینو
  </Link>
);

export function SiteHeader() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-2 p-4">
        <Logo />
        <LoginModal />
      </nav>
    </header>
  );
}
