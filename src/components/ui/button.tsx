"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none active:bg-opacity-80 disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "rounded-full [&_svg]:size-5 lg:[&_svg]:size-6 whitespace-nowrap",
        rounded: "rounded-md px-4 [&_svg]:size-5 lg:[&_svg]:size-6 whitespace-nowrap",
        icon: "btn-icon flex flex-center rounded-full [&_svg]:size-7 mobile:[&_svg]:!size-7 md:[&_svg]:size-10 lg:[&_svg]:size-12 text-white",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "text-lg lg:text-xl gap-2 px-8 h-10 md:h-13.5 lg:gap-2",
        icon: "size-13 sm:size-14 mobile:size-15 md:size-20 lg:size-24 shrink-0",
        small: "h-10 shrink-0",
      },
      color: {
        default: "btn-primary bg-primary text-black shadow-['0px 5px 4px 0px #FFFFFF inset']",
        black:
          "bg-[linear-gradient(325.83deg,rgba(68,68,68,0.4)_4.51%,rgba(0,0,0,0.4)_44.8%)] text-white hover:bg-gray-900",
        gradient: "bg-gradient backdrop-blur-lg",
        white: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fullWidth,
      color,
      children,
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, color }),
          fullWidth ? "w-full " : ""
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && <LoaderCircle className="animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
