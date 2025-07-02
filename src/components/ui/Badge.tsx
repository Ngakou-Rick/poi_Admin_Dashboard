"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-secondary-200 text-secondary-800', // Light gray background, dark gray text
      primary: 'bg-primary-500 text-primary-foreground', // Purple background, white text
      secondary: 'bg-secondary-300 text-secondary-900', // Medium gray background, black text
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-red-500 text-white',
      info: 'bg-blue-500 text-white',
    };

    const sizeClasses = {
      sm: 'text-xs px-2.5 py-1', // Slightly more padding
      md: 'text-sm px-3 py-1.5',
      lg: 'text-base px-3.5 py-2',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-lg font-semibold', // Changed to rounded-lg and font-semibold
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
