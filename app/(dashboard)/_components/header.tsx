type Props = {
  title: string;
  description: string;
};

export function DashboardHeader({ title, description }: Props) {
  return (
    <div className="mb-6">
      <h1 className="font-black text-lg leading-loose">{title}</h1>
      <p className="font-medium text-muted-foreground text-xs/6 lg:text-sm/6">
        {description}
      </p>
    </div>
  );
}
