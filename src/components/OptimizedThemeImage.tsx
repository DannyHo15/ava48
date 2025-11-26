"use client";

import { useState, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";
import { cn } from "@/lib/utils";

interface OptimizedThemeImageProps {
  lightURL: string;
  darkURL: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  unoptimized?: boolean;
  style?: React.CSSProperties;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  alt?: string;
}

const OptimizedThemeImage = ({
  lightURL,
  darkURL,
  className,
  width,
  height,
  fill = false,
  quality = 85,
  priority = false,
  placeholder = "empty",
  unoptimized = false,
  style,
  sizes,
  onLoad,
  onError,
  alt = "Theme-aware image",
  ...props
}: OptimizedThemeImageProps) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const hasDarkMode =
        document.documentElement.classList.contains("violet-kiss-mode");
      setIsDark(hasDarkMode);
    };

    // Set mounted state
    setMounted(true);
    checkTheme();

    // Create MutationObserver to watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Determine which image URL to use
  const currentURL = isDark ? darkURL : lightURL;

  return (
    <OptimizedImage
      src={currentURL}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      unoptimized={unoptimized}
      style={style}
      sizes={sizes}
      onLoad={onLoad}
      onError={onError}
      className={cn("transition-opacity duration-300", className)}
      {...props}
    />
  );
};

export default OptimizedThemeImage;

