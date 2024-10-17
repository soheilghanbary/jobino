'use client';
import { OAuth } from '@/components/common/oauth';
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
import { useMediaQuery } from '@/hooks/use-media-query';
import { LogInIcon } from 'lucide-react';
import * as React from 'react';

export function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <LogInIcon className="size-4" />
            وارد شوید
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ورود به حساب کاربری</DialogTitle>
            <DialogDescription>
              برای دسترسی به ویژگی های بیشتر لاگین کنید.
            </DialogDescription>
          </DialogHeader>
          <OAuth />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <LogInIcon className="size-4" />
          وارد شوید
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>ورود به حساب کاربری</DrawerTitle>
          <DrawerDescription>
            برای دسترسی به ویژگی های بیشتر لاگین کنید.
          </DrawerDescription>
        </DrawerHeader>
        <OAuth className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
