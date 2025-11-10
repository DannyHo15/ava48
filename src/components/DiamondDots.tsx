interface DiamondDotsProps {
  className?: string;
  count?: number;
  dotSize?: {
    base: string;
    sm: string;
  };
  gap?: {
    base: string;
    sm: string;
  };
  color?: string;
  darkColor?: string;
}

const DiamondDots = ({
  className = "",
  count = 3,
  dotSize = { base: "w-2 h-2", sm: "sm:w-6 sm:h-6" },
  gap = { base: "gap-3", sm: "sm:gap-6" },
  color = "bg-avatar-primary",
  darkColor = "dark:bg-white/30",
}: DiamondDotsProps) => {
  return (
    <div className={`flex ${gap.base} ${gap.sm} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${dotSize.base} ${dotSize.sm} ${color} ${darkColor} rotate-45 shadow-lg backdrop-blur-sm`}
        ></div>
      ))}
    </div>
  );
};

export default DiamondDots;