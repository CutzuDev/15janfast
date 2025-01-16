import { BoxIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

type ElementProps = {
  direction: "left" | "right";
  title: string; // Main title of the element
  description: string; // Main description text
  notification: string; // URL or path to the icon
  features: {
    title: string; // Title for each feature list item
    description: string; // Description for each feature
    icon: React.ReactNode; // React element for each feature's icon
  }[];
};

const elements: ElementProps[] = [
  {
    direction: "left",
    notification: "Notification text for Element One", // Added notification text
    title: "Element One",
    description:
      "This is a brief description of Element One, highlighting its key features and benefits.",
    features: [
      {
        title: "Feature A",
        description: "Description for feature A.",
        icon: <BoxIcon />, // Using BoxIcon component
      },
      {
        title: "Feature B",
        description: "Description for feature B.",
        icon: <BoxIcon />, // Using BoxIcon component
      },
    ],
  },
  {
    direction: "right",
    notification: "Notification text for Element Two", // Added notification text
    title: "Element Two",
    description:
      "This is the description for element two, providing an overview of its main attributes and advantages.",
    features: [
      {
        title: "Feature C",
        description: "Description for feature C.",
        icon: <BoxIcon />, // Using BoxIcon component
      },
      {
        title: "Feature D",
        description: "Description for feature D.",
        icon: <BoxIcon />, // Using BoxIcon component
      },
    ],
  },
];

function Cards() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 p-5 md:gap-10">
      {elements.map((e, i) => {
        return <CardElement key={i} {...e} />;
      })}
    </section>
  );
}

function CardElement(element: ElementProps) {
  return (
    <div
      className={`flex w-full max-w-[1024px] flex-col items-stretch justify-center gap-10 rounded-lg bg-neutral-800 p-10 ${
        element.direction === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative hidden aspect-square w-full max-w-96 items-center justify-center divide-fuchsia-50 overflow-hidden rounded-lg bg-neutral-950/50 bg-center p-5 bg-grid-white/[0.2] md:flex md:p-10">
        <div className="absolute left-1/2 top-1/2 -z-30 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,0,0,0.01)_50%,rgba(0,0,0,1)_100%)]"></div>
        <div className="relative aspect-square w-full max-w-[200px]">
          <Image
            alt=""
            src={"/assets/user_icon.png"}
            width={256}
            height={256}
            className="h-full w-full"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(252,232,173,1)_25%,rgba(252,232,173,0)_50%)] opacity-15 blur-3xl"></div>
      </div>
      <div className="flex flex-col items-start justify-start gap-5">
        <Button className="px-10">{element.notification}</Button>
        <h2 className="text-4xl font-semibold">{element.title}</h2>
        <p className="text-xl opacity-80">{element.description}</p>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-5">
          {element.features.map((feature, idx) => {
            return (
              <div
                key={idx}
                className="flex w-full flex-col items-center justify-center"
              >
                <div className="flex w-full items-start justify-center gap-5">
                  {feature.icon} {/* Displaying feature icon */}
                  <div className="flex w-full flex-col items-start justify-center">
                    <h3 className="mb-1 font-semibold">{feature.title}:</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
                {+idx != element.features.length - 1 && (
                  <div className="mt-5 h-px w-full bg-white/25" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
