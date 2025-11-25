import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import clsx from "clsx";
import OptimizedThemeImage from "../OptimizedThemeImage";
import Image from "next/image";

const EimiFukada = () => {
  const t = useTranslations("LandingPage.section_eimi");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <SectionWrapper>
      <div className="fixed inset-0 z-0">
        <div className="relative size-full">
          <OptimizedThemeImage
            lightURL="/assets/aya-laptop-bg.webp"
            darkURL="/assets/aya-laptop-bg-dark.webp"
            alt="Laptop background"
            fill={true}
            className="object-cover w-full h-full"
            unoptimized
            quality={100}
            priority={false}
            placeholder="blur"
          />
        </div>
      </div>
      {/* Background texture - optimized for 2xl+ screens only */}
      <div className="fixed inset-0 hidden 2xl:block z-0">
        <Image
          src="/assets/bg-texture.webp"
          alt="Background texture"
          fill
          className="object-contain object-bottom mix-blend-plus-lighter"
          sizes="100vw"
          unoptimized
          quality={90}
          priority={false}
          placeholder="empty"
        />
      </div>
      <div
        className="avatar-container relative"
        id="section-eimi"
        suppressHydrationWarning
      >
        <div className="flex items-end justify-center min-h-dvh">
          <div className="relative max-w-6xl flex justify-center mb-0 xl:pt-[97px] 2xl:pt-[75px]">
            <div
              className={cn(
                "absolute sm:z-5 xl:top-[41%] xl:left-[-35%] xl:z-10 2xl:z-20 2xl:hidden",
                {
                  "z-15 left-3 top-[-3%] sm:left-[-12%] sm:top-[-14%] lg:left-[-12%] lg:top-[-17%] 2xl:top-[38%] 2xl:left-[11%] leading-[75%]":
                    locale === "en",
                  "z-15 left-4 top-[-1%] sm:left-[-15%] sm:top-[-17%]":
                    locale === "zh-cn" || locale === "zh-tw",
                  "z-5 left-6 top-[3%] sm:left-[-13%] sm:top-[-13%] lg:left-[-9%] lg:top-[-15%]":
                    locale === "ja",
                },
              )}
            >
              <h1
                className={clsx(
                  "font-karantina font-bold drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(313deg,#FFFFFF_30%,#3EF8FF_150%)] sm:text-white bg-clip-text text-transparent uppercase",
                  {
                    "text-custom-55 sm:text-custom-92 lg:text-custom-140 2xl:text-custom leading-none":
                      locale === "en",
                    "text-custom-36 sm:text-custom-75 lg:text-custom-110 leading-[100%]":
                      locale === "ja",
                    "text-custom-48 sm:text-custom-103 lg:text-custom-120 leading-[100%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  },
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
                    "text-custom-55 sm:text-custom-103 lg:text-custom-140 2xl:text-custom-160 leading-none":
                      locale === "en",
                    "text-custom-36 sm:text-custom-75 lg:text-custom-110 leading-[110%]":
                      locale === "ja",
                    "text-custom-48 sm:text-custom-103 lg:text-custom-120 leading-[100%]":
                      locale === "zh-cn" || locale === "zh-tw",
                  },
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

              {/* Ipad Air */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"xodcr"}
                shapeWidth={165}
                shapeHeight={92}
                className="sm:top-[69%] sm:left-[-15%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden sm:block lg:hidden sm:scale-78"
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

              {/* Tablet */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"nedcr"}
                shapeWidth={165}
                shapeHeight={92}
                className="sm:top-[73%] sm:left-[-22%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden lg:block 2xl:hidden"
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

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"vbgyn"}
                shapeWidth={60}
                shapeHeight={31}
                className={cn({
                  "top-[72%] left-[-11%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 sm:hidden":
                    locale === "en" || locale === "ja",
                  "top-[72%] left-[-9%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 sm:hidden":
                    locale === "zh-cn" || locale === "zh-tw",
                })}
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
              className={cn(
                "absolute z-20 xl:right-[-34%] 4xl:right-[-60%]! 4xl:bottom-[18%]!",
                {
                  "right-[6%] bottom-[24%] sm:right-[-11%] sm:bottom-[26%] lg:right-[-9%] lg:bottom-[27%] 2xl:bottom-[16%] 2xl:right-[-6%] leading-[86%]":
                    locale === "en",
                  "bottom-[25%] right-[7%] sm:bottom-[23%] sm:right-[-8%] lg:bottom-[24%] lg:right-[-9%] 2xl:bottom-[18%] 2xl:right-[-7%]":
                    locale === "zh-cn" || locale === "zh-tw",
                  "right-[7%] bottom-[30%] sm:right-[-18%] sm:bottom-[25%] lg:right-[-13%] lg:bottom-[21%] 2xl:bottom-[17%] 2xl:right-[-6%]":
                    locale === "ja",
                },
              )}
            >
              <h2
                className={clsx(
                  "font-karantina font-bold bg-white dark:bg-[linear-gradient(160deg,#FFFFFF_70%,#D81DE2_200%)] bg-clip-text text-transparent uppercase text-right",
                  {
                    "text-custom-40 sm:text-custom-56 lg:text-custom-88 2xl:text-custom-120 4xl:text-custom-200! leading-[80%] lg:leading-[75%]":
                      locale === "en",
                    "text-custom-30 sm:text-custom-56 lg:text-custom-60 2xl:text-custom-90 leading-none sm:leading-[100%] 2xl:leading-[100%] 4xl:text-custom-192!":
                      locale === "ja",
                    "text-custom-32 sm:text-custom-72 lg:text-custom-75 2xl:text-custom-90 leading-none sm:leading-none 4xl:text-custom-152!":
                      locale === "zh-cn" || locale === "zh-tw",
                  },
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("coming_soon_top")}
              </h2>
              <h2
                className={clsx(
                  "font-karantina font-bold bg-white dark:bg-[linear-gradient(165deg,#FFFFFF_34%,#D81DE2_185%)] bg-clip-text text-transparent uppercase text-right",
                  {
                    "text-custom-54 sm:text-custom-98 lg:text-custom-130 2xl:text-custom-160 leading-none 4xl:text-custom-272! lg:leading-[75%]":
                      locale === "en",
                    "text-custom-38 sm:text-custom-82 lg:text-custom-100 2xl:text-custom-117 4xl:text-custom-248! leading-[110%] sm:leading-none 2xl:leading-[76%]":
                      locale === "ja",
                    "text-custom-50 sm:text-custom-98 lg:text-custom-130 2xl:text-custom-160 leading-[90%] sm:leading-[77%] 2xl:leading-[77%] 4xl:text-custom-272!":
                      locale === "zh-cn" || locale === "zh-tw",
                  },
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("coming_soon_bottom")}
                <span
                  className={cn("font-karantina font-bold", {
                    "text-custom-62 sm:text-custom-121 lg:text-custom-153 2xl:text-custom-185 lg:leading-[75%] 4xl:text-custom-297!":
                      locale === "en",
                    "text-custom-58 sm:text-custom-110 lg:text-custom-153 2xl:text-custom-185 leading-[90%] sm:leading-[77%] 4xl:text-custom-297!":
                      locale === "zh-cn" || locale === "zh-tw",
                    "font-karantina text-custom-44 sm:text-custom-94 lg:text-custom-118 2xl:text-custom-138 font-bold leading-[90%] sm:leading-[80%] 2xl:leading-[76%] 4xl:text-custom-272!":
                      locale === "ja",
                  })}
                >
                  48
                </span>
                {locale === "ja" ? (
                  <span className="font-karantina text-custom-30 sm:text-custom-56 lg:text-custom-60 2xl:text-custom-90 text-right font-bold leading-none sm:leading-[80%] 2xl:leading-[110%] 4xl:text-custom-192! pl-2 sm:pl-5 2xl:pl-8">
                    へ！
                  </span>
                ) : null}
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
              className="fixed left-0 bottom-0 z-0 opacity-80 hidden dark:2xl:block 4xl:hidden"
              lightURL={"/assets/light-bot-left.png"}
              drakURL={"/assets/light-bot-left.png"}
            ></ImageAvatar48>
            {/* <div className="absolute rounded-full w-[794.69px] h-[552px] top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[22%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-20% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-56 mix-blend-screen"></div> */}
            <div
              className={cn(
                "absolute left-[9%] top-[50%] prm:left-[8%] prm:top-[54%] z-15 sm:left-[5%] sm:top-[49%] 2xl:top-[42%] 2xl:left-[-42%] sm:z-15 md:z-10 2xl:z-20 hidden 2xl:block",
                {
                  "2xl:left-[2%] 2xl:top-[42%] 4xl:left-[-45%]! 4xl:top-[46%]!":
                    locale === "en",
                  "2xl:left-[1%] 2xl:top-[47%] 4xl:left-[-53%]! 4xl:top-[47%]!":
                    locale === "ja",
                  "2xl:left-[-3%] 2xl:top-[46%] 4xl:left-[-54%]! 4xl:top-[46%]!":
                    locale === "zh-cn",
                  "2xl:left-[-4%] 2xl:top-[45%] 4xl:left-[-54%]! 4xl:top-[46%]!":
                    locale === "zh-tw",
                },
              )}
            >
              <h1
                className={clsx(
                  "font-karantina text-custom-60 sm:text-custom-140 font-bold drop-shadow-amber-950 drop-shadow-xs text-white uppercase",
                  {
                    "2xl:text-custom-160 4xl:text-custom-272! leading-[86%]":
                      locale === "en",
                    "leading-[100%] 4xl:text-custom-232!":
                      locale === "zh-cn" || locale === "zh-tw",
                    "2xl:text-custom-120 leading-[100%] 4xl:text-custom-232!":
                      locale === "ja",
                  },
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_top")}
              </h1>
              <h1
                className={cn(
                  "font-karantina text-custom-60 sm:text-custom-140 font-bold drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(147deg,#FFFFFF_35%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase",
                  {
                    "2xl:text-custom-160 leading-[86%] 4xl:text-custom-272!":
                      locale === "en",
                    "leading-[100%] 4xl:text-custom-232!":
                      locale === "zh-cn" || locale === "zh-tw",
                    "2xl:text-custom-120 leading-[100%] 4xl:text-custom-232!":
                      locale === "ja",
                  },
                )}
                style={{
                  filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
                }}
              >
                {t("name_bottom")}
              </h1>
              {/* 4k */}
              <ShapeGradientWrapper
                blurSize="sm"
                index={"bhnum"}
                shapeWidth={398}
                shapeHeight={222}
                className={cn({
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-16%] 2xl:top-[75%] 4xl:left-[-22%] z-20 hidden 4xl:block!":
                    locale === "en",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[79%] 4xl:left-[-32%]! 4xl:top-[72%]! z-20 hidden 4xl:block!":
                    locale === "zh-cn",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-11%] 2xl:top-[80%] 4xl:left-[-32%]! 4xl:top-[72%]! z-20 hidden 4xl:block!":
                    locale === "zh-tw",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-8%] 2xl:top-[73%] 4xl:left-[-22%] 4xl:top-[69%]! z-20 hidden 4xl:block!":
                    locale === "ja",
                })}
                strokeColor={[
                  { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                  { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
                ]}
                strokeDirection="to-br"
                strokeWidth={2}
                path={
                  "M 398,18 A 17.41,18 0,0,0 380,0 L 100,0 A 18,18 0,0,0 82,8 L 8,90 A 34,38 0,0,0 0,108 L 0,202 A 16,18 0,0,0 16,222 L 380,222 A 16,18 0,0,0 398,202 Z"
                }
              />
              {/* laptop */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"bhnuj"}
                shapeWidth={199}
                shapeHeight={111}
                className={cn({
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-16%] 2xl:top-[75%] z-20 hidden 2xl:block 4xl:hidden!":
                    locale === "en",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-18%] 2xl:top-[71%] z-20 hidden 2xl:block 4xl:hidden!":
                    locale === "zh-cn",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-18%] 2xl:top-[71.1%] z-20 hidden 2xl:block 4xl:hidden!":
                    locale === "zh-tw",
                  "sm:top-[72%] sm:left-[-4%] 2xl:left-[-8%] 2xl:top-[73%] z-20 hidden 2xl:block 4xl:hidden!":
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

              {/* Mini Mobile */}
              <ShapeGradientWrapper
                blurSize="2xs"
                index={"okwsx"}
                shapeWidth={60}
                shapeHeight={31}
                className="top-[72%] left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 sm:hidden"
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
            {/* 2k */}
            <div className="relative flex items-end z-5 2xl:z-10 2xl:hidden">
              <div className="z-10 relative -bottom-2 right-[-20%] sm:right-[-27%] 2xl:right-[-31%] 4xl:right-[-36%]!">
                <OptimizedThemeImage
                  className="sm:w-[566px] lg:w-[737px] 2xl:w-[752px] 4xl:max-w-none! 4xl:w-[1505px]! 4xl:pt-[100px]! max-h-dvh w-[375px] max-w-[120%] h-auto object-contain"
                  lightURL="/assets/eimi-bg-ai.webp"
                  darkURL="/assets/eimi-bg-ai.webp"
                  width={1948}
                  height={974}
                  quality={80}
                  priority={false}
                  placeholder="blur"
                  sizes="(max-width: 640px) 450px, (max-width: 1024px) 737px, (max-width: 1536px) 752px, 1505px"
                  alt="Eimi AI Character"
                />
              </div>
              <div className="z-10 absolute -bottom-2 left-[-31%] sm:left-[-44%] 2xl:left-[-51%] 4xl:left-[-45%]!">
                <OptimizedThemeImage
                  className="sm:w-[721px] lg:w-[941px] 2xl:w-[974px] 4xl:max-w-none! 4xl:w-[1948px]! 4xl:pt-[100px]! max-h-dvh w-[432px] h-auto object-contain"
                  lightURL="/assets/eimi-bg.webp"
                  darkURL="/assets/eimi-bg.webp"
                  width={1948}
                  height={974}
                  quality={75}
                  priority={false}
                  placeholder="blur"
                  sizes="(max-width: 640px) 520px, (max-width: 1024px) 941px, (max-width: 1536px) 974px, 1948px"
                  alt="Eimi Character"
                />
              </div>
            </div>
            <div className="relative flex items-end z-5 2xl:z-10 2xl:block hidden">
              {/* 4K */}
              <div className="relative flex items-end z-5 2xl:z-10 2xl:-bottom-2">
                <div className="z-10 relative">
                  <OptimizedThemeImage
                    className="sm:w-[566px] lg:w-[737px] 2xl:w-[1369px] 4xl:max-w-none! 4xl:w-[4505px]! 4xl:pt-[100px]! max-h-dvh w-[375px] max-w-[120%] h-auto object-contain"
                    lightURL={"/assets/eimi-4k.png"}
                    darkURL={"/assets/eimi-4k.png"}
                    width={1948}
                    height={974}
                    quality={100}
                    priority={true}
                    placeholder="blur"
                    alt="Aya Fujimoto"
                  ></OptimizedThemeImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EimiFukada;

