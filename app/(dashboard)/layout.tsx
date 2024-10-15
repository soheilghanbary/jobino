import type { PropsWithChildren } from 'react';
import { DashboardSidebar } from './_components/sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="container gap-10 p-4 md:flex">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </section>
  );
}
