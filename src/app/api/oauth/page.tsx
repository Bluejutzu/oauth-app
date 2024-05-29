"use client";
import React from "react";
import { redirect, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  if (!code) {
    throw new Error("Authorization code is required")
  }

  const res = fetch("http://localhost:3000/api/oauth/fetchToken", {
    method: "POST",
    body: new URLSearchParams({
      code: code!
    }).toString(),
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  });
  
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default page;
