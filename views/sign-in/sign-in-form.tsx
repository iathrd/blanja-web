"use client";
import { Input } from "@/components/shared/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log("error", form.formState.errors);

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <p className="text-secondary-1 text-primary text-right my-6">
        Forgot password?
      </p>
      <Button
        size="lg"
        type="submit"
        onClick={form.handleSubmit(onSubmit)}
        className="w-full rounded-2xl"
      >
        Login
      </Button>
      <p className="text-secondary-1 text-heading text-center mt-8">
        {`Don't have a Blanja account? `}{" "}
        <span className="text-primary">Register</span>
      </p>
    </Form>
  );
};

export default SigninForm;
