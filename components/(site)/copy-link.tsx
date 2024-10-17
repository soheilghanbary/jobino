'use client';
import { CopyIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';

export function CopyLink() {
  const pathname = usePathname();

  const copy = () => {
    navigator.clipboard.writeText(window.location.origin + pathname);
    toast.success('لینگ آگهی کپی شد!');
  };

  return (
    <Button onClick={copy} variant={'ghost'} size={'icon'}>
      <CopyIcon className="size-4" />
    </Button>
  );
}
