export const EMAIL_SUPPORT = "support@avatar48.ai";

export const localeObject = {
  weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。

  // name: 'en', // name String
  // weekdays: 'Domingo_Lunes ...'.split('_'), // weekdays Array
  // weekdaysShort: 'Sun_M'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
  // weekdaysMin: 'Su_Mo'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
  // yearStart: 4, // OPTIONAL, the week that contains Jan 4th is the first week of the year.
  // months: 'Enero_Febrero ... '.split('_'), // months Array
  // monthsShort: 'Jan_F'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
  // ordinal: n => `${n}º`, // ordinal Function (number) => return number + output
  // weekdaysMin: ["CN", "H", "B", "T", "N", "S", "B"],

  formats: {
    // abbreviated format options allowing localization
    LT: "HH:mm",
    L: "DD/MM/YYYY",
    LL: "DD/MM/YYYY HH:mm",
    LLL: "DD/MM/YYYY HH:mm:ss",
  },
  relativeTime: {
    // relative time format strings, keep %s %d as the same
    future: "in %s", // e.g. in 2 hours, %s been replaced with 2hours
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours", // e.g. 2 hours, %d been replaced with 2
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
};

// Safe access to environment variables (works in server and client bundles)
const env = typeof process !== "undefined" && process && process.env ? (process.env as any) : {};

export const ENV = env.NEXT_PUBLIC_ENV ?? env.NODE_ENV ?? "development";

export const BASE_URL =
  env.NEXT_PUBLIC_APP_URL ?? env.NEXT_PUBLIC_BASE_URL ??
  (ENV === "production"
    ? "https://avatar48.ai"
    : ENV === "staging"
    ? "https://staging.avatar48.ai"
    : "http://localhost:3000");

export const agentUrl = (locale?: string) => `${BASE_URL}/agent/${locale ?? ""}`;
export const platformUrl = (locale?: string) => `${BASE_URL}/platform/${locale ?? ""}`;
