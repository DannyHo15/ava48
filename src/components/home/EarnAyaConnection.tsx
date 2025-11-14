import { useTranslations } from "next-intl";
import DiamondDots from "../DiamondDots";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";

const EarnAyaConnection = () => {
  const t = useTranslations("LandingPage.section_earn_aya_connection");
  return (
    <SectionWrapper>
      <div className="hidden lg:block xl:hidden bg-cover bg-center fixed inset-0 bg-[url(/assets/bg-earn-aya-tablet-light.png)] dark:bg-[url(/assets/bg-earn-aya-tablet-dark.png)]" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-70" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="size-full relative flex flex-col items-center justify-between">
        <div className="h-[40%] lg:hidden w-full flex flex-col items-center justify-end relative z-10 -mb-3 sm:-mb-6">
          <div className="w-full flex justify-start">
            <ImageAvatar48
              className="w-[268px] h-auto object-contain"
              lightURL="/assets/aya-earn-heart-dark.png"
              drakURL="/assets/aya-earn-heart-light.png"
            />
          </div>
          <div className="relative w-full sm:mx-0 max-w-[310px] flex flex-col gap-[3px]">
            {/* Mobile shape left */}
            <ShapeGradientWrapper
              index="mobile-shape-left"
              shapeWidth={40}
              shapeHeight={56}
              className="lg:hidden top-[20%] left-[14.5%] -rotate-90"
              strokeColor={[
                { offset: "0%", stopColor: "rgba(255, 255, 255, 0.2)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0.9)" },
              ]}
              strokeDirection="to-b"
              strokeWidth={1}
              bgColor="bg-white/20 backdrop-blur-md"
              path="M 3.2,0 L 36.8,0 A 3.2,3.2 0,0,1 40,3.2 L 40,52.8 A 3.2,3.2 0,0,1 36.8,56 L 3.2,56 A 3.2,3.2 0,0,1 0,52.8 L 0,3.2 A 3.2,3.2 0,0,1 3.2,0 Z"
            />
            {/* Tablet shape right */}
            <ShapeGradientWrapper
              index="mobile-shape-right"
              shapeWidth={65}
              shapeHeight={42}
              className="absolute lg:hidden bottom-[26%] -right-[5%] z-10"
              strokeColor={[
                { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-bl"
              strokeWidth={1}
              path="M 5,0 L 40,0 Q 42,0 43.5,1.5 L 62.5,18.5 Q 64,20 64,22 L 64,37 A 5,5 0,0,1 59,42 L 5,42 A 5,5 0,0,1 0,37 L 0,5 A 5,5 0,0,1 5,0 Z"
            />
            <div className="relative w-fit flex flex-col items-end gap-2 whitespace-nowrap">
              <DiamondDots className="flex absolute -top-3 sm:-top-8 right-0" />
              <p className="text-custom-55 font-bold leading-[86%] tracking-[1.1px] font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                {t("title")}
              </p>
            </div>
            <p className="text-white text-right uppercase leading-[86%] w-full text-custom-46 tracking-[0.8px] font-karantina">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="h-[50%] lg:h-full w-full flex flex-col justify-center">
          <div className="h-full lg:relative lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:px-10 xl:px-0 xl:max-w-[1169px] xl:mx-auto">
            <div className="hidden lg:flex w-full max-w-[698px] flex-col gap-4 lg:absolute top-[12%] left-[52%] -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-15 xl:top-[15%] xl:z-10">
              <div className="relative w-fit flex flex-col items-end gap-2">
                <DiamondDots className="flex absolute -top-8 right-0" />
                <p className="text-custom-120 xl:text-custom-125 leading-[86%] tracking-custom-2.4 xl:tracking-[2.5px] font-bold font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                  {t("title")}
                </p>
              </div>
              <p className="text-white text-right uppercase leading-[86%] w-full font-bold text-custom-82 font-karantina tracking-[1.64px]">
                {t("subtitle")}
              </p>
              {/* Desktop shape left */}
              <ShapeGradientWrapper
                index="desktop-shape-left"
                shapeWidth={104}
                shapeHeight={95}
                className="hidden lg:block top-[38%] left-[11%] xl:top-[38%] xl:left-[8.5%] -rotate-90"
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
                index="desktop-shape-right"
                shapeWidth={224}
                shapeHeight={104}
                className="absolute hidden lg:block bottom-[25%] -right-[8%] xl:bottom-[22%] xl:-right-[13%] z-10"
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
            <div className="relative h-full lg:h-auto flex items-center justify-center">
              <div className="absolute top-[65%] lg:top-[50%] w-[1310.69px] h-[911.807px] blur-[174.75px] -rotate-[16.775deg] rounded-[1310.69px] bg-[linear-gradient(144deg,rgba(0,131,245,0.5)_29.99%,rgba(73,255,240,0.5)_49.39%,rgba(29,78,216,0.5)_83.09%)] dark:bg-[linear-gradient(144deg,rgba(216,29,226,0.9)_29.99%,rgba(73,255,240,0.5)_49.39%,rgba(29,78,216,0.5)_83.09%)]" />
              <ImageAvatar48
                className="w-full h-auto object-contain scale-130 md:scale-100 lg:block lg:w-auto lg:h-full lg:object-contain lg:transform-gpu lg:scale-[1.4] xl:scale-[1.1] lg:origin-center lg:mx-auto"
                lightURL="/assets/earn-aya-connection-light-1920.png"
                drakURL="/assets/earn-aya-connection-dark-1920.png"
              />
            </div>
            <div className="hidden lg:col-span-1 w-full xl:mb-0 lg:flex lg:justify-end">
              <div className="w-full flex flex-col gap-8 items-center justify-end max-w-[391px] xl:max-w-[485px]">
                <ImageAvatar48
                  className="hidden lg:block scale-150 w-full h-auto object-contain"
                  lightURL="/assets/aya-earn-heart-dark.png"
                  drakURL="/assets/aya-earn-heart-light.png"
                />

                <p className="text-white text-lg text-justify font-kanit text-[18px] xl:text-[20px] leading-[117%] xl:leading-[142%] font-normal">
                  {t("content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EarnAyaConnection;
