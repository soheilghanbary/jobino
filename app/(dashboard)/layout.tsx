import type { PropsWithChildren } from 'react';
import { DashboardSidebar } from './_components/sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="container md:flex">
      <DashboardSidebar />
      <main className="flex-1 p-4">{children}</main>
    </section>
  );
}
