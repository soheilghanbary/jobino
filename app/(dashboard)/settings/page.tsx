import { ModeToggle } from '@/components/common/mode-toggle';
import { DashboardHeader } from '@/components/(dashboard)/header';

export default () => {
  return (
    <>
      <DashboardHeader title="تنظیمات" description="تنظیمات پیشخوان" />
      <ModeToggle />
    </>
  );
};
