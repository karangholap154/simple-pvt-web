import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
      <label className="hidden md:block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          value={value?.toString() || ''}
          onChange={(e) => {
            const val = e.target.value;
            onChange(val === '' ? null : (label === 'Semester' ? Number(val) : val));
          }}
          className="block w-full pl-3 pr-10 py-2 text-base border-zinc-300 dark:border-zinc-700 
            bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            rounded-md shadow-sm appearance-none cursor-pointer"
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {label === 'Semester' ? `Semester ${option}` : option.toString()}
            </option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400" 
          size={18} 
        />
      </div>
    </div>
  );
};

export default FilterDropdown;