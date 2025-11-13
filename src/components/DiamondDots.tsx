interface DiamondDotsProps {
  className?: string;
  count?: number;
  dotSize?: {
    base: string;
    prm: string;
    sm: string;
  };
  gap?: {
    base: string;
    prm: string;
    sm: string;
  };
  color?: string;
  darkColor?: string;
}

const DiamondDots = ({
  className = "",
  count = 3,
  color = "bg-white",
  dotSize = { base: "w-[7px] h-[7px]", prm: "prm:w-2 prm:h-2", sm: "sm:w-5.75 sm:h-5.75" },
  gap = { base: "gap-2.5", prm:"prm:gap-2.5", sm: "sm:gap-8" },
}: DiamondDotsProps) => {
  return (
    <div className={`flex ${gap.base} ${gap.prm} ${gap.sm} ${className} mix-blend-soft-light`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${dotSize.base} ${dotSize.prm} ${dotSize.sm} rotate-45 shadow-lg ${color}`}
        ></div>
      ))}
    </div>
  );
};

export default DiamondDots;