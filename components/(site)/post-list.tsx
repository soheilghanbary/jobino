import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PostsTitle = () => {
  return <h2 className="text-center font-extrabold text-2xl">انتشارات</h2>;
};

const PostCard = () => {
  return (
    <div className="rounded-xl border border-border/40 shadow-sm">
      <div className="h-60 w-full border-separate rounded-t-[inherit] border-border/40 border-b bg-muted/40" />
      <div className="grid gap-4 p-4">
        <h2 className="font-extrabold text-base/loose">
          تقویت کننده آنتن موبایل چیست؟
        </h2>
        <p className="mb-auto text-foreground/80 text-sm/6">
          دستگاه تقویت آنتن موبایل محصولی برای رفع مشکل آنتن دهی و بهبود کیفیت
          مکالمه و سرعت اینترنت موبایل میشود.
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground text-xs">
            22 اردبیشهت 1403
          </span>
          <Button variant={'ghost'} className="text-primary">
            بیشتر بخوانید
            <ArrowLeft className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export function PostList() {
  return (
    <div className="space-y-6 py-20">
      <PostsTitle />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
