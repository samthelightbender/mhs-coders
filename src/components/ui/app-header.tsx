"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search, Bell, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function AppHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Left section - Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-lg">MHS Coders</span>
          </div>
        </div>

        {/* Center section - Search bar */}
        <div className="flex flex-1 justify-center px-2 sm:px-4">
          <div className="relative w-full max-w-md">
            <Search 
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-full focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right section - Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-2">
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-accent/50"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            {/* Notifications */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 relative hover:bg-accent/50"
                      aria-label="Notifications"
                    >
                      <Bell className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
              <DropdownMenuContent className="w-72 sm:w-80" align="end" sideOffset={8}>
                <div className="p-2">
                  <h3 className="text-sm font-medium px-2 py-1">Notifications</h3>
                  <div className="space-y-1">
                    <DropdownMenuItem className="cursor-pointer rounded px-2 py-1.5">
                      <div className="flex flex-col gap-0.5">
                        <span>New message from John</span>
                        <span className="text-xs text-muted-foreground">2 minutes ago</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer rounded px-2 py-1.5">
                      <div className="flex flex-col gap-0.5">
                        <span>System update available</span>
                        <span className="text-xs text-muted-foreground">1 hour ago</span>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 hover:bg-accent/50"
                      aria-label="User profile"
                    >
                      <User className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">User menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
              <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}