import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import ContextProvider from "@/context/ContextProvider";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

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
