import { Info } from "lucide-react";
import { FloatButton } from "./ui/float-button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
interface IFloatInformationProps {
  content: React.ReactNode | string;
}

const FloatInformation = ({ content }: IFloatInformationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-full flex items-center">
      <div className="hidden lg:block min-h-75">
        <div className="p-5 size-full backdrop-blur-sm bg-linear-to-b from-white/10 to-white/10 text-white flex justify-center items-start rounded-t-custom-20 text-xl">
          {content}
        </div>
      </div>
      <div className="lg:hidden block">
        <FloatButton
          position="bottom-right"
          className="size-fit! bottom-42.5 right-5 gradient-border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="method-1">
            <div className="m-1 p-1 backdrop-blur-2xl bg-[rgba(255,255,255,0.1)] rounded-full">
              <Info color="#fff" className="size-4.5!" />
            </div>
          </div>
        </FloatButton>
        {isOpen && (
          <div className="fixed left-0 px-8 bottom-48.5 w-screen  z-999!">
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
