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
      default: 'bg-gray-100 text-gray-800 border border-gray-200',
      primary: 'bg-primary-50 text-primary-700 border border-primary-200',
      secondary: 'bg-gray-100 text-gray-700 border border-gray-200',
      success: 'bg-green-50 text-green-700 border border-green-200',
      warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
      danger: 'bg-red-50 text-red-700 border border-red-200',
      info: 'bg-blue-50 text-blue-700 border border-blue-200',
    };

    const sizeClasses = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-1',
      lg: 'text-base px-3 py-1.5',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium',
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
