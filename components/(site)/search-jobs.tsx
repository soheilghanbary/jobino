import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export const SearchJobs = () => (
  <div className="relative mx-auto flex w-full max-w-md items-center justify-between">
    <Input
      type="text"
      className="h-12 rounded-full pr-4 pl-[100px]"
      placeholder="جستجو بر اساس نام شرکت یا عنوان شغلی"
    />
    <Button
      size={'sm'}
      variant={'ghost'}
      className="absolute left-2 rounded-full"
    >
      جستجو
      <SearchIcon className="size-3.5" />
    </Button>
  </div>
);
