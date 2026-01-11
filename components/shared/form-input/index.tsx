"use client";

import * as React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import type { Control, FieldValues, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  rightButton?: React.ReactNode;
  wrapperClassName?: string;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  leftAddon,
  rightAddon,
  rightButton,
  wrapperClassName,
  className,
  ...inputProps
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-0">
          <FormControl>
            <InputGroup
              className={cn(
                `
                  border-2 border-tertiary-100/50
                  rounded-xs
                  min-h-10
                  transition-colors
                  focus-within:ring-1
                  focus-within:ring-ring/50
                  focus-within:border-ring
                `,
                wrapperClassName
              )}
            >
              {leftAddon && <InputGroupAddon>{leftAddon}</InputGroupAddon>}

              <InputGroupInput
                {...field}
                {...inputProps}
                className={cn(
                  "placeholder:text-secondary-1 placeholder:font-semibold placeholder:text-tertiary-100/70",
                  className
                )}
              />

              {rightAddon && (
                <InputGroupAddon align="inline-end">
                  {rightAddon}
                </InputGroupAddon>
              )}

              {rightButton && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>{rightButton}</InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>
          </FormControl>
          <FormMessage className="text-xs ml-1" />
        </FormItem>
      )}
    />
  );
}
