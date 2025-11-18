import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import clsx from "clsx";

const EimiFukada = () => {
  const t = useTranslations("LandingPage.section_eimi");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture-2.webp)] bg-cover bg-center mix-blend-overlay z-5" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom mix-blend-plus-lighter bg-no-repeat hidden 2xl:block" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="avatar-container relative" id="section-eimi">
        <div className="absolute  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[0%]  bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom mix-blend-plus-lighter z-10 bg-no-repeat max-h-dvh hidden 2xl:block" />
        <div className="flex items-end justify-center min-h-dvh">
          <div className="relative max-w-6xl flex justify-center mb-0 2xl:pt-[97px]">
            <div
              className={cn("absolute z-15  sm:z-5 2xl:z-20 2xl:hidden", {
                "left-0 top-[-3%] sm:left-[-12%] sm:top-[-13%] lg:left-[-10%] lg:top-[-15%] 2xl:top-[38%] 2xl:left-[11%]":
                  locale === "en",
                "left-0 top-[-3%] sm:left-[-14%] sm:top-[-18%]":
                  locale === "zh-cn" || locale === "zh-tw",
                "left-0 top-[-3%] sm:left-[-13%] sm:top-[-13%] lg:left-[-9%] lg:top-[-15%]":
                  locale === "ja",
              })}
            >
              <h1
                className={clsx(
                  "font-karantina font-bold drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(313deg,#FFFFFF_30%,#3EF8FF_150%)] sm:text-white bg-clip-text text-transparent uppercase",
                  {
                    "text-custom-55 sm:text-custom-92 lg:text-custom-140 2xl:text-custom leading-[86%]":
                      locale === "en",
                    "text-custom-48 sm:text-custom-75 lg:text-custom-110 leading-[100%]":
                      locale === "ja",
                    "text-custom-48 sm:text-custom-92 lg:text-custom-120 leading-[100%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_top")}
              </h1>
              <h1
                className={clsx(
                  "font-karantina font-bold drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(328deg,#FFFFFF_53%,#3EF8FF_150%)] sm:bg-[linear-gradient(147deg,#FFFFFF_35%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase",
                  {
                    "text-custom-55 sm:text-custom-103 lg:text-custom-140 2xl:text-custom-160 leading-[86%]":
                      locale === "en",
                    "text-custom-48 sm:text-custom-75 lg:text-custom-110 leading-[110%]":
                      locale === "ja",
                    "text-custom-48 sm:text-custom-103 lg:text-custom-120 leading-[100%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_bottom")}
              </h1>
              {/* laptop */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"wqasz"}
                shapeWidth={199}
                shapeHeight={111}
                className="sm:top-[72%] sm:left-[-4%] 2xl:left-[-15%] 2xl:top-[75%] z-20 hidden 2xl:block"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 199,9 A 8.705,9 0,0,0 190,0 L 50,0 A 9,9 0,0,0 41,4 L 4,45 A 17,19 0,0,0 0,54 L 0,101 A 8,9 0,0,0 8,111 L 190,111 A 8,9 0,0,0 199,101 Z"
                }
              />

              {/* Tablet */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"xedcr"}
                shapeWidth={165}
                shapeHeight={92}
                className="sm:top-[68%] sm:left-[-6%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden sm:block 2xl:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 165,9 A 8.705,9 0,0,0 156,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,82 A 8,9 0,0,0 8,92 L 156,92 A 8,9 0,0,0 165,82 Z"
                }
              />
              {/* Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"cfvtg"}
                shapeWidth={80}
                shapeHeight={40}
                className="prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden prm:block sm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 80,3 A 5,5 0,0,0 77,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,37 A 5,5 0,0,0 3,40 L 77,40 A 5,5 0,0,0 80,37 Z"
                }
              />

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"vbgyn"}
                shapeWidth={60}
                shapeHeight={31}
                className="top-[72%] left-[-11%] prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 prm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={0.31}
                path={
                  "M 60,3 A 5,5 0,0,0 57,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,29 A 5,5 0,0,0 3,31 L 57,31 A 5,5 0,0,0 60,29 Z"
                }
              />
            </div>
            <div
              className={cn("absolute z-20 ", {
                "right-[-1] bottom-[28%] sm:right-[-11%] sm:bottom-[26%] lg:right-[-9%] lg:bottom-[26%] 2xl:bottom-[16%] 2xl:right-[-27%]":
                  locale === "en",
                "bottom-[27%] right-[2%] sm:bottom-[23%] sm:right-[-16%] lg:bottom-[25%] lg:right-[-8%] 2xl:bottom-[19%] 2xl:right-[-27%]":
                  locale === "zh-cn" || locale === "zh-tw",
                "right-[2%] bottom-[26%] sm:right-[-11%] sm:bottom-[26%] lg:right-[-9%] lg:bottom-[26%] 2xl:bottom-[16%] 2xl:right-[-27%]":
                  locale === "ja",
              })}
            >
              <h2
                className={clsx(
                  "font-karantina font-bold bg-white dark:bg-[linear-gradient(160deg,#FFFFFF_70%,#D81DE2_200%)] bg-clip-text text-transparent uppercase text-right",
                  {
                    "text-custom-40 sm:text-custom-72 lg:text-custom-88 2xl:text-custom-120 leading-[86%]":
                      locale === "en",
                    "text-custom-40 sm:text-custom-72 lg:text-custom-120 2xl:text-custom-130 leading-[86%] sm:leading-[115%] 2xl:leading-[110%]":
                      locale === "ja",
                    "text-custom-32 sm:text-custom-72 lg:text-custom-75 2xl:text-custom-90 leading-[86%] sm:leading-[77%] 2xl:leading-[77%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("coming_soon_top")}
                {locale === "ja" ? (
                  <span className="font-karantina text-custom-46 sm:text-custom-82 lg:text-custom-140 2xl:text-custom-151 font-bold leading-[86%] sm:leading-[115%] 2xl:leading-[110%]">
                    48
                  </span>
                ) : null}
              </h2>
              <h2
                className={clsx(
                  "font-karantina font-bold bg-white dark:bg-[linear-gradient(165deg,#FFFFFF_34%,#D81DE2_185%)] bg-clip-text text-transparent uppercase text-right",
                  {
                    "text-custom-54 sm:text-custom-98 lg:text-custom-130 2xl:text-custom-160 leading-[86%]":
                      locale === "en",
                    "text-custom-50 sm:text-custom-50 lg:text-custom-70 2xl:text-custom-100 leading-[110%] sm:leading-[86%] 2xl:leading-[86%]":
                      locale === "ja",
                    "text-custom-50 sm:text-custom-98 lg:text-custom-130 2xl:text-custom-160 leading-[90%] sm:leading-[77%] 2xl:leading-[77%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("coming_soon_bottom")}
                {locale === "ja" ? null : (
                  <span
                    className={cn("font-karantina font-bold", {
                      "text-custom-62 sm:text-custom-98 lg:text-custom-153 2xl:text-custom-185":
                        locale === "en",
                      "text-custom-58 sm:text-custom-121 lg:text-custom-153 2xl:text-custom-185 leading-[90%] sm:leading-[77%]":
                        locale === "zh-cn" || locale === "zh-tw",
                    })}
                  >
                    48
                  </span>
                )}
              </h2>
              {/* Laptop */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"ijned"}
                shapeWidth={184}
                shapeHeight={85}
                className={cn({
                  "sm:top-[54%] sm:right-[-8%] z-10 hidden": locale === "en",
                  "sm:top-[72%] sm:right-[6%] z-10 hidden": locale === "zh-cn",
                  "sm:top-[73%] sm:right-[5%] z-10 hidden": locale === "zh-tw",
                  "sm:top-[50%] sm:right-[19%] z-10 hidden": locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-l"
                strokeWidth={1}
                path={
                  "M 0,10 A 20,20 0,0,1 10,0 L 174,0 A 20,20 0,0,1 184,10 L 184,42 A 3,7 0,0,1 183,45 L 138,82 A 7,3 0,0,1 136,83 L 10,85 A 20,20 0,0,1 0,75 Z"
                }
              />
            </div>
            <ImageAvatar48
              className="fixed left-0 bottom-0 z-0 opacity-80 hidden dark:2xl:block"
              lightURL={"/assets/light-bot-left.png"}
              drakURL={"/assets/light-bot-left.png"}
            ></ImageAvatar48>
            {/* <div className="absolute rounded-full w-[794.69px] h-[552px] top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[22%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-20% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-56 mix-blend-screen"></div> */}
            <div
              className={cn(
                "absolute left-[9%] top-[50%] prm:left-[8%] prm:top-[54%] z-15 sm:left-[5%] sm:top-[49%] 2xl:top-[42%] 2xl:left-[-34%] sm:z-15 md:z-10 2xl:z-20 hidden 2xl:block",
                {
                  "": locale === "en",
                  "2xl:left-[-35%] 2xl:top-[47%]": locale === "ja",
                  "2xl:left-[-38%] 2xl:top-[46%]": locale === "zh-cn",
                  "2xl:left-[-39%] 2xl:top-[45%]": locale === "zh-tw",
                }
              )}
            >
              <h1
                className={cn(
                  "font-karantina text-custom-60 sm:text-custom-140 font-bold drop-shadow-amber-950 drop-shadow-xs text-white uppercase leading-[86%]",
                  {
                    "2xl:text-custom-160 leading-[86%]": locale === "en",
                    "leading-[100%]": locale === "zh-cn" || locale === "zh-tw",
                    "2xl:text-custom-130 leading-[100%]": locale === "ja",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_top")}
              </h1>
              <h1
                className={cn(
                  "font-karantina text-custom-60 sm:text-custom-140 font-bold drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(147deg,#FFFFFF_35%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%]",
                  {
                    "2xl:text-custom-160 leading-[86%]": locale === "en",
                    "leading-[100%]": locale === "zh-cn" || locale === "zh-tw",
                    "2xl:text-custom-130 leading-[100%]": locale === "ja",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_bottom")}
              </h1>
              {/* laptop */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"bhnuj"}
                shapeWidth={199}
                shapeHeight={111}
                className={cn({
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-16%] 2xl:top-[75%] z-20 hidden 2xl:block":
                    locale === "en",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[79%] z-20 hidden 2xl:block":
                    locale === "zh-cn",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[80%] z-20 hidden 2xl:block":
                    locale === "zh-tw",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-8%] 2xl:top-[73%] z-20 hidden 2xl:block":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 199,9 A 8.705,9 0,0,0 190,0 L 50,0 A 9,9 0,0,0 41,4 L 4,45 A 17,19 0,0,0 0,54 L 0,101 A 8,9 0,0,0 8,111 L 190,111 A 8,9 0,0,0 199,101 Z"
                }
              />

              {/* Tablet */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"nmkio"}
                shapeWidth={165}
                shapeHeight={92}
                className="sm:top-[75%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden sm:block 2xl:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 165,9 A 8.705,9 0,0,0 156,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,82 A 8,9 0,0,0 8,92 L 156,92 A 8,9 0,0,0 165,82 Z"
                }
              />

              {/* Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"plqaz"}
                shapeWidth={80}
                shapeHeight={40}
                className="prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden prm:block sm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 80,3 A 5,5 0,0,0 77,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,37 A 5,5 0,0,0 3,40 L 77,40 A 5,5 0,0,0 80,37 Z"
                }
              />

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"okwsx"}
                shapeWidth={60}
                shapeHeight={31}
                className="top-[72%] left-[-7%] prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 prm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={0.31}
                path={
                  "M 60,3 A 5,5 0,0,0 57,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,29 A 5,5 0,0,0 3,31 L 57,31 A 5,5 0,0,0 60,29 Z"
                }
              />
            </div>
            <div className="relative flex items-end z-5 2xl:z-10">
              <div className="z-10 relative bottom-0 right-[-20%] sm:right-[-27%] 2xl:right-[-31%]">
                <ImageAvatar48
                  className="sm:w-[566px] lg:w-[737px] 2xl:w-[752px] max-h-dvh w-[375px] max-w-[120%] h-auto object-contain"
                  lightURL={"/assets/eimi-bg-ai.webp"}
                  drakURL={"/assets/eimi-bg-ai.webp"}
                ></ImageAvatar48>
              </div>
              <div className="z-10 absolute bottom-0 left-[-42%] sm:left-[-44%] 2xl:left-[-51%]">
                <ImageAvatar48
                  className="sm:w-[721px] lg:w-[941px] 2xl:w-[974px] max-h-dvh w-[432px] h-auto object-contain"
                  lightURL={"/assets/eimi-bg.webp"}
                  drakURL={"/assets/eimi-bg.webp"}
                ></ImageAvatar48>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EimiFukada;
