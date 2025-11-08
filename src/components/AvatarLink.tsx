"use client";

export const AvatarLink = () => {
  return (
    <div className="fixed bottom-6.5 sm:bottom-15 lg:bottom-6.75 right-5 sm:right-10 lg:right-11.75 z-10 flex sm:block gap-2 underline decoration-[0.5px] underline-offset-4 font-light text-white text-xl sm:space-y-6 xl:space-y-3">
      <a
        href="https://x.com/aya_avatar48"
        target="blank"
        className="flex-center-y justify-center xl:justify-end size-9.5 sm:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent backdrop-blur-md"
      >
        <div className="flex-center-y gap-6">
          <span className="hidden xl:flex">https://x.com/aya_avatar48</span>
          <img src={"/assets/x-icon.png"} alt="X icon" className="size-4 sm:size-6"/>
        </div>
      </a>
      <div className="hidden xl:flex h-[0.5px] bg-white/50" />
      <a
        href="https://t.me/Avatar48_Official"
        target="blank"
        className="flex-center-y justify-center xl:justify-end size-9.75 sm:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent backdrop-blur-md"
      >
        <div className="flex-center-y gap-6">
          <span className="hidden xl:flex">https://t.me/Avatar48_Official</span>
          <img src={"/assets/telegram-icon.png"} alt="Telegram icon" className="size-4 sm:size-6"/>
        </div>
      </a>
    </div>
  );
};
