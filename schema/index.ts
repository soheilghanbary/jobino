import { z } from 'zod';

export const addJobSchema = z.object({
  company: z.string().min(1, 'نام شرکت الزامی است'),
  logo: z.string().min(1, 'لوگوی شرکت الزامی است'),
  website: z.string().url('وبسایت باید یک URL معتبر باشد'),
  title: z.string().min(1, 'عنوان شغل الزامی است'),
  description: z.string().min(1, 'توضیحات شغل الزامی است'),
  salary: z.string().min(1, 'اطلاعات حقوق الزامی است'),
  time: z.string().min(1, 'زمان کار الزامی است'),
  categoryId: z.string().min(1, 'دسته بندی الزامی است'),
  userId: z.string(),
});

export const reportSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  resume: z.string().url(),
  jobId: z.string().min(8),
});

export type ReportSchema = z.infer<typeof reportSchema>;
export type AddJobSchema = z.infer<typeof addJobSchema>;
