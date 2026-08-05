"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Container } from "../ui/Container";
import { siteData } from "@/data/site";

import { Users, Star, Clock, Heart } from "lucide-react";

const icons = [Users, Star, Clock, Heart];

function CountUp({ from, to, decimals = 0, suffix = "" }: { from: number, to: number, decimals?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, decimals]);

  return (
    <div className="flex items-baseline justify-center">
      <span ref={nodeRef} className="tabular-nums tracking-tight">{from.toFixed(decimals)}</span>
      {suffix && (
        <span className="text-[#FF8596] text-2xl md:text-3xl ml-0.5 font-bold">
          {suffix}
        </span>
      )}
    </div>
  );
}

export function TrustStats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative py-12 md:py-16 bg-zinc-950 border-t border-zinc-900 overflow-hidden dark-section">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:divide-x divide-zinc-800/80"
        >
          {siteData.stats.map((stat, idx) => {
            const Icon = icons[idx] || Heart;
            
            return (
              <motion.div 
                key={idx} 
                variants={item} 
                className="flex flex-col items-center justify-center group"
              >
                {/* Icon Container with subtle hover effect */}
                <div className="mb-4 p-3 bg-zinc-900/80 rounded-2xl text-[#FF8596] border border-zinc-800 group-hover:bg-zinc-800 transition-colors duration-500 shadow-inner shadow-white/5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                
                {/* Number */}
                <div className="text-4xl md:text-5xl font-sans font-bold text-white mb-1">
                  <CountUp from={0} to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
