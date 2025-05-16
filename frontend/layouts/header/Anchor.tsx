"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  /** The URL or path to link to */
  href: Url;
  /** Accessible label for the link */
  ariaLabel: string;
  /** The text to render inside the link */
  name: string;
  /** Optional extra CSS classes (e.g. "active") */
  className?: string;
};

export default function Anchor({
  href,
  ariaLabel,
  name,
  className = "",
}: Props) {
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
        ${className}
      `}
    >
      {name}
    </Link>
  );
}
