"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Cprops = {
  lightURL: string;
  drakURL: string;
  lightURL2xl?: string;
  drakURL2xl?: string;
  className?: string;
};

const ImageAvatar48 = ({ 
  className, 
  drakURL, 
  lightURL,
  lightURL2xl,
  drakURL2xl 
}: Cprops) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
    setMounted(true);

    const check2xl = () => {
      setIs2xl(window.innerWidth >= 1536);
    };
    
    check2xl();
    window.addEventListener('resize', check2xl);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDark(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', check2xl);
    };
  }, []);

  if (!mounted) return null;

  const getImageUrl = () => {
    if (is2xl) {
      return isDark 
        ? (drakURL2xl || drakURL) 
        : (lightURL2xl || lightURL);
    }
    return isDark ? drakURL : lightURL;
  };

  return (
    <img
      src={getImageUrl()}
      alt="Avatar48"
      className={cn(className)}
    />
  );
};

export default ImageAvatar48;
