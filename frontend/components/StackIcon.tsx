import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string; // Make href optional
  ariaLabel: string;
  src: string;
  alt: string;
  className?: string;
};

export default function StackIcon({
  href,
  ariaLabel,
  src,
  alt,
  className,
}: Props) {
  return (
    <div
      aria-label={ariaLabel}
      className="relative flex items-center justify-center"    >
      <div className="flex items-center justify-center hover:bg-surface dark:hover:bg-rose-400 hover:shadow-primary-dark hover:shadow-lg hover:-translate-y-2 active:translate-y-1 active:shadow-none dark:active:bg-rose-dark rounded-xl p-3">
        <img
          src={src}
          alt={alt}
          width={70}
          height={70}
          className="w-[40px] md:w-[50px] lg:w-[60px]"
        />
      </div>
    </div>
  );
}
