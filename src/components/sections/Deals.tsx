import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface dealProps {
  title: string;
  imageUrl: string;
  description: string;
  timestamp: string;
  link: string;
}

const dealsData: dealProps[] = [
  {
    title: "Play Station 5",
    imageUrl: "/assets/paypal.webp",
    description: "Lorem ipsum dolor sit amet amet inimium solor amerino",
    timestamp: "4 days ago",
    link: "https://paypal.com/integration",
  },
  {
    title: "Play Station 5",
    imageUrl: "/assets/paypal.webp",
    description: "Lorem ipsum dolor sit amet amet inimium solor amerino",
    timestamp: "4 days ago",
    link: "https://paypal.com/integration",
  },
  {
    title: "Play Station 5",
    imageUrl: "/assets/paypal.webp",
    description: "Lorem ipsum dolor sit amet amet inimium solor amerino",
    timestamp: "4 days ago",
    link: "https://paypal.com/integration",
  },
  {
    title: "Play Station 5",
    imageUrl: "/assets/paypal.webp",
    description: "Lorem ipsum dolor sit amet amet inimium solor amerino",
    timestamp: "4 days ago",
    link: "https://paypal.com/integration",
  },
];

function Deals() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-5 p-5 lg:py-20">
      <h2 className="text-4xl font-semibold">Future Deals</h2>

      <div className="flex w-full max-w-[1800px] flex-wrap items-center justify-center gap-5">
        {dealsData.map((e, i) => {
          return (
            <Card key={i}>
              <div className="p-3">
                <Image
                  alt=""
                  width={512}
                  height={512}
                  className="aspect-video max-w-[300px] overflow-hidden rounded-md bg-gray-500"
                  src={e.imageUrl}
                />
              </div>
              <CardHeader className="mt-2.5">
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardFooter className="mt-2.5 flex items-center justify-between">
                <span>4 days ago</span>
                <Button size={"sm"}>Open</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Deals;
