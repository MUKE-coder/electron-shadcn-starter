import React from "react";

import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

function DashboardPage() {
  const { t } = useTranslation();
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      title: "Sales",
      value: "+2,350",
      change: "+180.1% from last month",
      icon: ShoppingBag,
    },
    {
      title: "Active Customers",
      value: "+12,234",
      change: "+19% from last month",
      icon: Users,
    },
    {
      title: "Growth",
      value: "+573",
      change: "+201 since last hour",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your store overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-card-foreground text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-card-foreground text-2xl font-bold">
                  {stat.value}
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-card-foreground">Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-muted text-muted-foreground flex h-9 w-9 items-center justify-center rounded-full font-medium">
                    {i}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-card-foreground text-sm font-medium">
                      Customer {i}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      customer{i}@example.com
                    </p>
                  </div>
                  <div className="text-card-foreground font-medium">
                    +${(Math.random() * 1000).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-card-foreground">
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks for your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground w-full rounded-lg border p-3 text-left text-sm font-medium transition-colors">
              Process New Sale
            </button>
            <button className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground w-full rounded-lg border p-3 text-left text-sm font-medium transition-colors">
              Add New Product
            </button>
            <button className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground w-full rounded-lg border p-3 text-left text-sm font-medium transition-colors">
              View Inventory
            </button>
            <button className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground w-full rounded-lg border p-3 text-left text-sm font-medium transition-colors">
              Generate Report
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: DashboardPage,
});
