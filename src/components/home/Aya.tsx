import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import DiamondDots from "../DiamondDots";
import GlassCard from "../common/GlassCard";
import { SectionWrapper } from "../SectionWrapper";

const RiseTogether = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-21" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="avatar-container relative">
        <GlassCard
          className="absolute top-[43%] left-[2%] w-[16%] h-[5%] sm:w-[200px] sm:h-[6%] sm:top-[30%] 2xl:h-[8%] 2xl:top-[42%] 2xl:left-[9%] bg-white/10 backdrop-blur-[2px] z-10"
          borderGradient="linear-gradient(135deg, rgba(255,255,255,.85), rgba(255,255,255,.25) 70%, rgba(255,255,255,0))"
        />
        <GlassCard
          className="absolute top-[44%] left-[61%] h-[11%] w-[200px] 2xl:top-[40%] bg-white/10 backdrop-blur-[2px] -rotate-270 z-10"
          borderGradient="linear-gradient(135deg, rgba(0,255,255,.85), rgba(0,255,255,.25) 70%, rgba(0,255,255,0))"
        />
        <GlassCard
          type="rectangle"
          className="absolute top-[77%] left-[34%] w-[11%] h-[5%] 2xl:left-[49%] 2xl:top-[61%] 2xl:h-[6%] 2xl:w-[8%] bg-white/10 backdrop-blur-[2px] z-15"
        />
        <div className="flex items-end justify-center min-h-screen">
          <div className="absolute rounded-full w-[1310.69px] h-[911.81px] top-[213px] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-28% via-avatar-blue-5 to-avatar-blue-4 blur-[240px] -rotate-[4.54deg]"></div>
          <div className="absolute left-1/20 top-9/25 z-5 sm:left-[4%] sm:top-[18%] 2xl:top-[30%] 2xl:left-[13%]">
            <h1
              className="font-karantina text-[55px] sm:text-[120px] font-black drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] z-15"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              THE
              <br />
              ULTIMATE
            </h1>
            <DiamondDots className="absolute bottom-[61%] left-[57%] sm:left-[63%] sm:bottom-[58%] 2xl:bottom-[62%] 2xl:left-[70%] -translate-x-1/2 z-30" />
          </div>
          <div className="relative max-w-6xl flex justify-center mb-0 pt-28 sm:pt-0 2xl:pt-[118px]">
            <ImageAvatar48
              className="max-w-[107%] sm:w-[640px] max-h-screen w-auto h-auto left-2 object-contain z-10 relative"
              lightURL={"/assets/aya-bg.webp"}
              drakURL={"/assets/aya-bg-dark.webp"}
            ></ImageAvatar48>
          </div>
          <div className="absolute right-7 sm:right-[7%] bottom-7/25 sm:bottom-[20%] 2xl:bottom-[34%] z-10 ">
            <h2
              className="font-karantina text-custom-70 sm:text-[160px] font-black bg-linear-to-r from-[#00F6FF] to-white bg-clip-text text-transparent uppercase leading-[86%] text-right"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              AVATAR
              <br />
              EXPERIENCE
            </h2>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
