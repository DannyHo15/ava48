"use client";

import { CircleArrowRight, Power } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import LanguageDrawer from "../LanguageDrawer";
import ImageAvatar48 from "../ImageAvatar48";
import { cn } from "@/lib/utils";
import { AvatarLink } from "../AvatarLink";
import BorderGradientWrapper from "../BorderGradientWrapper";
import { useTheme } from "@/hooks/use-theme";

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://avatar48.ai";

  const { theme } = useTheme();

  return (
    <>
      <div className="fixed top-7.5 sm:top-15 lg:top-7.5 left-5 sm:left-10 lg:left-13.75 z-9">
        <Link href={"/"}>
          <ImageAvatar48
            lightURL={"/assets/logo-light.svg"}
            drakURL={"/assets/logo-dark.svg"}
            className="w-16 sm:w-23.75 h-13.5 sm:h-20 lg:w-32.75 lg:h-27.5"
          />
        </Link>
      </div>
      <div className="fixed top-7.5 sm:top-15 lg:top-8 right-5 sm:right-10 lg:right-16.5 flex gap-6 text-xl z-10">
        <div className="flex gap-2 md:gap-4 lg:gap-6">
          <Link href={`${baseUrl}/agent/${locale}?mode=${theme}`}>
            <Button className="bg-avatar-primary text-avatar-text-color hover:opacity-80 cursor-pointer px-3 prm:px-2">
              <Power size={24} strokeWidth={2} className="hidden prm:block" />
              {t("lets_talk")}
            </Button>
          </Link>
          <Link href={`${baseUrl}/platform/${locale}/sentient?mode=${theme}`}>
            <Button className="bg-white text-black hover:opacity-80 cursor-pointer px-3 prm:px-2">
              <CircleArrowRight size={24} strokeWidth={2} className="hidden prm:block" />
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
          "fixed bottom-7.75 sm:bottom-15 lg:bottom-6.75 left-5 sm:left-10 lg:left-11.75 flex sm:flex-col-reverse 2xl:flex-row 2xl:items-center justify-between gap-2 sm:gap-6 2xl:gap-10.5 whitespace-nowrap text-white z-10"
        )}
      >
        <LanguageDrawer className="sm:w-26.25 h-7 sm:h-12.5 rounded-[0.625rem] px-2 sm:px-6" />
        <Link
          href={"/term-of-use"}
          className="uppercase h-7 sm:h-12.5 flex-center font-medium text-sm sm:text-xl rounded-[0.625rem] bg-white/10 backdrop-blur-md px-2 sm:px-6"
        >
          {t("term_of_use")}
        </Link>
        <Link
          href={"/privacy-policy"}
          className="uppercase h-7 sm:h-12.5 flex-center font-medium text-sm sm:text-xl rounded-[0.625rem] bg-white/10 backdrop-blur-md v px-2 sm:px-6"
        >
          {t("privacy_policy")}
        </Link>
      </div>
      <div className="w-max fixed bottom-19 sm:bottom-15 lg:bottom-7.75 left-1/2 -translate-x-1/2 z-10">
        <BorderGradientWrapper
          gradientType="linear"
          className="p-2.5"
          rounded="25px"
          borderColor="--avatar-chat-border"
          strokeWidth="3px"
        >
          <BorderGradientWrapper
            gradientType="linear"
            className="p-px"
            rounded="21px"
            borderColor="--avatar-chat-border"
            strokeWidth="1px"
          >
            <Link
              href={`${baseUrl}/agent/${locale}?mode=${theme}`}
              className="rounded-custom-20 p-2.5 flex items-center gap-3 bg-linear-120 from-9% from-avatar-blue-1 via-78% via-avatar-blue-4 to-99% dark:to-avatar-violet to-avatar-blue-3"
            >
              <img
                src={"/assets/avatar_image.png"}
                alt={"defaultImage"}
                className="rounded-xl w-22.5 lg:w-31.25 h-14.75 lg:h-20.5"
              />
              <p className="font-medium text-white text-base sm:text-xl">{t("chat_now")}</p>
            </Link>
          </BorderGradientWrapper>
        </BorderGradientWrapper>
      </div>
      <AvatarLink />
    </>
  );
}
