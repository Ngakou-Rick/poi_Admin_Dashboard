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

  // Adjusted sizes for a more modern feel
  const sizeClasses = {
    sm: 'w-9 h-5', // Slightly larger
    md: 'w-12 h-6.5', // Custom height for better proportion
    lg: 'w-14 h-7.5',
  };

  const thumbSizeClasses = {
    sm: 'h-4 w-4', // Slightly larger thumb
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  // Adjusted translation distances based on new sizes
  const translateClasses = {
    sm: 'translate-x-4.5', // Adjusted for new thumb and track size
    md: 'translate-x-5.5',
    lg: 'translate-x-6.5',
  };

  return (
    <div className={cn('flex items-center group', className)}>
      <button
        id={id}
        type="button"
        className={cn(
          'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-150 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background', // Modern focus
          isChecked ? 'bg-primary-500' : 'bg-secondary-300 group-hover:bg-secondary-400', // Purple when on, lighter gray when off, darker on hover
          disabled && 'opacity-60 cursor-not-allowed',
          sizeClasses[size]
        )}
        onClick={handleChange}
        disabled={disabled}
        aria-pressed={isChecked}
      >
        <span className="sr-only">Toggle</span>
        <span
          className={cn(
            'pointer-events-none inline-block rounded-full bg-secondary-50 shadow-md transform ring-0 transition duration-150 ease-in-out', // White thumb, subtle shadow
            isChecked ? translateClasses[size] : 'translate-x-0.5', // Start slightly inset for visual balance
            thumbSizeClasses[size]
          )}
        />
      </button>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'ml-3 text-sm font-medium text-secondary-800', // Darker label text, increased margin
            disabled && 'opacity-60 cursor-not-allowed'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
