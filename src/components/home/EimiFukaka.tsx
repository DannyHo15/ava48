import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import DiamondDots from "../DiamondDots";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const EimiFukada = () => {
  const t = useTranslations("LandingPage.section_eimi");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture-2.webp)] bg-cover bg-center mix-blend-overlay z-5"/>
      <div className="fixed inset-0 bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom mix-blend-plus-lighter bg-no-repeat hidden 2xl:block" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="avatar-container relative">
        <div className="absolute w-[1342px] h-[496px] prm:w-[1643px] sm:w-[1568px] sm:h-[552px] prm:[657px] bottom-0 right-[-219%] prm:right-[-215%] prm:bottom-[0%] sm:right-[-20%] sm:bottom-0  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[0%]  bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom mix-blend-plus-lighter z-10 bg-no-repeat max-h-dvh 2xl:hidden" />
        <div className="flex items-end justify-center min-h-dvh">
          <DiamondDots
            className="mix-blend-soft-light absolute bottom-[50.5%] left-[14%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[52%] 2xl:left-[34%] -translate-x-1/2 2xl:hidden"
            color="bg-white"
          />
          <div className="absolute rounded-full w-[204px] prm:w-[256px] h-[204px] prm:h-64 top-[18%] right-[56%] prm:top-[19%] prm:right-[52%] prm:hidden sm:w-[554px] sm:h-[781px] sm:top-[21%] sm:right-[10%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] to-avatar-blue-6 blur-2xl opacity-[0.01] z-15 -rotate-48 prm:-rotate-[-24deg]"></div>
          <div className="absolute left-[9%] top-[50%] prm:left-[8%] prm:top-[54%] z-15 sm:left-[5%] sm:top-[49%] 2xl:top-[38%] 2xl:left-[11%] sm:z-15 md:z-10 2xl:z-20 2xl:hidden">
            <h1
              className="font-karantina text-[60px] prm:text-custom-70 sm:text-custom-120 2xl:text-[160px] font-black drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%]"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              {t("name_top")}
              <br />
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
          <div className="relative max-w-6xl flex justify-center mb-0 pt-24 md:pt-32 2xl:pt-[97px]">
            <ImageAvatar48
              className="fixed left-0 bottom-0 z-0 opacity-80 hidden dark:2xl:block"
              lightURL={"/assets/light-bot-left.png"}
              drakURL={"/assets/light-bot-left.png"}
            ></ImageAvatar48>
            <div className="hidden 2xl:block">
              <DiamondDots
                className={cn({
                  "mix-blend-soft-light absolute bottom-[50.5%] left-[14%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[51.5%] 2xl:left-[2%] -translate-x-1/2":
                    locale === "en",
                  "mix-blend-soft-light absolute bottom-[50.5%] left-[14%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[50.5%] 2xl:left-[13%] -translate-x-1/2":
                    locale === "zh-cn",
                  "mix-blend-soft-light absolute bottom-[50.5%] left-[13%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[50.5%] 2xl:left-[13%] -translate-x-1/2":
                    locale === "zh-tw",
                  "mix-blend-soft-light absolute bottom-[50.5%] left-[14%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[50.5%] 2xl:left-[14%] -translate-x-1/2":
                    locale === "ja",
                })}
                color="bg-white"
              />
            </div>
            <div className="absolute rounded-full w-[321px] prm:w-[403px] h-[453px] prm:h-[569px] top-[12%] right-[-30%] prm:top-[19%] prm:right-[-39%] sm:w-[554px] sm:h-[781px] sm:top-[29%] 2xl:top-[24%] 2xl:right-[-24%] sm:right-[0%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] to-avatar-blue-6 blur-2xl opacity-30 z-15"></div>
            <div className="absolute rounded-full w-[794.69px] h-[552px] top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[22%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-20% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-56 mix-blend-screen"></div>
            <div className="absolute left-[9%] top-[50%] prm:left-[8%] prm:top-[54%] z-15 sm:left-[5%] sm:top-[49%] 2xl:top-[40%] 2xl:left-[-41%] sm:z-15 md:z-10 2xl:z-20 hidden 2xl:block">
              <h1
                className={cn(
                  "font-karantina text-[160px] font-black drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase ",
                  {
                    "leading-[86%]": locale === "en",
                    "leading-[100%]": locale === "zh-cn" || locale === "zh-tw" || locale === "ja",
                  }
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_top")}
                <br />
                {t("name_bottom")}
              </h1>
              {/* laptop */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"bhnuj"}
                shapeWidth={199}
                shapeHeight={111}
                className={cn(
                  {
                    "sm:top-[72%] sm:left-[-4%] 2xl:left-[-7%] 2xl:top-[75%] z-20 hidden 2xl:block":
                      locale === "en",
                    "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[79%] z-20 hidden 2xl:block":
                      locale === "zh-cn",
                    "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[80%] z-20 hidden 2xl:block":
                      locale === "zh-tw",
                    "sm:top-[72%] sm:left-[-4%] 2xl:left-[-8%] 2xl:top-[73%] z-20 hidden 2xl:block":
                      locale === "ja",
                  },
                )}
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
            <ImageAvatar48
              className="max-w-[107%] sm:w-[740px] max-h-dvh w-[328px] prm:w-[411px] h-auto left-2 object-contain z-10 relative"
              lightURL={"/assets/eimi-bg.webp"}
              drakURL={"/assets/eimi-bg-dark.webp"}
            ></ImageAvatar48>
          </div>
          <div className="absolute right-2 prm:right-8 sm:right-[7%] bottom-[29%] prm:bottom-[26%] sm:bottom-[31%] 2xl:bottom-[24%] 2xl:right-[9%] z-20 ">
            <h2
              className="font-karantina text-[45px] font-bold prm:text-custom-55 sm:text-[100px] 2xl:text-custom-120 sm:font-black text-white uppercase leading-[86%] text-right"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              {t("coming_soon")}
            </h2>
            {/* Laptop */}
            <ShapeGradientWrapper
              blurSize="2xs"
              index={"ijned"}
              shapeWidth={184}
              shapeHeight={85}
              className={cn({
                "sm:top-[54%] sm:right-[-8%] z-10 hidden 2xl:block":
                  locale === "en",
                "sm:top-[72%] sm:right-[6%] z-10 hidden 2xl:block":
                  locale === "zh-cn",
                "sm:top-[73%] sm:right-[5%] z-10 hidden 2xl:block":
                  locale === "zh-tw",
                "sm:top-[50%] sm:right-[19%] z-10 hidden 2xl:block":
                  locale === "ja",
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

            {/* Tablet */}
            <ShapeGradientWrapper
              blurSize="2xs"
              index={"uhbvc"}
              shapeWidth={153}
              shapeHeight={71}
              className="sm:top-[65%] sm:right-[-9%] z-10 hidden sm:block 2xl:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-r"
              bgColor="bg-linear-to-t from-white/60 to-white/10"
              strokeWidth={0.83}
              path={
                "M 0,8 A 8,8 0,0,1 8,0 L 145,0 A 8,8 0,0,1 153,8 L 153,35 A 3,7 0,0,1 152,39 L 115,68 A 7,3 0,0,1 110,70 L 10,70 A 20,20 0,0,1 0,60 Z"
              }
            />

            {/* Mobile */}
            <ShapeGradientWrapper
              blurSize="2xs"
              index={"ygftd"}
              // shapeWidth={64}
              // shapeHeight={29}
              shapeWidth={76}
              shapeHeight={35}
              className="prm:top-[50%] prm:right-[-8%] sm:top-[55%] sm:right-[-21%] z-10 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={0.35}
              bgColor="bg-linear-to-t from-white/40 to-white/5"
              path={
                "M 0,3 A 3,3 0,0,1 3,0 L 73,0 A 5,5 0,0,1 76,3 L 76,18 A 3,3 0,0,1 75,20 L 60,34 A 9,3 0,0,1 58,35 L 3,35 A 3,3 0,0,1 0,32 Z"
              }
            />

            {/* Mini Mobile */}
            <ShapeGradientWrapper
              blurSize="2xs"
              index={"trfes"}
              shapeWidth={64}
              shapeHeight={29}
              className="bottom-[-35%] right-[-9%] z-10 prm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={0.35}
              bgColor="bg-linear-to-t from-white/40 to-white/5"
              path={
                "M 0,3 A 3,3 0,0,1 3,0 L 61,0 A 5,5 0,0,1 64,3 L 64,14 A 3,3 0,0,1 63,16 L 48,28 A 9,3 0,0,1 46,29 L 3,29 A 3,3 0,0,1 0,26 Z"
              }
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EimiFukada;
