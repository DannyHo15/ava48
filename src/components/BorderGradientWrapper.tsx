import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";
type Cprops = {
  children: React.ReactNode;
  strokeWidth?: string;
  rounded?: string;
  borderColor?: string;
  gradientType: 'linear' | 'radial';
  className?: string;
};
const BorderGradientWrapper: React.FC<Cprops> = ({
  children,
  strokeWidth = "4px",
  rounded = "12px",
  borderColor = '--avatar-bg-filter-md',
  gradientType = 'radial',
  className = "p-2",
}) => {
  const baseClass = "border-gradient-border flex-center relative z-1";

  const dynamicStyles = {
    '--before-rounded': rounded,
    '--before-stroke-width': strokeWidth,
    '--before-stroke-color': gradientType === 'linear'? `linear-gradient(var(${borderColor}))`: `radial-gradient(var(${borderColor}))`,
  };

  return (
    <div
      className={clsx(
        baseClass,
        className,
      )}
      style={dynamicStyles as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default BorderGradientWrapper;
