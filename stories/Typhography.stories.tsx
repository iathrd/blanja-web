import { Typography } from "@/components/shared/typography";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body",
  },
  argTypes: {
    as: {
      control: "text",
      description: "HTML element to render (p, span, h1, etc.)",
    },
    variant: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "body",
        "muted",
        "secondary",
        "tertiary",
        "subheading",
        "heading-1",
        "heading-2",
        "heading-3",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body",
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography as="h1" variant="heading-1">
        Heading 1 *34px
      </Typography>
      <Typography as="h2" variant="heading-2">
        Heading 2 *28px
      </Typography>
      <Typography as="h3" variant="heading-3">
        Heading 3 *20px
      </Typography>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="xs">Extra Small *11px</Typography>
      <Typography variant="sm">Small *12px</Typography>
      <Typography variant="md">Medium *14px</Typography>
      <Typography variant="xl">Extra Large *16px</Typography>
      <Typography variant="2xl">2XL *20px</Typography>
      <Typography variant="3xl">3XL *24px</Typography>
      <Typography variant="4xl">4XL *32px</Typography>
      <Typography variant="5xl">5XL *40px</Typography>
      <Typography variant="6xl">6XL *48px</Typography>
    </div>
  ),
};

export const SemanticVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="body">Body text *16px</Typography>
      <Typography variant="subheading">Subheading *18px</Typography>
      <Typography variant="muted">Muted text *11px</Typography>
      <Typography variant="secondary">Secondary text *14px</Typography>
      <Typography variant="tertiary">Tertiary text *12px</Typography>
    </div>
  ),
};
