import FloatInformation from "../FloatInformation";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import { useTranslations } from "next-intl";
import GlassCard from "../common/GlassCard";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useParams } from "next/navigation";

const Vision = () => {
  const t = useTranslations();
  const { locale } = useParams();
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center " />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="lg:container lg:m-auto h-full flex flex-col relative px-5 pt-24 sm:pt-48 lg:pt-36">
        <div className=" w-full max-w-64 ml-auto sm:flex sm:max-w-full sm:h-fit sm:ml-0 gap-4 z-50  sm:mx-auto justify-center">
          <div className="relative sm:w-2/3 size-full gap-4 flex sm:flex-col lg:justify-center justify-end mb-5 sm:mb-0 lg:w-fit">
            <ImageAvatar48
              className="size-full ml-auto object-contain lg:max-h-121.75"
              lightURL={"/assets/aya-trading-chart-light.png"}
              drakURL={"/assets/aya-trading-chart-dark.png"}
            />

            <div className="max-w-72 sm:max-w-115 h-fit self-end">
              <ImageAvatar48
                className="object-contain sm:block lg:hidden"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
              <ImageAvatar48
                className="max-h-36.5 lg:block sm:hidden sm:max-w-43.5 sm:max-h-71.25 lg:max-h-full"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="absolute hidden sm:block -bottom-15 left-25 sm:left-15 sm:-bottom-25 lg:left-0 w-full max-w-82.5 sm:max-w-6/7 lg:max-w-160 lg:bottom-5">
              <div className="text-white font-karantina leading-none">
                <ShapeGradientWrapper
                  index={"section6_vision"}
                  className="absolute -left-8 -top-6 z-10"
                  strokeWidth={1}
                  blurSize={"2xs"}
                  key={""}
                  shapeWidth={142}
                  shapeHeight={86}
                  path={
                    "M 0,43 A 15,15 0,0,1 5,33 L 45,5 A 15,15 0,0,1 55,0 L 130,0 A 16,16 0,0,1 142,12 L 142,74 A 16,16 0,0,1 130,86 L 12,86 A 15,15 0,0,1 0,74 Z"
                  }
                ></ShapeGradientWrapper>
                <span
                  className={cn(
                    "relative bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet text-gradient drop-shadow-text text-custom-70 font-karantina sm:text-custom-110 lg:text-custom-125 tracking-wide font-bold ",
                    locale === "ja"
                      ? "lg:text-custom-82 sm:text-custom-70 text-gradient text-nowrap"
                      : "",
                    "text-gradient",
                  )}
                >
                  {t("LandingPage.section_6.your_vision")}
                </span>
              </div>
              <div
                className={cn(
                  "relative font-karantina text-custom-56 tracking-wide font-bold leading-none mt-2 drop-shadow-text text-right sm:text-custom-82",
                  locale === "ja"
                    ? "sm:text-custom-70 text-custom-59 text-white text-nowrap"
                    : "",
                  "text-white",
                )}
              >
                <ShapeGradientWrapper
                  index={"section6_token"}
                  blurSize={"2xs"}
                  className="absolute right-50 -bottom-10"
                  strokeWidth={1}
                  key={""}
                  shapeWidth={142}
                  shapeHeight={86}
                  path={
                    "M 0,10 A 10,10 0,0,1 10,0 L 80,0 A 10,10 0,0,1 86,6 L 102,30 A 10,10 0,0,1 108,36 L 108,47 A 10,10 0,0,1 98,57 L 10,57 A 10,10 0,0,1 0,47 Z"
                  }
                ></ShapeGradientWrapper>
                {t("LandingPage.section_6.your_token")}
              </div>
            </div>
          </div>
          <div className="sm:block hidden w-1/3 pt-7 lg:pt-50">
            <span className="text-white text-xl">
              {t("LandingPage.section_6.description")}
            </span>
            <div className="w-full flex mt-4 ">
              <ImageAvatar48
                className="max-h-36.5 lg:hidden sm:max-w-43.5 sm:max-h-full"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              ></ImageAvatar48>
              <ImageAvatar48
                className="object-contain lg:block sm:hidden lg:mt-12"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
            </div>
          </div>
          <div className="block sm:hidden sm:w-1/3 size-full relative z-50">
            <FloatInformation
              content={t("LandingPage.section_6.description")}
            ></FloatInformation>
          </div>
        </div>

        {/*content mobile*/}
        <div className="relative sm:hidden mt-8 size-full mx-auto max-h-38 z-10">
          <div className="absolute w-full max-w-82.5">
            <div className="text-white font-karantina leading-none relative">
              <span className="bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet text-gradient text-custom-70  tracking-wide font-bold drop-shadow-text font-karantina">
                <ShapeGradientWrapper
                  index={"section6_vision"}
                  className="absolute -left-1 -top-3 z-10"
                  strokeWidth={1}
                  blurSize={"2xs"}
                  key={""}
                  shapeWidth={70}
                  shapeHeight={42}
                  path={
                    "M 0,30 L 0,18 A 14,14 0,0,1 5,12 L 25,2 A 16,16 0,0,1 35,0 L 65,0 A 5,5 0,0,1 70,5 L 70,35 A 5,5 0,0,1 65,40 L 5,40 A 5,5 0,0,1 0,35 Z"
                  }
                ></ShapeGradientWrapper>
                {t("LandingPage.section_6.your_vision")}
              </span>
            </div>
            <div className="relative font-karantina text-custom-56 tracking-wide font-bold text-white leading-none mt-2 drop-shadow-text text-right">
              <ShapeGradientWrapper
                index={"section6_token"}
                blurSize={"2xs"}
                className="absolute left-24 -bottom-5"
                strokeWidth={1}
                key={""}
                shapeWidth={68}
                shapeHeight={36}
                path={
                  "M 0,5 A 5,5 0,0,1 5,0 L 40,0 A 14,14 0,0,1 50,3 L 66,15 A 10,10 0,0,1 68,20 L 68,30 A 5,5 0,0,1 63,35 L 5,35 A 5,5 0,0,1 0,30 Z"
                }
              ></ShapeGradientWrapper>

              {t("LandingPage.section_6.your_token")}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <ImageAvatar48
              className="max-h-36.5 sm:max-h-44"
              lightURL={"/assets/aya-swap-light.png"}
              drakURL={"/assets/aya-swap-dark.png"}
            ></ImageAvatar48>
          </div>
        </div>

        {/* Additional visual element */}
        <div className="max-w-72 h-fit sm:z-20  mr-auto relative sm:hidden">
          <ImageAvatar48
            className="object-contain"
            lightURL={"/assets/ai-agent-list-light.png"}
            drakURL={"/assets/ai-agent-list-dark.png"}
          />
        </div>
        {/*Radient*/}
        <div className="w-150 h-100 top-6  sm:w-[80vw] sm:h-[50vh] bg-linear-to-b sm:bg-linear-90 lg:bg-linear-175 dark:from-avatar-violet/30  from-avatar-primary/50 from-20% via-avatar-blue-5/30 to-avatar-blue-4/50 absolute -rotate-17 rounded-[100%] overflow-hidden bottom-100 left-50 sm:left-0 sm:top-30 lg:left-30 z-0 blur-3xl"></div>
      </div>
    </SectionWrapper>
  );
};

export default Vision;
