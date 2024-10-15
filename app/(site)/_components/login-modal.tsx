'use client';
import { LoadingIcon } from '@/components/icons';
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
import { cn } from '@/lib/utils';
import { LogInIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
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

function OAuth({ className }: React.ComponentProps<'form'>) {
  const [loading, setLoading] = React.useState({
    github: false,
    google: false,
  });

  const onSignIn = async (provider: 'google' | 'github') => {
    setLoading({ ...loading, [provider]: true });
    await signIn(provider);
  };

  return (
    <div className={cn('grid grid-cols-2 gap-4 py-4', className)}>
      <Button
        variant={'default'}
        disabled={loading.github}
        onClick={() => onSignIn('github')}
      >
        {loading.github && (
          <LoadingIcon className="size-5 fill-primary-foreground" />
        )}
        گیت هاب
      </Button>
      <Button
        variant={'outline'}
        disabled={loading.google}
        onClick={() => onSignIn('google')}
      >
        {loading.google && (
          <LoadingIcon className="size-5 fill-primary-foreground" />
        )}
        گوگل
      </Button>
    </div>
  );
}
