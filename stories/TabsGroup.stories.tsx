import { TabConfig, TabsGroup } from "@/components/shared/tab-group";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof TabsGroup> = {
  title: "Components/TabsGroup",
  component: TabsGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TabsGroup>;

const baseTabs: TabConfig[] = [
  {
    value: "overview",
    label: "Overview",
    content: (
      <div className="p-4 text-sm">This is the Overview tab content.</div>
    ),
  },
  {
    value: "details",
    label: "Details",
    content: (
      <div className="p-4 text-sm">This is the Details tab content.</div>
    ),
  },
  {
    value: "settings",
    label: "Settings",
    content: (
      <div className="p-4 text-sm">This is the Settings tab content.</div>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: baseTabs,
  },
};

export const WithDefaultValue: Story = {
  args: {
    tabs: baseTabs,
    defaultValue: "details",
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      ...baseTabs.slice(0, 2),
      {
        value: "settings",
        label: "Settings",
        disabled: true,
        content: (
          <div className="p-4 text-sm">
            Disabled tab content (should not be accessible).
          </div>
        ),
      },
    ],
  },
};

export const CustomStyles: Story = {
  args: {
    tabs: baseTabs,
    className: "w-[500px]",
    listClassName: "bg-gray-100 rounded-md",
  },
};
