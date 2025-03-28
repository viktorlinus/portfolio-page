"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlowingBackground = ({
  children,
  className,
  containerClassName,
  intensity = 0.8,
  speed = 15,
  colorClassName = "from-blue-500/40 via-purple-400/30 to-blue-600/40 dark:from-blue-400/30 dark:via-cyan-400/20 dark:to-blue-500/30",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  intensity?: number;
  speed?: number;
  colorClassName?: string;
}) => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  // Generate initial bubbles
  useEffect(() => {
    const count = Math.floor(Math.random() * 4) + 6; // 6-9 bubbles
    const newBubbles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 150, // 150-450px
      duration: Math.random() * 10 + 10, // 10-20s
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-blue-900/10 to-blue-950/10", containerClassName)}>
      {/* Flowing background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-30",
            colorClassName
          )}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: speed * 1.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Animated bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={cn(
            "absolute rounded-full bg-gradient-to-br blur-2xl backdrop-blur-sm",
            colorClassName
            )}
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: bubble.size,
              height: bubble.size,
              opacity: intensity * 0.6,
            }}
            animate={{
              x: [
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
              ],
              y: [
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
                Math.random() * 120 - 60,
              ],
              scale: [0.8, 1.1, 0.9, 1.2, 0.8],
              opacity: [intensity * 0.5, intensity * 0.7, intensity * 0.5, intensity * 0.7, intensity * 0.5],
            }}
            transition={{
              duration: bubble.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}

        {/* Horizontal flowing wave */}
        <motion.div
          className={cn(
            "absolute -bottom-32 left-0 right-0 h-40 bg-gradient-to-t opacity-40",
            colorClassName
          )}
          animate={{
            y: [0, -15, 0],
            scaleX: [1, 1.05, 1],
          }}
          transition={{
            duration: speed * 0.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Secondary wave for more depth */}
        <motion.div
          className={cn(
            "absolute -bottom-24 left-0 right-0 h-32 bg-gradient-to-t opacity-30",
            colorClassName
          )}
          animate={{
            y: [0, -10, 0],
            scaleX: [1.05, 1, 1.05],
          }}
          transition={{
            duration: speed * 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: speed * 0.1,
          }}
        />
      </div>

      {/* Content layer */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
