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
      <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={value?.toString() || ''}
          onChange={(e) => {
            const val = e.target.value;
            onChange(val === '' ? null : (label === 'Semester' ? Number(val) : val));
          }}
          className="block w-full pl-4 pr-12 py-3 text-base border-2 border-zinc-200 dark:border-zinc-700 
            bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-800 dark:text-zinc-200 font-medium
            focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400
            rounded-xl shadow-lg hover:shadow-xl appearance-none cursor-pointer transition-all duration-300"
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {label === 'Semester' ? `Semester ${option}` : option.toString()}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center pointer-events-none">
          <ChevronDown className="text-white" size={14} />
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;