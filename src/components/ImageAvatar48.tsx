"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Cprops = {
  lightURL: string;
  drakURL: string;
  className?: string;
};

const ImageAvatar48 = ({ className, drakURL, lightURL }: Cprops) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDarkMode =
      document.documentElement.classList.contains("violet-kiss-mode");
    setIsDark(isDarkMode);
    setMounted(true);

    const observer = new MutationObserver(() => {
      const isDark =
        document.documentElement.classList.contains("violet-kiss-mode");
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
    <img
      src={isDark ? drakURL : lightURL}
      alt="Avatar48"
      className={cn(className)}
    />
  );
};

export default ImageAvatar48;

