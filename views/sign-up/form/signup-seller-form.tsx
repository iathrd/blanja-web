"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shared/form-input";
import { formSellerSchema } from "./validation";

type FormValues = z.infer<typeof formSellerSchema>;

const SignupSellerForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSellerSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      storeName: "",
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
          name="phoneNumber"
          placeholder="Phone number"
          inputMode="numeric"
        />

        <FormInput
          control={form.control}
          name="storeName"
          placeholder="Store name"
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

export default SignupSellerForm;
