"use client";

import React from 'react';
import Link from 'next/link';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-secondary-300 bg-secondary-50 px-6 shadow-sm"> {/* Adjusted colors, padding, shadow */}
      <div className="flex flex-1 items-center justify-between">
        {/* Search Bar - Modernized */}
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-secondary-500" />
          <input
            type="search"
            placeholder="Rechercher..."
            className="h-10 w-[250px] sm:w-[350px] rounded-lg border border-secondary-300 bg-secondary-100 pl-10 pr-3 py-2 text-sm text-secondary-800 placeholder-secondary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors duration-150"
          />
        </div>

        {/* Action Icons & User Profile - Modernized */}
        <div className="flex items-center gap-5"> {/* Increased gap */}
          <div className="relative">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary-200 transition-colors duration-150">
              <BellIcon className="h-6 w-6 text-secondary-600" /> {/* Slightly larger icon */}
              {/* Notification dot - more subtle */}
              <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5 rounded-full bg-primary-500 border-2 border-secondary-50"></span>
            </button>
          </div>
          <div className="flex items-center gap-3"> {/* Increased gap */}
            <div className="relative">
              {/* Using a placeholder, replace with actual user image if available */}
              <img
                src="https://ui-avatars.com/api/?name=Admin&background=8B5CF6&color=fff&bold=true&rounded=true&size=128" // Updated avatar to match theme
                alt="Avatar"
                className="h-10 w-10 rounded-full" // Slightly larger avatar
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-secondary-50 bg-green-500"></span> {/* Online indicator */}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-secondary-800">Admin</div> {/* Bolder name */}
              <div className="text-xs text-secondary-600">admin@poi-app.com</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
