import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { S3 } from 'aws-sdk';
import { UploadIcon } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

type Props = {
  upload: (value: string) => void;
  error?: string;
};

const s3 = new S3({
  accessKeyId: process.env.LIARA_ACCESS_KEY,
  secretAccessKey: process.env.LIARA_SECRET_KEY,
  endpoint: process.env.LIARA_ENDPOINT,
});

const onUpload = async (file: File) => {
  const params = {
    Bucket: process.env.LIARA_BUCKET_NAME!,
    Key: file.name,
    Body: file,
  };
  return await s3.upload(params).promise(); // -> { key , Location }
};

export function UploadResume({ upload, error }: Props) {
  const onDrop = useCallback(async (files: File[]) => {
    const res = await onUpload(files[0]);
    upload(res.Location);
    toast.success('رزومه شما با موفقیت آپلود شد');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
  });

  return (
    <section>
      <div className="grid gap-2 [&>label]:text-sm">
        <Label>آپلود رزومه</Label>
        <Button
          type="button"
          variant={'outline'}
          className={cn(
            'text-xs',
            isDragActive ? 'ring-2 ring-primary ring-offset-2' : '',
          )}
          {...getRootProps()}
        >
          <input type="hidden" {...getInputProps()} />
          <UploadIcon className="size-3.5" />
          بارگذاری فایل .pdf
        </Button>
        {!!error && (
          <span className="font-medium text-destructive text-xs">{error}</span>
        )}
      </div>
    </section>
  );
}
