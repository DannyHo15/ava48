"use server";
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
import { GoogleAnalytics } from "@next/third-parties/google";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

// Day.js Configuration
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.updateLocale("en", localeObject);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randomTheme = Math.random() > 0.5 ? "dark" : "light";
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
      <body className={clsx("h-screen bg-avatar-blue")}>
        {children}
        <FirebaseAnalytics />
      </body>
      <GoogleAnalytics gaId={"GTM-MNSWPXXT"} />
    </html>
  );
}
