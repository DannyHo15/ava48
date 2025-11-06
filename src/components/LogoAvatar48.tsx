"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Cprops = {
  className?: string;
};

const LogoAvatar48 = ({ className }: Cprops) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
    setMounted(true);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDark(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <Image
      src={isDark ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"}
      alt="Avatar48"
      width={131}
      height={110}
      className={className}
    />
  );
};

export default LogoAvatar48;
