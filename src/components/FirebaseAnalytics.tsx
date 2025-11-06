"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics } from "@/lib/firebase";
import { logEvent, Analytics } from "firebase/analytics";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    let mounted = true;
    initAnalytics().then((a) => {
      if (mounted && a) setAnalytics(a);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!analytics) return;
    try {
      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_location: typeof window !== "undefined" ? window.location.href : "",
      });
    } catch (e) {
      // swallow logging errors
    }
  }, [pathname, analytics]);

  return null;
}
