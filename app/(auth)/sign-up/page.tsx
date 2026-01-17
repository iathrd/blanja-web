"use client";

import { TabsGroup } from "@/components/shared/tab-group";
import { Typography } from "@/components/shared/typography";
import SignupCustomerForm from "@/views/sign-up/form/signup-customer-form";
import SignupSellerForm from "@/views/sign-up/form/signup-seller-form";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image src="/images/logo.svg" alt="logo" width={135} height={50} />
      <Typography as="h6" variant="subheading" className="font-bold">
        Please sign up with your account
      </Typography>
      <TabsGroup
        className="min-w-96 justify-center"
        listClassName="self-center"
        tabs={[
          {
            label: "Customer",
            value: "customer",
            content: <SignupCustomerForm />,
          },
          { label: "Seller", value: "seller", content: <SignupSellerForm /> },
        ]}
      />
    </div>
  );
};

export default Page;
