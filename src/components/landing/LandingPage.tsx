"use client";
import {
  HandWaving,
  HeartLight,
  Lightning,
  LogoAvatar48,
  PowerLight,
} from "@/assets";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";
import { Button } from "@/components/ui/button";
import LanguageDrawer from "@/components/ui/LanguageDrawer";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import AvatarImage from "./asset/avatar_image.png";
import Wave from "./asset/Wave.svg";

const LandingPage = () => {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;

  const [section, setSection] = useState("section_1");
  const handleScroll = () => {
    let current;
    const sections = document.querySelectorAll('[id^="section_"]');

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().y;
      // const sectionHeight = section.clientHeight;
      if (sectionTop <= 100) {
        current = section.getAttribute("id");
      }
    });
    setSection(current);
  };

  return (
    <>
      <LogoAvatar48
        className={clsx(
          "opacity-0 lg:opacity-100 block text-[98px]",
          "absolute top-8 left-12 z-10"
        )}
      />
      <div className="hidden lg:flex flex-col items-end absolute top-8 right-12 z-10">
        <Link href={`https://staging.avatar48.ai/agent/${locale}`}>
          <Button>
            <PowerLight />
            {t("get_started")}
          </Button>
        </Link>
        <div className="flex flex-col gap-10 mt-15">
          {[
            {
              title: t("say_hi"),
              icon: <HandWaving />,
              id: "#section_1",
            },
            {
              title: t("love_it"),
              icon: <HeartLight />,
              id: "#section_2",
            },
            {
              title: t("quick_start"),
              icon: <Lightning />,
              id: "#section_3",
            },
          ].map((item, index) => {
            const active = item.id === `#${section}`;
            return (
              <a
                key={index}
                href={item.id}
                className={clsx("flex justify-end items-center gap-6")}
              >
                {active && (
                  <div className="size-2 rotate-45 shrink-0 bg-white -mr-2" />
                )}
                <p
                  className={clsx(
                    "text-[16px] xl:text-2xl font-medium",
                    active ? "text-white" : "text-white/80"
                  )}
                >
                  {item.title}
                </p>
                <div
                  className={clsx(
                    "size-10 rounded-full relative",
                    "flex justify-center items-center",
                    "[&_svg]:size-6",
                    active ? "bg-white" : "bg-white/50",
                    active ? "text-black" : "text-white",
                    active
                      ? "after:content-[''] after:border after:border-white after:size-13 after:absolute after:-top-1.5 after:-left-1.5 after:rounded-full"
                      : ""
                  )}
                >
                  {item.icon}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(/assets/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100svh",
          width: "100svw",
          position: "relative",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
        onScroll={handleScroll}
        className="pt-8 px-3 md:px-5 lg:px-0"
      >
        <div className="lg:hidden flex justify-between mb-10 w-full">
          <LogoAvatar48 className={clsx("text-[64px]")} />
          <Link href={`https://staging.avatar48.ai/agent/${locale}`}>
            <Button>
              <PowerLight />
              {t("get_started")}
            </Button>
          </Link>
        </div>
        <div
          className={clsx(
            "bg-white/20 mx-auto md:w-full lg:max-w-[580px] xl:max-w-[726px] backdrop-blur-sm",
            "p-2.5 md:p-5 gap-10 rounded-[18px] md:gap-19 lg:rounded-[30px]",
            "flex flex-col items-center whitespace-pre-wrap"
          )}
          style={{
            background:
              "linear-gradient(325.83deg, rgba(68, 68, 68, 0.3) 4.51%, rgba(0, 0, 0, 0.3) 45.21%)",
          }}
        >
          <Section1 />
          <Wave className="text-[64px] lg:text-[112px]" />
          <Section2 />
          <Section3 />
          <Link
            href={`https://staging.avatar48.ai/agent/${locale}`}
            className="rounded-2xl p-2 hidden md:flex items-center gap-3 mb-10 sticky bottom-4"
            style={{
              background:
                "linear-gradient(90.82deg, #00D0F6 56.17%, #0083F5 102.09%)",
            }}
          >
            <img
              src={AvatarImage.src}
              alt={"defaultImage"}
              className="rounded-2xl w-24 h-14 object-cover object-top"
            />
            <p className="font-medium text-xl">{t("chat_now")}</p>
          </Link>
        </div>
        <Link
          href={`https://staging.avatar48.ai/agent/${locale}`}
          className="rounded-2xl p-2 flex md:hidden items-center gap-3 mb-4 sticky bottom-4 mt-4 mx-auto w-fit"
          style={{
            background:
              "linear-gradient(90.82deg, #00D0F6 56.17%, #0083F5 102.09%)",
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
          className={clsx(
            "lg:sticky lg:bottom-0 lg:max-w-none lg:mx-auto lg:pl-5 lg:justify-start lg:mb-0",
            "mb-4 pt-4 flex items-center justify-between gap-4 whitespace-nowrap "
          )}
        >
          <LanguageDrawer className="h-8 w-fit" />
          <Link
            href={"/term-of-use"}
            className="uppercase h-12 flex items-center font-medium"
          >
            {t("term_of_use")}
          </Link>
          <Link
            href={"/privacy-policy"}
            className="uppercase h-12 flex items-center font-medium"
          >
            {t("privacy_policy")}
          </Link>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
// Compare this snippet from src/app/layout.tsx:
