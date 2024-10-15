import { Pickaxe } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => (
  <Link
    href={'/'}
    className="inline-flex items-center gap-2 font-black text-lg text-primary"
  >
    <Pickaxe className="size-5" />
    جابینو
  </Link>
);
