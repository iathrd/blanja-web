"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shared/form-input";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const SigninForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <FormInput
          control={form.control}
          name="email"
          placeholder="Email"
          type="email"
        />

        <FormInput
          control={form.control}
          name="password"
          placeholder="Password"
          type="password"
        />

        <p className="text-secondary-1 text-primary text-right my-6 cursor-pointer">
          Forgot password?
        </p>

        <Button size="lg" type="submit" className="w-full rounded-2xl">
          Login
        </Button>

        <p className="text-secondary-1 text-heading text-center mt-6">
          Don&apos;t have a Blanja account?{" "}
          <Link href="/sign-up">
            <span className="text-primary">Register</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SigninForm;
