"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const GlitchText = ({
  text,
  className,
  glitchClassName,
}: {
  text: string;
  className?: string;
  glitchClassName?: string;
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "inline-block transition-opacity",
          isGlitching ? "opacity-0" : "opacity-100"
        )}
      >
        {text}
      </span>
      
      {isGlitching && (
        <>
          <span
            className={cn(
              "absolute top-0 left-0 text-primary",
              glitchClassName
            )}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, -2px)",
              opacity: isGlitching ? 1 : 0,
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className={cn(
              "absolute top-0 left-0 text-accent",
              glitchClassName
            )}
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
              transform: "translate(2px, 2px)",
              opacity: isGlitching ? 1 : 0,
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
};
