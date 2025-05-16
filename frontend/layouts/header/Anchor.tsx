"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url;
  ariaLabel: string;
  text: string;
};

export default function Anchor({ href, ariaLabel, text }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`
        px-12 md:px-14 xl:px-16 py-2 capitalize
        !bg-transparent !text-white
        !hover:bg-transparent !hover:text-white
        !focus:bg-transparent !focus:text-white
        !active:bg-transparent !active:text-white
        !ring-0 !outline-none
      `}
    >
      {text}
    </Link>
  );
}
