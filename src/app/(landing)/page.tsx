import AlreadyClient from "@/components/sections/AlreadyClient";
import Cards from "@/components/sections/Cards";
import Deals from "@/components/sections/Deals";
import Land from "@/components/sections/Land";
import Rename from "@/components/sections/Rename";
import Stats from "@/components/sections/Stats";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden text-white/80">
      <div className="absolute left-1/2 top-0 -z-50 flex h-screen w-[calc(100vw-100px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center border-none">
        <div className="-z-[60] hidden aspect-square w-screen rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_75%)] blur-3xl md:block" />
      </div>
      <div className="absolute left-0 top-0 flex aspect-square h-[300px] w-[300px] items-center justify-center">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute right-0 top-0 flex aspect-square h-[300px] w-[300px] items-center justify-center">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Land />
      {/* <AlreadyClient /> */}
      <Cards />
      <Stats />
      <Deals />
      <Rename />
    </div>
  );
}
