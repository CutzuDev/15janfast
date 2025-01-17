import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

function page() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-10 p-5 text-white">
      <div className={buttonVariants({ variant: "default" })}>
        All Around The US
      </div>
      <h2 className="text-6xl font-bold">Locations</h2>
      <p className="max-w-[900px] text-center text-white/80">
        We got locations all around the United States. Here are some of our key
        locations: New York, NY; Los Angeles, CA; Chicago, IL; Houston, TX;
        Phoenix, AZ.
      </p>
      <Image alt="" width={1024} height={1024} src={"/assets/country.webp"} />
    </main>
  );
}

export default page;
