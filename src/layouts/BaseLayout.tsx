import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { HorizontalNav } from "@/components/template/horizontal-nav";
import { VerticalNav } from "@/components/template/vertical-nav";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion title="Beta POS" />
      {/* <NavigationMenu /> */}
      <div className="bg-background min-h-screen">
        <HorizontalNav />
        <div className="flex">
          <VerticalNav />
          <main className="flex-1">
            <ScrollArea className="mx-auto h-[600px] w-[96%] p-6 lg:p-8">
              {children}
            </ScrollArea>
          </main>
        </div>
      </div>
    </>
  );
}
