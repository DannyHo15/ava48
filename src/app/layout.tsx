/* eslint-disable @next/next/no-async-client-component */
"use server";
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
import { Kanit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

// Day.js Configuration
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.updateLocale("en", localeObject);

const BE_FONT_300 = Kanit({
  subsets: ["vietnamese"],
  variable: "--font-kanit",
  weight: "300",
});

const BE_FONT_400 = Kanit({
  subsets: ["vietnamese"],
  variable: "--font-kanit",
  weight: "400",
});
const BE_FONT_500 = Kanit({
  subsets: ["vietnamese"],
  variable: "--font-kanit",
  weight: "500",
});

const BE_FONT_600 = Kanit({
  subsets: ["vietnamese"],
  variable: "--font-kanit",
  weight: "600",
});

const BE_FONT_700 = Kanit({
  subsets: ["vietnamese"],
  variable: "--font-kanit",
  weight: "700",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randomTheme = Math.random() > 0.5 ? "violet_kiss_mode" : "royal_dark_mode";
  return (
    <html className={randomTheme}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Avatar48</title>
      </head>
      <body
        className={clsx(
          "h-screen bg-avatar-blue",
          BE_FONT_300.variable,
          BE_FONT_400.variable,
          BE_FONT_500,
          BE_FONT_600,
          BE_FONT_700.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        {children}
        <FirebaseAnalytics theme={randomTheme} />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}/>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM}/>
    </html>
  );
}
