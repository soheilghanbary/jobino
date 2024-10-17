import { fromNow } from '@/lib/utils';
import { prisma } from '@/server/db';
import type { Job } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

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
        <Button asChild size={'sm'} variant={'secondary'}>
          <Link href={`/jobs/${job.id}`}>جزئیات</Link>
        </Button>
      </div>
    </div>
  );
};

export const JobList = async () => {
  const jobs = await prisma.job.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
    </div>
  );
};
