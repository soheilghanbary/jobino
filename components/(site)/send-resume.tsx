'use client';
import { TextField } from '@/components/common/text-field';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useAddReport } from '@/hooks/use-job';
import { useMediaQuery } from '@/hooks/use-media-query';
import { type ReportSchema, reportSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { UploadResume } from './upload-resume';

export function SendResume() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <SendIcon className="size-4" />
            ارسال رزومه
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ارسال رزومه</DialogTitle>
            <DialogDescription>
              اطلاعات زیر را برای ارسال رزومه تکمیل کنید
            </DialogDescription>
          </DialogHeader>
          <PersonalForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">
          <SendIcon className="size-4" />
          ارسال رزومه
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>ارسال رزومه</DrawerTitle>
          <DrawerDescription>
            اطلاعات زیر را برای ارسال رزومه تکمیل کنید
          </DrawerDescription>
        </DrawerHeader>
        <PersonalForm onClose={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type PersonalFormProps = {
  onClose: () => void;
};

function PersonalForm({ onClose }: PersonalFormProps) {
  const params = useParams() as { id: string };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ReportSchema>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      name: '',
      email: '',
      resume: '',
      jobId: params.id,
    },
  });
  const { mutateAsync, isPending } = useAddReport();

  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync(data, {
      onSuccess() {
        onClose();
        toast.success('درخواست ارسال شد!');
      },
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 px-4">
      <TextField
        label="نام و نام خانوادگی"
        error={errors.name?.message}
        {...register('name')}
      />
      <TextField
        label="آدرس ایمیل"
        error={errors.email?.message}
        {...register('email')}
      />
      <UploadResume
        upload={(e) => setValue('resume', e)}
        error={errors.resume?.message}
      />
      <Button disabled={isPending} type="submit">
        ارسال درخواست
      </Button>
    </form>
  );
}
