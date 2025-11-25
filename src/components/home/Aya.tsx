import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import GlassCard from "../common/GlassCard";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import OptimizedThemeImage from "../OptimizedThemeImage";
import clsx from "clsx";

const Aya = () => {
  const t = useTranslations("LandingPage.section_aya");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed inset-0 bg-[url(/assets/aya-laptop-bg.png)] dark:bg-[url(/assets/aya-laptop-bg-dark.png)] bg-cover bg-center z-0" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom mix-blend-plus-lighter bg-no-repeat hidden 2xl:block" />
      <div className="avatar-container relative" id="section-aya">
        <div className="absolute w-[1342px] h-[496px] prm:w-[1643px] sm:w-[1568px] sm:h-[552px] prm:[657px] bottom-0 right-[-219%] prm:right-[-215%] prm:bottom-[10%] sm:right-[-20%] sm:bottom-0  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[3%]  bg-[url(/assets/bg-texture.png)] bg-contain bg-bottom mix-blend-plus-lighter z-10 bg-no-repeat 2xl:hidden" />
        <div className="flex items-end justify-center min-h-dvh">
          <div
            className={cn("absolute 2xl:hidden", {
              "left-[3%] top-[37%] prm:top-[32%] z-5 sm:left-[3%] sm:top-[21%] lg:left-[4%] lg:top-[20.2%] 2xl:top-[29.5%] 2xl:left-[14.5%]":
                locale === "en",
              "left-[3%] prm:left-[4%] top-[40%] prm:top-[39%] z-5 sm:left-[3%] sm:top-[34.6%] lg:left-[4%] lg:top-[25.6%] 2xl:top-[35.5%] 2xl:left-[13.5%]":
                locale === "zh-cn" || locale === "zh-tw",
              "left-[9%] prm:left-[4%] top-[40%] prm:top-[39%] z-5 sm:left-[3.5%] sm:top-[23%] lg:left-[10%] lg:top-[39.5%] 2xl:top-[37.6%] 2xl:left-[15%]":
                locale === "ja",
            })}
          >
            <h1
              className={clsx(
                "font-karantina font-bold drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase z-15",
                {
                  "text-custom-40 sm:text-custom-88 lg:text-custom-120 leading-[86%]":
                    locale === "en",
                  "text-custom-40 sm:text-custom-88 lg:text-custom-120 leading-none":
                    locale === "zh-cn" || locale === "zh-tw",
                  "text-custom-32 sm:text-custom-88 lg:text-custom-98 leading-none":
                    locale === "ja",
                }
              )}
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              {t("avatar_ultimate_top")}
              <br />
              {t("ultimate_bottom")}
            </h1>
            {/* laptop */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"qwert"}
              shapeWidth={195}
              shapeHeight={100}
              className={cn("absolute", {
                "sm:top-[72%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden 2xl:block":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[80%] 2xl:top-[65%] sm:left-[-4%] 2xl:left-[-19%] z-20 hidden 2xl:block":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,90 A 8,9 0,0,0 8,100 L 186,100 A 8,9 0,0,0 195,90 Z"
              }
            />

            {/* Ipad Air */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"asdfg"}
              shapeWidth={195}
              shapeHeight={87}
              className={cn("absolute", {
                "sm:top-[75%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden sm:block lg:hidden":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[59%] 2xl:top-[72%] sm:left-[-16%] 2xl:left-[-13%] z-20 hidden sm:block lg:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 135,9 A 8.705,9 0,0,0 126,0 L 44,0 A 8,9 0,0,0 35,4 L 4,20 A 17,19 0,0,0 0,25 L 0,55 A 8,9 0,0,0 8,65 L 126,65 A 8,9 0,0,0 135,55 Z"
              }
            />

            {/* Ipad */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"asdnd"}
              shapeWidth={195}
              shapeHeight={87}
              className={cn("absolute", {
                "sm:top-[75%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden lg:block 2xl:hidden":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[59%] 2xl:top-[72%] sm:left-[-16%] 2xl:left-[-13%] z-20 hidden lg:block 2xl:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,77 A 8,9 0,0,0 8,87 L 186,87 A 8,9 0,0,0 195,77 Z"
              }
            />

            {/* Mini Mobile */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"hjklp"}
              shapeWidth={60}
              shapeHeight={31}
              className="top-[73%] left-[-21%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 sm:hidden"
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
          <div className="relative max-w-6xl flex justify-center mb-0 pt-28 md:pt-[94px] sm:pt-[225px] 2xl:pt-[118px]">
            {/* <div className="absolute rounded-full w-[794.69px] prm:w-[1160px] 2xl:w-[1310px] h-[552px] prm:h-[807px] 2xl:h-[911px] top-[24%] prm:top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[6%] 2xl:top-[21%] sm:left-[-60%] sm:opacity-[0.56] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-27% via-avatar-blue-5 to-avatar-blue-4 blur-[120px] -rotate-[4.54deg] opacity-60 mix-blend-screen"></div> */}

            <div
              className={cn("absolute hidden 2xl:block", {
                "2xl:top-[29.5%] 2xl:left-[-23.5%]": locale === "en",
                "2xl:top-[35.5%] 2xl:left-[-25.5%]": locale === "zh-cn",
                "2xl:top-[35.4%] 2xl:left-[-25.5%]": locale === "zh-tw",
                "2xl:top-[38.6%] 2xl:left-[-14%] 4xl:top-[43.6%]! 4xl:left-[-15%]!":
                  locale === "ja",
              })}
            >
              <h1
                className={cn(
                  "font-karantina text-custom-42 prm:text-custom-55 4xl:text-custom-217! font-bold drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase z-15",
                  {
                    "dark:bg-[linear-gradient(158deg,#FFFFFF_64%,#D81DE2_150%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)] sm:text-custom-120 leading-[86%]":
                      locale === "en",
                    "relative dark:bg-[linear-gradient(158deg,#FFFFFF_64%,#D81DE2_150%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)] leading-none sm:text-custom-120 ":
                      locale === "zh-cn" || locale === "zh-tw",
                    "relative dark:bg-[linear-gradient(158deg,#FFFFFF_64%,#D81DE2_110%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)] leading-none sm:text-custom-98 4xl:text-custom-176!":
                      locale === "ja",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("avatar_ultimate_top")}
                <br />
                {t("ultimate_bottom")}
              </h1>
              {/* laptop */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"uiopa"}
                shapeWidth={195}
                shapeHeight={100}
                className={cn("absolute", {
                  "sm:top-[72%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] 4xl:top-[80%]! 4xl:left-[-3%]! 4xl:scale-[1.5]! z-20":
                    locale === "en",
                  "sm:top-[80%] 2xl:top-[65%] 2xl:left-[-36%] 4xl:top-[68%]! 4xl:left-[-16%]! 4xl:scale-[1.5]! z-20":
                    locale === "zh-cn",
                  "sm:top-[80%] 2xl:top-[62%] 2xl:left-[-34%] 4xl:top-[68%]! 4xl:left-[-16%]! 4xl:scale-[1.5]! z-20":
                    locale === "zh-tw",
                  "sm:top-[80%] 2xl:top-[59%] 2xl:left-[-14%] 4xl:scale-[1.5]! z-20":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,90 A 8,9 0,0,0 8,100 L 186,100 A 8,9 0,0,0 195,90 Z"
                }
              />

              {/* Tablet */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"mnbvc"}
                shapeWidth={195}
                shapeHeight={87}
                className={cn("absolute", {
                  "sm:top-[75%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden sm:block 2xl:hidden":
                    locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                  "sm:top-[59%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden sm:block 2xl:hidden":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,77 A 8,9 0,0,0 8,87 L 186,87 A 8,9 0,0,0 195,77 Z"
                }
              />

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"poiuy"}
                shapeWidth={60}
                shapeHeight={31}
                className="top-[72%] left-[-7%] prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 sm:hidden"
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
              className={clsx("absolute hidden 2xl:block", {
                "absolute 2xl:bottom-[32%] 2xl:right-[-39%]": locale === "en",
                "2xl:top-[35.5%] 2xl:right-[-46%] 4xl:right-[-50%]!":
                  locale === "zh-cn" || locale === "zh-tw",
                "2xl:top-[38.6%] 2xl:right-[-55%] 4xl:right-[-54%]! 4xl:top-[44.6%]! 2xl:z-15":
                  locale === "ja",
              })}
            >
              <h2
                className={clsx("relative whitespace-nowrap", {
                  "font-karantina text-custom-42 prm:text-custom-55 sm:text-custom-160 font-bold bg-[linear-gradient(107deg,#00F6FF_17%,#FFFFFF_66%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15 4xl:text-custom-256!":
                    locale === "en",
                  "font-karantina text-custom-42 prm:text-custom-55 sm:text-custom-120 font-bold bg-[linear-gradient(117.84deg,#FFFFFF_62.61%,#00F6FF_125.5%)] uppercase dark:sm:bg-[linear-gradient(117.84deg,#FFFFFF_62.61%,#D81DE2_125.5%)] bg-clip-text text-transparent text-right z-10 2xl:z-5 leading-none pb-9 4xl:pb-22 4xl:text-custom-217!":
                    locale === "zh-cn" || locale === "zh-tw",
                  "font-karantina text-custom-42 prm:text-custom-55 sm:text-custom-98 font-bold text-white uppercase leading-none text-right bg-[linear-gradient(169deg,#FFFFFF_62.61%,#00F6FF_95.5%)] dark:sm:bg-[linear-gradient(169deg,#FFFFFF_62%,#D81DE2_95%)] sm:bg-clip-text sm:text-transparent z-10 2xl:z-5 pb-4 4xl:pb-8 4xl:text-custom-176!":
                    locale === "ja",
                })}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("avatar_experience_top")}
              </h2>
              <h2
                className={cn("relative", {
                  "font-karantina text-custom-58 prm:text-custom-70 sm:text-custom-160 font-bold bg-[linear-gradient(107deg,#00F6FF_10%,#FFFFFF_60%)] bg-clip-text text-transparent uppercase leading-[86%] text-left z-15 4xl:text-custom-256!":
                    locale === "en",
                  "font-karantina text-custom-58 prm:text-custom-70 sm:text-custom-180 font-bold bg-[linear-gradient(107deg,#00F6FF_0%,#FFFFFF_68%)] bg-clip-text text-transparent uppercase leading-none text-left z-20 4xl:text-custom-272!":
                    locale === "zh-cn" || locale === "zh-tw",
                  "font-karantina text-custom-58 prm:text-custom-70 sm:text-custom-180 font-bold bg-[linear-gradient(110deg,#00F6FF_0%,#FFFFFF_35%)] bg-clip-text text-transparent uppercase leading-none text-left z-20 4xl:text-custom-272!":
                    locale === "ja",
                })}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("experience_bottom")}
              </h2>

              {/* Laptop */}
              <ShapeGradientWrapper
                index={"trewq"}
                blurSize={"2xs"}
                shapeWidth={224}
                shapeHeight={104}
                className={cn("absolute", {
                  "sm:top-[36%] sm:right-[-21%] 4xl:scale-[1.5]! 4xl:top-[44%]! 4xl:right-[-12%]! z-15 hidden sm:block":
                    locale === "en",
                  "sm:top-[59%] sm:right-[-42%] 2xl:top-[78%] 2xl:right-[-7%] 2xl:z-20 4xl:top-[85%]! 4xl:right-[17%]! 4xl:scale-[1.5]! z-15 hidden 2xl:block":
                    locale === "zh-cn",
                  "sm:top-[62%] sm:right-[-44%] 2xl:top-[78%] 2xl:right-[-7%] 2xl:z-20 4xl:top-[85%]! 4xl:right-[17%]! 4xl:scale-[1.5]! z-15 hidden 2xl:block":
                    locale === "zh-tw",
                  "sm:top-[62%] sm:right-[-45%] 2xl:top-[75%] 2xl:right-[16%] 2xl:z-20 4xl:top-[84%]! 4xl:right-[47%]! 4xl:scale-[1.5]! z-15 hidden 2xl:block":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-l"
                strokeWidth={1}
                bgColor="sm:bg-linear-to-b sm:from-white/35 sm:to-white/5 2xl:bg-white/0"
                path={
                  "M 0,10 A 10,10 0,0,1 10,0 L 173,0 A 10,10 0,0,1 183,5 L 219,47 A 20,20 0,0,1 224,57 L 224,94 A 10,10 0,0,1 214,104 L 10,104 A 10,10 0,0,1 0,94 Z"
                }
              />

              {/* Tablet */}
              <ShapeGradientWrapper
                index={"gfdsa"}
                blurSize={"2xs"}
                shapeWidth={153}
                shapeHeight={78}
                className={cn("absolute", {
                  "sm:top-[36%] sm:right-[-21%] z-15 hidden":
                    locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                  "sm:top-[83%] sm:right-[-12%] lg:top-[79%] lg:right-[-16%] z-15 hidden sm:block 2xl:hidden":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-l"
                strokeWidth={1}
                path={
                  "M 0,10 A 10,10 0,0,1 10,0 L 115,0 A 10,10 0,0,1 119,2 L 151,33 A 3,7 0,0,1 153,37 L 153,68 A 10,10 0,0,1 143,78 L 10,78 A 10,10 0,0,1 0,68 Z"
                }
              />

              {/* Mobile */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"bvcxz"}
                shapeWidth={94}
                shapeHeight={44}
                className="prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 hidden prm:block sm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-l"
                strokeWidth={1}
                path={
                  "M 0,5 A 5,5 0,0,1 5,0 L 70,0 A 5,5 0,0,1 75,2 L 92,16 A 5,5 0,0,1 94,19 L 94,34 A 10,10 0,0,1 84,44 L 10,44 A 10,10 0,0,1 0,34 Z"
                }
              />

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"plokm"}
                shapeWidth={78}
                shapeHeight={36}
                className="bottom-[-16%] right-[-5%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-10 prm:hidden"
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-l"
                strokeWidth={0.34}
                path={
                  "M 0,5 A 5,5 0,0,1 5,0 L 59,0 A 5,5 0,0,1 62,2 L 76,16 A 5,5 0,0,1 78,19 L 78,33 A 3,3 0,0,1 75,36 L 3,36 A 5,5 0,0,1 0,33 Z"
                }
              />

              {/* Laptop */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"yhnuj"}
                shapeWidth={104}
                shapeHeight={61}
                className={cn("absolute", {
                  "sm:bottom-[-5%] sm:right-[87%] 4xl:scale-[1.5]! z-15 hidden sm:block":
                    locale === "en",
                  "sm:bottom-[-14%] sm:right-[87%] 2xl:bottom-[-1%] 2xl:right-[89.5%] 4xl:bottom-[-2%]! 4xl:right-[93%]! 4xl:z-20 4xl:scale-[1.5]! z-15 2xl:z-20 hidden sm:block":
                    locale === "zh-tw",
                  "sm:bottom-[-9%] sm:right-[77%] 2xl:bottom-[-1%] 2xl:right-[89.5%] 4xl:bottom-[-2%]! 4xl:right-[93%]! 4xl:z-20 4xl:scale-[1.5]! z-20 hidden sm:block":
                    locale === "zh-cn",
                  "sm:bottom-[-9%] 2xl:bottom-[-3%] 2xl:right-[85%] sm:right-[77%] 4xl:bottom-[-3%]! 4xl:right-[91%]! 4xl:z-20 4xl:scale-[1.5]! z-20 hidden sm:block":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={1}
                path={
                  "M 0 ,10 A 10,10 0,0,1 10,0 L 94 ,0 A 10,10 0,0,1 104,10 L 104,51 A 10,10 0,0,1 94,61 L 10,61 A 10,10 0,0,1 0,51 Z"
                }
              />
            </div>
            <OptimizedThemeImage
              className="max-w-[107%] sm:max-w-[90%] 2xl:max-w-[107%] w-[331px] sm:w-[640px] lg:max-w-full 4xl:max-w-none! 4xl:w-[1150px]! 4xl:pt-[100px]! max-h-dvh h-auto left-0 object-contain z-10 relative"
              lightURL={"/assets/aya-bg.png"}
              darkURL={"/assets/aya-bg-dark.png"}
              width={1150}
              height={723}
              quality={90}
              priority={true}
              placeholder="blur"
              alt="Aya Fujimoto"
            ></OptimizedThemeImage>

            {/* laptop */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"mkopl"}
              shapeWidth={146}
              shapeHeight={203}
              className={cn("absolute", {
                "2xl:bottom-[44%] 2xl:right-[3.5%] 4xl:scale-[1.5]! z-0 hidden 2xl:block":
                  locale === "en",
                "2xl:bottom-[43.5%] 2xl:right-[3.5%] 4xl:scale-[1.5]! z-0 hidden 2xl:block":
                  locale === "zh-cn" || locale === "zh-tw",
                "2xl:bottom-[48%] 2xl:right-[0.5%] 4xl:scale-[1.5]! z-0 hidden 2xl:block":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              bgColor="bg-linear-to-b from-white/30 to-white/0"
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 92,0 A 15,15 0,0,1 100,5 L 142,50 A 15,15 0,0,1 146,59 L 146,193 A 10,10 0,0,1 139,203 L 10,203 A 10,10 0,0,1 0,193 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"vbhyn"}
              shapeWidth={164}
              shapeHeight={281}
              className={cn({
                "sm:bottom-[37%] sm:right-[0%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden sm:block lg:hidden sm:scale-90":
                  locale === "en",
                "sm:bottom-[36%] sm:right-[-3%] 2xl:bottom-[46.1%] 2xl:right-[7%] z-0 hidden sm:block lg:hidden sm:scale-90":
                  locale === "zh-cn" || locale === "zh-tw",
                "sm:bottom-[36%] sm:right-[4%] 2xl:bottom-[46.2%] 2xl:right-[7%] z-0 hidden sm:block lg:hidden sm:scale-90":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 92,0 A 15,15 0,0,1 100,5 L 160,70 A 15,15 0,0,1 164,79 L 164,271 A 10,10 0,0,1 157,281 L 10,281 A 10,10 0,0,1 0,271 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"vfjyn"}
              shapeWidth={164}
              shapeHeight={281}
              className={cn({
                "sm:bottom-[38%] sm:right-[-1%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden lg:block 2xl:hidden":
                  locale === "en",
                "sm:bottom-[39%] sm:right-[-4%] 2xl:bottom-[46.1%] 2xl:right-[7%] z-0 hidden lg:block 2xl:hidden":
                  locale === "zh-cn" || locale === "zh-tw",
                "sm:bottom-[38%] sm:right-[-3%] 2xl:bottom-[46.2%] 2xl:right-[7%] z-0 hidden lg:block 2xl:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 92,0 A 15,15 0,0,1 100,5 L 160,70 A 15,15 0,0,1 164,79 L 164,271 A 10,10 0,0,1 157,281 L 10,281 A 10,10 0,0,1 0,271 Z"
              }
            />
          </div>
          <div
            className={cn("absolute 2xl:hidden", {
              "absolute right-7 prm:right-9 bottom-[32%] prm:bottom-[27%] sm:bottom-[20%] sm:right-[8%] md:bottom-[24%] md:right-[2%] lg:bottom-[20%] lg:right-[8%] 2xl:bottom-[32%] 2xl:right-[9%]":
                locale === "en",
              "absolute right-7 prm:right-9 bottom-[32%] prm:bottom-[27%] sm:bottom-[20%] sm:right-[8%] md:bottom-[24%] md:right-[2%] lg:bottom-[22%] lg:right-[6%] 2xl:bottom-[32%] 2xl:right-[9%]":
                locale === "zh-cn" || locale === "zh-tw",
              "absolute right-7 prm:right-9 sm:right-[6%] bottom-[32%] prm:bottom-[27%] sm:bottom-[27%] lg:bottom-[22%] 2xl:bottom-[37.5%] 2xl:right-[14%]":
                locale === "ja",
            })}
          >
            <h2
              className={cn("relative whitespace-nowrap", {
                "font-karantina text-[55px] sm:text-custom-128 lg:text-custom-160 font-bold bg-[linear-gradient(127deg,#00F6FF_3%,#FFFFFF_73%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-10":
                  locale === "en",
                "font-karantina text-[42px] sm:text-custom-88 lg:text-custom-120 font-bold bg-[linear-gradient(320deg,#FFFFFF_24%,#00F6FF_150%)] bg-clip-text text-transparent uppercase leading-none text-right absolute top-[-87.1%] right-[3%] dark:bg-[linear-gradient(170deg,#FFFFFF_65%,#D81DE2_200%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
                  locale === "zh-cn",
                "font-karantina text-[42px] sm:text-custom-88 lg:text-custom-120 font-bold bg-[linear-gradient(320deg,#FFFFFF_24%,#00F6FF_150%)] bg-clip-text text-transparent uppercase leading-none text-right absolute top-[-87.2%] right-[3%] dark:bg-[linear-gradient(170deg,#FFFFFF_65%,#D81DE2_200%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
                  locale === "zh-tw",
                "font-karantina text-[42px] sm:text-custom-88 lg:text-custom-90 font-bold bg-[linear-gradient(170deg,#FFFFFF_57%,#00F6FF_150%)] dark:bg-[linear-gradient(173deg,#FFFFFF_55%,#D81DE2_150%)] bg-clip-text text-transparent uppercase leading-none text-right dark:sm:bg-[linear-gradient(170deg,#FFFFFF_47%,#D81DE2_150%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5 sm:pb-4":
                  locale === "ja",
              })}
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              {t("avatar_experience_top")}
            </h2>
            <h2
              className={cn("relative", {
                "font-karantina text-[58px] prm:text-custom-70 sm:text-custom-128 lg:text-custom-160 font-bold bg-[linear-gradient(127deg,#00F6FF_10%,#FFFFFF_60%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
                  locale === "en",
                "font-karantina text-[58px] prm:text-custom-70 sm:text-custom-128 lg:text-custom-160 font-bold bg-[linear-gradient(127deg,#00F6FF_10%,#FFFFFF_60%)] bg-clip-text text-transparent uppercase leading-none text-right z-15":
                  locale === "zh-cn" || locale === "zh-tw",
                "font-karantina text-[58px] prm:text-custom-70 sm:text-custom-132 lg:text-custom-180 font-bold bg-[linear-gradient(92deg,#00F6FF_20%,#FFFFFF_92%)] bg-clip-text text-transparent uppercase leading-none text-right z-15":
                  locale === "ja",
              })}
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              {t("experience_bottom")}
            </h2>

            {/* Laptop */}
            <ShapeGradientWrapper
              index={"xdcfv"}
              blurSize={"2xs"}
              shapeWidth={224}
              shapeHeight={104}
              className={cn("absolute", {
                "sm:top-[36%] sm:right-[-21%] z-15 hidden sm:block":
                  locale === "en",
                "sm:top-[59%] sm:right-[-41%] z-15 hidden 2xl:block":
                  locale === "zh-cn",
                "sm:top-[62%] sm:right-[-44%] z-15 hidden 2xl:block":
                  locale === "zh-tw",
                "sm:top-[62%] sm:right-[-45%] z-15 hidden 2xl:block":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-t"
              strokeWidth={1}
              bgColor="sm:bg-linear-to-b sm:from-white/50 sm:to-white/10 2xl:bg-white/0"
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 173,0 A 10,10 0,0,1 183,5 L 219,47 A 20,20 0,0,1 224,57 L 224,94 A 10,10 0,0,1 214,104 L 10,104 A 10,10 0,0,1 0,94 Z"
              }
            />

            {/* Ipad Air */}
            <ShapeGradientWrapper
              index={"qamws"}
              blurSize={"2xs"}
              shapeWidth={153}
              shapeHeight={78}
              className={cn("absolute", {
                "sm:top-[31%] sm:right-[-21%] z-15 hidden":
                  locale === "en",
                "sm:top-[67%] sm:right-[-31%] z-15 hidden sm:block lg:hidden":
                  locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[82%] sm:right-[-13%] sm:scale-80 z-15 hidden sm:block lg:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              bgColor="sm:bg-linear-to-b sm:from-white/50 sm:to-white/5 2xl:bg-white/0"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 115,0 A 10,10 0,0,1 119,2 L 151,33 A 3,7 0,0,1 153,37 L 153,68 A 10,10 0,0,1 143,78 L 10,78 A 10,10 0,0,1 0,68 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              index={"qjzwy"}
              blurSize={"2xs"}
              shapeWidth={153}
              shapeHeight={78}
              className={cn("absolute", {
                "sm:top-[36%] sm:right-[-21%] z-15 hidden":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[79%] sm:right-[-16%] z-15 hidden lg:block 2xl:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              bgColor="sm:bg-linear-to-b sm:from-white/50 sm:to-white/5 2xl:bg-white/0"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 115,0 A 10,10 0,0,1 119,2 L 151,33 A 3,7 0,0,1 153,37 L 153,68 A 10,10 0,0,1 143,78 L 10,78 A 10,10 0,0,1 0,68 Z"
              }
            />

            {/* Mobile */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"edcrv"}
              shapeWidth={94}
              shapeHeight={44}
              className="prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={1}
              path={
                "M 0,5 A 5,5 0,0,1 5,0 L 70,0 A 5,5 0,0,1 75,2 L 92,16 A 5,5 0,0,1 94,19 L 94,34 A 10,10 0,0,1 84,44 L 10,44 A 10,10 0,0,1 0,34 Z"
              }
            />

            {/* Mini Mobile */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"rfvtg"}
              shapeWidth={78}
              shapeHeight={36}
              className={cn({
                "bottom-[-9%] right-[-8%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 prm:hidden":
                  locale === "en",
                "bottom-[-29%] right-[-16%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 prm:hidden":
                  locale === "zh-cn",
                "bottom-[-31%] right-[-16%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 prm:hidden":
                  locale === "zh-tw",
                "bottom-[-14%] right-[-10%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 prm:hidden":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={0.34}
              path={
                "M 0,5 A 5,5 0,0,1 5,0 L 59,0 A 5,5 0,0,1 62,2 L 76,16 A 5,5 0,0,1 78,19 L 78,33 A 3,3 0,0,1 75,36 L 3,36 A 5,5 0,0,1 0,33 Z"
              }
            />

            {/* Laptop */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"tgbyh"}
              shapeWidth={104}
              shapeHeight={61}
              className={cn("absolute", {
                "sm:bottom-[-5%] sm:right-[87%] z-15 hidden sm:block":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:bottom-[-11%] sm:right-[43%] lg:bottom-[-5%] lg:right-[57%] z-15 hidden sm:block":
                  locale === "ja",
              })}
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0 ,10 A 10,10 0,0,1 10,0 L 94 ,0 A 10,10 0,0,1 104,10 L 104,51 A 10,10 0,0,1 94,61 L 10,61 A 10,10 0,0,1 0,51 Z"
              }
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Aya;
