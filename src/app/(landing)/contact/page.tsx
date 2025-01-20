import { Button, buttonVariants } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

function page() {
  return (
    // <main className="flex min-h-[calc(100vh-5rem)] w-full items-center justify-center text-white/80">
    //   <div className="flex w-full items-center justify-center gap-10 p-5">
    //     <div className="mb-10 flex w-4/5 flex-col items-center justify-center gap-5 md:w-1/4 md:items-start md:justify-start">
    //       <Button>Let's get in touch</Button>
    //       <h2 className="text-6xl font-bold text-white lg:text-4xl">Contact</h2>
    //       <p className="mt-5">
    //         Have a project in mind? Looking to partner or work together? Reach
    //         out through the form below and I'll get back to you in the next
    //         24-48 hours.
    //       </p>
    //       <div className="flex w-full items-center justify-between font-semibold text-white">
    //         <span>info@mail.com</span>
    //         <span>+123456789</span>
    //       </div>
    //     </div>
    //     <div className="hidden aspect-square w-1/3 items-center justify-center bg-neutral-600 md:flex"></div>
    //   </div>
    // </main>
    <main className="flex min-h-[calc(100vh-5rem)] w-full max-w-[100vw] items-center justify-center overflow-hidden p-5 px-20 text-white">
      <div className="flex w-full max-w-[50%] flex-col items-center justify-center gap-10">
        <div className={buttonVariants({ variant: "default" })}>
          Let's get in touch
        </div>
        <h2 className="text-6xl font-bold">Contact</h2>
        <p className="max-w-[500px] text-center text-white/80">
          Have a project in mind? Looking to partner or work together? Reach out
          through the form below and I'll get back to you in the next 24-48
          hours.
        </p>
        <div className="flex w-full max-w-[500px] items-center justify-between gap-5">
          <div className="flex items-center justify-start gap-5">
            <div className="rounded-lg bg-white/5 p-3">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email us at</p>
              <a
                href="mailto:info@mail.com"
                className="text-white transition-colors"
              >
                info@mail.com
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <div className="rounded-lg bg-white/5 p-3">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call us at</p>
              <a href="tel:+123456789" className="text-white transition-colors">
                +123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-[50%]">
        <Image
          src={"/assets/tweet1.webp"}
          className="absolute left-1/2 top-1/2 h-[512px] -translate-x-[65%] -translate-y-1/2 -rotate-[15deg] object-contain"
          alt=""
          width={2048}
          height={2048}
        />
        <Image
          src={"/assets/tweet2.webp"}
          className="absolute left-1/2 top-1/2 h-[256px] -translate-x-[40%] -translate-y-[40%] rotate-12 object-contain"
          alt=""
          width={2048}
          height={2048}
        />
      </div>
      {/* <div className="flex w-full max-w-[900px] flex-col items-stretch justify-between gap-10 rounded-xl border border-white/20 bg-white/5 p-5 md:flex-row md:p-10">
        <div className="flex flex-col items-stretch justify-center gap-5">
          <div className="flex items-center justify-start gap-5">
            <div className="rounded-lg bg-white/5 p-3">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email us at</p>
              <a
                href="mailto:info@mail.com"
                className="text-white transition-colors"
              >
                info@mail.com
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <div className="rounded-lg bg-white/5 p-3">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call us at</p>
              <a href="tel:+123456789" className="text-white transition-colors">
                +123 456 789
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-between gap-5">
          <Button size={"lg"} className="px-20" variant={"white"}>
            Send us a call
          </Button>
          <Button size={"lg"} className="px-20" variant={"gold"}>
            Send us a message
          </Button>
        </div>
      </div> */}
    </main>
  );
}

export default page;
