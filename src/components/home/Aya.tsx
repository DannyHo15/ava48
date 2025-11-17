import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import GlassCard from "../common/GlassCard";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const Aya = () => {
  const t = useTranslations("LandingPage.section_aya");
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
      <div className="avatar-container relative">
        <div className="absolute w-[1342px] h-[496px] prm:w-[1643px] sm:w-[1568px] sm:h-[552px] prm:[657px] bottom-0 right-[-219%] prm:right-[-215%] prm:bottom-[10%] sm:right-[-20%] sm:bottom-0  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[3%]  bg-[url(/assets/bg-texture.png)] bg-contain bg-bottom mix-blend-plus-lighter z-10 bg-no-repeat 2xl:hidden" />
        <div className="flex items-end justify-center min-h-dvh">
          <div
            className={cn("absolute 2xl:hidden", {
              "left-[3%] top-[37%] prm:top-[32%] z-5 sm:left-[3%] md:left-[1%] sm:top-[21%]  lg:left-[3%] lg:top-[21%] md:top-[26%] 2xl:top-[29.5%] 2xl:left-[14.5%]":
                locale === "en",
              "left-[3%] prm:left-[4%] top-[40%] prm:top-[39%] z-5 sm:left-[0%] sm:top-[33.6%] 2xl:top-[35.5%] 2xl:left-[13.5%]":
                locale === "zh-cn",
              "left-[3%] prm:left-[4%] top-[40%] prm:top-[39%] z-5 sm:left-[0%] sm:top-[34%] 2xl:top-[35.5%] 2xl:left-[13.5%]":
                locale === "zh-tw",
              "left-[3%] prm:left-[4%] top-[40%] prm:top-[39%] z-5 sm:left-[3.5%] sm:top-[27%] 2xl:top-[37.6%] 2xl:left-[15%]":
                locale === "ja",
            })}
          >
            <h1
              className={cn(
                "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] z-15"
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

            {/* Tablet */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"asdfg"}
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

            {/* Mobile */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"zxcvb"}
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
              blurSize={"2xs"}
              index={"hjklp"}
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
          <div className="relative max-w-6xl flex justify-center mb-0 pt-28 md:pt-[94px] sm:pt-[225px] 2xl:pt-[118px]">
            {/* <div className="absolute rounded-full w-[794.69px] prm:w-[1160px] 2xl:w-[1310px] h-[552px] prm:h-[807px] 2xl:h-[911px] top-[24%] prm:top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[6%] 2xl:top-[21%] sm:left-[-60%] sm:opacity-[0.56] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-27% via-avatar-blue-5 to-avatar-blue-4 blur-[120px] -rotate-[4.54deg] opacity-60 mix-blend-screen"></div> */}
            <ImageAvatar48
              className="fixed left-0 bottom-0 z-0 opacity-80 hidden dark:2xl:block"
              lightURL={"/assets/light-bot-left.png"}
              drakURL={"/assets/light-bot-left.png"}
            ></ImageAvatar48>
            <div
              className={cn("absolute hidden 2xl:block", {
                "2xl:top-[30.5%] 2xl:left-[-27.5%]": locale === "en",
                "2xl:top-[35.5%] 2xl:left-[-28.5%]": locale === "zh-cn",
                "2xl:top-[35.4%] 2xl:left-[-28.5%]": locale === "zh-tw",
                "2xl:top-[37.6%] 2xl:left-[-28%]": locale === "ja",
              })}
            >
              <h1
                className={cn(
                  "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] z-15",
                  {
                    "dark:bg-[linear-gradient(158deg,#FFFFFF_64%,#D81DE2_150%)] bg-[linear-gradient(158deg,#FFFFFF_64%,#3EF8FF_150%)]": locale === "ja" || locale === "zh-cn" || locale === "zh-tw",
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
                  "sm:top-[72%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden 2xl:block":
                    locale === "en",
                  "sm:top-[80%] 2xl:top-[65%] 2xl:left-[-36%] z-20 hidden 2xl:block":
                    locale === "zh-cn",
                  "sm:top-[80%] 2xl:top-[62%] 2xl:left-[-34%] z-20 hidden 2xl:block":
                    locale === "zh-tw",
                  "sm:top-[80%] 2xl:top-[63%] 2xl:left-[-19%] z-20 hidden 2xl:block":
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

              {/* Mobile */}
              <ShapeGradientWrapper
                blurSize={"2xs"}
                index={"lkjhg"}
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
                blurSize={"2xs"}
                index={"poiuy"}
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
            <div
              className={cn("absolute hidden 2xl:block", {
                "absolute 2xl:bottom-[32%] 2xl:right-[-42%]": locale === "en",
                "absolute 2xl:bottom-[37.2%] 2xl:right-[-29%]":
                  locale === "zh-cn",
                "absolute 2xl:bottom-[41.5%] 2xl:right-[-28%]":
                  locale === "zh-tw",
                "absolute 2xl:bottom-[37.5%] 2xl:right-[-29%]": locale === "ja",
              })}
            >
              <h2
                className={cn("relative whitespace-nowrap", {
                  "font-karantina text-[42px] prm:text-custom-55 sm:text-[160px] font-bold bg-[linear-gradient(107deg,#00F6FF_17%,#FFFFFF_66%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
                    locale === "en",
                  "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold text-white uppercase leading-[86%] text-right absolute top-[-110%] right-[-28%] z-10 2xl:z-5":
                    locale === "zh-cn",
                  "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold text-white uppercase leading-[86%] text-right absolute top-[-89%] right-[-28%] z-10 2xl:z-5":
                    locale === "zh-tw",
                  "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold text-white uppercase leading-[86%] text-right absolute top-[-99%] right-[-13%] dark:sm:bg-[linear-gradient(160deg,#FFFFFF_55%,#D81DE2_200%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
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
                  "font-karantina text-[58px] prm:text-custom-70 sm:text-[160px] font-bold bg-[linear-gradient(107deg,#00F6FF_10%,#FFFFFF_60%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
                    locale === "en",
                  "font-karantina text-[58px] prm:text-custom-70 sm:text-[180px] font-bold bg-[linear-gradient(107deg,#00F6FF_0%,#FFFFFF_68%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
                    locale === "ja" || locale === "zh-cn" || locale === "zh-tw",
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
                  "sm:top-[36%] sm:right-[-21%] z-15 hidden sm:block":
                    locale === "en",
                  "sm:top-[59%] sm:right-[-42%] z-15 hidden 2xl:block":
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
                  "sm:top-[79%] sm:right-[-16%] z-15 hidden sm:block 2xl:hidden":
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
                  "sm:bottom-[-5%] sm:right-[87%] z-15 hidden sm:block":
                    locale === "en",
                  "sm:bottom-[-14%] sm:right-[87%] z-15 hidden sm:block":
                    locale === "zh-tw",
                  "sm:bottom-[-11%] sm:right-[86%] z-15 hidden sm:block":
                    locale === "ja" || locale === "zh-cn",
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
            <ImageAvatar48
              className="max-w-[107%] w-[331px] sm:w-[640px] max-h-dvh prm:w-auto h-auto left-0 prm:left-2 object-contain z-10 relative"
              lightURL={"/assets/aya-bg.webp"}
              drakURL={"/assets/aya-bg-dark.webp"}
            ></ImageAvatar48>

            {/* laptop */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"mkopl"}
              shapeWidth={146}
              shapeHeight={203}
              className={cn("absolute", {
                "2xl:bottom-[44%] 2xl:right-[4.5%] z-0 hidden 2xl:block":
                  locale === "en" || locale === "zh-cn",
                "2xl:bottom-[46%] 2xl:right-[4.5%] z-0 hidden 2xl:block":
                  locale === "zh-tw",
                "2xl:bottom-[49%] 2xl:right-[-0.5%] z-0 hidden 2xl:block":
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
              className="sm:bottom-[34%] sm:right-[-1%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden sm:block 2xl:hidden"
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

            {/* Mobile */}
            <ShapeGradientWrapper
              blurSize={"2xs"}
              index={"cftgb"}
              shapeWidth={101}
              shapeHeight={140}
              className="prm:bottom-[42%] prm:right-[4%] sm:bottom-[41%] sm:right-[-1%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 65,0 A 15,15 0,0,1 73,5 L 99,30 A 15,15 0,0,1 101,36 L 101,130 A 10,10 0,0,1 139,140 L 10,140 A 10,10 0,0,1 0,130 Z"
              }
            />
          </div>
          <div
            className={cn("absolute 2xl:hidden", {
              "absolute right-7 prm:right-9 bottom-[32%] prm:bottom-[27%] sm:bottom-[20%] sm:right-[8%] md:bottom-[24%] md:right-[2%] lg:bottom-[20%] lg:right-[8%] 2xl:bottom-[32%] 2xl:right-[9%]":
                locale === "en" || locale === "zh-cn" || locale === "zh-tw",
              "absolute right-7 prm:right-9 bottom-[32%] prm:bottom-[27%] sm:bottom-[20%] sm:right-[8%] md:bottom-[24%] md:right-[2%] lg:bottom-[20.1%] lg:right-[8.1%] 2xl:bottom-[32%] 2xl:right-[9%]":
                locale === "zh-cn",
              "absolute right-7 prm:right-9 bottom-[32%] prm:bottom-[27%] sm:bottom-[20%] sm:right-[8%] md:bottom-[24%] md:right-[2%] lg:bottom-[25%] lg:right-[7%] 2xl:bottom-[32%] 2xl:right-[9%]":
                locale === "zh-tw",
              "absolute right-7 prm:right-9 sm:right-[7%] bottom-[32%] prm:bottom-[27%] sm:bottom-[21%] 2xl:bottom-[37.5%] 2xl:right-[14%]":
                locale === "ja",
            })}
          >
            <h2
              className={cn("relative whitespace-nowrap", {
                "font-karantina text-[55px] prm:text-custom-55 sm:text-[160px] font-bold bg-[linear-gradient(127deg,#00F6FF_3%,#FFFFFF_73%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-10":
                  locale === "en",
                "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold bg-[linear-gradient(170deg,#FFFFFF_50%,#00F6FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] text-right absolute top-[-87.1%] right-[3%] dark:sm:bg-[linear-gradient(170deg,#FFFFFF_65%,#D81DE2_200%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
                  locale === "zh-cn",
                "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold bg-[linear-gradient(170deg,#FFFFFF_50%,#00F6FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] text-right absolute top-[-87.2%] right-[3%] dark:sm:bg-[linear-gradient(170deg,#FFFFFF_65%,#D81DE2_200%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
                  locale === "zh-tw",
                "font-karantina text-[42px] prm:text-custom-55 sm:text-custom-120 font-bold bg-[linear-gradient(170deg,#FFFFFF_50%,#00F6FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] text-right absolute top-[-87.3%] right-[3%] dark:sm:bg-[linear-gradient(170deg,#FFFFFF_47%,#D81DE2_150%)] dark:sm:bg-clip-text dark:sm:text-transparent z-10 2xl:z-5":
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
                "font-karantina text-[58px] prm:text-custom-70 sm:text-[160px] font-bold bg-[linear-gradient(127deg,#00F6FF_10%,#FFFFFF_60%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "font-karantina text-[58px] prm:text-custom-70 sm:text-[180px] font-bold bg-[linear-gradient(107deg,#00F6FF_0%,#FFFFFF_68%)] bg-clip-text text-transparent uppercase leading-[86%] text-right z-15":
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
              strokeDirection="to-l"
              strokeWidth={1}
              bgColor="sm:bg-linear-to-b sm:from-white/35 sm:to-white/5 2xl:bg-white/0"
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 173,0 A 10,10 0,0,1 183,5 L 219,47 A 20,20 0,0,1 224,57 L 224,94 A 10,10 0,0,1 214,104 L 10,104 A 10,10 0,0,1 0,94 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              index={"qazws"}
              blurSize={"2xs"}
              shapeWidth={153}
              shapeHeight={78}
              className={cn("absolute", {
                "sm:top-[36%] sm:right-[-21%] z-15 hidden":
                  locale === "en" || locale === "zh-cn" || locale === "zh-tw",
                "sm:top-[79%] sm:right-[-16%] z-15 hidden sm:block 2xl:hidden":
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
                "bottom-[-42%] right-[-15%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-15 prm:hidden":
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
                "sm:bottom-[-11%] sm:right-[86%] z-15 hidden sm:block":
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
