import { Button, buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function page() {
  const faqs = [
    {
      question: "Lorem title 0",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cum eos ducimus veritatis.",
    },
    {
      question: "Lorem title 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cum eos ducimus veritatis.",
    },
    {
      question: "Lorem title 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cum eos ducimus veritatis.",
    },
    {
      question: "Lorem title 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cum eos ducimus veritatis.",
    },
    {
      question: "Lorem title 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cum eos ducimus veritatis.",
    },
  ];

  return (
    <main className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-10 p-5 text-white">
      <div className={buttonVariants({ variant: "default" })}>
        Got a question?
      </div>
      <h2 className="w-full text-center text-4xl font-bold md:text-6xl">
        Frequently Asked Questions
      </h2>

      {/* <Accordion type="single" className="w-full max-w-[900px]" collapsible>
        {new Array(5).fill(0).map((e, i) => {
          return (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>Lorem title {i}</AccordionTrigger>
              <AccordionContent className="text-white/75">
                Lorem content {i}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion> */}

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[900px] space-y-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-white/25 px-0"
          >
            <AccordionTrigger className="py-6 text-left hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

export default page;
