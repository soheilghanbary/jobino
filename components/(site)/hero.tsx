import { SearchJobs } from './search-jobs';

type Props = {
  title: string;
  description: string;
};

export function Hero({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <h1 className="max-w-2xl font-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl/tight">
        {title}
      </h1>
      <p className="text-balance text-foreground/80 text-sm/6 lg:text-lg">
        {description}
      </p>
      <SearchJobs />
    </div>
  );
}
