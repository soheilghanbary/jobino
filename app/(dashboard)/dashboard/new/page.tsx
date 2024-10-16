import { prisma } from '@/server/db';
import { AddJobForm } from '../../_components/add-job-form';
import { DashboardHeader } from '../../_components/header';

export default async () => {
  const categories = await prisma.category.findMany();
  return (
    <>
      <DashboardHeader
        title="ثبت آگهی جدید"
        description="آگهی شغلی خود را ثبت کنید"
      />
      <AddJobForm items={categories} />
    </>
  );
};
