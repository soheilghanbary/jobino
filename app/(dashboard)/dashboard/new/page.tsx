import { AddJobForm } from '../../_components/add-job-form';
import { DashboardHeader } from '../../_components/header';

export default () => {
  return (
    <>
      <DashboardHeader
        title="ثبت آگهی جدید"
        description="آگهی شغلی خود را ثبت کنید"
      />
      <AddJobForm />
    </>
  );
};
