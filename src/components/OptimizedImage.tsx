"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Spinner } from "./ui/spinner";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
  unoptimized?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  priority = false, // Deprecated in Next.js 16, use preload instead
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  style,
  unoptimized = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
    onError?.();
  };

  // Generate blur placeholder for remote images if not provided
  const generateBlurPlaceholder = () => {
    if (blurDataURL) return blurDataURL;
    if (src.startsWith("data:")) return src;

    // Simple base64 encoded placeholder
    return `data:image/svg+xml;base64,${btoa(
      '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e5e7eb"/></svg>',
    )}`;
  };

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200 text-gray-500",
          className,
        )}
        style={style}
      >
        <span className="text-xs">Failed to load image</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    sizes,
    quality,
    priority,
    placeholder,
    ...(placeholder === "blur" && { blurDataURL: generateBlurPlaceholder() }),
    onLoad: handleLoad,
    onError: handleError,
    style: {
      ...style,
      opacity: isLoading ? 0 : 1,
      transition: "opacity 0.3s ease-in-out",
    },
    unoptimized,
    ...props,
  };

  if (fill) {
    return (
      <div className={cn("relative", className)} style={style}>
        <Image {...imageProps} fill className={cn("object-cover", className)} />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <Image
        {...imageProps}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", className)}
      />
      {/* {isLoading && ( */}
      {/*   <div className="absolute inset-0 bg-gray-300/15 dark:bg-gray-300/15 rounded-xl flex-center"> */}
      {/*     <Spinner className="size-8 text-white" /> */}
      {/*   </div> */}
      {/* )} */}
    </div>
  );
};

export default OptimizedImage;
