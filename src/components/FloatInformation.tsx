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
    <>
      <div>
        <FloatButton
          position="bottom-right"
          className=" size-fit bottom-41.5 right-5 gradient-border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Info color="#fff" size={24} />
        </FloatButton>
        {isOpen && (
          <div className="fixed left-[calc(50%+10px)] -translate-x-1/2 bottom-43.5 text-white w-[80vw] background-blur p-4 rounded-lg z-10">
            <p className="text-muted-foreground text-sm">{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatInformation;

