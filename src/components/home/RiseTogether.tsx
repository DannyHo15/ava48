import { Info } from "lucide-react";
import { FloatButton } from "../ui/float-button";
import FloatInformation from "../FloatInformation";
import Image from "next/image";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const RiseTogether = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-21" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="grid grid-cols-1 px-5 w-full h-screen">
        {/* SLOGAN */}
        <div className="relative size-full flex-col flex justify-center">
          <div className="flex-center relative w-full h-fit">
            <ImageAvatar48
              className="prm:w-95 prm:h-71.5 w-92.5 lg:w-130.5 lg:h-102"
              lightURL={"/assets/rank48-light.png"}
              drakURL={"assets/rank48-dark.png"}
            ></ImageAvatar48>
            <div className="leading-none size-fit flex gap-0 flex-col items-center absolute  -bottom-20 pr-12">
              <div className="w-full max-w-95 lg:max-w-107.5 pr-5 text-custom-56 lg:text-custom-70 font-karantina font-bold bg-linear-to-r from-white via-white to-[#D81DE2] text-gradient">
                JOIN{" "}
                <label className="font-karantina text-custom-70 lg:text-custom-106">
                  RANK
                </label>
                <label className="font-karantina text-custom-82 lg:text-custom-123">
                  48
                </label>
              </div>
              <div className="text-custom-56 lg:text-custom-70 font-karantina text-right lg:text-left w-full">
                RISE TOGETHER !
              </div>
            </div>
          </div>
        </div>
        {/* Character */}
        <div className="size-full flex justify-center">
          <div className="size-full flex justify-center gap-4 max-w-220 max-h-52 lg:max-h-91">
            <div className="flex justify-end gap-2 lg:w-1/3 w-full">
              <ImageAvatar48
                className="max-w-36  lg:max-w-full h-full"
                lightURL={"/assets/aya-fujimoto-dark.png"}
                drakURL={"/assets/aya-fujimoto-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="flex-center justify-start gap-2 lg:w-1/3 w-full">
              <ImageAvatar48
                className="max-w-36  lg:max-w-full h-full"
                lightURL={"/assets/eimi-fukada-dark.png"}
                drakURL={"/assets/eimi-fukada-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="lg:w-1/3 w-0 h-full flex-center">
              <FloatInformation
                content={
                  "Inspired by the legendary AKB48 elections, RANK48 turns fandom into power. Every chat, every Heart, every show of support pushes your favorite Avatar higher on the leaderboard. The more you engage, the more they shine — and the more you both earn."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
