"use client";

import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { SparklesCore } from "../ui/sparkles";
import TextGradient from "../ui/gradienttext";

import Dashboard from "@/public/assets/dashboardPreview.webp";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function Land() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center p-5">
      <div className="mt-40 flex w-full items-start justify-between 2xl:px-20">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-5 xl:max-w-[60%] xl:items-start">
          <div
            className={`border-white/10 px-14 ${buttonVariants({ variant: "default" })}`}
          >
            #1 Reselling Community
          </div>
          <TextGradient sizing={"opening"}>
            CASHOUT
            <br />
            SIMPLE & FAST
          </TextGradient>
          <p className="max-w-[700px] text-xl text-white/75 lg:pr-10">
            Selling individual items can be slow and frustrating. We've spent
            over a decade building partnerships that enable fast, bulk
            distribution, so you avoid platform fees, shipping headaches, and
            payment delays. Get your earnings quickly and hassle-free.
          </p>
          <Button className="px-14" size={"lg"} variant={"gold"}>
            Log in
          </Button>
          <InfiniteMovingCards direction="right" speed="fast" />
        </div>
        <div className="hidden w-full max-w-[600px] xl:inline 2xl:max-w-[900px]"></div>
      </div>

      <div className="absolute -right-4 top-[60%] hidden w-full max-w-[600px] -translate-y-[calc(50%)] items-center justify-center rounded-2xl border border-white/10 p-2.5 xl:flex 2xl:top-[62.5%] 2xl:max-w-[900px]">
        <Image
          alt=""
          src={Dashboard}
          width={1024}
          height={1024}
          className="h-full w-full rounded-lg object-contain"
        />
      </div>
    </section>
  );
}

export default Land;
