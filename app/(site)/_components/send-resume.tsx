'use client';
import { TextField } from '@/components/text-field';
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
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/use-media-query';
import { FileIcon, SendIcon, UploadIcon } from 'lucide-react';
import * as React from 'react';

export function SendResume() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
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
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
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
        <ProfileForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm() {
  return (
    <form className="flex flex-col gap-6 px-4">
      <TextField label="نام و نام خانوادگی" />
      <TextField label="آدرس ایمیل" />
      <div className="grid gap-2 [&>label]:text-sm">
        <Label className="flex items-center gap-2">
          <FileIcon className="size-3.5" />
          رزومه
        </Label>
        <Button type="button" variant={'outline'} className="text-xs">
          <UploadIcon className="size-3.5" />
          آپلود رزومه .pdf
        </Button>
      </div>
      <Button>ارسال درخواست</Button>
    </form>
  );
}
