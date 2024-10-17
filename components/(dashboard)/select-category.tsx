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
  onChange: (value: string) => void;
  error?: string;
};

export function SelectCategory({ label, items, error, onChange }: Props) {
  return (
    <div className="grid gap-2 [&>label]:text-sm">
      <Label>{label}</Label>
      <Select dir="rtl" onValueChange={onChange}>
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
      {!!error && (
        <span className="font-medium text-destructive text-xs">{error}</span>
      )}
    </div>
  );
}
