import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

function Nav() {
  const array: string[] = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="absolute left-0 top-0 flex h-20 w-full items-center justify-center text-white/80">
      <div className="gap flex w-full max-w-[1600px] items-center justify-between px-5 md:p-5">
        <div className="relative flex aspect-square w-14 items-center justify-center">
          <Image alt="" fill src={"/assets/logo_gold.png"} />
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

function Links({ array }: { array: string[] }) {
  return (
    <ul className="hidden items-center justify-center gap-5 text-sm lg:flex">
      {array.map((i, e) => {
        return <li key={e}>{i}</li>;
      })}
    </ul>
  );
}

export default Nav;
