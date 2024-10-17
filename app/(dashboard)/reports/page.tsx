import { DashboardHeader } from '@/components/(dashboard)/header';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fromNow } from '@/lib/utils';
import { getUserBySession } from '@/server/auth';
import { prisma } from '@/server/db';
import { Download, TrashIcon } from 'lucide-react';

export default async () => {
  const session = await getUserBySession();
  const reports = await prisma.report.findMany({
    where: {
      job: {
        userId: session.id,
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      resume: true,
      createdAt: true,
      job: {
        select: {
          title: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return (
    <>
      <DashboardHeader
        title="درخواست ها"
        description="مدیریت درخواست های شغلی"
      />
      <Table>
        <TableHeader>
          <TableRow className="*:text-center *:text-xs">
            <TableHead>نام و نام خانوادگی</TableHead>
            <TableHead>ایمیل</TableHead>
            <TableHead>آگهی شغلی</TableHead>
            <TableHead>چه موقع؟</TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((r) => (
            <TableRow key={r.id} className="*:text-center *:text-xs">
              <TableCell>{r.name}</TableCell>
              <TableCell>{r.email}</TableCell>
              <TableCell>{r.job.title}</TableCell>
              <TableCell>{fromNow(r.createdAt)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    asChild
                    size={'icon'}
                    variant={'outline'}
                    className="size-8"
                  >
                    <a target="_blank" href={r.resume} rel="noreferrer">
                      <Download className="size-4 text-blue-500" />
                    </a>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size={'icon'}
                        variant={'outline'}
                        className="size-8"
                      >
                        <TrashIcon className="size-4 text-destructive" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          درخواست را حذف میکنید؟
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          آیا درخواست ارسال شده به این آگهی شغلی را حذف میکنی؟
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>انصراف</AlertDialogCancel>
                        <AlertDialogAction>حذفش کن</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
