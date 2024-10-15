import { ModeToggle } from '@/components/mode-toggle';
import { DashboardHeader } from '../_components/header';

export default () => {
  return (
    <>
      <DashboardHeader title="تنظیمات" description="تنظیمات پیشخوان" />
      <ModeToggle />
    </>
  );
};
