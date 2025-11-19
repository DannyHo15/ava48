import FloatInformation from "../FloatInformation";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import { useTranslations } from "next-intl";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import clsx from "clsx";

const Vision = () => {
  const t = useTranslations();
  const { locale } = useParams();
  return (
    <SectionWrapper>
      <div className="fixed inset-0 hidden min-[1025px]:block! bg-[url(/assets/bg-section-6-lg-light.png)] dark:bg-[url(/assets/bg-section-6-lg-dark.png)] bg-cover bg-center"/>
      <div className="fixed inset-0 hidden sm:block min-[1025px]:hidden! bg-[url(/assets/bg-section-6-md-light.png)] dark:bg-[url(/assets/bg-section-6-md-dark.png)] bg-cover bg-center"/>
      <div className="fixed inset-0 sm:hidden bg-[url(/assets/bg-section-6-sm-light.png)] dark:bg-[url(/assets/bg-section-6-sm-dark.png)] bg-cover bg-center"/>
      <div className="h-full relative flex-center px-5.5 sm:px-0" id="section-platform">
        <div className="w-85 prm:w-120 sm:w-full min-[1025px]:w-240! 2xl:w-300 min-[2000px]:w-400! min-[2600px]:w-500! min-[3200px]:w-640! max-h-160 sm:max-h-210 min-[1025px]:max-h-180! 2xl:max-h-210 min-[2000px]:max-h-220! 4xl:max-h-240! min-[3200px]:max-h-340! grid sm:grid-cols-9 gap-5 min-[2000px]:gap-10 min-[1025px]:gap-6 -mt-10 sm:-mt-20 sm:px-10 min-[1025px]:px-0">
          <div className="col-span-1 sm:col-span-6 min-[1025px]:col-span-5! space-y-6">
            <ImageAvatar48
              className="w-50 sm:w-full h-auto ml-auto mb-3 sm:mb-6"
              lightURL={"/assets/aya-trading-chart-light.png"}
              drakURL={"/assets/aya-trading-chart-dark.png"}
            />
            {/* desktop */}
            <div className="hidden min-[1025px]:flex gap-6">
              <div className="w-full">
                <span className="text-white text-lg 2xl:text-xl min-[2000px]:text-2xl! min-[3200px]:text-3xl!">
                  {t("LandingPage.section_6.description")}
                </span>
              </div>
              <ImageAvatar48
                className="w-38 min-[2000px]:w-48! min-[3200px]:w-64! h-auto"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              />
            </div>
            {/* tablet */}
            <div className="relative hidden sm:block min-[1025px]:hidden! w-full">
              <ImageAvatar48
                className="w-100 min-[850px]:w-114.5! h-auto ml-auto -mb-20 min-[850px]:-mb-26"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
              <div className="text-white font-karantina leading-none text-center">
                <span
                  className={clsx(
                    "bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet drop-shadow-text font-karantina font-bold tracking-[2%]",
                    locale === "ja"
                      ? "text-custom-70 sm:text-custom-70 lg:text-custom-82 text-nowrap"
                      : "text-custom-70 sm:text-custom-98 min-[850px]:text-custom-125! min-[1025px]:text-custom-98! 2xl:text-custom-125",
                    "text-gradient"
                  )}
                >
                  {t("LandingPage.section_6.your_vision")}
                </span>
              </div>
              <div
                className={clsx(
                  "relative font-karantina text-custom-56 tracking-wide font-bold leading-none mt-2 drop-shadow-text text-right -mr-18",
                  locale === "ja"
                    ? "sm:text-custom-70 text-custom-59 text-nowrap"
                    : "sm:text-custom-82",
                  "text-white"
                )}
              >
                <ShapeGradientWrapper
                  index={"section6_token_1"}
                  blurSize={"2xs"}
                  className={clsx("absolute -bottom-10", {
                    "left-126 min-[850px]:left-144": locale === "ja",
                    "left-54 min-[850px]:left-82": locale !== "ja",
                  })}
                  strokeWidth={1}
                  key={""}
                  shapeWidth={142}
                  shapeHeight={86}
                  path={
                    "M 0,10 A 10,10 0,0,1 10,0 L 80,0 A 10,10 0,0,1 86,6 L 102,30 A 10,10 0,0,1 108,36 L 108,47 A 10,10 0,0,1 98,57 L 10,57 A 10,10 0,0,1 0,47 Z"
                  }
                />
                {t("LandingPage.section_6.your_token")}
              </div>
            </div>
            {/* mobile */}
            <div className="relative sm:hidden w-full pr-9">
              <ImageAvatar48
                className="absolute right-0 w-15.5 h-auto"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              />
              <div className="text-white font-karantina leading-none text-right">
                <span
                  className={clsx(
                    "relative bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet drop-shadow-text font-karantina font-bold tracking-[2%] pr-12.5",
                    {
                      "text-custom-40 sm:text-custom-70 lg:text-custom-82 text-nowrap":
                        locale === "ja",
                      "text-custom-55 sm:text-custom-98 2xl:text-custom-125": locale !== "ja",
                    },
                    "text-gradient"
                  )}
                >
                  <ShapeGradientWrapper
                    index={"section6_vision_2"}
                    className="absolute -left-5 -top-2 z-10"
                    strokeWidth={1}
                    blurSize={"2xs"}
                    shapeWidth={56}
                    shapeHeight={34}
                    path={
                      "M 0,13 A 8,8 0,0,1 5,8 L 15,2 A 15,15 0,0,1 20,0 L 50,0 A 8,8 0,0,1 56,6 L 56,28 A 8,8 0,0,1 50,34 L 6,34 A 8,8 0,0,1 0,28 Z"
                    }
                  />
                  {t("LandingPage.section_6.your_vision")}
                </span>
              </div>
              <div
                className={clsx(
                  "relative font-karantina tracking-wide font-bold leading-none drop-shadow-text text-right",
                  locale === "ja"
                    ? "text-custom-40 sm:text-custom-70 text-nowrap"
                    : "text-custom-40 sm:text-custom-82",
                  "text-white"
                )}
              >
                <ShapeGradientWrapper
                  index={"section6_token_3"}
                  blurSize={"2xs"}
                  className={clsx("absolute right-30 -bottom-2", {
                    "right-0": locale === "ja",
                    "right-30": locale !== "ja",
                  })}
                  strokeWidth={1}
                  shapeWidth={52}
                  shapeHeight={27}
                  path={
                    "M 0,5 A 5,5 0,0,1 5,0 L 32,0 A 10,10 0,0,1 37,3 L 50,12 A 10,10 0,0,1 52,15 L 52,22 A 5,5 0,0,1 47,27 L 5,27 A 5,5 0,0,1 0,22 Z"
                  }
                />
                {t("LandingPage.section_6.your_token")}
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-3 min-[1025px]:col-span-4! flex-center-x items-start min-[1025px]:items-center! sm:pt-7 min-[1025px]:pt-0!">
            {/* desktop */}
            <div className="relative hidden min-[1025px]:block! w-full">
              <div className="text-white font-karantina leading-none pl-5">
                <span
                  className={clsx(
                    "relative bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet drop-shadow-text font-karantina font-bold tracking-[2%] text-nowrap",
                    locale === "ja"
                      ? "text-custom-70 2xl:text-custom-82 min-[2000px]:text-custom-125! min-[3200px]:text-custom-176!"
                      : "text-custom-70 sm:text-custom-98 xl:text-custom-125 min-[2000px]:text-custom-176! min-[3200px]:text-custom-208!",
                    "text-gradient"
                  )}
                >
                  <ShapeGradientWrapper
                    index={"section6_vision_4"}
                    className="absolute min-[3200px]:hidden! -left-8 -top-8 2xl:-top-5 z-10"
                    strokeWidth={1}
                    blurSize={"2xs"}
                    shapeWidth={142}
                    shapeHeight={86}
                    path={
                      "M 0,43 A 15,15 0,0,1 5,33 L 45,5 A 15,15 0,0,1 55,0 L 130,0 A 16,16 0,0,1 142,12 L 142,74 A 16,16 0,0,1 130,86 L 12,86 A 15,15 0,0,1 0,74 Z"
                    }
                  />
                  <ShapeGradientWrapper
                    index={"section6_vision_6"}
                    className="absolute hidden min-[3200px]:block! -left-8 -top-16 z-10"
                    strokeWidth={2}
                    blurSize={"2xs"}
                    shapeWidth={284}
                    shapeHeight={172}
                    path={
                      "M 0,86 A 30,30 0,0,1 10,66 L 90,10 A 30,30 0,0,1 110,0 L 260,0 A 32,32 0,0,1 284,24 L 284,148 A 32,32 0,0,1 260,172 L 24,172 A 30,30 0,0,1 0,148 Z"
                    }
                  />
                  {t("LandingPage.section_6.your_vision")}
                </span>
              </div>
              <div
                className={clsx(
                  "relative font-karantina text-custom-56 tracking-wide font-bold leading-none mt-2 drop-shadow-text pl-5",
                  locale === "ja"
                    ? "sm:text-custom-59 min-[2000px]:text-custom-82! min-[3200px]:text-custom-120! text-nowrap"
                    : "sm:text-custom-82 min-[2000px]:text-custom-120! min-[3200px]:text-custom-145!",
                  "text-white"
                )}
              >
                <ShapeGradientWrapper
                  index={"section6_token_5"}
                  blurSize={"2xs"}
                  className={clsx("absolute min-[3200px]:hidden! -bottom-10", {
                    "left-108 min-[2000px]:left-156": locale === "ja",
                    "left-68 min-[2000px]:left-108": locale !== "ja",
                  })}
                  strokeWidth={1}
                  shapeWidth={142}
                  shapeHeight={86}
                  path={
                    "M 0,10 A 10,10 0,0,1 10,0 L 80,0 A 10,10 0,0,1 86,6 L 102,30 A 10,10 0,0,1 108,36 L 108,47 A 10,10 0,0,1 98,57 L 10,57 A 10,10 0,0,1 0,47 Z"
                  }
                />

                <ShapeGradientWrapper
                  index={"section6_token_7"}
                  blurSize={"2xs"}
                  className={clsx("absolute hidden min-[3200px]:block!  -bottom-25", {
                    "left-208": locale === "ja",
                    "left-126": locale !== "ja",
                  })}
                  strokeWidth={2}
                  shapeWidth={284}
                  shapeHeight={172}
                  path={
                    "M 0,20 A 20,20 0,0,1 20,0 L 160,0 A 20,20 0,0,1 172,12 L 210,55 A 20,20 0,0,1 216,72 L 216,94 A 20,20 0,0,1 196,114 L 20,114 A 20,20 0,0,1 0,94 Z"
                  }
                />
                {t("LandingPage.section_6.your_token")}
              </div>
              <ImageAvatar48
                className="w-114.5 min-[2000px]:w-164! h-auto mt-10 min-[2000px]:mt-16!"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
            </div>
            {/* tablet */}
            <div className="hidden sm:block min-[1025px]:hidden!">
              <div className="w-full mb-6">
                <span className="text-white text-base min-[850px]:text-lg!">
                  {t("LandingPage.section_6.description")}
                </span>
              </div>
              <ImageAvatar48
                className="w-43! h-auto opacity-70"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              />
            </div>
            {/* mobile */}
            <div className="flex-center-x sm:hidden w-full">
              <ImageAvatar48
                className="w-full h-auto"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <FloatInformation content={t("LandingPage.section_6.description")} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Vision;
