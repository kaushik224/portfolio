"use client";
import React from "react";

export const Globe = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-48 h-48 rounded-full border border-purple-400/30 animate-pulse flex items-center justify-center">
        <span className="text-xs text-purple-200">Interactive 3D Globe</span>
      </div>
    </div>
  );
};

export default Globe;
