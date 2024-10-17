'use client';
import { LoadingIcon } from '@/components/icons';
import { SelectField } from '@/components/select-field';
import { TextField } from '@/components/text-field';
import { TextFieldArea } from '@/components/text-field-area';
import { Button } from '@/components/ui/button';
import { salaryItems, timeItems } from '@/config/job';
import { useAddJob } from '@/hooks/use-job';
import { type AddJobSchema, addJobSchema } from '@/schema/index';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Category } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { SelectCategory } from './select-category';
import { UploadLogo } from './upload-logo';

type Props = {
  items: Category[];
  userId: string;
};

export function AddJobForm({ items, userId }: Props) {
  const router = useRouter();
  const { mutateAsync, isPending } = useAddJob();
  const {
    control, // اضافه کردن control برای استفاده در Controller
    handleSubmit,
    formState: { errors },
  } = useForm<AddJobSchema>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      logo: '',
      categoryId: '',
      salary: '',
      time: '',
      description: '',
      title: '',
      company: '',
      website: '',
      userId,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync(data);
    toast.success('شغل اضافه شد');
    router.push('/dashboard/jobs');
  });

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            label="عنوان شغلی"
            error={errors.title?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <TextField
            label="نام شرکت"
            error={errors.company?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="website"
        control={control}
        render={({ field }) => (
          <TextField
            label="آدرس وبسایت"
            error={errors.website?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <SelectCategory
            items={items}
            label="دسته بندی"
            error={errors.categoryId?.message}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="salary"
        control={control}
        render={({ field }) => (
          <SelectField
            label="حقوق"
            items={salaryItems}
            error={errors.salary?.message}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="time"
        control={control}
        render={({ field }) => (
          <SelectField
            label="نوع همکاری"
            items={timeItems}
            error={errors.time?.message}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        name="logo"
        control={control}
        render={({ field }) => (
          <UploadLogo upload={field.onChange} error={errors.logo?.message} />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextFieldArea
            rows={6}
            className="md:col-span-2 lg:col-span-3"
            label="توضیحات"
            error={errors.description?.message}
            {...field}
          />
        )}
      />
      <div className="inline-flex w-fit items-center gap-4">
        <Button disabled={isPending} type="submit">
          {isPending && (
            <LoadingIcon className="size-4 fill-primary-foreground" />
          )}
          افزودن شغل
        </Button>
        <Button disabled={isPending} type="button" variant={'secondary'}>
          انصراف
        </Button>
      </div>
    </form>
  );
}
