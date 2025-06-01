"use client";
import React from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

export const GridGlobe = () => {
  return (
    <div className="flex items-center justify-center absolute -right-10 min-h-40 bottom-0">
      <Globe />
    </div>
  );
};
