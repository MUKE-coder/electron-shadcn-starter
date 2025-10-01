import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  FileText,
  Settings,
  Tag,
  Sparkles,
  ChevronRight,
} from "lucide-react";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind";
import { useLocation } from "@tanstack/react-router";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "New Sale",
    href: "/demo",
    icon: Sparkles,
    highlight: true,
  },
  {
    title: "Sales",
    href: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Tag,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
];

const settingsItem = {
  title: "Settings",
  href: "/settings",
  icon: Settings,
};

export function VerticalNav() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "border-sidebar-border bg-sidebar sticky top-16 h-[calc(100vh-4rem)] border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 transition-colors",
                    isActive &&
                      "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                    item.highlight &&
                      !isActive &&
                      "text-primary hover:text-primary",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 flex-shrink-0",
                      item.highlight && !isActive && "text-primary",
                    )}
                  />
                  {!isCollapsed && (
                    <span className="text-sm">{item.title}</span>
                  )}
                  {item.highlight && !isCollapsed && (
                    <span className="bg-primary ml-auto h-2 w-2 rounded-full" />
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Settings at Bottom */}
        <div className="border-sidebar-border mb-8 border-t p-3">
          <Link to={settingsItem.href}>
            <Button
              variant={pathname === settingsItem.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                pathname === settingsItem.href &&
                  "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                isCollapsed && "justify-center px-2",
              )}
            >
              <settingsItem.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm">{settingsItem.title}</span>
              )}
            </Button>
          </Link>

          {/* Collapse Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "mt-2 w-full justify-center",
              !isCollapsed && "justify-start gap-2",
            )}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform",
                !isCollapsed && "rotate-180",
              )}
            />
            {!isCollapsed && (
              <span className="text-muted-foreground text-xs">Collapse</span>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
}
