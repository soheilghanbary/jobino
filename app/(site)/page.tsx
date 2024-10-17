import { Hero } from '@/components/(site)/hero';
import { JobList } from '@/components/(site)/job-list';
import { LoadingIcon } from '@/components/common/icons';
import { Suspense } from 'react';

export default async () => {
  return (
    <>
      <Hero
        title="اشتراک گذاری آگهی های شغلی"
        description="اپلیکیشن اشتراک گذاری موقعیت های شغلی"
      />
      <Suspense
        fallback={<LoadingIcon className="mx-auto size-6 fill-blue-500" />}
      >
        <JobList />
      </Suspense>
    </>
  );
};
