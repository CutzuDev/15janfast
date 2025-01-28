import Image from "next/image";
import { Button } from "../ui/button";
import Links from "../ui/links";
import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-40 mt-5 flex h-20 w-full items-center justify-center px-5 text-white lg:mt-10">
      <div className="gap relative flex h-full w-full max-w-[1024px] items-center justify-between rounded-full border border-white/10 bg-white/10 p-2.5 pl-5 backdrop-blur-3xl">
        <div className="flex h-full items-center justify-center">
          <div className="aspect-square max-h-full p-2.5">
            <Image
              alt=""
              width={124}
              height={124}
              className="h-full w-full"
              src={"/assets/logo_gold.webp"}
            />
          </div>
          <span>Cashout Kings</span>
        </div>
        <Links />

        <div className="hidden h-full items-center justify-center gap-5 lg:flex">
          <Link href={""}>
            <svg
              className="aspect-square w-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Button
            className="hidden h-full px-12 pr-10 text-white lg:inline"
            variant={"gold"}
            rounded={"full"}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
