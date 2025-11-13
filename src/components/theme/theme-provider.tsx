"use client";

import type React from "react";
import { useEffect } from "react";
import { setThemeCookie } from "@/lib/theme-actions";

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: "royal-dark-mode" | "violet-kiss-mode";
}

export function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  useEffect(() => {
    setThemeCookie(initialTheme);
  }, [initialTheme]);

  return <>{children}</>;
}
