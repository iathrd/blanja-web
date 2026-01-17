"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shared/form-input";
import { Typography } from "@/components/shared/typography";

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

        <Typography
          as="p"
          variant="sm"
          className="mt-6 text-right cursor-pointer text-primary my-4"
        >
          Forgot password?
        </Typography>

        <Button size="lg" type="submit" className="w-full rounded-2xl">
          Login
        </Button>

        <Typography as="p" variant="sm" className="mt-6 text-center">
          Don&apos;t have a blanja account?{" "}
          <Link href="/sign-up">
            <Typography as="span" variant="sm" className="text-primary">
              Register
            </Typography>
          </Link>
        </Typography>
      </form>
    </Form>
  );
};

export default SigninForm;
