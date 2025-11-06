"use client";
import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const randomTheme = Math.random() > 0.5 ? "dark" : "light";
    setTheme(randomTheme);
    applyTheme(randomTheme);

    setMounted(true);
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const htmlElement = document.documentElement;
    if (selectedTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme, mounted };
}
