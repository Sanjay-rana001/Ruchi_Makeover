"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: shouldReduceMotion ? { opacity: 0 } : { scale: 1.08, filter: "blur(8px)" },
          visible: shouldReduceMotion ? { opacity: 1 } : { scale: 1, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1.4, delay, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
      
      {/* Clip mask reveal */}
      {!shouldReduceMotion && (
        <motion.div
          variants={{
            hidden: { y: "0%" },
            visible: { y: "-100%" },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 bg-surface"
        />
      )}
    </div>
  );
}
