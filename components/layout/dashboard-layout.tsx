"use client";

import { useState } from "react";
import Sidebar from "@/components/navigation/sidebar";
import Navbar from "@/components/navigation/navbar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!isDesktop) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar 
        isOpen={isDesktop ? sidebarOpen : isMobileMenuOpen} 
        onToggle={toggleSidebar} 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isDesktop ? (sidebarOpen ? "w-64" : "w-20") : "w-64",
          !isDesktop && "fixed inset-y-0 left-0 z-50",
          !isDesktop && !isMobileMenuOpen && "-translate-x-full"
        )}
      />
      {!isDesktop && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar onMenuClick={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}