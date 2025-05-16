"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "@frontend/ts/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import tsukiwaLogoLight from "@assets/tsukiwa-logo.png";
import tsukiwaLogoDark from "@assets/tsukiwa-logo-dark.png";
import ThemeSwitchBtn from "@frontend/layouts/buttons/ThemeSwitchBtn";
import useHeader from "@frontend/hooks/useHeader";

export default function Header() {
  // ✅ Debugging log to check if NavLinks is loaded
  console.log("NavLinks Loaded:", NavLinks);

  // Handles sticky header background + active link highlighting
  const { isLinkActive, scrollHeaderBg } = useHeader();

  // ✅ Prevent hydration mismatches by ensuring the component is mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Sticky header background if scrolling */}
      <div className={`w-full h-[60px] z-[1000] fixed top-0 ${scrollHeaderBg}`} />

      {/* Actual Header */}
      <header className="container h-[60px] w-full z-[1000] fixed top-0 left-[50%] translate-x-[-50%] px-[8vw] flex justify-between items-center">
        
        {/* BRAND (MH) */}
        <Link
          href="/"
          id="brand"
          className="
            flex items-center gap-4
            transition-colors
            hover:text-primary
            dark:hover:text-rose-500
          "
        >
          <div aria-label="tsukiwa-logo" className="rounded-full p-1 w-[40px]">
            {/* Show one logo in dark mode, the other in light mode */}
            <Image
              className="hidden dark:block"
              priority
              loading="eager"
              src={tsukiwaLogoLight}
              alt="tsukiwa logo"
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              priority
              loading="eager"
              src={tsukiwaLogoDark}
              alt="tsukiwa logo"
              width={40}
              height={40}
            />
          </div>
          <h1
            aria-label="MH"
            className="
              hidden lg:block
              font-bold
              text-sm xl:text-base
              transition-colors
            "
          >
            MH
          </h1>
        </Link>

        {/* NAV + THEME SWITCH */}
        <nav className="flex items-center gap-6">
          {mounted && (
            <ul className="flex items-center gap-6">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  {/* ✅ Debugging navigation click */}
                  <Link
                    href={link.path}
                    onClick={() => console.log("Navigating to:", link.path)}
                    className={`
                      transition-colors
                      hover:text-primary
                      dark:hover:text-rose-500
                      ${isLinkActive(link.path) ? "text-primary dark:text-rose-500" : ""}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* THEME SWITCH BUTTON */}
          <ThemeSwitchBtn
            className="
              p-2 rounded-full
              hover:bg-blue-600
              dark:hover:bg-rose-600
              transition-colors
            "
          />
        </nav>
      </header>
    </>
  );
}
