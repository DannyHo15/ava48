import { useLocale, useTranslations } from "next-intl";
import ImageAvatar48 from "../ImageAvatar48";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import clsx from "clsx";
import { useState } from "react";
import { FloatButton } from "../ui/float-button";
import BorderGradientWrapper from "../BorderGradientWrapper";
import { Info } from "lucide-react";
import { SectionWrapper } from "../SectionWrapper";

const EarnAyaConnection = () => {
  const t = useTranslations("LandingPage.section_earn_aya_connection");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper>
      <div className="md:hidden fixed inset-0 bg-[url(/assets/bg-aya-heart-mobile-light.png)] dark:bg-[url(/assets/bg-aya-heart-mobile-dark.png)] bg-cover bg-center" />
      <div className="hidden md:block fixed inset-0 bg-[url(/assets/bg-aya-heart-tablet-light.png)] dark:bg-[url(/assets/bg-aya-heart-tablet-dark.png)] bg-cover bg-center" />
      <div className="hidden xl:block fixed inset-0 bg-[url(/assets/bg-aya-heart-desktop-light.png)] dark:bg-[url(/assets/bg-aya-heart-desktop-dark.png)] bg-cover bg-center" />
      <div className="size-full relative flex flex-col items-center justify-between">
        <div
          className="h-[30%] md:hidden w-full flex flex-col items-center justify-end relative z-10 -mb-3 sm:-mb-6"
          id="section-heart"
        >
          <div
            className={clsx(
              "absolute z-20 w-full sm:mx-0 max-w-[310px] flex flex-col gap-[3px]",
              {
                "max-w-[310px]": locale === "en",
                "max-w-[340px]": locale === "ja",
                "max-w-[294px]": locale === "zh-cn" || locale === "zh-tw",
              }
            )}
          >
            {/* Mobile shape left */}
            {/* <ShapeGradientWrapper
              index="mobile-shape-left-3829"
              shapeWidth={40}
              shapeHeight={56}
              blurSize="2xs"
              className={clsx(
                "md:hidden top-[20%] left-[14.5%] -rotate-90 z-10",
                locale === "ja" && "hidden"
              )}
              strokeColor={[
                { offset: "0%", stopColor: "rgba(255, 255, 255, 0.2)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0.9)" },
              ]}
              strokeDirection="to-b"
              strokeWidth={1}
              path="M 3.2,0 L 36.8,0 A 3.2,3.2 0,0,1 40,3.2 L 40,52.8 A 3.2,3.2 0,0,1 36.8,56 L 3.2,56 A 3.2,3.2 0,0,1 0,52.8 L 0,3.2 A 3.2,3.2 0,0,1 3.2,0 Z"
            /> */}
            <ShapeGradientWrapper
              index="mobile-shape-right-1273168"
              shapeWidth={65}
              shapeHeight={42}
              blurSize="2xs"
              className={clsx(
                "absolute md:hidden bottom-[26%] -right-[1%] z-10",
                locale === "ja" && "right-[5%] bottom-[10%]"
              )}
              strokeColor={[
                { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-bl"
              strokeWidth={1}
              path="M 5,0 L 40,0 Q 42,0 43.5,1.5 L 62.5,18.5 Q 64,20 64,22 L 64,37 A 5,5 0,0,1 59,42 L 5,42 A 5,5 0,0,1 0,37 L 0,5 A 5,5 0,0,1 5,0 Z"
            />
            <div
              className={clsx(
                "relative w-fit flex flex-col items-end gap-2 whitespace-nowrap",
                {
                  "gap-2": locale === "en",
                  "": locale === "ja",
                  "gap-4": locale === "zh-cn" || locale === "zh-tw",
                }
              )}
            >
              <p
                className={clsx(
                  "font-bold tracking-[2%] font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient",
                  {
                    "text-custom-55 leading-[86%]": locale === "en",
                    "text-custom-33 leading-none": locale === "ja",
                    "text-custom-55 tracking-[1.1px] leading-none":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
              >
                {t("title")}
              </p>
            </div>
            <p
              className={clsx(
                "text-white text-right uppercase font-bold w-full tracking-[2%] font-karantina",
                {
                  "text-custom-40 leading-[86%]": locale === "en",
                  "text-custom-23 leading-none whitespace-pre-line":
                    locale === "ja",
                  "text-custom-37 leading-none tracking-[0.74px]":
                    locale === "zh-cn" || locale === "zh-tw",
                }
              )}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="h-[50%] md:h-full w-full flex flex-col justify-center">
          <div className="h-full md:relative md:grid md:grid-cols-12 md:items-center md:justify-center md:px-10 xl:px-0 xl:max-w-[1176px] xl:mx-auto">
            <div className="md:col-span-6 relative h-full md:h-auto flex items-center justify-center xl:scale-70 2xl:scale-100 3xl:scale-120 4xl:scale-140!">
              <div
                className={clsx(
                  "hidden md:flex flex-col min-[900px]:gap-4 gap-1 md:absolute z-0 lg:z-10",
                  {
                    "w-[698px] min-[900px]:-top-70 -top-65 left-[120%] -translate-x-5/9 lg:-translate-x-1/2 lg:left-[110%] xl:left-205 lg:-top-60 xl:-top-10":
                      locale === "en",
                    "-top-55 min-[900px]:-top-65 left-[95%] lg:-translate-x-1/2 -translate-x-[44%] lg:gap-2 xl:gap-10 xl:-right-10 xl:left-201 lg:-top-62 xl:-top-10 w-[720px] min-[900px]:w-[880px] lg:w-[880px] xl:w-[1070px]":
                      locale === "ja",
                    "-top-50 left-[130%] -translate-x-5/9 lg:-translate-x-1/2 gap-8 w-[581px] lg:gap-10 lg:left-205 lg:-top-3 xl:-top-20 lg:w-[563px]":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
              >
                <div className="relative w-full xl:w-fit flex flex-col items-end gap-2">
                  <p
                    className={clsx(
                      "tracking-[2.4px] xl:tracking-[2.5px] font-bold font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient",
                      {
                        "text-custom-120 xl:text-custom-125 leading-[86%]":
                          locale === "en",
                        "text-custom-62 min-[900px]:text-custom-80 lg:text-custom-85 whitespace-nowrap leading-none tracking-[1.64px]":
                          locale === "ja",
                        "text-custom-110 lg:text-custom-120 leading-none tracking-[2.2px]":
                          locale === "zh-cn" || locale === "zh-tw",
                      }
                    )}
                  >
                    {t("title")}
                  </p>
                </div>
                <p
                  className={clsx(
                    "text-right uppercase leading-[86%] w-full font-bold font-karantina tracking-[1.64px] text-white",
                    {
                      "text-custom-82 whitespace-nowrap leading-[100%] tracking-[2%]":
                        locale === "en",
                      "text-custom-45 min-[900px]:text-custom-50 lg:text-custom-55 whitespace-nowrap leading-none tracking-[1.64px]":
                        locale === "ja",
                      "text-custom-70 lg:text-custom-98 whitespace-nowrap leading-none tracking-[1.396px]":
                        locale === "zh-cn" || locale === "zh-tw",
                    }
                  )}
                >
                  {t("subtitle")}
                </p>
                {/* Desktop shape left */}
                <ShapeGradientWrapper
                  index="4829859478534090"
                  blurSize="2xs"
                  shapeWidth={104}
                  shapeHeight={95}
                  className={clsx(
                    "hidden md:block z-50 top-[38%] left-[11%] xl:top-[38%] xl:left-[8.5%] -rotate-90",
                    locale === "ja" && "-left-5! top-7! lg:left-80! lg:top-10!",
                    (locale === "zh-cn" || locale === "zh-tw") &&
                      "-left-10! top-10! lg:-left-[5%]! lg:top-[30%]!"
                  )}
                  strokeColor={[
                    { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                    { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                  ]}
                  strokeDirection="to-b"
                  strokeWidth={1}
                  path="M 10,0 L 94,0 A 10,10 0,0,1 104,10 L 104,85 A 10,10 0,0,1 94,95 L 10,95 A 10,10 0,0,1 0,85 L 0,10 A 10,10 0,0,1 10,0 Z"
                />
                {/* Desktop shape right */}
                <ShapeGradientWrapper
                  index="85390859034809"
                  blurSize="2xs"
                  shapeWidth={224}
                  shapeHeight={104}
                  className={clsx(
                    "absolute z-50 hidden md:block bottom-[25%] -right-[8%] xl:bottom-[15%] xl:right-[1%]!",
                    locale === "ja" &&
                      "bottom-[15%] right-0 lg:bottom-[22%] lg:right-8!",
                    (locale === "zh-cn" || locale === "zh-tw") &&
                      "bottom-8 right-0 lg:bottom-[22%] lg:-right-12!"
                  )}
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
              </div>
              {/* <div className="hidden md:block absolute top-[65%] lg:top-[50%] w-[1310.69px] h-[911.807px] blur-[174.75px] -rotate-[16.775deg] rounded-[1310.69px] bg-[linear-gradient(144deg,rgba(0,131,245,0.5)_29.99%,rgba(73,255,240,0.5)_49.39%,rgba(29,78,216,0.5)_83.09%)] dark:bg-[linear-gradient(144deg,rgba(216,29,226,0.9)_29.99%,rgba(73,255,240,0.5)_49.39%,rgba(29,78,216,0.5)_83.09%)]" /> */}
              <ImageAvatar48
                className="relative md:left-10 w-full h-auto object-contain scale-130 md:scale-[143%] xl:scale-100 2xl:scale-[114.7%] md:block md:w-auto md:h-full md:object-contain md:transform-gpu md:origin-center md:mx-auto"
                lightURL="/assets/aya-heart-mobile-light.png"
                drakURL="/assets/aya-heart-mobile-dark.png"
              />
            </div>
            <div className="hidden md:col-span-6 w-fit 2xl:w-full xl:mb-0 md:flex md:justify-end">
              <div
                className={clsx(
                  "w-full flex flex-col gap-8 items-center justify-end",
                  {
                    "max-w-[391px] xl:max-w-[485px]":
                      locale === "en" ||
                      locale === "zh-cn" ||
                      locale === "zh-tw",
                    "max-w-[404px] xl:max-w-[494px]": locale === "ja",
                  }
                )}
              >
                <ImageAvatar48
                  className="hidden md:block scale-150 w-full h-auto object-contain"
                  lightURL="/assets/play-earn-heart-light.png"
                  drakURL="/assets/play-earn-heart-dark.png"
                />

                <p className="w-full text-white text-lg text-left font-kanit tracking-[0%] text-[18px] xl:text-[20px] leading-[117%] xl:leading-[142%] font-normal whitespace-pre-line">
                  {t("content")}
                </p>
              </div>
            </div>
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
            <div className="px-5 size-full min-h-36 backdrop-blur-sm py-4 rounded-lg bg-linear-to-b from-black/10 to-black/10 text-white flex-center text-base">
              {t("content")}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default EarnAyaConnection;
