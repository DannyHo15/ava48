"use client";

import { CircleArrowRight, Power } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import LanguageDrawer from "../ui/LanguageDrawer";
import AvatarImage from "../../assets/avatar_image.png";
import LogoAvatar48 from "../LogoAvatar48";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://avatar48.ai";

  const smoother = useRef<ScrollSmoother | null>(null);
  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smoother.current) {
        smoother.current.kill();
        smoother.current = null;
      }
    };
  }, []);

  return (
    <>
      <div className="fixed top-7.5 left-13.75 z-9">
        <Link href={"/"}>
          <LogoAvatar48 />
        </Link>
      </div>
      <div className="hidden lg:flex flex-col items-end fixed top-8 right-6 z-10">
        <div className="flex gap-4 lg:gap-2">
          <Link href={`${baseUrl}/agent/${locale}`}>
            <Button className="bg-avatar-primary">
              <Power size={24} strokeWidth={2} />
              {t("lets_talk")}
            </Button>
          </Link>
          <Link href={`${baseUrl}/platform/${locale}`}>
            <Button className="bg-white text-black hover:bg-white/80">
              <CircleArrowRight size={24} strokeWidth={2} />
              {t("create_agent")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-screen overflow-hidden" id="smooth-wrapper">
        <div className="relative z-1" id="smooth-content">
          {children}
        </div>
        <div className="fixed inset-0 bg-avatar-black" />
        <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-21" />
        <div className="fixed inset-0 cs-radial" />
      </div>
      <Link
        href={`${baseUrl}/agent/${locale}`}
        className="rounded-2xl p-2 flex items-center gap-3 mb-4 fixed bottom-4 left-1/2 -translate-x-1/2 mt-4 mx-auto w-fit z-10"
        style={{
          background: "linear-gradient(90.82deg, #00D0F6 56.17%, #0083F5 102.09%)",
        }}
      >
        <img
          src={AvatarImage.src}
          alt={"defaultImage"}
          className="rounded-2xl w-24 h-14 object-cover object-top"
        />
        <p className="font-medium text-xl">{t("chat_now")}</p>
      </Link>
      <div
        className={cn(
          "fixed bottom-6.75 left-11.75 flex items-center justify-between gap-10.5 whitespace-nowrap text-white z-10"
        )}
      >
        <LanguageDrawer className="h-12.5 w-fit" />
        <Link href={"/term-of-use"} className="uppercase h-12 flex items-center font-medium">
          {t("term_of_use")}
        </Link>
        <Link href={"/privacy-policy"} className="uppercase h-12 flex items-center font-medium">
          {t("privacy_policy")}
        </Link>
      </div>
    </>
  );
}
