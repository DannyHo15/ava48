import { useState } from "react";
import BorderGradientWrapper from "../BorderGradientWrapper";
import { FloatButton } from "../ui/float-button";
import { Info } from "lucide-react";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { SectionWrapper } from "../SectionWrapper";
import OptimizedThemeImage from "../OptimizedThemeImage";
const Robotic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("LandingPage.section_robotic");
  const locale = useLocale();
  return (
    <SectionWrapper>
      <div className="md:hidden fixed inset-0 bg-[url(/assets/bg-robotic-mobile-light.png)] dark:bg-[url(/assets/bg-robotic-mobile-dark.png)] bg-cover bg-center" />
      <div className="hidden md:block fixed inset-0 bg-[url(/assets/bg-robotic-tablet-light.png)] dark:bg-[url(/assets/bg-robotic-tablet-dark.png)] bg-cover bg-center" />
      <div className="hidden xl:block fixed inset-0 bg-[url(/assets/bg-robotic-desktop-light.png)] dark:bg-[url(/assets/bg-robotic-desktop-dark.png)] bg-cover bg-center" />
      <div className="size-full relative flex flex-col items-center justify-between">
        <div
          className="size-full md:px-10 flex flex-col justify-end"
          id="section-robotic"
        >
          <div
            className={clsx(
              "relative size-full mx-auto flex flex-col items-end justify-end md:gap-[215px] min-[1023]:gap-[100px]! xl:max-w-[1040px] 2xl:max-w-[1281px] xl:pt-[130px] 3xl:pt-0! 3xl:max-w-[1570px]! xl:mx-auto xl:flex-row xl:gap-0",
              locale === "ja" && "md:gap-[215px] min-[1023]:gap-[146px]!"
            )}
          >
            {/* Title Tablet */}
            <div className="hidden md:flex xl:hidden w-full flex-col gap-[17px] relative">
              <ShapeGradientWrapper
                index="573076745678938-ipad"
                blurSize="2xs"
                shapeWidth={83}
                shapeHeight={76}
                className={clsx(
                  "absolute z-50 top-6 left-8 -rotate-90 xl:hidden",
                  {
                    "top-5 left-12": locale === "ja",
                  }
                )}
                strokeColor={[
                  { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                ]}
                strokeDirection="to-b"
                strokeWidth={1}
                path="M 8,0 L 75.2,0 A 8,8 0,0,1 83.2,8 L 83.2,68 A 8,8 0,0,1 75.2,76 L 8,76 A 8,8 0,0,1 0,68 L 0,8 A 8,8 0,0,1 8,0 Z"
              />
              <ShapeGradientWrapper
                index="8769045634534985"
                blurSize="2xs"
                shapeWidth={179}
                shapeHeight={83}
                className={clsx("absolute z-50 top-6", {
                  "right-56 ": locale === "en",
                  "right-24 lg:right-80 top-5": locale === "ja",
                  hidden: locale === "zh-cn" || locale === "zh-tw",
                })}
                strokeColor={[
                  { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-bl"
                strokeWidth={1}
                path={
                  "M0.4 75.2L0.4 8C0.4 3.803 3.803 0.4 8 0.4L132.865 0.4C134.779 0.4 136.624 1.123 138.029 2.423L176.363 37.919C177.917 39.357 178.8 41.378 178.8 43.495L178.8 75.2C178.8 79.397 175.398 82.8 171.2 82.8L8 82.8C3.803 82.8 0.4 79.397 0.4 75.2Z"
                }
              />

              <p
                className={clsx(
                  "text-custom-90 leading-[86%] tracking-normal font-bold font-karantina text-left w-full text-gradient",
                  locale === "ja" && "text-custom-75! leading-none",
                  {
                    "leading-none! bg-[linear-gradient(322.61deg,#FFFFFF_77.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(322.41deg,var(--color-white)_77.41%,var(--color-avatar-violet)_103.78%)]":
                      locale === "ja",
                    "leading-none! bg-[linear-gradient(298.41deg,#FFFFFF_88.41%,#00D0F6_101.78%)] dark:bg-[linear-gradient(298.41deg,var(--color-white)_88.41%,var(--color-avatar-violet)_101.78%)]":
                      locale === "zh-cn" || locale === "zh-tw",
                    "bg-[linear-gradient(322.61deg,#FFFFFF_77.41%,#00D0F6_91.78%)] dark:bg-[linear-gradient(322.41deg,var(--color-white)_77.41%,var(--color-avatar-violet)_103%)]":
                      locale === "en",
                  }
                )}
              >
                {t("title")}
              </p>

              <p
                className={clsx(
                  "text-white uppercase text-left font-bold text-custom-75 leading-[86%] tracking-[2%] font-karantina",
                  locale === "ja" && "text-custom-46! leading-none"
                )}
              >
                {t("subtitle")}
              </p>
            </div>
            {/* Summary Tablet */}
            <div className="hidden md:block xl:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <div className="max-w-[301px] min-[1024px]:max-w-[325px] px-4.5 py-4 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)] text-white font-kanit flex-center text-lg leading-[135%]">
                <p>
                  <span className="font-medium">AVATAR48</span> {t("content")}
                </p>
              </div>
            </div>

            {/* Summary Desktop */}
            <div
              className={clsx(
                "xl:block text-white font-kanit flex-center  3xl:text-2xl! 4xl:hidden! leading-[142%] absolute left-0 top-1/2 -translate-y-2/9 2xl:-translate-y-2/6 3xl:translate-y-[20%]! 4xl:-translate-y-1/12! z-10 hidden 3xl:max-w-[570px] px-4.5 py-3 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)]",
                {
                  "max-w-[485px] text-sm 2xl:text-xl":
                    locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                  "max-w-[511px] text-lg whitespace-pre-line": locale === "ja",
                }
              )}
            >
              <p className="">
                <span className="font-medium">AVATAR48</span> {t("content")}
              </p>
            </div>

            {/* Mobile */}
            <div className="md:hidden relative w-full h-auto flex flex-col items-center justify-end">
              {/* Title Mobile */}
              <div
                className={clsx(
                  "md:hidden absolute z-10 -top-2 left-1/2 -translate-x-1/2 max-w-[321px] w-full flex flex-col gap-1",
                  locale === "ja" && "max-w-[341px]!",
                  (locale === "zh-cn" || locale === "zh-tw") && "gap-1"
                )}
              >
                {/* Mobile shape right */}
                <ShapeGradientWrapper
                  index="mobile-shape-right-785648678450"
                  shapeWidth={70}
                  shapeHeight={38.57}
                  blurSize="2xs"
                  className={clsx("absolute md:hidden z-10", {
                    "bottom-2.5 -right-3": locale === "en",
                    "-bottom-5.5 right-1":
                      locale === "zh-cn" || locale === "zh-tw",
                    "bottom-2 -right-3": locale === "ja",
                  })}
                  strokeColor={[
                    { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                    { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                  ]}
                  strokeDirection="to-bl"
                  strokeWidth={1}
                  path="M 5,0 L 50,0 Q 52,0 53.5,1.5 L 68.5,16.5 Q 70,18 70,20.5 L 70,33.57 A 5,5 0,0,1 65,38.57 L 5,38.57 A 5,5 0,0,1 0,33.57 L 0,5 A 5,5 0,0,1 5,0 Z"
                />
                <p
                  className={clsx(
                    "leading-[86%] tracking-normal font-bold font-karantina text-left w-full text-gradient",
                    {
                      "text-custom-42! bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)]":
                        locale === "en",
                      "leading-none text-custom-33! bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)]":
                        locale === "zh-tw" || locale === "zh-cn",
                      "leading-none text-custom-32! bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)]":
                        locale === "ja",
                    }
                  )}
                >
                  {t("title")}
                </p>

                <p
                  className={clsx(
                    "text-white uppercase text-left font-bold text-custom-32 leading-[86%] tracking-[0.64px] font-karantina",
                    locale === "ja" &&
                      "text-custom-24! leading-none tracking-[0.48px]!",
                    (locale === "zh-cn" || locale === "zh-tw") &&
                      "text-custom-42! tracking-[0.48px]! leading-none"
                  )}
                >
                  {t("subtitle")}
                </p>
              </div>
              <OptimizedThemeImage
                className="w-full h-auto object-contain"
                lightURL="/assets/robotic-mobile-light.png"
                darkURL="/assets/robotic-mobile-dark.png"
                width={375}
                height={493}
                quality={100}
                priority={true}
                placeholder="blur"
                alt="Robotic"
              />
            </div>
            {/* Tablet */}
            <OptimizedThemeImage
              className="relative left-10 min-[1024px]:left-5 hidden md:block xl:hidden min-[1024px]:w-[88.2%] w-[83%] h-auto object-contain"
              lightURL="/assets/robotic-tablet-light.png"
              darkURL="/assets/robotic-tablet-dark.png"
              width={832}
              height={926}
              quality={100}
              priority={true}
              placeholder="blur"
              alt="Robotic"
            />

            {/* Desktop title and image */}
            <div className="hidden xl:flex xl:items-end xl:justify-end relative size-full 3xl:w-full 3xl:h-auto">
              {/* Summary Desktop */}
              <div className="hidden 4xl:block absolute text-white font-kanit flex-center text-2xl! leading-[142%] left-0 top-1/2 -translate-y-1/2 z-10 max-w-[600px] 4xl:max-w-[577px] px-4.5 py-3 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)]">
                <p className="">
                  <span className="font-medium">AVATAR48</span> {t("content")}
                </p>
              </div>

              <div
                className={clsx(
                  "absolute top-7 z-10 left-0 w-full flex flex-col gap-1 2xl:gap-[15px]",
                  locale === "ja" && "gap-[31px]"
                )}
              >
                <ShapeGradientWrapper
                  index="698540"
                  blurSize="2xs"
                  shapeWidth={104}
                  shapeHeight={95}
                  className={clsx("absolute z-50 -rotate-90", {
                    "top-20 2xl:top-37 left-82 2xl:left-82": locale === "en",
                    "-left-5 top-5 2xl:top-10 3xl:top-10 4xl:top-10":
                      locale === "ja",
                    "top-8 2xl:top-45 -left-12":
                      locale === "zh-cn" || locale === "zh-tw",
                  })}
                  strokeColor={[
                    { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                    { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                  ]}
                  strokeDirection="to-b"
                  strokeWidth={1}
                  path="M 10,0 L 94,0 A 10,10 0,0,1 104,10 L 104,85 A 10,10 0,0,1 94,95 L 10,95 A 10,10 0,0,1 0,85 L 0,10 A 10,10 0,0,1 10,0 Z"
                />
                <ShapeGradientWrapper
                  index="490865490"
                  blurSize="2xs"
                  shapeWidth={224}
                  shapeHeight={104}
                  className={clsx("absolute z-50", {
                    "top-10 right-55 3xl:right-127 3xl:top-15 4xl:right-127 4xl:top-13":
                      locale === "en",
                    "right-100 top-5 2xl:top-10 3xl:right-127 3xl:top-10 4xl:right-127 4xl:top-10":
                      locale === "ja",
                    "left-100 top-8 2xl:top-17":
                      locale === "zh-cn" || locale === "zh-tw",
                  })}
                  strokeColor={[
                    { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                    { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                  ]}
                  strokeDirection="to-bl"
                  strokeWidth={1}
                  path={
                    "M0.5 94L0.499996 10C0.5 4.7533 4.75329 0.5 10 0.5L166.081 0.499993C168.474 0.499993 170.78 1.4033 172.536 3.02929L220.454 47.3984C222.396 49.1964 223.5 51.7228 223.5 54.3691L223.5 94C223.5 99.2467 219.247 103.5 214 103.5L10 103.5C4.7533 103.5 0.5 99.2467 0.5 94Z"
                  }
                />
                <p
                  className={clsx(
                    "leading-[86%] tracking-[1.25px] font-bold font-karantina text-left w-full text-gradient",
                    {
                      "text-custom-56 2xl:text-custom-82 3xl:text-custom-120 4xl:text-custom-145 leading-none! bg-[linear-gradient(279.61deg,#FFFFFF_86.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(279.41deg,var(--color-white)_86.41%,var(--color-avatar-violet)_100.78%)]":
                        locale === "ja",
                      "leading-none! text-custom-75 2xl:text-custom-130 bg-[linear-gradient(298.41deg,#FFFFFF_88.41%,#00D0F6_101.78%)] dark:bg-[linear-gradient(298.41deg,var(--color-white)_88.41%,var(--color-avatar-violet)_101.78%)]":
                        locale === "zh-cn" || locale === "zh-tw",
                      "text-custom-98 2xl:text-custom-125 3xl:text-custom-153 bg-[linear-gradient(328.61deg,#FFFFFF_74.41%,#00D0F6_91.78%)] dark:bg-[linear-gradient(328.41deg,var(--color-white)_74.41%,var(--color-avatar-violet)_100.78%)]":
                        locale === "en",
                    }
                  )}
                >
                  {t("title")}
                </p>

                <p
                  className={clsx(
                    "text-white uppercase text-left font-bold leading-[75%] tracking-[1.64px] font-karantina",
                    {
                      "text-custom-56 2xl:text-custom-82 3xl:text-custom-120 4xl:text-custom-145 leading-none!":
                        locale === "ja",
                      "leading-none! text-custom-75 2xl:text-custom-85":
                        locale === "zh-cn" || locale === "zh-tw",
                      "text-custom-56 2xl:text-custom-82 3xl:text-custom-106 leading-[75%] tracking-[1.64px] font-karantina!":
                        locale === "en",
                    }
                  )}
                >
                  {t("subtitle")}
                </p>
              </div>
              <OptimizedThemeImage
                className="hidden xl:block w-auto h-full 3xl:h-auto 3xl:w-[918px] 4xl:w-[1024px] object-contain"
                lightURL="/assets/robotic-desktop-light.png"
                darkURL="/assets/robotic-desktop-dark.png"
                width={918}
                height={950}
                quality={100}
                priority={true}
                placeholder="blur"
                alt="Robotic"
              />
            </div>
          </div>

          <FloatButton
            position="bottom-right"
            className="md:hidden size-fit! right-1.75 bottom-21"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BorderGradientWrapper
              gradientType="linear"
              className="p-1.5"
              rounded="99999px"
              borderColor="--avatar-info-border"
              strokeWidth="2px"
            >
              <div className="p-2 backdrop-blur-2xl bg-[rgba(255,255,255,0.1)] rounded-full">
                <Info color="#fff" className="size-4.5!" />
              </div>
            </BorderGradientWrapper>
          </FloatButton>
          {isOpen && (
            <div className="fixed md:hidden left-0 px-8 bottom-28 w-screen z-999!">
              <div className="p-4.5 font-kanit font-normal leading-[121%] tracking-[0%] size-full min-h-36 backdrop-blur-sm rounded-lg bg-linear-to-b from-black/10 to-black/10 text-white flex-center text-base">
                AVATAR48 {t("content")}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Robotic;
