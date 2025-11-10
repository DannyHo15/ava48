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
    <div className="relative size-full">
      <div className="hidden lg:block">
        <div className="px-4 size-full min-h-56 backdrop-blur-sm py-4 rounded-lg bg-linear-to-b from-black/10 to-black/10 text-white flex-center">
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
            <div className="px-5 size-full min-h-56 backdrop-blur-sm py-4 rounded-lg bg-linear-to-b from-black/10 to-black/10 text-white flex-center">
              {content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatInformation;
