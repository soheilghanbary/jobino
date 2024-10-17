import type { PropsWithChildren } from 'react';
import { SiteFooter } from '../../components/(site)/footer';
import { SiteHeader } from '../../components/(site)/header';

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main className="container p-4">{children}</main>
      <SiteFooter />
    </>
  );
}
