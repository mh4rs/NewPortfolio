"use client";

import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  src: string | Url;
  alt: string;
  isPriority?: boolean;
  className?: string;
};

export default function Picture({ src, alt, isPriority, className }: Props) {
 
}
