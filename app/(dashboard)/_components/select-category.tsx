import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Category } from '@prisma/client';

type Props = {
  label: string;
  items: Category[];
};

export function SelectCategory({ label, items }: Props) {
  return (
    <div className="grid gap-2 [&>label]:text-sm">
      <Label>{label}</Label>
      <Select dir="rtl">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
