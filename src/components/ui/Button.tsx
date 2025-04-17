"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'gradient';
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
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 hover:shadow-lg hover:shadow-primary-500/30 active:scale-[0.98] transition-all duration-200',
      secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500 hover:shadow-md active:scale-[0.98] transition-all duration-200',
      outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 hover:border-gray-400 active:scale-[0.98] transition-all duration-200',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:scale-[0.98] transition-all duration-200',
      danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-500 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98] transition-all duration-200',
      success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-500 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.98] transition-all duration-200',
      gradient: 'bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white hover:from-primary-600 hover:via-purple-600 hover:to-pink-600 focus:ring-primary-500 hover:shadow-lg hover:shadow-primary-500/30 active:scale-[0.98] transition-all duration-200',
    };

    const sizeClasses = {
      sm: 'text-xs px-2.5 py-1.5 rounded-md',
      md: 'text-sm px-4 py-2 rounded-md',
      lg: 'text-base px-6 py-3 rounded-lg',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          variantClasses[variant],
          sizeClasses[size],
          glow && variant === 'primary' && 'shadow-lg shadow-primary-500/50',
          glow && variant === 'danger' && 'shadow-lg shadow-red-500/50',
          glow && variant === 'success' && 'shadow-lg shadow-green-500/50',
          glow && variant === 'gradient' && 'shadow-lg shadow-purple-500/50',
          pulse && 'animate-pulse',
          isLoading && 'opacity-70 cursor-not-allowed',
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
        {!isLoading && leftIcon && <span className="mr-2 transition-transform group-hover:scale-110">{leftIcon}</span>}
        <span className="relative">
          {children}
          {variant !== 'outline' && variant !== 'ghost' && (
            <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
          )}
        </span>
        {!isLoading && rightIcon && <span className="ml-2 transition-transform group-hover:scale-110">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
