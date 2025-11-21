import { useEffect, useState } from "react";
import OptimizedThemeImage from "./OptimizedThemeImage";
import TiltedCard from "./TiltedCard";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";
interface ICardAnimationProps {
  lightURL: string;
  darkURL: string;
  captionText?: string;
  className?: ClassNameValue;
}
const CardAnimation = ({
  lightURL,
  darkURL,
  captionText,
  className,
}: ICardAnimationProps) => {
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
    <div className={cn("size-full", className)}>
      <TiltedCard
        imageSrc={currentURL}
        captionText={captionText}
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={14}
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
      />
    </div>
  );
};

export default CardAnimation;
