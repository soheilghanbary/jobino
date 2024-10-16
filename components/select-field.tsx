import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  label: string;
  items: { value: string; label: string }[];
};

export function SelectField({ label, items }: Props) {
  return (
    <div className="grid gap-2 [&>label]:text-sm">
      <Label>{label}</Label>
      <Select dir="rtl">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
