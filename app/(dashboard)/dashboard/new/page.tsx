import { AddJobForm } from '@/components/(dashboard)/add-job-form';
import { DashboardHeader } from '@/components/(dashboard)/header';
import { getUserBySession } from '@/server/auth';
import { prisma } from '@/server/db';

export default async () => {
  const categories = await prisma.category.findMany();
  const session = await getUserBySession();
  return (
    <>
      <DashboardHeader
        title="ثبت آگهی جدید"
        description="آگهی شغلی خود را ثبت کنید"
      />
      <AddJobForm items={categories} userId={session.id} />
    </>
  );
};
