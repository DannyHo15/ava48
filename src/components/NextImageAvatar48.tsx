import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
type Cprops = {
  lightURL: string;
  darkURL: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  alt?: string;
  loading?: "eager" | "lazy";
  placeholder?: "blur" | "empty";
  unoptimized?: boolean;
  fill?: boolean;
};
const NextImageAvatar48 = ({
  className,
  darkURL,
  lightURL,
  width,
  height,
  sizes,
  priority,
  alt = "Avatar48",
  fill,
  quality = 75,
  loading = "lazy",
  placeholder = "empty",
  unoptimized = false,
}: Cprops) => {
  const checkDarkMode = useCallback(() => {
    return document.documentElement.classList.contains("violet-kiss-mode");
  }, []);

  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const src = isDark ? darkURL : lightURL;
  useEffect(() => {
    setIsDark(checkDarkMode());
    setMounted(true);

    const observer = new MutationObserver(() => {
      setIsDark(checkDarkMode());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [checkDarkMode]);

  if (!mounted) {
    return (
      <div
        className={cn("animate-pulse bg-gray-200 dark:bg-gray-700", className)}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    );
  }
  const hasAutoSize =
    className?.includes("w-auto") || className?.includes("h-auto");

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
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      quality={quality}
      loading={priority ? "eager" : loading}
      placeholder={placeholder}
      unoptimized={unoptimized}
      src={isDark ? darkURL : lightURL}
      alt={alt}
      className={cn("transition-opacity duration-300", className)}
      onError={(e) => {
        console.error(
          `Failed to load image: ${isDark ? darkURL : lightURL}`,
          e,
        );
      }}
    />
  );
};

export default NextImageAvatar48;
