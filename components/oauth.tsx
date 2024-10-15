'use client';
import { LoadingIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const OAuthLoading = () => (
  <LoadingIcon className="size-4 fill-primary-foreground" />
);

export function OAuth({ className }: React.ComponentProps<'form'>) {
  const [loading, setLoading] = useState({
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
        {loading.github && <OAuthLoading />}
        گیت هاب
      </Button>
      <Button
        variant={'outline'}
        disabled={loading.google}
        onClick={() => onSignIn('google')}
      >
        {loading.google && <OAuthLoading />}
        گوگل
      </Button>
    </div>
  );
}
