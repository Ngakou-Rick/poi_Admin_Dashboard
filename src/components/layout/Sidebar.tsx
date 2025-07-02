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
        'flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 ease-in-out group', // Increased py, added group
        active
          ? 'bg-primary-500 text-primary-foreground shadow-md shadow-primary-500/30' // Active: Purple bg, white text, purple shadow
          : 'text-secondary-700 hover:text-primary-500 hover:bg-primary-500/10', // Inactive: Dark gray text, hover: purple text, light purple bg
        label === '' ? 'justify-center' : '' // Center icon when label is hidden (collapsed)
      )}
    >
      <div className={cn("w-5 h-5", active ? "text-primary-foreground" : "text-secondary-600 group-hover:text-primary-500")}>{icon}</div> {/* Slightly smaller icons, color adapts */}
      {!collapsed && <span className="font-medium text-sm">{label}</span>} {/* Smaller font */}
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false); // Default to not collapsed

  const navLinks = [
    {
      href: '/dashboard',
      icon: <HomeIcon className="w-full h-full" />, // Use full for parent div to control size
      label: 'Tableau de bord',
    },
    {
      href: '/dashboard/points-of-interest',
      icon: <MapIcon className="w-full h-full" />,
      label: 'Points d\'intérêt',
    },
    {
      href: '/dashboard/users',
      icon: <UserGroupIcon className="w-full h-full" />,
      label: 'Utilisateurs',
    },
    {
      href: '/dashboard/statistics',
      icon: <ChartBarIcon className="w-full h-full" />,
      label: 'Statistiques',
    },
    {
      href: '/dashboard/notifications',
      icon: <BellIcon className="w-full h-full" />,
      label: 'Notifications',
    },
    {
      href: '/dashboard/chat',
      icon: <ChatBubbleLeftRightIcon className="w-full h-full" />,
      label: 'Messages',
    },
    // Settings link removed as per typical modern dashboard design (often in user dropdown)
    // {
    //   href: '/dashboard/settings',
    //   icon: <Cog6ToothIcon className="w-full h-full" />,
    //   label: 'Paramètres',
    // },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-secondary-50 border-r border-secondary-300 shadow-lg transition-width duration-300 ease-in-out', // Theme colors, shadow
        collapsed ? 'w-20' : 'w-64' // Adjusted collapsed width
      )}
    >
      <div className="h-full flex flex-col justify-between py-6"> {/* Increased py */}
        <div>
          {/* Logo and Collapse Button */}
          <div className={cn("flex items-center mb-8 px-4", collapsed ? "justify-center" : "justify-between")}>
            {!collapsed && (
              <Link href="/dashboard" className="text-2xl font-bold text-primary-500"> {/* Purple logo text */}
                PoI
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg text-secondary-600 hover:bg-secondary-200 transition-colors"
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
