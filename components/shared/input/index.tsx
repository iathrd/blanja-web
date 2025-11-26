"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import React from "react";

interface FormInputGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  rightButton?: React.ReactNode;

  className?: string;
}

export function Input({
  leftAddon,
  rightAddon,
  rightButton,
  className,
  ...inputProps // ← all HTML input props are now available
}: FormInputGroupProps) {
  return (
    <InputGroup
      className={cn(
        "has-[[data-slot=input-group-control]:focus-visible]:ring-[1px]! has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50! border-tertiary-100/50 border-2  py-5   outline-2 rounded-xs min-h-10",
        className
      )}
    >
      {leftAddon && <InputGroupAddon>{leftAddon}</InputGroupAddon>}

      <InputGroupInput
        className="placeholder:text-secondary-1! placeholder:font-semibold! placeholder:text-tertiary-100/70"
        {...inputProps}
      />

      {rightAddon && (
        <InputGroupAddon align="inline-end">{rightAddon}</InputGroupAddon>
      )}

      {rightButton && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton>{rightButton}</InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
