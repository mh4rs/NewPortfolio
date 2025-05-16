"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
// Import your custom Button type
import { Button, ButtonProps } from "@frontend/components/ui/Button";

type BtnProps = ButtonProps & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

function Btn({ onClick, icon, className, ...rest }: BtnProps) {
  return (
    <Button
      aria-label="theme-switch"
      onClick={onClick}
      variant="toggle"
      size="icon"
      // Merge any className passed in with your existing classes
      className={`
        ${className ?? ""}
        [&>svg>path]:hover:text-on-primary
        [&>svg>circle]:hover:text-on-primary
        [&>svg>line]:hover:text-on-primary
      `}
      {...rest}
    >
      {icon}
    </Button>
  );
}

type ThemeSwitchBtnProps = Omit<BtnProps, "icon" | "onClick">;

/**
 * ThemeSwitchBtn component
 * Allows passing className (and other ButtonProps)
 * from the parent, e.g. in your Header.tsx
 */
export default function ThemeSwitchBtn({ className, ...rest }: ThemeSwitchBtnProps) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <LoadingSpinner size="40px" fontSizes="text-xl xl:text-2xl" />;
  }

  if (resolvedTheme === "dark") {
    return <Btn onClick={() => setTheme("light")} icon={<FiSun />} className={className} {...rest} />;
  }
  return <Btn onClick={() => setTheme("dark")} icon={<FiMoon />} className={className} {...rest} />;
}
