'use client';
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
import { useMutation } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  id: string;
};

export function DeleteReport({ id }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/reports/${id}`, {
        method: 'DELETE',
      });
      return await res.json();
    },
  });

  const deleteReport = async () => {
    await mutateAsync();
    router.refresh();
    setOpen(false);
    toast.success('درخواست حذف شد');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size={'icon'} variant={'outline'} className="size-8">
          <TrashIcon className="size-4 text-destructive" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>درخواست را حذف میکنید؟</AlertDialogTitle>
          <AlertDialogDescription>
            آیا درخواست ارسال شده به این آگهی شغلی را حذف میکنی؟
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>انصراف</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={deleteReport}>
            حذفش کن
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
