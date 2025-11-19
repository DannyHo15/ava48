import { useState } from "react";
import BorderGradientWrapper from "../BorderGradientWrapper";
import { FloatButton } from "../ui/float-button";
import { Info } from "lucide-react";
import ImageAvatar48 from "../ImageAvatar48";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { SectionWrapper } from "../SectionWrapper";
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
          id="section-heart"
        >
          <div
            className={clsx(
              "relative size-full mx-auto flex flex-col items-end justify-end md:gap-9.5 xl:max-w-[1040px] 2xl:max-w-[1281px] xl:pt-[130px] 3xl:pt-0! 3xl:max-w-[1570px]! xl:mx-auto xl:flex-row xl:gap-0",
              locale === "ja" && "md:gap-18!"
            )}
          >
            {/* Title Tablet */}
            <div className="hidden md:flex xl:hidden w-full flex-col gap-[17px] relative">
              <ShapeGradientWrapper
                index="57307674538"
                blurSize="2xs"
                shapeWidth={104}
                shapeHeight={95}
                className={clsx(
                  "absolute z-50 top-8 left-10 -rotate-90",
                  locale === "ja" && "top-5! left-15!"
                )}
                strokeColor={[
                  { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                ]}
                strokeDirection="to-b"
                strokeWidth={1}
                path="M 10,0 L 94,0 A 10,10 0,0,1 104,10 L 104,85 A 10,10 0,0,1 94,95 L 10,95 A 10,10 0,0,1 0,85 L 0,10 A 10,10 0,0,1 10,0 Z"
              />
              <ShapeGradientWrapper
                index="8769045634"
                blurSize="2xs"
                shapeWidth={224}
                shapeHeight={104}
                className={clsx(
                  "absolute z-50 top-8 right-70",
                  locale === "ja" ||
                    ((locale === "zh-cn" || locale === "zh-tw") && "hidden")
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
              <p
                className={clsx(
                  "text-custom-90 leading-[86%] tracking-normal font-bold font-karantina text-left w-full bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)] text-gradient",
                  locale === "ja" && "text-custom-75!"
                )}
              >
                {t("title")}
              </p>

              <p
                className={clsx(
                  "text-white uppercase text-left font-bold text-custom-75 leading-[86%] tracking-[2%] font-karantina",
                  locale === "ja" && "text-custom-46!"
                )}
              >
                {t("subtitle")}
              </p>
            </div>
            {/* Summary Tablet */}
            <div className="hidden md:block xl:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 px-10">
              <div className="max-w-[301px] px-4.5 py-4 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)] text-white font-kanit flex-center text-lg leading-[135%]">
                <p>
                  <span className="font-medium">AVATAR48</span> {t("content")}
                </p>
              </div>
            </div>

            {/* Summary Desktop */}
            <div className="xl:block text-white font-kanit flex-center text-sm 2xl:text-xl 3xl:text-2xl! 4xl:hidden! leading-[142%] absolute left-0 top-1/2 -translate-y-2/9 2xl:-translate-y-2/6 3xl:translate-y-[20%]! 4xl:-translate-y-1/12! z-10 hidden max-w-[485px] 3xl:max-w-[600px] px-4.5 py-3 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)]">
              <p className="">
                <span className="font-medium">AVATAR48</span> {t("content")}
              </p>
            </div>

            {/* Mobile */}
            <div className="md:hidden relative w-full h-auto">
              {/* Title Mobile */}
              <div
                className={clsx(
                  "md:hidden absolute -top-2 left-1/2 -translate-x-1/2 max-w-[321px] w-full flex flex-col gap-1",
                  locale === "ja" && "max-w-[341px]!",
                  (locale === "zh-cn" || locale === "zh-tw") && "gap-3"
                )}
              >
                {/* Mobile shape right */}
                <ShapeGradientWrapper
                  index="mobile-shape-right-785648678450"
                  shapeWidth={70}
                  shapeHeight={38.57}
                  blurSize="2xs"
                  className="absolute md:hidden bottom-2.5 -right-3 z-10"
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
                    "text-custom-42 leading-[86%] tracking-normal font-bold font-karantina text-left w-full bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)] text-gradient",
                    locale === "ja" && "text-custom-32!",
                    (locale === "zh-cn" || locale === "zh-tw") &&
                      "text-custom-33!"
                  )}
                >
                  {t("title")}
                </p>

                <p
                  className={clsx(
                    "text-white uppercase text-left font-bold text-custom-32 leading-[86%] tracking-[0.64px] font-karantina",
                    locale === "ja" &&
                      "text-custom-24! leading-[20.64px]! tracking-[0.48px]!",
                    (locale === "zh-cn" || locale === "zh-tw") &&
                      "text-custom-42! leading-[20.64px]! tracking-[0.48px]!"
                  )}
                >
                  {t("subtitle")}
                </p>
              </div>
              <ImageAvatar48
                className="w-full h-auto object-contain"
                lightURL="/assets/robotic-mobile-light.png"
                drakURL="/assets/robotic-mobile-dark.png"
              />
            </div>
            {/* Tablet */}
            <ImageAvatar48
              className="hidden md:block xl:hidden w-[88.2%] h-auto object-contain"
              lightURL="/assets/robotic-tablet-light.png"
              drakURL="/assets/robotic-tablet-dark.png"
            />

            {/* Desktop title and image */}
            <div className="hidden xl:flex xl:items-end xl:justify-end relative size-full 3xl:w-full 3xl:h-auto">
              {/* Summary Desktop */}
              <div className="hidden 4xl:block absolute text-white font-kanit flex-center text-2xl! leading-[142%] left-0 top-1/2 -translate-y-1/2 z-10 max-w-[600px] px-4.5 py-3 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.00)_90%)]">
                <p className="">
                  <span className="font-medium">AVATAR48</span> {t("content")}
                </p>
              </div>

              <div
                className={clsx(
                  "absolute top-7 left-0 w-full flex flex-col gap-1 2xl:gap-[15px]",
                  locale === "ja" && "gap-[31px]"
                )}
              >
                <ShapeGradientWrapper
                  index="698540"
                  blurSize="2xs"
                  shapeWidth={104}
                  shapeHeight={95}
                  className={clsx("absolute z-50 -rotate-90", {
                    "top-15 left-82": locale === "en",
                    "-left-5 top-18": locale === "ja",
                    "top-17": locale === "zh-cn" || locale === "zh-tw",
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
                    "top-10 right-55 3xl:right-80 3xl:top-15 4xl:right-70 4xl:top-15":
                      locale === "en",
                    "right-100 top-10": locale === "ja",
                    "left-100 top-17": locale === "zh-cn" || locale === "zh-tw",
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
                    "leading-[86%] tracking-[1.25px] font-bold font-karantina text-left w-full bg-[linear-gradient(279.61deg,#FFFFFF_68.41%,#00D0F6_100.78%)] dark:bg-[linear-gradient(325.41deg,var(--color-white)_68.41%,var(--color-avatar-violet)_103.78%)] text-gradient",
                    {
                      "xl:text-custom-82 3xl:text-custom-123! 4xl:text-custom-145! leading-none!":
                        locale === "ja",
                      "leading-none! text-custom-130":
                        locale === "zh-cn" || locale === "zh-tw",
                      "text-custom-98 2xl:text-custom-125 3xl:text-custom-153!":
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
                      "xl:text-custom-82 3xl:text-custom-110 4xl:text-custom-145 leading-none!":
                        locale === "ja",
                      "leading-none! xl:text-custom-85":
                        locale === "zh-cn" || locale === "zh-tw",
                      "text-custom-56 2xl:text-custom-82 3xl:text-custom-106 leading-[75%] tracking-[1.64px] font-karantina!":
                        locale === "en",
                    }
                  )}
                >
                  {t("subtitle")}
                </p>
              </div>
              <ImageAvatar48
                className="hidden xl:block w-auto h-full 3xl:h-auto 3xl:w-[918px] 4xl:w-[1024px] object-contain"
                lightURL="/assets/robotic-desktop-light.png"
                drakURL="/assets/robotic-desktop-dark.png"
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
