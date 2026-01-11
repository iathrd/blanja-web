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
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const SignupCustomerForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
        <FormInput control={form.control} name="name" placeholder="Name" />

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

        <Button size="lg" type="submit" className="w-full rounded-3xl mt-6">
          Register
        </Button>

        <p className="text-secondary-1 text-heading text-center mt-6">
          Already have a Tokopedia account?{" "}
          <Link href="/sign-in">
            <span className="text-primary">Login</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupCustomerForm;
