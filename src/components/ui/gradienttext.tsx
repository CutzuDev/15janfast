import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const textVariants = cva(
  "from-neutral-400 to-neutral-100 bg-clip-text text-transparent",
  {
    variants: {
      sizing: {
        opening: "font-semibold text-6xl md:text-8xl text-center xl:text-left ",
        title: "font-semibold text-2xl md:text-4xl lg:text-6xl",
      },
      direction: {
        t: "bg-gradient-to-t",
        tr: "bg-gradient-to-tr",
        r: "bg-gradient-to-r",
        br: "bg-gradient-to-br",
        b: "bg-gradient-to-b",
        bl: "bg-gradient-to-bl",
        l: "bg-gradient-to-l",
        tl: "bg-gradient-to-tl",
      },
    },
    defaultVariants: {
      direction: "l",
    },
  },
);

/**
 * Props for the TextGradient component.
 */
export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

/**
 * TextGradient component renders a span element with gradient text.
 *
 * @param {TextProps} props - The props for the component.
 * @param {keyof typeof textVariants.variants.sizing} [props.sizing] - The sizing variant. One of "title", "subtitle".
 * @param {keyof typeof textVariants.variants.direction} [props.direction] - The direction variant. One of "t", "tr", "r", "br", "b", "bl", "l", "tl".
 * @returns {JSX.Element} The rendered span element.
 */
const TextGradient = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, sizing, direction, ...props }, ref) => {
    return (
      <span
        className={cn(textVariants({ direction, className, sizing }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export default TextGradient;
