import DiamondDots from "../DiamondDots";
import FloatInformation from "../FloatInformation";
import ImageAvatar48 from "../ImageAvatar48";
import { SectionWrapper } from "../SectionWrapper";

const AIConnection = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-21" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="size-full md:mx-10">
        <div className="size-full relative mx-auto max-w-full lg:max-w-[1093px] flex items-center justify-center gap-[35px] xl:gap-[118px]">
          <div className="hidden lg:block relative flex-1 size-full"></div>
          <div className="relative w-fit h-dvh pt-[179px] sm:pt-[225px] xl:pt-40 flex flex-col items-center justify-end">
            <div className="relative w-full h-full lg:pr-35 xl:pr-0 flex items-end justify-center">
              <div className="z-30 w-full max-w-[755px] absolute -top-1/12 translate-y-1/12 sm:top-[30%] lg:-left-[290px] lg:top-[22%] xl:-left-[600px] xl:top-[40%] xl:-translate-y-[40%]">
                <div className="absolute rounded-full w-[794.69px] h-[552px] top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[77%] sm:left-0  bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-20% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-56 mix-blend-screen"></div>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 sm:-top-70 lg:left-[40%] xl:left-[75%] whitespace-nowrap font-bold">
                  <DiamondDots className="flex absolute -top-3 right-0 md:left-1 md:-top-10" />
                  <div className="w-full flex flex-col gap-1 lg:gap-5 xl:gap-[11px]">
                    <p className="text-white text-custom-55 lg:text-custom-72 xl:text-custom-82 leading-[86%] font-karantina text-left w-full">
                      ENTER THE WORLD OF
                    </p>
                    <p className="text-right leading-[86%] w-full sm:pl-16 md:pl-23 xl:pl-[175px] text-custom-70 lg:text-custom-110 xl:text-custom-125 font-karantina bg-linear-to-r from-[#00D0F6] dark:from-[#D81DE2] via-white to-white text-gradient">
                      AI CONNECTION
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-full max-w-[301px] xl:max-w-[500px] h-[253px] xl:h-[219px] rounded-4xl">
                  <FloatInformation
                    content={
                      <div className="flex flex-col gap-2">
                        <p className="text-xl leading-[142%] font-normal!">
                          Your virtual companion who knows the markets as well
                          as she knows you. From late-night chats to playful
                          banter, she’s always there to share insights, spark
                          emotion, and turn every conversation into something
                          worth remembering*
                          <br />
                          <span className="text-white text-base font-normal! leading-[121%]">
                            *Please note: Our AI offers perspectives and
                            suggestions, not financial advice or precise
                            predictions.
                          </span>
                        </p>
                      </div>
                    }
                  />
                </div>
                {/* <div className="absolute rounded-full w-[794.69px] prm:w-[1160px] 2xl:w-[1310px] h-[552px] prm:h-[807px] 2xl:h-[911px] top-[24%] prm:top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[6%] 2xl:top-[165%] sm:left-[33%] sm:opacity-[0.45] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-27% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[94px] -rotate-[4.54deg] opacity-60 mix-blend-screen"></div> */}
              </div>
              <ImageAvatar48
                className="hidden xl:block w-auto h-full object-contain"
                lightURL={"/assets/ai-connection-1920.png"}
                drakURL={"/assets/ai-connection-1920.png"}
              />
              <ImageAvatar48
                className="xl:hidden w-auto h-full object-contain"
                lightURL={"/assets/ai-connection-1024.png"}
                drakURL={"/assets/ai-connection-1024.png"}
              />
            </div>
          </div>
        </div>

        <div className="sm:w-2/5 w-0 h-full flex-center z-50 lg:w-121.25">
          <FloatInformation
            content={
              "Every chat, every connection earns you Hearts. Use them to unlock premium features, collect exclusive content, and many more surprises to come."
            }
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIConnection;
