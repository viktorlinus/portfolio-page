"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  children,
  className = "",
  size = 600,
  strength = 0.2,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: number;
  strength?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const updatePosition = (e: MouseEvent) => {
    if (!spotlightRef.current) return;
    
    const rect = spotlightRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
    setOpacity(1);
  };

  const resetSpotlight = () => {
    setOpacity(0.5); // Set to a low opacity instead of 0 to keep a subtle effect
  };

  // Add initial position in the center
  useEffect(() => {
    if (!spotlightRef.current) return;
    
    const rect = spotlightRef.current.getBoundingClientRect();
    setPosition({ 
      x: rect.width / 2, 
      y: rect.height / 2 
    });
    setOpacity(0.5); // Initial subtle effect
    
    const element = spotlightRef.current;
    element.addEventListener("mousemove", updatePosition);
    element.addEventListener("mouseleave", resetSpotlight);
    
    return () => {
      element.removeEventListener("mousemove", updatePosition);
      element.removeEventListener("mouseleave", resetSpotlight);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), ${strength}), transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
