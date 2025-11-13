import React, { CSSProperties } from "react";

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
  borderGradient?: string;
  chamferSize?: string;
  borderSize?: string;
  type?: "default" | "rectangle";
}

const GlassCard = ({
  className = "",
  children,
  borderGradient = "linear-gradient(135deg, rgba(255,255,255,.85), rgba(255,255,255,.25) 70%, rgba(255,255,255,0))",
  chamferSize = "40px",
  borderSize = "1px",
  type = "default",
}: GlassCardProps) => {
  const style: CSSProperties = {
    // @ts-ignore
    "--box-border--border": borderGradient,
    "--chamfer-size": chamferSize,
    "--border-size": borderSize,
  };

  const baseClass = type === "rectangle" ? "glasscard-rectangle" : "glasscard";

  return (
    <div className={`${baseClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default GlassCard;