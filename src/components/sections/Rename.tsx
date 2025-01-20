import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";

function Rename() {
  return (
    <section className="flex w-full items-center justify-center p-5 lg:py-40">
      <div className="relative flex w-full max-w-[1024px] flex-col items-center justify-center gap-5 overflow-hidden rounded-lg border border-white/25 py-20">
        <Image
          className="absolute bottom-[2rem] left-[2rem] hidden -rotate-[15deg] lg:block"
          alt=""
          src={"/assets/box.webp"}
          width={128}
          height={128}
        />
        <Image
          className="absolute bottom-1/2 right-[2rem] hidden translate-y-1/2 -rotate-[15deg] lg:block"
          alt=""
          src={"/assets/ps5.webp"}
          width={128}
          height={128}
        />
        <Image
          className="absolute left-[2rem] top-[3rem] hidden rotate-[20deg] lg:block"
          alt=""
          src={"/assets/nintendo.webp"}
          width={128}
          height={128}
        />
        <span className={buttonVariants({ variant: "default" })}>
          Text goes here
        </span>
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-4xl font-semibold md:text-6xl">
            Title goes here
          </h2>
          <p className="text-xl">Paragraph goes here</p>
        </div>
        <Button className="px-14" size={"lg"} variant={"gold"}>
          Sign up
        </Button>
        <div
          style={{
            transform: `translate(-40%,-60%) skewX(-48deg) skewY(18deg) rotate(7deg) translateZ(0) scale(1.75) scaleY(0.8) scaleX(1.7)`,
          }}
          className="absolute left-1/2 top-1/2 -z-10 flex h-[150%] w-full -translate-x-1/2 -translate-y-1/2 bg-center p-4 bg-grid-white/5"
        ></div>
        <div className="absolute left-1/2 top-[75%] h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(252,232,173,1)_25%,rgba(252,232,173,0)_50%)] opacity-15 blur-3xl"></div>
      </div>
    </section>
  );
}

export default Rename;
