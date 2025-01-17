import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

function Nav() {
  const array: {
    text: string;
    path: string;
  }[] = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Location", path: "/location" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <nav className="absolute left-0 top-0 flex h-20 w-full items-center justify-center text-white">
      <div className="gap flex w-full max-w-[1600px] items-center justify-between px-5 md:p-5">
        <div className="relative flex aspect-square w-14 items-center justify-center">
          <Image alt="" fill src={"/assets/logo_gold.webp"} />
        </div>
        <Links array={array} />
        <div className="gpa-4 flex items-center justify-center">
          <Button className="px-12 pr-10" variant={"default"}>
            <div className="flex items-center justify-center gap-1">
              <span>Login</span>
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function Links({ array }: { array: { text: string; path: string }[] }) {
  return (
    <ul className="hidden items-center justify-center gap-5 lg:flex">
      {array.map((e, i) => {
        return (
          <li key={i} className="transition-all hover:underline">
            <Link href={e.path}>{e.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
