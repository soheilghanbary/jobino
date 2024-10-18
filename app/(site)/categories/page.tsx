const CategoryItem = () => {
  return (
    <div className="flex items-center gap-4 rounded-md border border-border/40 p-4 duration-200 hover:shadow-md active:scale-95">
      <div className="size-10 rounded-md bg-muted" />
      <div>
        <h3 className="font-medium text-sm/relaxed">برنامه نویسی</h3>
        <p className="text-muted-foreground text-xs">Web Programming</p>
      </div>
    </div>
  );
};

export default function Categories() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}
