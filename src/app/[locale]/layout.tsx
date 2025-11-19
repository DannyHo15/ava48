import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import ContextProvider from "@/context/ContextProvider";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = "force-static";

type MetaProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const { locale } = await params;

  const defaultTitle = "Avatar48 | Where Intimacy Meets AI";
  const defaultDescription = "Chat, call, and earn with Eimi Fukada and Aya Fujimoto - your flirty AI companions redefining emotional connection through technology.";
  const defaultOpenGraphDescription = "Connect with Aya and Eimi on Avatar48. Your flirty, intelligent AI companions powered by crypto, turning every call into tokens.";
  const defaultKeywords = [
    "Avatar48",
    "AI companion",
    "AI girlfriend",
    "emotional AI",
    "virtual chat",
    "flirty AI",
    "Aya Fujimoto",
    "Eimi Fukada",
  ];
  const defaultOgAlt = "Avatar48 | Where Intimacy Meets AI";

  let messages: any = null;
  try {
    const mod = await import(`../../../messages/${locale}.json`);
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NEXT_PUBLIC_ENV === "staging" ? "https://staging.avatar48.ai" : process.env.NODE_ENV === "production" ? "https://avatar48.ai" : "http://localhost:3000");

  const localeOgLocaleMap: Record<string, string | undefined> = {
    en: "en_US",
    ja: "ja_JP",
    "zh-cn": "zh_CN",
    "zh-tw": "zh_TW",
  };

  const canonical = `${siteUrl}/${locale}`;

  return {
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
          url: "/og-banner.png",
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
        Object.entries({ en: "en", ja: "ja", "zh-cn": "zh-cn", "zh-tw": "zh-tw" }).map(([key, path]) => [key, `${siteUrl}/${path}`])
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <ContextProvider>
        <GlobalLayout>{children}</GlobalLayout>
      </ContextProvider>
    </NextIntlClientProvider>
  );
}
