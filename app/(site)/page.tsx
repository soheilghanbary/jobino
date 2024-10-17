import { Hero } from '@/components/(site)/hero';
import { JobList } from '@/components/(site)/job-list';
import { Suspense } from 'react';

export default async () => {
  return (
    <>
      <Hero
        title="اشتراک گذاری آگهی های شغلی"
        description="اپلیکیشن اشتراک گذاری موقعیت های شغلی"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <JobList />
      </Suspense>
    </>
  );
};
