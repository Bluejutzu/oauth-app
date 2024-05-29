"use client";

import { buttonVariants } from "@/components/ui/button";
import { MotionProps, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const page = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" items-center ">
        <div
          className={buttonVariants({
            variant: "default",
            className: "h-[500px] w-[450px]",
          })}
        >
          <div
            className={buttonVariants({
              variant: "destructive",
              className: "h-[480px] w-[430px] flex",
            })}
          >
            <div className="mx-auto grid w-full h-full grid-flow-dense grid-cols-12 grid-rows-12 gap-4">
              <HeaderBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 flex justify-center items-center ",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-1 hover:bg-near-gradient transition">wadawd</Block>
);

export default page;
