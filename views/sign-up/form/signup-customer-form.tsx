"use client";

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shared/form-input";
import { formCustommerSchema } from "./validation";
import { Typography } from "@/components/shared/typography";

type FormValues = z.infer<typeof formCustommerSchema>;

const SignupCustomerForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formCustommerSchema),
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

        <Typography as="p" variant="sm" className="mt-6 text-center">
          Already have a blanja account?{" "}
          <Link href="/sign-in">
            <Typography as="span" variant="sm" className="text-primary">
              Login
            </Typography>
          </Link>
        </Typography>
      </form>
    </Form>
  );
};

export default SignupCustomerForm;
