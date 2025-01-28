"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";

export default function Links() {
  const array: {
    text: string;
    path: string;
  }[] = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Location", path: "/location" },
    { text: "Contact", path: "/contact" },
  ];

  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-5 lg:flex">
        {array.map((e, i) => {
          return (
            <li key={i} className="transition-all hover:underline">
              <Link href={e.path}>{e.text}</Link>
            </li>
          );
        })}
      </ul>
      <div className="z-50 flex aspect-square h-full items-center justify-center pr-0 lg:hidden">
        <Button
          onClick={() => setOpened(!opened)}
          className="aspect-square h-full px-0"
        >
          <Menu />
        </Button>
      </div>
      {opened && (
        <ul className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-neutral-950">
          {array.map((e, i) => {
            return (
              <li
                key={i}
                className="text-4xl font-semibold transition-all hover:underline"
              >
                <Link href={e.path}>{e.text}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
