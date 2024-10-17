import { OAuth } from '@/components/common/oauth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getUserBySession } from '@/server/auth';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async () => {
  const user = await getUserBySession();
  if (user) redirect('/dashboard');
  return (
    <section className="grid h-svh w-full lg:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center">
        <Button asChild variant={'ghost'} className="absolute top-5 right-5">
          <Link href={'/'}>
            <ArrowRight className="size-4" />
            صفحه اصلی
          </Link>
        </Button>
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">ورود به حساب کاربری</CardTitle>
            <CardDescription>
              برای دسترسی به ویژگی های بیشتر لاگین کنید.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OAuth className="py-0" />
          </CardContent>
        </Card>
      </div>
      <div className="relative hidden h-full w-full lg:inline">
        <Image
          fill
          alt="Login"
          className="object-cover brightness-90"
          src={'/images/hero.jpeg'}
        />
      </div>
    </section>
  );
};
