'use client';
import { Checkbox as UICheckbox } from '../../../ui/checkbox';

interface CheckboxProps {
  id: string;
  label?: string;
}

export function Checkbox({ id, label }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <UICheckbox id={id} />
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  );
}
