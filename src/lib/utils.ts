import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLanguageParams = () => {
  const language = new URL(window.location.href).pathname.split("/")[1];
  return language === "zh-tw" ? "tc" : language === "zh-cn" ? "cn" : language;
};
