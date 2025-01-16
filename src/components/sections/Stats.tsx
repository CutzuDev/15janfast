import Image from "next/image";

type statsProps = {
  number: number;
  text: string;
  type: "dollar" | "normal";
};
const statsData: statsProps[] = [
  { number: 1000, text: "Revenue", type: "dollar" },
  { number: 2000, text: "Money", type: "dollar" },
  { number: 75, text: "Products", type: "normal" },
  { number: 200, text: "Orders", type: "normal" },
];

type cardProps = {
  logo: string; // URL or path to the logo image
  title: string;
  subtitle: string;
  items: string[];
};

const cardData: cardProps[] = [
  {
    logo: "/assets/wise.png",
    title: "ACH",
    subtitle: "WISE",
    items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    logo: "/assets/paypal.png",
    title: "Covered Fees",
    subtitle: "PayPal",
    items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];

function Stats() {
  return (
    <section className="relative my-40 flex w-full max-w-[1024px] flex-col items-center justify-center gap-10 overflow-hidden rounded-lg bg-black/50 bg-center p-5 py-10 bg-grid-white/[0.2]">
      <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(252,232,173,1)_25%,rgba(252,232,173,0)_50%)] opacity-15 blur-3xl"></div>

      <div className="flex items-center justify-center gap-10">
        {statsData.map((e, i) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-2.5"
              key={i}
            >
              <span className="text-3xl font-semibold text-white">
                {e.type === "dollar" && "$"}
                {e.number}
              </span>
              <span className="text-2xl opacity-85">{e.text}</span>
            </div>
          );
        })}
      </div>
      <div className="flex w-full items-stretch justify-center gap-10">
        {cardData.map((e, i) => {
          return (
            <div
              key={i}
              className="flex aspect-[10/12] w-full max-w-[250px] flex-col items-start justify-start rounded-xl border border-white/25 bg-black/90 p-5 px-10 backdrop-blur-3xl"
            >
              <Image
                alt=""
                width={124}
                height={124}
                className="aspect-square max-w-20 object-contain"
                src={e.logo}
              />
              <div className="flex flex-col items-start justify-center text-xl font-semibold text-white">
                <span>{e.title}</span>
                <span>{e.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,0,0,0.01)_50%,rgba(0,0,0,1)_100%)]"></div>
    </section>
  );
}

export default Stats;
