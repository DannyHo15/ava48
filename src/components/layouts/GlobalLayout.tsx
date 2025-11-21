"use client";

import { CircleArrowRight, Power } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import LanguageDrawer from "../LanguageDrawer";
import ImageAvatar48 from "../ImageAvatar48";
import { cn } from "@/lib/utils";
import { AvatarLink } from "../AvatarLink";
import BorderGradientWrapper from "../BorderGradientWrapper";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";
import { Loading } from "@/components/common";

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const pathname = usePathname();
  const { locale } = params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://avatar48.ai";

  const { theme } = useTheme();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  // if (loading) {
  //   return <Loading />; // or a loading spinner
  // }

  return (
    <>
      <div className="fixed top-7.5 min-[2000px]:top-10! left-3 sm:left-10 lg:left-13.75 min-[2000px]:left-20! z-9">
        <Link href={"/"}>
          <ImageAvatar48
            lightURL={"/assets/logo-light.svg"}
            drakURL={"/assets/logo-dark.svg"}
            className="w-16 h-13.5 sm:w-24.5 sm:h-20.5"
          />
        </Link>
      </div>
      <div className="fixed top-7.5 min-[2000px]:top-10! right-3 sm:right-10 lg:right-16.5 min-[2000px]:right-20! flex gap-6 text-xl z-10">
        <div className="flex gap-2 md:gap-4 lg:gap-6">
          <Link href={`${baseUrl}/agent/${locale}?mode=${theme}`}>
            <Button className="bg-avatar-primary text-avatar-text-color hover:opacity-80 cursor-pointer px-3 sm:px-2">
              <Power size={24} strokeWidth={2} className="hidden sm:block" />
              {t("lets_talk")}
            </Button>
          </Link>
          <Link href={`${baseUrl}/platform/${locale}/sentient?mode=${theme}`}>
            <Button className="bg-white text-black hover:opacity-80 cursor-pointer px-3 sm:px-2">
              <CircleArrowRight
                size={24}
                strokeWidth={2}
                className="hidden sm:block"
              />
              {t("create_agent")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-dvh overflow-hidden" id="smooth-wrapper">
        {children}
      </div>
      <div
        className={cn(
          "fixed bottom-7.75 md:bottom-15 lg:bottom-6.75 min-[2000px]:bottom-10! left-3 md:left-10 lg:left-11.75 min-[2000px]:left-20! hidden gap-2 md:gap-6 2xl:gap-10.5 whitespace-nowrap text-white z-10",
          {
            "min-[500px]:flex md:flex-col-reverse 2xl:flex-row 2xl:items-center justify-between":
              pathname === `/${locale}`,
            "min-[500px]:flex flex-row items-center": pathname !== `/${locale}`,
          },
        )}
      >
        <LanguageDrawer className="md:w-26.25 h-7 md:h-12.5 rounded-[0.625rem] px-2 md:px-6" />
        <Link
          href={"/term-of-use"}
          className={cn(
            "uppercase h-7 md:h-12.5 flex-center font-medium text-sm md:text-xl rounded-[0.625rem] bg-white/10 backdrop-blur-md px-2 md:px-6",
            {
              "order-2 md:order-3 2xl:order-2": pathname === `/${locale}`,
            },
          )}
        >
          {t("term_of_use")}
        </Link>
        <Link
          href={"/privacy-policy"}
          className={cn(
            "uppercase h-7 md:h-12.5 flex-center font-medium text-sm md:text-xl rounded-[0.625rem] bg-white/10 backdrop-blur-md px-2 md:px-6",
            {
              "order-3 md:order-2 2xl:order-3": pathname === `/${locale}`,
            },
          )}
        >
          {t("privacy_policy")}
        </Link>
      </div>
      <div
        className={cn(
          "w-max fixed bottom-2.5 min-[500px]:bottom-19 md:bottom-15 lg:bottom-7.75 min-[2000px]:bottom-10! left-1/2 -translate-x-1/2 z-10",
          {
            hidden: pathname !== `/${locale}`,
          },
        )}
      >
        <BorderGradientWrapper
          gradientType="linear"
          className="p-2 min-[500px]:p-2.25"
          rounded="25px"
          borderColor="--avatar-info-border"
          strokeWidth="3px"
        >
          <BorderGradientWrapper
            gradientType="linear"
            className="p-px"
            rounded="21px"
            borderColor="--avatar-info-border"
            strokeWidth="1px"
          >
            <Link
              href={`${baseUrl}/agent/${locale}?mode=${theme}`}
              className="rounded-custom-20 p-2 min-[500px]:p-2.5 flex items-center gap-3 bg-linear-120 from-9% from-avatar-blue-1 via-78% via-avatar-blue-4 to-99% dark:to-avatar-violet to-avatar-blue-3"
            >
              <img
                src={"/assets/avatar_image.png"}
                alt={"defaultImage"}
                className="rounded-xl w-14.75 lg:w-31.25 h-14.75 lg:h-20.5 object-cover"
              />
              <p className="font-medium text-white text-base md:text-xl">
                {t("chat_now")}
              </p>
            </Link>
          </BorderGradientWrapper>
        </BorderGradientWrapper>
      </div>
      <AvatarLink />
    </>
  );
}
