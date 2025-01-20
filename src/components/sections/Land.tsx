"use client";

import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { SparklesCore } from "../ui/sparkles";

function Land() {
  return (
    <section className="relative flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center p-5 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center justify-center gap-10 lg:items-start">
        <div className={`px-14 ${buttonVariants({ variant: "default" })}`}>
          #1 Reselling Community
        </div>
        <h1 className="max-w-[550px] text-center text-4xl md:text-6xl lg:text-8xl">
          Lorem ipsum dolor sit amet
        </h1>
      </div>

      <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center overflow-hidden rounded-full p-10">
        <div className="relative aspect-square w-full max-w-[500px]">
          <Image alt="" fill src={"/assets/logo.svg"} />
        </div>
        <div className="absolute inset-0 h-full w-full">
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
        </div>
      </div>
      <div className="absolute left-1/2 top-[85%] -z-50 flex h-screen w-[calc(100vw-100px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="-z-[60] hidden aspect-square w-screen rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_75%)] blur-3xl md:block" />
      </div>
    </section>
  );
}

export default Land;
