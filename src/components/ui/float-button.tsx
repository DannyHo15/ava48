"use client";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { forwardRef } from "react";

export interface FloatButtonProps
  extends Omit<ButtonProps, "variant" | "size"> {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
}

const positionClasses = {
  "bottom-right": "fixed bottom-8 right-8",
  "bottom-left": "fixed bottom-8 left-8",
  "top-right": "fixed top-8 right-8",
  "top-left": "fixed top-8 left-8",
};

const FloatButton = forwardRef<HTMLButtonElement, FloatButtonProps>(
  ({ position = "bottom-right", className, children, ...props }, ref) => {
    return (
      <Button
        variant="icon"
        size="icon"
        className={cn(
          positionClasses[position],
          "z-50 shadow-lg hover:shadow-xl transition-shadow duration-200",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

FloatButton.displayName = "FloatButton";

export { FloatButton };

