import clsx from "clsx";
import React from "react";
type Cprops = {
  children: React.ReactNode;
  strokeWidth?: string;
  rounded?: string;
  borderColor?: string;
  gradientType: "linear" | "radial";
  className?: string;
  duration?: number;
  linearDirectionStart?: string;
  linearDirectionEnd?: string;
};
const BorderGradientWrapper: React.FC<Cprops> = ({
  children,
  strokeWidth = "4px",
  rounded = "12px",
  borderColor = "--avatar-bg-filter-md",
  gradientType = "radial",
  className = "p-2",
  duration = 10,
  linearDirectionStart = "0deg",
  linearDirectionEnd = "360deg",
}) => {
  const baseClass = "border-gradient-border flex-center relative z-1";

  const dynamicStyles = {
    "--before-rounded": rounded,
    "--before-stroke-width": strokeWidth,
    "--before-stroke-color": `var(${borderColor})`,
    "--rotate-duration": `${duration}s`,
    "--before-linear-direction-start": `${duration}s`,
    "--before-linear-direction-end": `${duration}s`,
  };

  return (
    <div
      className={clsx(
        baseClass,
        className,
        gradientType === "linear"
          ? "border-gradient-border-linear"
          : "border-gradient-border-radial"
      )}
      style={dynamicStyles as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default BorderGradientWrapper;
