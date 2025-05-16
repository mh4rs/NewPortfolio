import Link from "next/link";
import { ProjectType } from "@shared/types";
import GitHubBtn from "@frontend/layouts/buttons/GitHubBtn";
import VisitBtn from "@frontend/layouts/buttons/VisitBtn";

export default function ProjectCard({
  href,
  ariaLabel,
  src,
  alt,
  title,
  desc,
  website,
  github,
  slug,
}: ProjectType) {
  return (
    <div
      className="
        relative max-w-[400px] rounded-xl flex flex-col
        bg-surface dark:bg-dm-surface          /* using your surface colors */
        shadow border-2 border-transparent      /* default shadow with 2px border */
        hover:border-blue-500                   /* blue border on hover in light mode */
        dark:hover:border-rose-500              /* pink border on hover in dark mode */
        hover:shadow-blue-200                   /* light blue shadow on hover in light mode */
        dark:hover:shadow-rose-200              /* light pink shadow on hover in dark mode */
        hover:shadow-lg                         /* larger shadow on hover */
        hover:-translate-y-2 active:translate-y-1 active:shadow-none
        cursor-pointer overflow-hidden
        transition-all duration-200
      "
    >
      <Link aria-label={ariaLabel} href={href}>
        {/* Image container */}
        <div className="relative w-full h-[200px] bg-gray-200 dark:bg-gray-700">
          <img
            src={src}
            alt={alt || title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project details */}
        <div className="details px-[30px] py-[30px]">
          <h1 className="truncate text-2xl font-bold px-2">{title}</h1>
          <p className="desc-format">{desc}</p>
        </div>
      </Link>

      {/* Bottom Buttons */}
      <div className="links flex flex-row space-x-4 px-[30px] pb-[30px]">
        <GitHubBtn href={github} />
        {website && <VisitBtn href={website} />}
      </div>
    </div>
  );
}