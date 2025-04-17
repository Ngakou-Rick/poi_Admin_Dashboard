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
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label, active }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary-900 hover:bg-primary-50',
        active ? 'bg-primary-50 text-primary-900' : 'text-secondary-600'
      )}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navLinks = [
    {
      href: '/dashboard',
      icon: <HomeIcon className="w-6 h-6" />,
      label: 'Tableau de bord',
    },
    {
      href: '/dashboard/points-of-interest',
      icon: <MapIcon className="w-6 h-6" />,
      label: 'Points d\'intérêt',
    },
    {
      href: '/dashboard/users',
      icon: <UserGroupIcon className="w-6 h-6" />,
      label: 'Utilisateurs',
    },
    {
      href: '/dashboard/statistics',
      icon: <ChartBarIcon className="w-6 h-6" />,
      label: 'Statistiques',
    },
    {
      href: '/dashboard/notifications',
      icon: <BellIcon className="w-6 h-6" />,
      label: 'Notifications',
    },
    {
      href: '/dashboard/chat',
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      label: 'Messages',
    },
    {
      href: '/dashboard/settings',
      icon: <Cog6ToothIcon className="w-6 h-6" />,
      label: 'Paramètres',
    },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="h-full flex flex-col justify-between py-5">
        <div>
          <div className="flex items-center justify-between px-4 mb-6">
            {!collapsed && (
              <Link href="/dashboard" className="text-2xl font-bold text-primary-600">
                PoI Admin
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {collapsed ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="space-y-1 px-3">
            {navLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={collapsed ? '' : link.label}
                active={pathname === link.href}
              />
            ))}
          </div>
        </div>

        <div className="px-3 mt-auto">
          <SidebarLink
            href="/auth/logout"
            icon={<ArrowLeftOnRectangleIcon className="w-6 h-6" />}
            label={collapsed ? '' : 'Déconnexion'}
          />
        </div>
      </div>
    </aside>
  );
}
