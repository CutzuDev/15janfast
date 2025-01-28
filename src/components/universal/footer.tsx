import Image from "next/image";
import Link from "next/link";
import TextGradient from "../ui/gradienttext";
import { Button } from "../ui/button";

function Footer() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-full items-center justify-center">
          <div className="aspect-square w-16 p-2.5">
            <Image
              alt=""
              width={124}
              height={124}
              className="h-full w-full"
              src={"/assets/logo_gold.webp"}
            />
          </div>
          <TextGradient sizing={"title"}>Cashout Kings</TextGradient>
        </div>
        <span className="text-xl font-semibold">Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <Button
          className="mt-10 h-14 px-14 text-xl"
          rounded={"full"}
          variant={"gold"}
          size={"lg"}
        >
          Get Started
        </Button>
      </div>
      <div className="h-px w-full bg-amber-300/10" />
      <div className="relative mb-10 flex h-20 w-full items-center justify-between px-5 text-white/75">
        <span>©CK 2025, All rights reserved.</span>
        <ul className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-5">
          <li className="flex items-center justify-center rounded-full bg-neutral-400 p-2.5">
            <Link href={""}>
              <svg className="aspect-square w-6 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </li>
          <li className="flex items-center justify-center rounded-full bg-neutral-400 p-2.5">
            <Link href={""}>
              <svg className="aspect-square w-6 fill-white" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                />
              </svg>
            </Link>
          </li>
          <li className="flex items-center justify-center rounded-full bg-neutral-400 p-2.5">
            <Link href={""}>
              <svg
                className="aspect-square w-6 fill-white"
                viewBox="0 0 169.063 169.063"
              >
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.68-14.387,32.067-32.067,32.067H47.067c-17.68,0-32.067-14.387-32.067-32.067V47.067c0-17.68,14.387-32.067,32.067-32.067h74.929c17.68,0,32.067,14.387,32.067,32.067V122.407z M84.532,42.532c-23.07,0-41.8,18.73-41.8,41.8s18.73,41.8,41.8,41.8c23.07,0,41.8-18.73,41.8-41.8S107.602,42.532,84.532,42.532z M84.532,108.532c-13.23,0-24.8-11.57-24.8-24.8s11.57-24.8,24.8-24.8c13.23,0,24.8,11.57,24.8,24.8S97.762,108.532,84.532,108.532z M122.406,42.532c-3.68,0-6.67,2.99-6.67,6.67s2.99,6.67,6.67,6.67c3.68,0,6.67-2.99,6.67-6.67S126.086,42.532,122.406,42.532z"
                  />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
        <Link href={""}>Privacy Policy</Link>
      </div>
    </section>
  );
}

export default Footer;
