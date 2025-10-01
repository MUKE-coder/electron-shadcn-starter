"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  User,
  ChevronDown,
  LogOut,
  CreditCard,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import LangToggle from "../LangToggle";
import ToggleTheme from "../ToggleTheme";

export function HorizontalNav() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="border-border bg-card sticky top-0 z-50 w-full border-b">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        {/* Logo/Brand */}
        <div className="p-2">
          <img
            className="w-24 dark:hidden"
            src="/logo_light.png"
            alt="app-logo"
          />
          <img
            className="hidden w-24 dark:block"
            src="/logo_dark.png"
            alt="app-logo"
          />
        </div>

        {/* Search Bar */}
        <div className="mx-auto max-w-2xl flex-1">
          <div
            className={`relative transition-all ${isSearchFocused ? "scale-[1.02]" : ""}`}
          >
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search products, orders, customers..."
              className="bg-muted/50 border-border focus:bg-background w-full pr-4 pl-10"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hidden sm:inline-flex"
          >
            <Bell className="h-5 w-5" />
            <span className="bg-accent absolute top-1 right-1 h-2 w-2 rounded-full" />
          </Button>
          <LangToggle />
          <ToggleTheme />

          {/* Settings */}
          {/* <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Settings className="h-5 w-5" />
          </Button> */}

          {/* User Menu with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent px-3">
                <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden text-sm font-medium lg:inline-block">
                  Sign In
                </span>
                <ChevronDown className="text-muted-foreground h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">My Account</p>
                  <p className="text-muted-foreground text-xs">
                    admin@retailpro.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <User className="h-4 w-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Billing & Subscription</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Users className="h-4 w-4" />
                <span>Team Management</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                <span>Store Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive gap-2">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
