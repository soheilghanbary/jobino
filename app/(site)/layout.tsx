import type { PropsWithChildren } from 'react';
import { SiteHeader } from './_components/header';
import { SiteFooter } from './_components/footer';

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main className="container p-4">{children}</main>
      <SiteFooter />
    </>
  );
}
