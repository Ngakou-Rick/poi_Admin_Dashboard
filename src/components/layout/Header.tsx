"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BellIcon, 
  MagnifyingGlassIcon, 
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Nouveau point d\'intérêt ajouté',
      message: 'La Tour Eiffel a été ajoutée avec succès',
      time: 'Il y a 5 minutes',
      type: 'success'
    },
    {
      id: 2,
      title: 'Utilisateur inactif',
      message: 'Pierre Dubois n\'a pas visité depuis 30 jours',
      time: 'Il y a 1 heure',
      type: 'warning'
    },
    {
      id: 3,
      title: 'Mise à jour système',
      message: 'Nouvelle version disponible',
      time: 'Il y a 2 heures',
      type: 'info'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex flex-1 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Rechercher des points d'intérêt, utilisateurs..."
            className="h-10 w-[300px] sm:w-[400px] rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200"
          />
        </div>

        {/* Action Icons & User Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <BellIcon className="h-6 w-6 text-gray-600" />
              <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <Link href="/dashboard/notifications" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Voir toutes les notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="relative">
                <img
                  src="https://ui-avatars.com/api/?name=Admin&background=8B5CF6&color=fff&bold=true&rounded=true&size=128"
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-sm font-semibold text-gray-900">Admin</div>
                <div className="text-xs text-gray-600">admin@poi-app.com</div>
              </div>
              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-sm text-gray-600">admin@poi-app.com</p>
                </div>
                <div className="py-1">
                  <Link 
                    href="/dashboard/profile" 
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <UserCircleIcon className="h-4 w-4" />
                    Mon profil
                  </Link>
                  <Link 
                    href="/dashboard/settings" 
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Cog6ToothIcon className="h-4 w-4" />
                    Paramètres
                  </Link>
                </div>
                <div className="border-t border-gray-100 py-1">
                  <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full">
                    <ArrowRightOnRectangleIcon className="h-4 w-4" />
                    Se déconnecter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for dropdowns */}
      {(isUserMenuOpen || isNotificationsOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsUserMenuOpen(false);
            setIsNotificationsOpen(false);
          }}
        />
      )}
    </header>
  );
}
