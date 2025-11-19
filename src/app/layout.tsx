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

export const metadata: Metadata = {
  title: {
    default: "Avatar48 | Where Intimacy Meets AI",
    template: "%s | Avatar48",
  },
  description:
    "Chat, call, and earn with Eimi Fukada and Aya Fujimoto - your flirty AI companions redefining emotional connection through technology.",
  metadataBase: new URL("https://avatar48.ai"),
  keywords: [
      "Avatar48", "AI companion", "AI girlfriend", "emotional AI", "virtual chat", "flirty AI", "Aya Fujimoto", "Eimi Fukada", "crypto AI", "AI relationship", "Heart to Token", "chat to earn", "call to earn", "AI rewards", "Web3 AI", "AI crypto", "AI virtual assistant", "digital twin", "crypto news", "AI intimacy"
  ],
  authors: [{ name: "Avatar48", url: "https://avatar48.ai" }],
  creator: "Avatar48",
  publisher: "Avatar48",
  openGraph: {
    title: "Avatar48 | Where Intimacy Meets AI",
    description:
      "Chat, call, and earn with Eimi Fukada and Aya Fujimoto - your flirty AI companions redefining emotional connection through technology.",
    url: "https://avatar48.ai/",
    siteName: "Avatar48",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Avatar48 - Where Intimacy Meets AI",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avatar48 | Where Intimacy Meets AI",
    description:
      "Chat, call, and earn with Eimi Fukada and Aya Fujimoto - your flirty AI companions redefining emotional connection through technology.",
    images: ["/og-banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/ja",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialTheme = await getThemeCookie();
  const publishedTime = "2025-08-21T00:00:00Z";
  const modifiedTime = new Date().toISOString();
  
  // Fallback nếu không có cookie (logic cũ của bạn)
  // if (!initialTheme) {
     initialTheme = Math.random() > 0.5 ? "violet-kiss-mode" : "royal-dark-mode";
  // }

  return (
    <html lang="en" className={initialTheme}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#001251" />
        <meta property="article:author" content="Avatar48" />
        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:modified_time" content={modifiedTime} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
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