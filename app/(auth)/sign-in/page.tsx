"use client";

import { TabsGroup } from "@/components/shared/tab-group";
import SigninForm from "@/views/sign-in/sign-in-form";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image src="/images/logo.svg" alt="logo" width={135} height={50} />
      <h6 className="text-subheading">Please login with your account</h6>
      <TabsGroup
        className="min-w-96 justify-center"
        listClassName="self-center"
        tabs={[
          {
            label: "Customer",
            value: "customer",
            content: <SigninForm />,
          },
          { label: "Seller", value: "seller", content: <SigninForm /> },
        ]}
      />
    </div>
  );
};

export default Page;
