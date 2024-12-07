'use client';
import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { FaAngleDown } from 'react-icons/fa6';

interface Option {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

interface DropdownMenuCheckboxesProps {
  title: string;
  options: Option[];
  className?: string;
}

export function DropdownMenuCheckboxes({
  title,
  options,
  className = '',
}: DropdownMenuCheckboxesProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-center justify-center gap-1 text-[#4B5563] font-medium cursor-pointer ${className}`}
        >
          {title}
          <FaAngleDown color="black" size={12} style={{ fontWeight: '200' }} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {options.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={option.checked}
            onCheckedChange={(checked) =>
              option.onCheckedChange(checked as boolean)
            }
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
