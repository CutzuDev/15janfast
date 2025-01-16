import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

function AlreadyClient() {
  return (
    <section className="relative flex w-full max-w-[1400px] items-center justify-center py-5 lg:py-40">
      <div className="flex w-full max-w-[1024px] items-center justify-between rounded-3xl border border-neutral-500/50 px-14 py-14">
        <span className="text-4xl font-bold">Already a customer?</span>
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
