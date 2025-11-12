import DiamondDots from "../DiamondDots";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const EarnAyaConnection = () => {
  return (
    <SectionWrapper>
      <div className="hidden lg:block xl:hidden bg-cover bg-center fixed inset-0 bg-[url(/assets/bg-earn-aya-tablet-light.png)] dark:bg-[url(/assets/bg-earn-aya-tablet-dark.png)]" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-21" />
      <div className="fixed hidden xl:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      {/* <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" /> */}
      <div className="size-full relative flex flex-col items-center justify-between">
        <div className="h-[35%] lg:hidden w-full flex flex-col items-center justify-end relative z-10 -mb-10 sm:-mb-6">
          <div className="w-full flex justify-start">
            <ImageAvatar48
              className="w-[268px] h-auto object-contain"
              lightURL="/assets/aya-earn-heart-dark.png"
              drakURL="/assets/aya-earn-heart-light.png"
            />
          </div>
          <div className="w-full px-5 sm:mx-0 max-w-[409px] flex flex-col gap-[3px]">
            <div className="relative w-fit flex flex-col items-end gap-2">
              <DiamondDots className="flex absolute -top-3 right-0" />
              <p className="text-custom-70 leading-[86%] font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                PLAY THE GAME
              </p>
            </div>
            <p className="text-white text-right uppercase leading-[86%] w-full text-custom-55 font-karantina">
              Earn Aya’s Heart
            </p>
          </div>
        </div>
        <div className="h-[70%] lg:h-full w-full flex flex-col justify-center">
          <div className="h-full lg:relative lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-1 lg:px-10 xl:px-0 xl:max-w-[1008px] xl:mx-auto">
            <div className="hidden lg:flex w-full max-w-[650px] flex-col gap-4 lg:absolute top-[12%] left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-0 xl:top-[15%] xl:z-10">
              <div className="relative w-fit flex flex-col items-end gap-2">
                <DiamondDots className="flex absolute -top-8 right-0" />
                <p className="text-custom-120 xl:text-custom-125 leading-[86%] tracking-[2.4px]h font-bold font-karantina text-left w-full bg-linear-to-tr from-white via-white to-[#00D0F6] dark:to-[#D81DE2] text-gradient">
                  PLAY THE GAME
                </p>
              </div>
              <p className="text-white text-right uppercase leading-[86%] w-full font-bold text-custom-72 font-karantina tracking-[1.64px]">
                Earn Aya’s Heart
              </p>
            </div>
            <div className="h-full lg:h-auto">
              <ImageAvatar48 
                className="hidden lg:block w-auto h-full object-cover object-top lg:object-contain lg:col-span-1 transform-gpu lg:scale-[1.2] lg:origin-bottom"
                lightURL="/assets/earn-aya-connection-dark-1920.png"
                drakURL="/assets/earn-aya-connection-light-1920.png"
              />
              <ImageAvatar48
                className="block lg:hidden w-full h-auto object-contain"
                lightURL="/assets/earn-aya-mobile-light.png"
                drakURL="/assets/earn-aya-mobile-dark.png"
              />
            </div>
            <div className="hidden lg:block lg:col-span-1 w-full mb-50 xl:mb-0 xl:flex xl:justify-end">
              <div className="w-full flex flex-col gap-2 items-center justify-end max-w-[485px]">
                <ImageAvatar48
                  className="hidden lg:block w-full h-auto object-contain"
                  lightURL="/assets/aya-earn-heart-dark.png"
                  drakURL="/assets/aya-earn-heart-light.png"
                />

                <p className="text-white text-lg text-justify font-kanit leading-[117%] xl:leading-[142%] font-normal">
                  Every chat, every connection earns you Hearts. Use them to
                  unlock premium features, collect exclusive content, and many
                  more surprises to come.
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
