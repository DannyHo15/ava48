import { useTranslations } from "next-intl";
import DiamondDots from "../DiamondDots";
import FloatInformation from "../FloatInformation";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";

const AIConnection = () => {
  const t = useTranslations("LandingPage.section_ai_connection");
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center  opacity-21" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="size-full md:mx-10">
        <div className="size-full relative mx-auto max-w-full lg:max-w-[1093px] flex items-center justify-center gap-[35px] xl:gap-[118px]">
          {/* blur trên >= tablet */}
          <div className="absolute hidden lg:block lg:-top-[45%] xl:-top-[60%] lg:-right-[40%] xl:right-0 z-10 w-[1310.69px] h-[911.807px] shrink-0 rounded-[1310.69px] rotate-[-16.775deg] blur-[174.75px] bg-[linear-gradient(144deg,rgba(0,131,245,0.50)_29.99%,rgba(73,255,240,0.50)_49.39%,rgba(29,78,216,0.50)_83.09%)] dark:bg-[linear-gradient(144deg,rgba(216,29,226,0.75)_29.99%,rgba(73,255,240,0.75)_49.39%,rgba(29,78,216,0.75)_83.09%)]" />

          {/* blur trên >= mobile */}
          <div className="absolute lg:hidden top-0 -right-[30%] z-10 w-[387.769px] h-[269.759px] shrink-0 rounded-[387.769px] rotate-[-16.775deg] blur-[51.7px] bg-[linear-gradient(144deg,rgba(0,131,245,0.50)_29.99%,rgba(73,255,240,0.50)_49.39%,rgba(29,78,216,0.50)_83.09%)] dark:bg-[linear-gradient(144deg,rgba(216,29,226,0.75)_29.99%,rgba(73,255,240,0.75)_49.39%,rgba(29,78,216,0.75)_83.09%)]" />

          {/* blur dưới */}
          <div className="z-10 absolute -bottom-[60%] lg:-bottom-[40%] xl:-bottom-[60%] lg:left-0 w-[1310.69px] h-[911.807px] shrink-0 rounded-[1310.69px] rotate-[-16.775deg] blur-[110.3px] bg-[linear-gradient(144deg,rgba(0,131,245,0.50)_29.99%,rgba(73,255,240,0.50)_49.39%,rgba(29,78,216,0.50)_83.09%)] dark:bg-[linear-gradient(144deg,rgba(216,29,226,0.64)_29.99%,rgba(73,255,240,0.64)_49.39%,rgba(29,78,216,0.64)_83.09%)]" />
          <div className="hidden lg:block relative flex-1 size-full"></div>
          <div className="relative w-fit h-dvh pt-[179px] sm:pt-[225px] xl:pt-40 flex flex-col items-center justify-end">
            <div className="relative w-full h-full lg:pr-35 xl:pr-0 flex items-end justify-center">
              <div className="z-20 w-full max-w-[755px] absolute -top-1/12 translate-y-1/12 sm:top-[30%] lg:-left-[290px] lg:top-[22%] xl:-left-[600px] xl:top-[40%] xl:-translate-y-[40%]">
                <div className="absolute top-1 left-1/2 max-w-[330px] w-full lg:w-fit lg:max-w-none -translate-x-1/2 sm:-top-70 lg:left-[40%] xl:left-[75%] whitespace-nowrap font-bold">
                  <div className="w-full flex flex-col gap-1 lg:gap-5 xl:gap-[11px]">
                    <div className="relative w-fit">
                    <DiamondDots className="flex absolute -top-3 right-0 md:right-1 md:-top-10" />
                    <p className="text-white whitespace-nowrap text-custom-46 lg:text-custom-72 xl:text-custom-82 leading-[86%] font-karantina text-left w-full">
                      {t("title")}
                    </p>
                    </div>
                    <p className="relative text-right whitespace-nowrap leading-[86%] w-full sm:pl-16 md:pl-23 xl:pl-[175px] text-custom-59 lg:text-custom-110 xl:text-custom-125 font-karantina bg-linear-to-r from-[#00D0F6] dark:from-[#D81DE2] via-white to-white text-gradient">
                      {t("subtitle")}
                    </p>
                    {/* Desktop shape left */}
                    <ShapeGradientWrapper
                      index="desktop-shape-left"
                      shapeWidth={90}
                      shapeHeight={75}
                      className="hidden lg:block top-[28%] left-[8%] xl:top-[25%] xl:left-[10.5%] -rotate-90 rounded-[10px] border border-white"
                      strokeColor={[
                        { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                        { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                      ]}
                      strokeDirection="to-b"
                      strokeWidth={1}
                      path={
                        "M 10,0 L 80,0 A 10,10 0,0,1 90,10 L 90,65 A 10,10 0,0,1 80,75 L 10,75 A 10,10 0,0,1 0,65 L 0,10 A 10,10 0,0,1 10,0 Z"
                      }
                    />

                    {/* Mobile shape left */}
                    <ShapeGradientWrapper
                      index="mobile-shape-left"
                      shapeWidth={50}
                      shapeHeight={35}
                      className="lg:hidden top-[20%] left-[3%] -rotate-90 rounded-[10px] border border-white"
                      strokeColor={[
                        { offset: "0%", stopColor: "rgba(255, 255, 255, 0.3)" },
                        { offset: "100%", stopColor: "rgba(255, 255, 255, 1)" },
                      ]}
                      strokeDirection="to-b"
                      strokeWidth={0.2}
                      path={
                        "M 4,0 L 46,0 A 4,4 0,0,1 50,4 L 50,31 A 4,4 0,0,1 46,35 L 4,35 A 4,4 0,0,1 0,31 L 0,4 A 4,4 0,0,1 4,0 Z"
                      }
                    />

                    {/* Desktop shape right */}
                    <ShapeGradientWrapper
                      index="desktop-shape-right"
                      shapeWidth={224}
                      shapeHeight={104}
                      className="absolute hidden lg:block bottom-[25%] -right-[23%] xl:bottom-[20%] xl:-right-[5%] z-10"
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


                    {/* Tablet shape right */}
                    <ShapeGradientWrapper
                      index="mobile-shape-right"
                      shapeWidth={83}
                      shapeHeight={45}
                      className="absolute lg:hidden -bottom-[16%] -right-[6.7%] z-10"
                      strokeColor={[
                        { offset: "0%", stopColor: "rgba(255, 255, 255, 1)" },
                        { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                      ]}
                      strokeDirection="to-bl"
                      strokeWidth={1}
                      path={
                        "M0.19 39.80L0.19 5C0.19 2.24 2.43 0 5.19 0L61 0Q63.5 0 65 1.5L81 19Q82.80 22 82.80 23.55L82.80 39.80C82.80 42.56 80.56 44.80 77.80 44.80L5.19 44.80C2.43 44.80 0.19 42.56 0.19 39.80Z"
                      }
                    />
                  </div>
                </div>
                <div className="hidden lg:block w-full max-w-[301px] xl:max-w-[500px] h-[253px] xl:h-[219px] rounded-4xl">
                  <FloatInformation
                    content={
                      <div className="flex flex-col gap-4">
                        <p className="lg:text-[18px] xl:text-xl lg:leadding-[117%] xl:leading-[142%] self-stretch font-normal!">
                          {t("content")}
                        </p>
                        <p className=" text-white self-stretch lg:text-[14px] xl:text-base font-normal! lg:leading-[110%] xl:leading-[121%]">
                          {t("note")}
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
              <ImageAvatar48
                className="hidden xl:block w-auto h-full object-contain"
                lightURL={"/assets/ai-connection-1920.png"}
                drakURL={"/assets/ai-connection-1920.png"}
              />
              <ImageAvatar48
                className="xl:hidden w-auto h-full object-contain"
                lightURL={"/assets/ai-connection-1024.png"}
                drakURL={"/assets/ai-connection-1024.png"}
              />
            </div>
          </div>
        </div>

        <div className="sm:w-2/5 w-0 h-full flex-center z-50 lg:w-121.25">
          <FloatInformation
            content={
              "Every chat, every connection earns you Hearts. Use them to unlock premium features, collect exclusive content, and many more surprises to come."
            }
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIConnection;
