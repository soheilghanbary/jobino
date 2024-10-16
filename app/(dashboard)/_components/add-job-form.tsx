'use client';
import { TextField } from '@/components/text-field';
import { TextFieldArea } from '@/components/text-field-area';
import { Button } from '@/components/ui/button';
import { type AddJobSchema, addJobSchema } from '@/schema/index';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Category } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { SelectCategory } from './select-category';
import { UploadLogo } from './upload-logo';

export function AddJobForm({ items }: { items: Category[] }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddJobSchema>({
    resolver: zodResolver(addJobSchema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <TextField label="عنوان شغلی" {...register('title')} />
      <TextField label="نام شرکت" {...register('company')} />
      <TextField label="آدرس وبسایت" {...register('website')} />
      <SelectCategory label="دسته بندی" items={items} />
      <TextField label="نوع همکاری" {...register('time')} />
      <TextField label="حقوق" {...register('salary')} />
      <UploadLogo upload={(e) => setValue('logo', e)} />
      <TextFieldArea
        rows={6}
        className="md:col-span-2 lg:col-span-3"
        label="توضیحات"
        {...register('description')}
      />
      <div className="inline-flex w-fit items-center gap-4">
        <Button type="submit">افزودن شغل</Button>
        <Button type="button" variant={'secondary'}>
          انصراف
        </Button>
      </div>
    </form>
  );
}
