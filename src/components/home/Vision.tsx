import FloatInformation from "../FloatInformation";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const Vision = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="lg:container lg:m-auto h-full flex flex-col relative px-5 pt-24 sm:pt-48 lg:pt-36">
        <div className=" w-full max-w-64 ml-auto sm:flex sm:max-w-full sm:h-fit sm:ml-0 gap-4 z-50  sm:mx-auto justify-center">
          <div className="relative sm:w-2/3 size-full gap-4 flex sm:flex-col lg:justify-center justify-end mb-5 sm:mb-0 lg:w-fit">
            <ImageAvatar48
              className="size-full ml-auto object-contain lg:max-h-121.75"
              lightURL={"/assets/aya-trading-chart-light.png"}
              drakURL={"/assets/aya-trading-chart-dark.png"}
            />

            <div className="max-w-72 h-fit self-end">
              <ImageAvatar48
                className="object-contain sm:block lg:hidden"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
              <ImageAvatar48
                className="max-h-36.5 lg:block sm:hidden sm:max-w-43.5 sm:max-h-71.25 lg:max-h-full"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              ></ImageAvatar48>
            </div>
            <div className="absolute hidden sm:block -bottom-15 left-25 lg:left-0 w-full max-w-82.5 sm:max-w-4/5 lg:max-w-160 lg:bottom-5">
              <div className="text-white font-karantina leading-none">
                <span className="bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet text-gradient text-custom-70  tracking-wide font-bold drop-shadow-text font-karantina lg:text-custom-125">
                  YOUR <span className="font-karantina">VISION,</span>
                </span>
              </div>
              <div className="font-karantina text-custom-56 tracking-wide font-bold text-white leading-none mt-2 drop-shadow-text text-right lg:text-custom-82">
                YOUR TOKEN
              </div>
            </div>
          </div>
          <div className="sm:block hidden w-1/3 pt-7 lg:pt-50">
            <span className="text-white text-xl">
              Dive into a live trading experience built for speed and
              excitement. Instantly trading, track performance in real time, and
              launch your own token to make your mark in the AVATAR48 ecosystem.
            </span>
            <div className="w-full flex mt-4 ">
              <ImageAvatar48
                className="max-h-36.5 lg:hidden sm:max-w-43.5 sm:max-h-full"
                lightURL={"/assets/aya-swap-light.png"}
                drakURL={"/assets/aya-swap-dark.png"}
              ></ImageAvatar48>
              <ImageAvatar48
                className="object-contain lg:block sm:hidden lg:mt-12"
                lightURL={"/assets/ai-agent-list-light.png"}
                drakURL={"/assets/ai-agent-list-dark.png"}
              />
            </div>
          </div>
          <div className="block sm:hidden sm:w-1/3 size-full relative z-50">
            <FloatInformation
              content={
                "Dive into a live trading experience built for speed and excitement. Instantly trading, track performance in real time, and launch your own token to make your mark in the AVATAR48 ecosystem."
              }
            ></FloatInformation>
          </div>
        </div>

        {/*content mobile*/}
        <div className="relative sm:hidden mt-8 size-full mx-auto max-h-38 z-10">
          <div className="absolute w-full max-w-82.5">
            <div className="text-white font-karantina leading-none">
              <span className="bg-linear-60 from-white via-white to-avatar-primary dark:to-avatar-violet text-gradient text-custom-70  tracking-wide font-bold drop-shadow-text font-karantina">
                YOUR <span className="font-karantina">VISION,</span>
              </span>
            </div>
            <div className="font-karantina text-custom-56 tracking-wide font-bold text-white leading-none mt-2 drop-shadow-text text-right">
              YOUR TOKEN
            </div>
          </div>
          <div className="w-full flex justify-end">
            <ImageAvatar48
              className="max-h-36.5 sm:max-h-44"
              lightURL={"/assets/aya-swap-light.png"}
              drakURL={"/assets/aya-swap-dark.png"}
            ></ImageAvatar48>
          </div>
        </div>

        {/* Additional visual element */}
        <div className="max-w-72 h-fit sm:z-20  mr-auto relative sm:hidden">
          <ImageAvatar48
            className="object-contain"
            lightURL={"/assets/ai-agent-list-light.png"}
            drakURL={"/assets/ai-agent-list-dark.png"}
          />
        </div>
        {/*Radient*/}
        <div className="w-150 h-100 top-6  sm:w-[96vw] sm:h-[50vh] bg-linear-to-b sm:bg-linear-120 dark:from-avatar-violet/60 from-avatar-primary/50 via-avatar-blue-5/30 to-avatar-blue-4/50 absolute -rotate-17 rounded-[100%] overflow-hidden bottom-100 left-50 sm:left-0 sm:top-60 lg:left-30 z-0 blur-3xl"></div>
      </div>
    </SectionWrapper>
  );
};

export default Vision;
