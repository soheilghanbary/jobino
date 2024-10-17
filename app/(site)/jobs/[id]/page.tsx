import { SendResume } from '@/components/(site)/send-resume';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { salaryItems, timeItems } from '@/config/job';
import { prisma } from '@/server/db';
import {
  ArrowRightIcon,
  Banknote,
  ClockIcon,
  CopyIcon,
  LayoutGrid,
  ShieldAlert,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const getJob = async (id: string) => {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return job;
};

export default async ({ params }: { params: { id: string } }) => {
  const job = await getJob(params.id);
  if (!job) return null;

  const salary = salaryItems.find((item) => item.value === job.salary)?.label;
  const time = timeItems.find((item) => item.value === job.time)?.label;

  return (
    <section className="mx-auto max-w-screen-sm">
      <Link
        href={'/'}
        className="mb-4 flex items-center gap-2 text-muted-foreground text-xs duration-100 hover:text-foreground"
      >
        <ArrowRightIcon className="size-3.5" />
        همه کارها
      </Link>
      <div className="flex items-center gap-2">
        <Image
          src={job.logo}
          alt={job.title}
          width={50}
          height={50}
          className="rounded-md"
        />
        <div className="flex-1 space-y-0.5">
          <h2 className="font-bold">{job.title}</h2>
          <p className="font-medium text-muted-foreground text-xs">
            {job.company}
          </p>
        </div>
        <SendResume />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <p className="flex items-center gap-2 font-medium text-foreground/80 text-xs">
          <LayoutGrid className="size-4" />
          {job.category.name}
        </p>
        <Separator orientation="vertical" className="h-4" />
        <p className="flex items-center gap-2 font-medium text-foreground/80 text-xs">
          <Banknote className="-mt-0.5 size-4" />
          {salary}
        </p>
        <Separator orientation="vertical" className="h-4" />
        <p className="flex items-center gap-2 font-medium text-foreground/80 text-xs">
          <ClockIcon className="size-4" />
          {time}
        </p>
      </div>
      <hr className="my-6 border-border/40" />
      <div
        className="job-description"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
      <hr className="my-6 border-border/40" />
      <div className="flex items-center justify-between gap-2">
        <SendResume />
        <div className="flex items-center gap-2">
          <Button variant={'ghost'} size={'icon'}>
            <ShieldAlert className="size-4" />
          </Button>
          <Button variant={'ghost'} size={'icon'}>
            <CopyIcon className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
