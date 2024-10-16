import { getUserBySession } from '@/server/auth';
import { Hero } from './_components/hero';

export default async () => {
  const user = await getUserBySession();
  return (
    <>
      <Hero
        title="اشتراک گذاری آگهی های شغلی"
        description="اپلیکیشن اشتراک گذاری موقعیت های شغلی"
      />
    </>
  );
};
