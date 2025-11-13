import { Info } from "lucide-react";
import { FloatButton } from "../ui/float-button";
import FloatInformation from "../FloatInformation";
import Image from "next/image";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";
import { useTranslations } from "next-intl";

const RiseTogether = () => {
  const t = useTranslations("LandingPage.section_5");
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="grid grid-cols-1 px-5 size-full mx-auto gap-4 lg:flex-center lg:flex lg:justify-center lg:w-fit lg:gap-10">
        {/* SLOGAN */}
        <div className="relative size-full flex-col flex justify-center z-10 sm:justify-end lg:justify-center">
          <div className="w-full lg:w-fit lg:h-185 lg:items-start">
            <ImageAvatar48
              className="h-71.5 w-92.5 sm:w-130.5 sm:h-102 lg:w-177.75 lg:h-137 object-contain mx-auto"
              lightURL={"/assets/rank48-light.png"}
              drakURL={"assets/rank48-dark.png"}
            ></ImageAvatar48>
            <div className="leading-none size-fit flex gap-0 flex-col items-center -mt-12.5 lg:-mt-35.5 sm:-mt-20.5 pr-12 z-20 lg:bottom-15 mx-auto">
              <div className="w-full max-w-95 lg:max-w-107.5 pr-5 text-custom-56 lg:text-custom-70 font-karantina font-bold bg-linear-150 from-white via-white dark:to-avatar-violet to-avatar-primary text-gradient">
                {t("join")}{" "}
                <label className="font-karantina text-custom-70 lg:text-custom-106">
                  {t("rank")}
                </label>
                <label className="font-karantina text-custom-82 lg:text-custom-123">
                  48,
                </label>
              </div>
              <div className="text-custom-56 lg:text-custom-70 font-karantina text-right lg:text-left w-full text-white">
                {t("rise_together")}
              </div>
            </div>
          </div>
        </div>
        {/* Character */}
        <div className="size-full flex justify-center z-10 items-start lg:items-center lg:w-min">
          <div className=" gap-2 size-full sm:flex lg:flex-col-reverse lg:items-center max-w-220 mx-auto max-h-52 sm:max-h-91 lg:max-h-145.75 lg:min-w-fit">
            <div className="flex justify-center sm:justify-between sm:w-3/5 sm: lg:size-full size-full">
              <div className="flex justify-end gap-2 w-1/2">
                <ImageAvatar48
                  className="max-w-full h-full object-contain"
                  lightURL={"/assets/aya-fujimoto-light.png"}
                  drakURL={"/assets/aya-fujimoto-dark.png"}
                ></ImageAvatar48>
              </div>
              <div className="flex-center justify-start gap-2 w-1/2">
                <ImageAvatar48
                  className="max-w-full h-full object-contain"
                  lightURL={"/assets/eimi-fukada-light.png"}
                  drakURL={"/assets/eimi-fukada-dark.png"}
                ></ImageAvatar48>
              </div>
            </div>
            <div className="sm:w-2/5 w-0 h-full flex-center z-50 lg:w-121.25">
              <FloatInformation content={t("description")} />
            </div>
          </div>
        </div>
        {/*Radient*/}
        <div className="w-327.5 h-228 bg-radial-[100%_100%_at_50%_50%] from-avatar-blue-5/30 to-50% to-avatar-blue-4/5 absolute  -rotate-17 rounded-[100%] overflow-hidden -bottom-100 sm:left-20 lg:left-50 backdrop-blur-87.5"></div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
