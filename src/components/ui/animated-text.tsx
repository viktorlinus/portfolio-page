"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  once = true,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={`${className}`}>
      {textArray.map((line, lineIndex) => (
        <div key={`${line}-${lineIndex}`} className="overflow-hidden">
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ staggerChildren: 0.1 }}
            variants={{
              visible: {},
              hidden: {},
            }}
            aria-hidden
          >
            {line.split(" ").map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="inline-block">
                <motion.span
                  className="inline-block"
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                      },
                    },
                    hidden: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
