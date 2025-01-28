import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

function AlreadyClient() {
  return (
    <section className="relative flex w-full max-w-[1400px] items-center justify-center p-5 pt-40">
      <div className="flex w-full max-w-[1024px] flex-wrap items-center justify-center gap-5 rounded-3xl border border-neutral-500/50 p-5 md:justify-between md:p-14">
        <span className="text-center text-4xl font-bold">
          Already a customer?
        </span>
        <Button variant={"gold"}>
          <div className="flex items-center justify-center gap-2 px-12 pr-10">
            <span>Login</span>
            <ArrowRightIcon />
          </div>
        </Button>
      </div>
    </section>
  );
}

export default AlreadyClient;
