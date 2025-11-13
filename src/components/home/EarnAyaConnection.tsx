import { useTranslations } from "next-intl";
import DiamondDots from "../DiamondDots";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const EarnAyaConnection = () => {
  const t = useTranslations("LandingPage.section_earn_aya_connection");
  return (
    <SectionWrapper>
      <div className="hidden lg:block xl:hidden bg-cover bg-center fixed inset-0 bg-[url(/assets/bg-earn-aya-tablet-light.png)] dark:bg-[url(/assets/bg-earn-aya-tablet-dark.png)]" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center  opacity-21" />
      <div className="fixed hidden xl:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="size-full relative flex flex-col items-center justify-between">
        <div className="h-[35%] lg:hidden w-full flex flex-col items-center justify-end relative z-10 -mb-3 sm:-mb-6">
          <div className="w-full flex justify-start">
            <ImageAvatar48
              className="w-[268px] h-auto object-contain"
              lightURL="/assets/aya-earn-heart-dark.png"
              drakURL="/assets/aya-earn-heart-light.png"
            />
          </div>
          <div className="w-full px-5 sm:mx-0 max-w-[409px] flex flex-col gap-[3px]">
            <div className="relative w-fit flex flex-col items-end gap-2">
              <DiamondDots className="flex absolute -top-3 sm:-top-8 right-0" />
              <p className="text-custom-70 leading-[86%] font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                {t("title")}
              </p>
            </div>
            <p className="text-white text-right uppercase leading-[86%] w-full text-custom-55 font-karantina">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="h-[70%] lg:h-full w-full flex flex-col justify-center">
          <div className="h-full lg:relative lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-1 lg:px-10 xl:px-0 xl:max-w-[1008px] xl:mx-auto">
            <div className="hidden lg:flex w-full max-w-[650px] flex-col gap-4 lg:absolute top-[12%] left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-0 xl:top-[15%] xl:z-10">
              <div className="relative w-fit flex flex-col items-end gap-2">
                <DiamondDots className="flex absolute -top-8 right-0" />
                <p className="text-custom-120 xl:text-custom-125 leading-[86%] tracking-[2.4px]h font-bold font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                  {t("title")}
                </p>
              </div>
              <p className="text-white text-right uppercase leading-[86%] w-full font-bold text-custom-72 font-karantina tracking-[1.64px]">
                {t("subtitle")}
              </p>
            </div>
            <div className="h-full lg:h-auto flex items-center justify-center">
              <ImageAvatar48
                className="w-full h-auto object-contain scale-130 md:scale-100 lg:block lg:w-auto lg:h-full lg:object-contain lg:transform-gpu lg:scale-[1.4] xl:scale-[1.2] lg:origin-center lg:mx-auto"
                lightURL="/assets/earn-aya-connection-light-1920.png"
                drakURL="/assets/earn-aya-connection-dark-1920.png"
              />
            </div>
            <div className="hidden lg:col-span-1 w-full xl:mb-0 lg:flex lg:justify-end">
              <div className="w-full flex flex-col gap-8 items-center justify-end max-w-[391px] xl:max-w-[485px]">
                <ImageAvatar48
                  className="hidden lg:block scale-150 w-full h-auto object-contain"
                  lightURL="/assets/aya-earn-heart-dark.png"
                  drakURL="/assets/aya-earn-heart-light.png"
                />

                <p className="text-white text-lg text-justify font-kanit text-[18px] xl:text-[20px] leading-[117%] xl:leading-[142%] font-normal">
                  {t("content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EarnAyaConnection;
