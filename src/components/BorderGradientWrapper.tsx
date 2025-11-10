import { cn } from "@/lib/utils";
import React from "react";
type Cprops = {
  children: React.ReactNode;
  strokeWidth?: string;
  rounded?: string;
  className?: string;
  beforeClassName?: string;
};
const BorderGradientWrapper: React.FC<Cprops> = ({
  children,
  strokeWidth="1px",
  rounded = "12px",
  className = "",
  beforeClassName = "",
}) => {
  const baseBeforeClass = `before:absolute before:inset-0 before:rounded-[${rounded}] before:p-[${strokeWidth}] before:bg-white before:content-['']! before:-z-1 before:mask-[linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]! before:[-webkit-mask-composite:xor]! before:[mask-composite:exclude]!`;
  const baseClass = "relative z-1 flex flex-center p-2.5";

  return (
    <div className={cn(baseClass, baseBeforeClass, className, beforeClassName)}>{children}</div>
  );
};

export default BorderGradientWrapper;
