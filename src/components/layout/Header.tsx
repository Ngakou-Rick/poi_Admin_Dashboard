"use client";

import React from 'react';
import Link from 'next/link';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="search"
            placeholder="Rechercher..."
            className="h-9 w-[200px] sm:w-[300px] rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm outline-none focus:border-primary-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
              <BellIcon className="h-5 w-5 text-gray-500" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
                alt="Avatar"
                className="h-9 w-9 rounded-full"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Admin</div>
              <div className="text-xs text-gray-500">admin@poi-app.com</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
