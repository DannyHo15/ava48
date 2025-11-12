import { cn } from "@/lib/utils"; // Assuming you have cn
import React from "react";

export type ColorStopProps = {
  offset: string;
  stopColor: string;
};

type Cprops = {
  index: string;
  shapeWidth: number;
  shapeHeight: number;
  path?: string;
  className?: string;
  strokeDirection?:
    | "to-b"
    | "to-t"
    | "to-r"
    | "to-l"
    | "to-bl"
    | "to-br"
    | "to-tr"
    | "to-tl";
  strokeColor?: ColorStopProps[];
  strokeWidth?: number;
  bgColor?: string;
};

const getLinearDirection = (
  direction:
    | "to-b"
    | "to-t"
    | "to-r"
    | "to-l"
    | "to-bl"
    | "to-br"
    | "to-tr"
    | "to-tl"
) => {
  switch (direction) {
    case "to-b":
      return { x1: "50%", y1: "0%", x2: "50%", y2: "100%" };
    case "to-t":
      return { x1: "50%", y1: "100%", x2: "50%", y2: "0%" };
    case "to-r":
      return { x1: "0%", y1: "50%", x2: "100%", y2: "50%" };
    case "to-l":
      return { x1: "100%", y1: "50%", x2: "0%", y2: "50%" };
    case "to-bl":
      return { x1: "100%", y1: "0%", x2: "0%", y2: "100%" };
    case "to-br":
      return { x1: "0%", y1: "0%", x2: "100%", y2: "100%" };
    case "to-tl":
      return { x1: "100%", y1: "100%", x2: "0%", y2: "0%" };
    case "to-tr":
      return { x1: "0%", y1: "100%", x2: "100%", y2: "0%" };
  }
};

const ShapeGradientWrapper: React.FC<Cprops> = ({
  index,
  className = "top-50 left-10 z-99",
  path = "M 0,10 A 10,10 0,0,1 10,0 L 90,0 A 10,10 0,0,1 100,10 L 100,90 A 10,10 0,0,1 90,100 L10,100 A 10,10 0,0,1 0,90 Z",
  shapeWidth = 100,
  shapeHeight = 100,
  strokeColor = [
    { offset: "0%", stopColor: "#fff" },
    { offset: "100%", stopColor: "#fff0" },
  ],
  strokeDirection = "to-r",
  strokeWidth = 2,
  bgColor = "bg-white/15",
}) => {
  const colorDirection = getLinearDirection(strokeDirection);

  return (
    <div className={cn("absolute", className)}>
      <div
        className={cn("relative")}
        style={{
          width: `${shapeWidth}px`,
          height: `${shapeHeight}px`,
        }}
      >
        <div
          className={cn(
            "absolute top-0 left-0 size-full backdrop-blur-[3.6px]",
            bgColor
          )}
          style={{
            clipPath: `path("${path}")`,
          }}
        />
        <svg
          width={shapeWidth}
          height={shapeHeight}
          viewBox={`0 0 ${shapeWidth} ${shapeHeight}`}
          className="absolute top-0 left-0"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient
              id={"custom-shape-" + index}
              x1={colorDirection.x1}
              y1={colorDirection.y1}
              x2={colorDirection.x2}
              y2={colorDirection.y2}
            >
              {strokeColor.map((item, index) => (
                <stop
                  key={index}
                  offset={item.offset}
                  style={{ stopColor: item.stopColor }}
                />
              ))}
            </linearGradient>
          </defs>
          <path
            d={path}
            fill="transparent"
            strokeWidth={strokeWidth}
            stroke={`url(#${"custom-shape-" + index})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default ShapeGradientWrapper;
