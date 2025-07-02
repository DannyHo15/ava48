"use client";

import { Toaster } from "@/components/ui/toaster";
import { type ReactNode } from "react";

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}

export default ContextProvider;
