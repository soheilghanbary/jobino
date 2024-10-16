import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { S3 } from 'aws-sdk';
import { UploadIcon } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

type Props = {
  upload: (value: string) => void;
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

const removeFile = async (key: string) => {
  return await s3
    .deleteObject({ Bucket: process.env.LIARA_BUCKET_NAME!, Key: key })
    .promise();
};

export function UploadLogo({ upload }: Props) {
  const [file, setFile] = useState<File>();
  const [imageKey, setImageKey] = useState('');

  const onDrop = useCallback(async (files: File[]) => {
    setFile(files[0]);
    const res = await onUpload(files[0]);
    setImageKey(res.Key);
    upload(res.Location);
    toast.success('لوگو با موفقیت آپلود شد!');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const onDeleteFile = async () => {
    setImageKey('');
    setFile(undefined);
    await removeFile(imageKey);
    toast.error('لوگو حذف شد!');
  };

  return (
    <section>
      <div className="grid gap-2 [&>label]:text-sm">
        <Label>لوگوی شرکت</Label>
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
          بارگذاری فایل
        </Button>
      </div>
      {!!file && (
        <figure
          className="relative mt-2 size-16 rounded-md border bg-muted/40 shadow-sm ring-destructive ring-offset-1 duration-100 hover:ring-1 active:scale-90"
          onClick={onDeleteFile}
        >
          <Image
            fill
            alt="logo"
            className={cn(
              'size-full rounded-[inherit] object-contain duration-100',
              imageKey ? 'opacity-100' : 'opacity-50',
            )}
            src={URL.createObjectURL(file)}
          />
        </figure>
      )}
    </section>
  );
}
