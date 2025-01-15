import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white/80 flex justify-center items-center flex-col">
      <section className="min-h-screen p-5 relative flex flex-col lg:flex-row justify-center lg:justify-between w-full max-w-[1400px] items-center">
        <div className="flex justify-center items-center lg:items-start flex-col gap-10">
          <Button className="px-14">#1 Reselling Community</Button>
          <h1 className="text-4xl md:text-6xl lg:text-8xl max-w-[500px]">
            Lorem ipsum dolor sit amet
          </h1>
        </div>
        <div className=" justify-center items-center flex p-10 w-full max-w-[600px] rounded-full aspect-square relative overflow-hidden">
          <div className="relative max-w-[500px] w-full aspect-square">
            <Image alt="" fill src={"/assets/logo.svg"} />
          </div>
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="absolute -z-50 h-screen  w-screen flex justify-center items-center top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[1440px] -z-[60] blur-3xl opacity-25 bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0.05)_75%)] aspect-square rounded-full" />
        </div>
      </section>
      <section className="min-h-screen relative flex justify-between w-full max-w-[1400px] items-center">
        <div>
          <span>Already a customer?</span>
          <Button>
            <div>
              <span>Login</span>
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
}
