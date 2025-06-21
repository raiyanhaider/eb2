"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { BookOpen, Home, Settings, HelpCircle, MessageSquare, BarChart, FileText, Package, LogOut, ChevronLeft, ChevronRight, Sparkles, Zap, Layers, BookText, Feather, Wand2, PenTool, BookMarked, Users, Gift } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function Sidebar({ isOpen, onToggle, className }: SidebarProps) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <aside className={cn(
      "bg-card border-r border-border h-screen flex flex-col z-30",
      "transition-transform duration-300 ease-in-out",
      className
    )}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          {isOpen ? (
            <>
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Goriber Lekhok
              </span>
            </>
          ) : (
            <Sparkles className="h-6 w-6 text-primary mx-auto" />
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className={cn(
            "transition-opacity duration-200",
            !isDesktop && !isOpen && "opacity-0"
          )}
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        <div className="space-y-1 px-3">
          <TooltipProvider>
            <div className="space-y-1">
              <SidebarItem 
                href="/dashboard" 
                icon={<Home className="h-5 w-5" />}
                isActive={pathname === "/dashboard"}
                label="Dashboard"
                isOpen={isOpen}
                isDesktop={isDesktop}
              />
              
              <button
                onClick={() => toggleMenu('features')}
                className={cn(
                  "flex items-center w-full justify-between px-3 py-2 rounded-md text-sm transition-colors",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-3" />
                  {isOpen && <span>Features</span>}
                </div>
                {isOpen && (
                  <div>
                    {activeMenu === 'features' ? (
                      <ChevronRight className="h-4 w-4" />
                    ) : (
                      <ChevronLeft className="h-4 w-4" />
                    )}
                  </div>
                )}
              </button>

              {activeMenu === 'features' && isOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {FEATURES.map((feature) => (
                    <SidebarItem
                      key={feature.id}
                      href={`/${feature.id}`}
                      icon={<Layers className="h-4 w-4" />}
                      isActive={pathname === `/features/${feature.id}`}
                      label={feature.name}
                      isOpen={isOpen}
                      isDesktop={isDesktop}
                      compact
                    />
                  ))}
                </div>
              )}
              
              <button
                onClick={() => toggleMenu('ebook')}
                className={cn(
                  "flex items-center w-full justify-between px-3 py-2 rounded-md text-sm transition-colors",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center">
                  <BookText className="h-5 w-5 mr-3" />
                  {isOpen && <span>E-Book Builder</span>}
                </div>
                {isOpen && (
                  <div>
                    {activeMenu === 'ebook' ? (
                      <ChevronRight className="h-4 w-4" />
                    ) : (
                      <ChevronLeft className="h-4 w-4" />
                    )}
                  </div>
                )}
              </button>

              {activeMenu === 'ebook' && isOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <SidebarItem
                    href="/auto-chapter"
                    icon={<Feather className="h-4 w-4" />}
                    isActive={pathname === "/auto-chapter"}
                    label="Auto Chapter Generator"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/guided-wizard"
                    icon={<Wand2 className="h-4 w-4" />}
                    isActive={pathname === "/guided-wizard"}
                    label="Guided E-book Wizard"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/storybook"
                    icon={<BookMarked className="h-4 w-4" />}
                    isActive={pathname === "/storybook"}
                    label="Storybook Generator"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/outline-to-chapter-setup"
                    icon={<FileText className="h-4 w-4" />}
                    isActive={pathname === "/outline-to-chapter-setup"}
                    label="Outline to Chapter"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/content-expander"
                    icon={<Layers className="h-4 w-4" />}
                    isActive={pathname === "/content-expander"}
                    label="Content Expander"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                </div>
              )}

              <button
                onClick={() => toggleMenu('tools')}
                className={cn(
                  "flex items-center w-full justify-between px-3 py-2 rounded-md text-sm transition-colors",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center">
                  <PenTool className="h-5 w-5 mr-3" />
                  {isOpen && <span>Helpful Tools</span>}
                </div>
                {isOpen && (
                  <div>
                    {activeMenu === 'tools' ? (
                      <ChevronRight className="h-4 w-4" />
                    ) : (
                      <ChevronLeft className="h-4 w-4" />
                    )}
                  </div>
                )}
              </button>

              {activeMenu === 'tools' && isOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <SidebarItem
                    href="/grammar-style-checker"
                    icon={<PenTool className="h-4 w-4" />}
                    isActive={pathname === "/grammar-style-checker"}
                    label="Grammar & Style Checker"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/chapter-title-generator"
                    icon={<BookText className="h-4 w-4" />}
                    isActive={pathname === "/chapter-title-generator"}
                    label="Chapter Title Generator"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/content-inspiration"
                    icon={<Sparkles className="h-4 w-4" />}
                    isActive={pathname === "/content-inspiration"}
                    label="Content Inspiration Tool"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/character-profile"
                    icon={<Users className="h-4 w-4" />}
                    isActive={pathname === "/character-profile"}
                    label="Character Profile Generator"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/paragraph-rephraser"
                    icon={<FileText className="h-4 w-4" />}
                    isActive={pathname === "/paragraph-rephraser"}
                    label="Paragraph Rephraser"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/reading-level"
                    icon={<BarChart className="h-4 w-4" />}
                    isActive={pathname === "/reading-level"}
                    label="Reading Level Analyzer"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                  <SidebarItem
                    href="/word-count"
                    icon={<FileText className="h-4 w-4" />}
                    isActive={pathname === "/word-count"}
                    label="Word Count Tracker"
                    isOpen={isOpen}
                    isDesktop={isDesktop}
                    compact
                  />
                </div>
              )}

              <SidebarItem
                href="/projects"
                icon={<FileText className="h-5 w-5" />}
                isActive={pathname === "/projects"}
                label="My Projects"
                isOpen={isOpen}
                isDesktop={isDesktop}
              />

              <SidebarItem
                href="/analytics"
                icon={<BarChart className="h-5 w-5" />}
                isActive={pathname === "/analytics"}
                label="Analytics"
                isOpen={isOpen}
                isDesktop={isDesktop}
              />

              <SidebarItem
                href="/tutorials"
                icon={<BookOpen className="h-5 w-5" />}
                isActive={pathname === "/tutorials"}
                label="Tutorials"
                isOpen={isOpen}
                isDesktop={isDesktop}
              />

              <SidebarItem
                href="/chat"
                icon={<MessageSquare className="h-5 w-5" />}
                isActive={pathname === "/chat"}
                label="Chat"
                isOpen={isOpen}
                isDesktop={isDesktop}
              />
            </div>
          </TooltipProvider>
        </div>
      </div>

      <div className="border-t border-border py-4 px-3 space-y-1">
        <TooltipProvider>
          <SidebarItem
            href="/gifts"
            icon={<Gift className="h-5 w-5" />}
            isActive={pathname === "/gifts"}
            label="Gifts and Offers"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
          
          <SidebarItem
            href="/redeem"
            icon={<Gift className="h-5 w-5" />}
            isActive={pathname === "/redeem"}
            label="Redeem Codes"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
          
          <SidebarItem
            href="/upgrade"
            icon={<Package className="h-5 w-5" />}
            isActive={pathname === "/upgrade"}
            label="Upgrade Plan"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
          
          <SidebarItem
            href="/settings"
            icon={<Settings className="h-5 w-5" />}
            isActive={pathname === "/settings"}
            label="Settings"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
          
          <SidebarItem
            href="/support"
            icon={<HelpCircle className="h-5 w-5" />}
            isActive={pathname === "/support"}
            label="Support"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
          
          <SidebarItem
            href="/logout"
            icon={<LogOut className="h-5 w-5" />}
            isActive={false}
            label="Logout"
            isOpen={isOpen}
            isDesktop={isDesktop}
          />
        </TooltipProvider>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isOpen: boolean;
  isDesktop: boolean;
  compact?: boolean;
}

function SidebarItem({ href, icon, label, isActive, isOpen, isDesktop, compact = false }: SidebarItemProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-sm transition-colors",
              isActive 
                ? "bg-primary/10 text-primary" 
                : "hover:bg-accent/80 hover:text-accent-foreground",
              compact && "py-1.5"
            )}
          >
            <span className={cn("mr-3", !isOpen && "mx-auto")}>{icon}</span>
            {isOpen && <span>{label}</span>}
          </Link>
        </TooltipTrigger>
        {!isOpen && isDesktop && (
          <TooltipContent side="right">
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}