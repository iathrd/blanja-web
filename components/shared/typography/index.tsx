import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "xs"
  | "sm"
  | "md"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "body"
  | "muted"
  | "secondary"
  | "tertiary"
  | "subheading"
  | "heading-1"
  | "heading-2"
  | "heading-3";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
}

const variantClasses: Record<TypographyVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",

  body: "text-body",
  muted: "text-muted",
  secondary: "text-secondary-1",
  tertiary: "text-tertiary",
  subheading: "text-subheading",

  "heading-1": "text-heading-1",
  "heading-2": "text-heading-2",
  "heading-3": "text-heading-3",
};

export function Typography({
  as: Component = "p",
  variant = "body",
  className,
  ...props
}: TypographyProps) {
  return (
    <Component className={cn(variantClasses[variant], className)} {...props} />
  );
}
