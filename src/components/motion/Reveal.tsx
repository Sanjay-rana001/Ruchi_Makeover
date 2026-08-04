"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, width = "100%", className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
    }
  };

  const getAnimate = () => {
    if (shouldReduceMotion) return { opacity: 1 };
    return { opacity: 1, y: 0, x: 0 };
  };

  return (
    <div ref={ref} style={{ width }} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: getInitial(),
          visible: getAnimate(),
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
