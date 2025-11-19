import { Info } from "lucide-react";
import { FloatButton } from "../ui/float-button";
import FloatInformation from "../FloatInformation";
import Image from "next/image";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import { useTranslations } from "next-intl";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import clsx from "clsx";

const RiseTogether = () => {
  const t = useTranslations("LandingPage.section_5");
  const { locale } = useParams();
  return (
    <SectionWrapper>
      <div className="fixed inset-0 hidden min-[1025px]:block! bg-[url(/assets/bg-section-6-lg.png)] bg-cover bg-center" />
      <div className="fixed inset-0 hidden sm:block min-[1025px]:hidden! bg-[url(/assets/bg-section-6-md.png)] bg-cover bg-center" />
      <div className="fixed inset-0 sm:hidden bg-[url(/assets/bg-section-6-sm.png)] bg-cover bg-center" />{" "}
      <div className="fixed md:hidden h-full  top-0 -right-64 cs-radial-sm" />
      <div
        className="max-w-5xl grid grid-cols-1 px-5 size-full mx-auto gap-4 sm:gap-8 lg:flex-center lg:flex lg:justify-center lg:w-fit lg:gap-10 sm:-mt-18 lg:-mt-10 lg:scale-100! xl:scale-100 2xl:scale-125 3xl:scale-130! 4xl:scale-150!"
        id="section-rank48"
      >
        {/* SLOGAN */}
        <div className="relative size-full flex-col flex justify-end z-10 sm:justify-end lg:justify-center 3xl:justify-center-safe">
          <div className="w-full lg:w-fit! lg:h-185! lg:items-start">
            <ImageAvatar48
              className="h-60 w-92.5 sm:w-130.5! sm:h-102! lg:max-w-178! lg:h-134! object-contain mx-auto"
              lightURL={"/assets/rank48-light.png"}
              drakURL={"/assets/rank48-dark.png"}
            ></ImageAvatar48>
            <div
              className={clsx(
                "relative leading-none size-fit flex gap-0 flex-col items-center -mt-12.5 lg:-mt-35.5 sm:-mt-48! z-20 lg:-bottom-20 mx-auto",
                {
                  "": locale === "ja",
                },
              )}
            >
              <div
                className={clsx(
                  "w-full max-w-95 sm:max-w-130.5 lg:max-w-150.5 bg-linear-150 from-white via-white dark:to-avatar-violet to-avatar-primary text-gradient text-nowrap",
                  locale === "ja" ? "sm:max-w-130 lg:max-w-full" : "",
                )}
              >
                <ShapeGradientWrapper
                  index={"section5_rank48"}
                  className={clsx(
                    "absolute sm:-left-2 sm:top-1 -left-8 -top-6 z-10 sm:scale-100 scale-75",
                    {
                      "lg:-top-6 sm:-top-9 -top-10": locale === "ja",
                      "lg:-top-7": locale === "zh-cn" || locale === "zh-tw",
                    },
                  )}
                  strokeWidth={1}
                  blurSize={"xs"}
                  key={""}
                  shapeWidth={109}
                  shapeHeight={100}
                  path={
                    "M 0 58 A 15 15 0 0 1 3 47 L 36 29 A 15 15 0 0 1 45 27 L 85 27 A 16 16 0 0 1 91 33 L 91 77 A 16 16 0 0 1 87 86 L 4 86 A 15 15 0 0 1 0 81 Z"
                  }
                ></ShapeGradientWrapper>
                <span
                  className={clsx(
                    "text-custom-56 sm:text-custom-70 lg:text-custom-82 font-karantina font-bold z-1",
                    {
                      "text-custom-46! lg:text-custom-70!": locale === "ja",
                      "sm:text-custom-90! xl:text-custom-125!":
                        locale === "zh-cn" || locale === "zh-tw",
                    },
                  )}
                >
                  {t(locale === "ja" ? "rank" : "join")}{" "}
                </span>
                <label
                  className={clsx(
                    "font-karantina text-custom-82 lg:text-custom-145 sm:text-custom-123 font-bold",
                    locale === "ja"
                      ? "lg:text-custom-90! sm:text-custom-106! text-custom-62!"
                      : "hidden",
                  )}
                >
                  48
                </label>
                <label
                  className={clsx(
                    "font-karantina text-custom-70 sm:text-custom-106 lg:text-custom-125 font-bold",
                    {
                      "sm:text-custom-62! lg:text-custom-70! text-custom-46! text-wrap!":
                        locale === "ja",
                    },
                  )}
                >
                  {t(locale === "ja" ? "join" : "rank")}
                </label>

                {/* Comma for 48 */}
                <label
                  className={clsx(
                    "font-karantina text-custom-82 lg:text-custom-145 sm:text-custom-123 font-bold",
                    locale === "ja" ? "hidden" : "",
                  )}
                >
                  48,
                </label>
              </div>
              <div
                className={clsx(
                  "relative text-custom-40 sm:text-custom-70 lg:text-custom-82 font-karantina text-center  w-full text-white font-bold",
                  {
                    "lg:text-custom-70! sm:text-custom-62!": locale === "ja",
                  },
                )}
              >
                <ShapeGradientWrapper
                  index={"section5_rise_together"}
                  className={clsx(
                    "absolute lg:right-10 sm:right-9 -bottom-16 -right-9 z-10 scale-75 sm:scale-100",
                    {
                      "lg:-bottom-16 lg:right-14 sm:right-18 right-8":
                        locale === "ja",
                      "lg:right-25": locale === "zh-cn" || locale === "zh-tw",
                    },
                  )}
                  strokeWidth={1}
                  strokeDirection="to-l"
                  blurSize={"2xs"}
                  key={""}
                  shapeWidth={120}
                  shapeHeight={98}
                  path={
                    "M 0 5 A 10 10 0 0 1 10 0 L 89 0 A 12 12 0 0 1 95 2 L 116 21 A 16 16 0 0 1 119 26 L 119 60 A 10 10 0 0 1 114 64 L 10 64 A 10 10 0 0 1 0 57 Z"
                  }
                ></ShapeGradientWrapper>

                {t("rise_together")}
              </div>
            </div>
          </div>
        </div>
        {/* Character */}
        <div className="size-full flex justify-center z-10 items-start lg:items-center lg:w-min">
          <div className="gap-8 sm:gap-2 size-full sm:flex lg:flex-col-reverse lg:items-center max-w-220 mx-auto max-h-52 sm:max-h-91! lg:max-h-fit! justify-center lg:min-w-fit! pt-5 lg:pt-20">
            <div className="flex justify-center sm:justify-between sm:w-3/5 sm:max-h-fit lg:size-fit size-full lg:max-h-full">
              <div className="flex justify-end gap-2 w-1/2 min-h-fit">
                <ImageAvatar48
                  className="max-w-full h-full object-contain"
                  lightURL={"/assets/aya-fujimoto-light.png"}
                  drakURL={"/assets/aya-fujimoto-dark.png"}
                ></ImageAvatar48>
              </div>
              <div className="flex-center justify-start gap-2 w-1/2">
                <ImageAvatar48
                  className="max-w-full h-full object-contain"
                  lightURL={"/assets/eimi-fukada-light.png"}
                  drakURL={"/assets/eimi-fukada-dark.png"}
                ></ImageAvatar48>
              </div>
            </div>
            <div className="sm:w-2/5 w-0 h-full flex-center z-50 lg:min-w-80! max-h-fit  2xl:min-w-130!">
              <FloatInformation content={t("description")} />
            </div>
          </div>
        </div>
        {/*Radient*/}
        <div className="w-327.5 h-228 bg-radial-[100%_100%_at_50%_50%] from-avatar-blue-5/30 to-50% to-avatar-blue-4/5 absolute  -rotate-17 rounded-[100%] overflow-hidden -bottom-100 sm:left-20 lg:left-50 backdrop-blur-87.5"></div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
