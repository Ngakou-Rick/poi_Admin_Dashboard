"use client";

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // The sidebar width is controlled within Sidebar.tsx (w-64 or w-20 when collapsed)
  // We will use CSS variables or a shared state if we need dynamic pl based on collapsed state from Sidebar
  // For now, assuming a fixed expanded sidebar or handling collapsed state within Sidebar/Header relative positioning.
  return (
    <div className="min-h-screen bg-secondary-100 flex"> {/* Use secondary-100 for background */}
      <Sidebar />
      {/* Adjust pl-64 if sidebar width changes or is dynamic. Consider CSS custom properties or a global state for sidebar width */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out md:ml-64"> {/* Added md:ml-64, adjust if sidebar is dynamic */}
        <Header />
        <main className="flex-1 p-6 md:p-8"> {/* Increased padding */}
          {children}
        </main>
      </div>
    </div>
  );
}
