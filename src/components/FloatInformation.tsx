import { Info } from "lucide-react";
import { FloatButton } from "./ui/float-button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import BorderGradientWrapper from "./BorderGradientWrapper";
interface IFloatInformationProps {
  content: React.ReactNode | string;
}

const FloatInformation = ({ content }: IFloatInformationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-999 h-full flex items-center">
      <div className="hidden lg:flex h-full sm:flex min-h-75 sm:min-h-full">
        <div className="p-4.5 pt-3 size-full backdrop-blur-sm bg-linear-to-b from-white/30 to-white/0 text-white flex justify-center items-start rounded-t-custom-20 text-lg whitespace-pre-line lg:text-xl xl:text-xl! 3xl:text-2xl!">
          {content}
        </div>
      </div>
      <div className="sm:hidden block relative z-999">
        <FloatButton
          position="bottom-right"
          className="size-fit! sm:bottom-42.5 bottom-21 right-1.75"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BorderGradientWrapper
            gradientType="linear"
            className="p-1.5"
            rounded="99999px"
            borderColor="--avatar-info-border"
            strokeWidth="2px"
          >
            <div className="p-2 backdrop-blur-2xl bg-[rgba(255,255,255,0.1)] rounded-full">
              <Info color="#fff" className="size-4.5!" />
            </div>
          </BorderGradientWrapper>
        </FloatButton>
        {isOpen && (
          <div className="fixed left-0 px-3 bottom-25 w-screen z-999!">
            <div className="px-5 size-full min-h-36 backdrop-blur-sm py-4 rounded-lg bg-linear-to-b from-black/10 to-black/10 text-white flex-center text-base">
              {content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatInformation;
