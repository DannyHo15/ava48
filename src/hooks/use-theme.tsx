"use client"

import { useEffect, useState } from "react"
import { setThemeCookie } from "@/lib/theme-actions"

type Theme = "royal-dark-mode" | "violet-kiss-mode"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("royal-dark-mode")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("violet-kiss-mode")
    const currentTheme = isDark ? "violet-kiss-mode" : "royal-dark-mode"
    setTheme(currentTheme)
    setMounted(true)
  }, [])

  const applyTheme = (selectedTheme: Theme) => {
    const htmlElement = document.documentElement
    if (selectedTheme === "violet-kiss-mode") {
      htmlElement.classList.add("violet-kiss-mode")
    } else {
      htmlElement.classList.remove("violet-kiss-mode")
    }
  }

  const toggleTheme = async () => {
    const newTheme = theme === "royal-dark-mode" ? "violet-kiss-mode" : "royal-dark-mode"
    setTheme(newTheme)
    applyTheme(newTheme)
    await setThemeCookie(newTheme)
  }

  return { theme, toggleTheme, mounted }
}