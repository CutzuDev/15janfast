import AlreadyClient from "@/components/sections/AlreadyClient";
import Cards from "@/components/sections/Cards";
import Land from "@/components/sections/Land";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white/80">
      <Land />
      <AlreadyClient />
      <Cards />
      <Stats />
    </div>
  );
}
