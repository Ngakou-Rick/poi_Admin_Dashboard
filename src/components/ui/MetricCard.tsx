"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeValue?: string;
  status?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color?: 'primary' | 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  description?: string;
  className?: string;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeValue,
  status = 'neutral',
  icon,
  color = 'primary',
  description,
  className,
  onClick
}) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600 border-primary-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  };

  const statusColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={cn(
        'relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200',
        onClick && 'cursor-pointer hover:-translate-y-1',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          'p-2 rounded-lg border',
          colorClasses[color]
        )}>
          {icon}
        </div>
        {change && (
          <div className="flex items-center gap-1">
            {status === 'up' ? (
              <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            ) : status === 'down' ? (
              <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
            ) : null}
            <span className={cn(
              'text-xs font-medium',
              statusColors[status]
            )}>
              {change}
            </span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
        {changeValue && (
          <p className={cn(
            'text-xs font-medium mt-1',
            statusColors[status]
          )}>
            {changeValue}
          </p>
        )}
      </div>
    </Component>
  );
};

export default MetricCard; 