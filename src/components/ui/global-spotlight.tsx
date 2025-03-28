"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const GlobalSpotlight = ({
  children,
  className = "",
  size = 800,
  strength = 0.3,
  primaryColor = "var(--primary-rgb)",
  initialOpacity = 0.6,
  maxOpacity = 1,
  transitionDuration = 400,
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  strength?: number;
  primaryColor?: string;
  initialOpacity?: number;
  maxOpacity?: number;
  transitionDuration?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(initialOpacity);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || !isVisible) return;
    
    // Get x and y coordinates relative to the viewport
    const x = e.clientX;
    const y = e.clientY;
    
    setPosition({ x, y });
    setOpacity(maxOpacity);
  };

  // Reset spotlight when mouse leaves
  const handleMouseLeave = () => {
    if (!isVisible) return;
    
    // Move spotlight to center of the viewport with reduced opacity
    if (containerRef.current && typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
      setOpacity(initialOpacity);
    }
  };

  // Initialize spotlight and add event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial position to center of viewport
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
    
    // Add global event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Toggle spotlight visibility with keyboard shortcut (optional)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with 'S' key (can be changed or removed)
      if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Spotlight effect that follows the cursor
  const spotlight = (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity"
      style={{
        opacity: isVisible ? opacity : 0,
        transitionDuration: `${transitionDuration}ms`,
        transitionProperty: 'opacity, background',
      }}
    >
      <div
        className="absolute inset-0 z-30"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(${primaryColor}, ${strength}), transparent 70%)`,
        }}
      />
    </div>
  );

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {children}
      {spotlight}
    </div>
  );
};
