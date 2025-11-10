import { Info } from "lucide-react";
import { FloatButton } from "../ui/float-button";
import FloatInformation from "../FloatInformation";
import Image from "next/image";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const RiseTogether = () => {
  return (
    <SectionWrapper>
      <div className="">
        <div className="flex-center flex-col w-full h-screen">
          {/* SLOGAN */}
          <div className="relative">
            <ImageAvatar48
              className="prm:w-95 prm:h-71.5 mix-blend-plus-lighter"
              lightURL={"/assets/rank48-light.png"}
              drakURL={"assets/rank48-dark.png"}
            ></ImageAvatar48>
            <div className="leading-none w-full h-fit flex gap-0 flex-col items-center absolute -bottom-14 pr-12">
              <div className="w-full max-w-95 px-5 text-custom-56 font-karantina font-bold bg-linear-to-r from-white via-white to-[#D81DE2] text-gradient">
                JOIN <label className="font-karantina text-custom-70">RANK</label>
                <label className="font-karantina text-custom-82">48</label>
              </div>
              <div className="text-custom-56 font-karantina text-right w-full">RISE TOGETHER !</div>
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
        <FloatInformation
          content={
            "Inspired by the legendary AKB48 elections, RANK48 turns fandom into power. Every chat, every Heart, every show of support pushes your favorite Avatar higher on the leaderboard. The more you engage, the more they shine — and the more you both earn."
          }
        />
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
