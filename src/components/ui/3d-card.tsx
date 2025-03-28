"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  disableEffect = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  disableEffect?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || disableEffect) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 50; 
    const y = (e.clientY - top - height / 2) / 50; 
    setRotate({ x: -y, y: x });
    setPosition({ x: (e.clientX - left - width / 2) * 0.05, y: (e.clientY - top - height / 2) * 0.05 }); 
  };

  const handleMouseEnter = () => {
    if (!disableEffect) {
      setIsMouseEntered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    setRotate({ x: 0, y: 0 });
    setPosition({ x: 0, y: 0 });
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered && !disableEffect, setIsMouseEntered]}>
      <div
        ref={containerRef}
        className={cn("py-4 flex items-center justify-center", containerClassName)}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transform: disableEffect ? "none" : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateX(${position.x}px) translateY(${position.y}px)`,
            transition: isMouseEntered && !disableEffect ? "none" : "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-full w-full", className)}>
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  depth = 0,
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  depth?: number;
}) => {
  const context = useContext(MouseEnterContext);
  const [isMouseEntered] = context || [false, () => {}];
  const actualDepth = depth || translateZ;

  return (
    <div
      className={cn("w-fit transition duration-200 ease-linear", className)}
      style={{
        transform: isMouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${actualDepth}px)`
          : "translateX(0px) translateY(0px) translateZ(0px)",
        transition: isMouseEntered ? "all 0.1s ease" : "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {children}
    </div>
  );
};
