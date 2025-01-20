import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon, Menu } from "lucide-react";
import Link from "next/link";
import Links from "./ui/links";

function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-40 flex h-20 w-full items-center justify-center text-white">
      <div className="gap relative flex h-full w-full max-w-[1600px] items-center justify-between px-5 md:p-5">
        <div className="relative flex aspect-square w-14 items-center justify-center">
          <Image alt="" fill src={"/assets/logo_gold.webp"} />
        </div>
        <Links />
        <Button className="hidden px-12 pr-10 lg:inline" variant={"default"}>
          <div className="flex items-center justify-center gap-1">
            <span>Login</span>
            <ArrowRightIcon />
          </div>
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
