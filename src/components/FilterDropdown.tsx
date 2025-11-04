import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FilterDropdownProps {
  label: string;
  options: (string | number)[];
  value: string | number | null;
  onChange: (value: string | number | null) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ 
  label, 
  options, 
  value, 
  onChange 
}) => {
  return (
    <div className="relative">
      <Label className="block text-sm font-medium mb-2">
        {label}
      </Label>
      <div className="relative">
        <select
          value={value?.toString() || ''}
          onChange={(e) => {
            const val = e.target.value;
            onChange(val === '' ? null : (label === 'Semester' ? Number(val) : val));
          }}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer pr-10"
          )}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {label === 'Semester' ? `Semester ${option}` : option.toString()}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;