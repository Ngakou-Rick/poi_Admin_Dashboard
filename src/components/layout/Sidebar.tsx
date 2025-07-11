"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  HomeIcon,
  MapIcon,
  UserGroupIcon,
  ChartBarIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed: boolean;
  badge?: number;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label, active, collapsed, badge }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 ease-in-out group relative',
        active
          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50',
        collapsed ? 'justify-center' : ''
      )}
    >
      <div className={cn(
        "w-5 h-5 flex-shrink-0", 
        active ? "text-white" : "text-gray-500 group-hover:text-primary-600"
      )}>
        {icon}
      </div>
      {!collapsed && (
        <div className="flex items-center justify-between flex-1 min-w-0">
          <span className="font-medium text-sm truncate">{label}</span>
          {badge && badge > 0 && (
            <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
              {badge > 99 ? '99+' : badge}
            </span>
          )}
        </div>
      )}
      {collapsed && badge && badge > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navLinks = [
    {
      href: '/dashboard',
      icon: <HomeIcon className="w-full h-full" />,
      label: 'Tableau de bord',
      badge: 0
    },
    {
      href: '/dashboard/points-of-interest',
      icon: <MapIcon className="w-full h-full" />,
      label: 'Points d\'intérêt',
      badge: 0
    },
    {
      href: '/dashboard/users',
      icon: <UserGroupIcon className="w-full h-full" />,
      label: 'Utilisateurs',
      badge: 0
    },
    {
      href: '/dashboard/statistics',
      icon: <ChartBarIcon className="w-full h-full" />,
      label: 'Statistiques',
      badge: 0
    },
    {
      href: '/dashboard/notifications',
      icon: <BellIcon className="w-full h-full" />,
      label: 'Notifications',
      badge: 3
    },
    {
      href: '/dashboard/chat',
      icon: <ChatBubbleLeftRightIcon className="w-full h-full" />,
      label: 'Messages',
      badge: 1
    },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {!collapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PoI Admin</span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">P</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200",
              collapsed ? "mx-auto" : ""
            )}
          >
            {collapsed ? (
              <ChevronRightIcon className="w-4 h-4" />
            ) : (
              <ChevronLeftIcon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              label={link.label}
              active={isActive(link.href)}
              collapsed={collapsed}
              badge={link.badge}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100">
          <SidebarLink
            href="/auth/logout"
            icon={<ArrowLeftOnRectangleIcon className="w-full h-full" />}
            label="Déconnexion"
            collapsed={collapsed}
            active={false}
          />
        </div>
      </div>
    </aside>
  );
}
