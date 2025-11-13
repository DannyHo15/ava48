"use server";

import { cookies } from "next/headers";

export async function getThemeCookie() {
  const cookieStore = await cookies();
  return cookieStore.get("theme")?.value || null;
}

export async function setThemeCookie(theme: "royal-dark-mode" | "violet-kiss-mode") {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("theme")?.value || null;
  if (!currentTheme)
    cookieStore.set("theme", theme, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
    });
}

export async function deleteThemeCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("theme");
}
