'use client';
import { TextField } from '@/components/text-field';
import { TextFieldArea } from '@/components/text-field-area';
import { Button } from '@/components/ui/button';

export function AddJobForm() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TextField label="عنوان شغلی" />
      <TextField label="نام شرکت" />
      <TextField label="آدرس وبسایت" />
      <TextField label="دسته بندی" />
      <TextField label="نوع همکاری" />
      <TextField label="حقوق" />
      <TextFieldArea
        className="md:col-span-2 lg:col-span-3"
        rows={6}
        label="توضیحات"
      />
      <div className="inline-flex w-fit items-center gap-4">
        <Button>افزودن شغل</Button>
        <Button variant={'secondary'}>انصراف</Button>
      </div>
    </section>
  );
}
