"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradientAnimation = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full absolute overflow-hidden bg-[radial-gradient(circle_at_50%_50%,_rgba(18,24,27,1),_rgba(4,7,29,1))]",
        className
      )}
    >
      {children}
    </div>
  );
};
