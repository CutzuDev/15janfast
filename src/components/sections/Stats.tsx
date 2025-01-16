type elementProps = {
  number: number;
  text: string;
  type: "dollar" | "normal";
};
const statsData: elementProps[] = [
  { number: 1000, text: "Revenue", type: "dollar" },
  { number: 2000, text: "Money", type: "dollar" },
  { number: 75, text: "Products", type: "normal" },
  { number: 200, text: "Orders", type: "normal" },
];

function Stats() {
  return (
    <section className="flex w-full max-w-[1024px] flex-col items-center justify-center bg-center p-5 bg-grid-white/[0.2]">
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
    </section>
  );
}

export default Stats;
