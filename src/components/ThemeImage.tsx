"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ThemeImageProps = {
  lightSrc: string;
  darkSrc: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

const ThemeImage = ({
  lightSrc,
  darkSrc,
  alt = "Avatar",
  className,
  width,
  height,
  priority = false,
  fill = false,
  sizes,
}: ThemeImageProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("violet-kiss-mode"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const src = isDark ? darkSrc : lightSrc;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "100vw"}
        className={cn(className)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  const hasAutoSize =
    className?.includes("w-auto") || className?.includes("h-auto");

  if (hasAutoSize && (!width || !height)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={sizes || "100vw"}
        className={cn(className)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 48}
      height={height || 48}
      className={cn(className)}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );
};

export default ThemeImage;
