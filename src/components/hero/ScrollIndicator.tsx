"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function ScrollIndicator() {
  return (
    <div 
      className="absolute bottom-8 left-6 md:left-12 flex flex-col items-center gap-4 cursor-pointer group"
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-foreground-muted rotate-180" style={{ writingMode: 'vertical-rl' }}>
        Scroll to Explore
      </span>
      <div className="w-[1px] h-12 bg-border relative overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-accent w-full h-full"
        />
      </div>
    </div>
  );
}
