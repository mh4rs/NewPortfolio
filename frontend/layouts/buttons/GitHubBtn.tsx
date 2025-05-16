import Link from "next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import { FaGithub } from "react-icons/fa6";

export default function GitHubBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label="GitHub"
      className={`
        ${buttonVariants({ variant: "outline" })}
        text-green-600 !border-green-600
        hover:!bg-green-600 hover:text-white
        transition-colors duration-200
      `}
    >
      <FaGithub className="w-4 h-4 mr-2" />
      GitHub
    </Link>
  );
}
