/** @format */

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import "dotenv";

const page = () => {
  const DISCORD_CLIENT_ENDPOINT = process.env.DISCORD_AUTHORIZE_ENDPOINT;
  return (
    <div className="flex h-screen justify-center items-center">
      <Link
        href={`${DISCORD_CLIENT_ENDPOINT}`}
        className={buttonVariants({
          size: "lg",
          variant: "default",
          className: "text-xl font-semibold",
        })}
      >
        Identify yourself via OAuth
      </Link>
    </div>
  );
};

export default page;
