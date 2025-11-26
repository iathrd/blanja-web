"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface TabConfig {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsGroupProps {
  tabs: TabConfig[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
}

export function TabsGroup({
  tabs,
  defaultValue,
  className,
  listClassName,
}: TabsGroupProps) {
  const initialTab = defaultValue ?? tabs[0]?.value;

  return (
    <Tabs defaultValue={initialTab} className={className}>
      <TabsList className={cn("p-0 rounded-sm min-h-12 mb-8", listClassName)}>
        {tabs.map((tab, idx) => (
          <TabsTrigger
            className={cn(
              idx === 0 && "rounded-r-none!",
              tabs.length - 1 === idx && "rounded-l-none!",
              "min-w-32 rounded-sm text-secondary data-[state=active]:bg-primary data-[state=inactive]:bg-white data-[state=inactive]:text-tertiary-100 data-[state=inactive]:border-tertiary-100"
            )}
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
