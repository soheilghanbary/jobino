import { Hero } from '@/components/(site)/hero';
import { JobList } from '@/components/(site)/job-list';
import { LoadingIcon } from '@/components/common/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

const JobListSkeleton = () => {
  <div className="rounded-md border border-border/40 p-4 shadow-sm">
    <Skeleton />
  </div>;
};

export default async () => {
  return (
    <>
      <Hero
        title="اشتراک گذاری آگهی های شغلی"
        description="اپلیکیشن اشتراک گذاری موقعیت های شغلی"
      />
      <Suspense
        fallback={<LoadingIcon className="mx-auto size-6 fill-primary" />}
      >
        <JobList />
      </Suspense>
    </>
  );
};
