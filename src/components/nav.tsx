import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

function Nav() {
  const array: string[] = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="flex h-20 justify-center absolute w-full top-0 left-0 text-white/80 items-center">
      <div className=" max-w-[1600px] w-full flex justify-between items-center gap px-5 md:p-5">
        <div className="flex relative justify-center items-center w-14 aspect-square">
          <Image alt="" fill src={"/assets/logo_gold.png"} />
        </div>
        <Links array={array} />
        <div className="flex justify-center items-center gpa-4">
          <Button className="px-12 pr-10" variant={"default"}>
            <div className="flex justify-center items-center gap-1">
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
    <ul className="lg:flex hidden justify-center items-center text-sm gap-5">
      {array.map((i, e) => {
        return <li key={e}>{i}</li>;
      })}
    </ul>
  );
}

export default Nav;
