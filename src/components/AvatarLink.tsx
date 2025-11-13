"use client";

import { cn } from "@/lib/utils";
import { Link, X } from "lucide-react";
import { useState } from "react";

export const AvatarLink = () => {
  const [openLink, setOpenLink] = useState(false);
  return (
    <div
      className={cn(
        "fixed bottom-6.5 md:bottom-15 lg:bottom-5 right-5 md:right-10 lg:right-13.25 z-10 min-[420px]:h-9.75 md:h-31 xl:h-22 transition-all overflow-hidden rounded-b-full min-[420px]:rounded-b-none space-y-px min-[420px]:space-y-0",
        openLink ? "h-30" : "h-10"
      )}
    >
      <div className="block min-[420px]:flex md:block gap-2 underline decoration-[0.5px] underline-offset-4 font-light text-white text-xl space-y-px min-[420px]:space-y-0 md:space-y-6 xl:space-y-3">
        <a
          href="https://x.com/aya_avatar48"
          target="blank"
          className="flex-center-y justify-center xl:justify-end size-9.75 md:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent max-xl:backdrop-blur-md"
        >
          <div className="flex-center-y gap-6">
            <span className="hidden xl:flex">https://x.com/aya_avatar48</span>
            <img src={"/assets/x-icon.png"} alt="X icon" className="size-4 md:size-6" />
          </div>
        </a>
        <div className="hidden xl:flex h-[0.5px] bg-white/50" />
        <a
          href="https://t.me/Avatar48_Official"
          target="blank"
          className="flex-center-y justify-center xl:justify-end size-9.75 md:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent max-xl:backdrop-blur-md"
        >
          <div className="flex-center-y gap-6">
            <span className="hidden xl:flex">https://t.me/Avatar48_Official</span>
            <img
              src={"/assets/telegram-icon.png"}
              alt="Telegram icon"
              className="size-4 md:size-6"
            />
          </div>
        </a>
      </div>
      <div className="sticky bottom-0 min-[420px]:hidden flex-center size-9.75 rounded-full bg-white/10 xl:bg-transparent backdrop-blur-md text-white" onClick={()=> setOpenLink(!openLink)}>
        {openLink ?<X size={16} />:<Link size={16} />}
      </div>
    </div>
  );
};
