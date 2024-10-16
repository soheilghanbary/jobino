'use client';
import { SelectField } from '@/components/select-field';
import { TextField } from '@/components/text-field';
import { TextFieldArea } from '@/components/text-field-area';
import { Button } from '@/components/ui/button';
import { salaryItems, timeItems } from '@/config/job';
import { type AddJobSchema, addJobSchema } from '@/schema/index';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Category } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { SelectCategory } from './select-category';

export function AddJobForm({ items }: { items: Category[] }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddJobSchema>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      logo: '',
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <TextField
        label="عنوان شغلی"
        {...register('title')}
        error={errors.title?.message}
      />
      <TextField
        label="نام شرکت"
        {...register('company')}
        error={errors.company?.message}
      />
      <TextField
        label="آدرس وبسایت"
        {...register('website')}
        error={errors.website?.message}
      />
      <SelectCategory label="دسته بندی" items={items} />
      <SelectField label="حقوق" items={salaryItems} />
      <SelectField label="نوع همکاری" items={timeItems} />
      {/* <UploadLogo upload={(e) => setValue('logo', e)} /> */}
      <TextFieldArea
        rows={6}
        className="md:col-span-2 lg:col-span-3"
        label="توضیحات"
        {...register('description')}
        error={errors.description?.message}
      />
      <div className="inline-flex w-fit items-center gap-4">
        <Button onClick={() => onSubmit()}>افزودن شغل</Button>
        <Button type="button" variant={'secondary'}>
          انصراف
        </Button>
      </div>
    </form>
  );
}
