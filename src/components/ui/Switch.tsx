"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Switch = ({
  id,
  checked = false,
  onChange,
  size = 'md',
  disabled = false,
  label,
  className,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-11 h-6',
    lg: 'w-14 h-7',
  };

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const translateClasses = {
    sm: 'translate-x-4',
    md: 'translate-x-5',
    lg: 'translate-x-7',
  };

  return (
    <div className={cn('flex items-center', className)}>
      <button
        id={id}
        type="button"
        className={cn(
          'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          isChecked ? 'bg-primary-600' : 'bg-gray-200',
          disabled && 'opacity-50 cursor-not-allowed',
          sizeClasses[size]
        )}
        onClick={handleChange}
        disabled={disabled}
        aria-pressed={isChecked}
      >
        <span className="sr-only">Toggle</span>
        <span
          className={cn(
            'pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out',
            isChecked ? translateClasses[size] : 'translate-x-0',
            thumbSizeClasses[size]
          )}
        />
      </button>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'ml-2 text-sm font-medium text-gray-900',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
