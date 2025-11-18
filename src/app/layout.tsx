// "use server";
import "./globals.css";
import { localeObject } from "@/lib/constants";
import clsx from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ja";
import "dayjs/plugin/duration";
import "dayjs/plugin/utc";

import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

import { getThemeCookie } from "@/lib/theme-actions";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Metadata, Viewport } from "next";

// Day.js Configuration
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

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const defaultTitle = "Avatar48 | Where Intimacy Meets AI";
  const defaultDescription =
    "Chat, call, and earn with Eimi Fukada and Aya Fujimoto - your flirty AI companions redefining emotional connection through technology.";
  const defaultOpenGraphDescription =
    "Connect with Aya and Eimi on Avatar48. Your flirty, intelligent AI companions powered by crypto, turning every call into tokens.";
  const defaultKeywords = [
      "Avatar48", "AI companion", "AI girlfriend", "emotional AI", "virtual chat", "flirty AI", "Aya Fujimoto", "Eimi Fukada", "crypto AI", "AI relationship", "Heart to Token", "chat to earn", "call to earn", "AI rewards", "Web3 AI", "AI crypto", "AI virtual assistant", "digital twin", "crypto news", "AI intimacy"
  ];
  const defaultOgAlt = "Avatar48 | Where Intimacy Meets AI";

  let messages: any = null;
  try {
    const mod = await import(`../../messages/${locale}.json`);
    messages = (mod && (mod.default ?? mod)) || null;
  } catch (e) {
    messages = null;
  }

  const metaFromMessages = messages?.meta ?? {};

  const title = metaFromMessages.title ?? defaultTitle;
  const description = metaFromMessages.description ?? defaultDescription;
  const keywords = metaFromMessages.keywords ?? defaultKeywords;
  const ogAlt = metaFromMessages?.ogAlt ?? defaultOgAlt;
  const openGraphDescription = metaFromMessages.open_graph_description ?? defaultOpenGraphDescription;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NEXT_PUBLIC_ENV === "staging"
      ? "https://staging.avatar48.ai"
      : process.env.NODE_ENV === "production"
      ? "https://avatar48.ai"
      : "http://localhost:3000");

  const localeOgLocaleMap: Record<string, string | undefined> = {
    en: "en_US",
    ja: "ja_JP",
    "zh-cn": "zh_CN",
    "zh-tw": "zh_TW",
  };

  const canonical = `${siteUrl}/${locale}`;

  const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Avatar48",
    },
    description,
    keywords,
    openGraph: {
      title,
      description: openGraphDescription,
      url: canonical,
      siteName: "Avatar48",
      images: [
        {
          url: "/banner-seo.jpeg",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
      type: "website",
      locale: localeOgLocaleMap[locale] ?? undefined,
    },
    alternates: {
      canonical,
      languages: Object.fromEntries(
        Object.entries({ en: "en", ja: "ja", "zh-cn": "zh-cn", "zh-tw": "zh-tw"}).map(
          ([key, path]) => [key, `${siteUrl}/${path}`]
        )
      ),
    },
  };

  return metadata;
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishedTime = "2024-08-21T00:00:00Z";
  const modifiedTime = new Date().toISOString();

  let initialTheme = await getThemeCookie();
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
        <ThemeProvider initialTheme={initialTheme as "royal-dark-mode" | "violet-kiss-mode"}>{children}</ThemeProvider>
        <FirebaseAnalytics theme={initialTheme}/>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? ""}/>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM ?? ""}/>
      </body>
    </html>
  );
}
