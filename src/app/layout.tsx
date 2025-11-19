import "./globals.css";
import { localeObject } from "@/lib/constants";
import clsx from "clsx";
import dayjs from "dayjs";

import "dayjs/locale/en";
import "dayjs/locale/ja";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

import { getThemeCookie } from "@/lib/theme-actions";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Metadata, Viewport } from "next";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.updateLocale("en", localeObject);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialTheme = await getThemeCookie();
  
  // Fallback nếu không có cookie (logic cũ của bạn)
  // if (!initialTheme) {
     initialTheme = Math.random() > 0.5 ? "violet-kiss-mode" : "royal-dark-mode";
  // }

  return (
    <html lang="en" className={initialTheme}>
      <body className={clsx("h-dvh bg-avatar-blue")}>
        <NextTopLoader
          color="var(--avatar-primary)"
          initialPosition={0.3}
          crawlSpeed={300}
          height={2}
          crawl={true}
          showSpinner={false}
          speed={300}
          zIndex={999}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        
        <ThemeProvider initialTheme={initialTheme as "royal-dark-mode" | "violet-kiss-mode"}>
          {children}
        </ThemeProvider>
        
        <FirebaseAnalytics theme={initialTheme} />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? ""} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM ?? ""} />
      </body>
    </html>
  );
}