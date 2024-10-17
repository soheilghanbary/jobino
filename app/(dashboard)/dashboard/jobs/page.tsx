import { DashboardHeader } from '@/components/(dashboard)/header';
import { Button } from '@/components/ui/button';
import { fromNow } from '@/lib/utils';
import { getUserBySession } from '@/server/auth';
import { prisma } from '@/server/db';
import type { Job } from '@prisma/client';
import Image from 'next/image';

const JobCard = (job: Job) => {
  return (
    <div className="rounded-md border border-border/40 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Image
          src={job.logo}
          alt={job.title}
          width={50}
          height={50}
          className="rounded-md"
        />
        <div className="space-y-0.5">
          <h2 className="font-bold">{job.title}</h2>
          <p className="font-medium text-muted-foreground text-xs">
            {job.company}
          </p>
        </div>
      </div>
      <hr className="my-4 border-border/40" />
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-xs">
          {fromNow(job.createdAt)}
        </span>
        <Button size={'sm'} variant={'secondary'}>
          جزئیات
        </Button>
      </div>
    </div>
  );
};

const JobList = async () => {
  const session = await getUserBySession();
  const jobs = await prisma.job.findMany({
    where: {
      userId: session.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div className="grid grid-cols-3 gap-4">
      {jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
    </div>
  );
};

export default () => {
  return (
    <>
      <DashboardHeader title="آگهی ها" description="مدیریت آگهی ها" />
      <JobList />
    </>
  );
};
