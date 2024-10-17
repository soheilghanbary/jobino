import { Pickaxe } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => (
  <Link
    href={'/'}
    className="inline-flex items-center gap-2 font-black text-base text-primary md:text-lg"
  >
    <Pickaxe className="size-4 md:size-5" />
    جابینو
  </Link>
);
