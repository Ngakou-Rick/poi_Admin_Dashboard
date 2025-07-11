"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'info';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glow?: boolean;
  pulse?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      glow = false,
      pulse = false,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200',
      outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500 hover:border-gray-400 active:scale-[0.98] transition-all duration-200',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 active:scale-[0.98] transition-all duration-200',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200',
      success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200',
      info: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200',
    };

    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5 rounded-lg',
      md: 'text-sm px-4 py-2 rounded-lg',
      lg: 'text-base px-6 py-3 rounded-xl',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          variantClasses[variant],
          sizeClasses[size],
          glow && variant === 'primary' && 'shadow-lg shadow-primary-500/25',
          glow && variant === 'danger' && 'shadow-lg shadow-red-500/25',
          glow && variant === 'success' && 'shadow-lg shadow-green-500/25',
          glow && variant === 'info' && 'shadow-lg shadow-blue-500/25',
          pulse && 'animate-pulse',
          isLoading && 'opacity-75 cursor-not-allowed',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
