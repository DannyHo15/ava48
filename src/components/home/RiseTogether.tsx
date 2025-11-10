import { Info } from "lucide-react";
import { FloatButton } from "../ui/float-button";
import FloatInformation from "../FloatInformation";
import Image from "next/image";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const RiseTogether = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 px-5 w-full h-screen">
        {/* SLOGAN */}
        <div className="relative size-full flex-col flex">
          <div className="flex-center relative w-full h-full">
            <ImageAvatar48
              className="prm:w-95 prm:h-71.5 w-92.5"
              lightURL={"/assets/rank48-light.png"}
              drakURL={"assets/rank48-dark.png"}
            ></ImageAvatar48>
            <div className="leading-none size-fit flex gap-0 flex-col items-center absolute bottom-8 pr-12">
              <div className="w-full max-w-95 px-5 text-custom-56 font-karantina font-bold bg-linear-to-r from-white via-white to-[#D81DE2] text-gradient">
                JOIN{" "}
                <label className="font-karantina text-custom-70">RANK</label>
                <label className="font-karantina text-custom-82">48</label>
              </div>
              <div className="text-custom-56 font-karantina text-right w-full">
                RISE TOGETHER !
              </div>
            </div>
          </div>
          {/* Character */}
          <div className="flex-center gap-4 mt-24">
            <ImageAvatar48
              className="w-36 h-52"
              lightURL={"/assets/aya-fujimoto-dark.png"}
              drakURL={"/assets/aya-fujimoto-dark.png"}
            ></ImageAvatar48>
            <ImageAvatar48
              className="w-36 h-52"
              lightURL={"/assets/eimi-fukada-dark.png"}
              drakURL={"/assets/eimi-fukada-dark.png"}
            ></ImageAvatar48>
          </div>
        </div>
        {/* Character */}
        <div className="size-full flex justify-center">
          <div className="size-full flex gap-4 max-w-220">
            <div className="flex-center lg:justify-end justify-center h-fit gap-4 lg:w-1/3 w-full">
              <ImageAvatar48
                className="max-w-36 max-h-52 lg:max-w-full lg:max-h-91 w-full"
                lightURL={"/assets/aya-fujimoto-dark.png"}
                drakURL={"/assets/aya-fujimoto-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="flex-center lg:justify-end justify-center h-fit gap-4 lg:w-1/3 w-full">
              <ImageAvatar48
                className="max-w-36 max-h-52 lg:max-w-full lg:max-h-91 w-full"
                lightURL={"/assets/eimi-fukada-dark.png"}
                drakURL={"/assets/eimi-fukada-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="lg:w-1/3 w-0">
              <FloatInformation
                content={
                  "Inspired by the legendary AKB48 elections, RANK48 turns fandom into power. Every chat, every Heart, every show of support pushes your favorite Avatar higher on the leaderboard. The more you engage, the more they shine — and the more you both earn."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiseTogether;

