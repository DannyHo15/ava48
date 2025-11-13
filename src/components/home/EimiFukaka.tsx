import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import DiamondDots from "../DiamondDots";
import { SectionWrapper } from "../SectionWrapper";

const RiseTogether = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture-2.webp)] bg-cover bg-center mix-blend-overlay" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="avatar-container relative">
        <div className="absolute w-[1342px] h-[496px] prm:w-[1643px] sm:w-[1568px] sm:h-[552px] prm:[657px] bottom-0 right-[-219%] prm:right-[-215%] prm:bottom-[10%] sm:right-[-20%] sm:bottom-0  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[7%]  bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom  z-10 bg-no-repeat max-h-screen " />
        <div className="flex items-end justify-center min-h-screen">
          <div className="absolute rounded-full w-[794.69px] h-[552px] top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[22%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-20% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-56 mix-blend-screen"></div>
          <DiamondDots
            className="mix-blend-soft-light absolute bottom-[50.5%] left-[14%] prm:left-[17%] sm:left-[27.5%] sm:bottom-[45%] 2xl:bottom-[52%] 2xl:left-[34%] -translate-x-1/2"
            color="bg-white"
          />
          <div className="absolute rounded-full w-[321px] prm:w-[403px] h-[453px] prm:h-[569px] top-[12%] right-[-30%] prm:top-[19%] prm:right-[-39%] sm:w-[554px] sm:h-[781px] sm:top-[29%] 2xl:top-[24%] 2xl:right-[10%] sm:right-[0%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] to-avatar-blue-6 blur-2xl opacity-30 z-15"></div>
          <div className="absolute rounded-full w-[204px] prm:w-[256px] h-[204px] prm:h-64 top-[18%] right-[56%] prm:top-[19%] prm:right-[52%] prm:hidden sm:w-[554px] sm:h-[781px] sm:top-[21%] sm:right-[10%] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] to-avatar-blue-6 blur-2xl opacity-[0.01] z-15 -rotate-48 prm:-rotate-[-24deg]"></div>
          <div className="absolute left-[9%] top-[50%] prm:left-[8%] prm:top-[54%] z-15 sm:left-[5%] sm:top-[49%] 2xl:top-[38%] 2xl:left-[11%] sm:z-15 md:z-10 2xl:z-20">
            <h1
              className="font-karantina text-[60px] prm:text-custom-70 sm:text-custom-120 2xl:text-[160px] font-black drop-shadow-amber-950 drop-shadow-xs bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%]"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              Eimi
              <br />
              Fukada
            </h1>
          </div>
          <div className="relative max-w-6xl flex justify-center mb-0 pt-0 md:pt-32 2xl:pt-[97px]">
            <ImageAvatar48
              className="max-w-[107%] sm:w-[740px] max-h-screen w-[328px] prm:w-[411px] h-auto left-2 object-contain z-10 relative"
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
              is coming
            </h2>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
