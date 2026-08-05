"use client";

import Image from "next/image";
import { ImageReveal } from "../motion/ImageReveal";
import { Parallax } from "../motion/Parallax";
import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[70vh] lg:h-[85vh] lg:w-[115%] lg:-mr-8 overflow-visible z-10 flex items-center lg:translate-y-4 mt-8 lg:mt-0">
      
      {/* Background colorful pop block */}
      <div className="absolute top-[15%] -left-[5%] w-[70%] h-[70%] bg-accent/20 border border-accent/30 rounded-3xl" />

      {/* Main Portrait */}
      <ImageReveal delay={1.5} className="w-full h-[85%] relative z-20 shadow-xl border border-background">
        <Image
          src="/media/images/hero.png"
          alt="Premium South Asian Bridal Makeup"
          fill
          className="object-cover object-top grayscale-[0.2]"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </ImageReveal>

      {/* Floating Metadata */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-24 -left-12 z-30 hidden lg:block bg-background p-8 border border-border shadow-sm"
      >
        <div className="flex flex-col gap-3">
          <span className="text-[9px] tracking-[0.3em] text-accent uppercase font-bold">Editorial Beauty</span>
          <span className="text-sm font-serif italic text-foreground pr-8">Redefining the aesthetic.</span>
          <div className="w-12 h-[1px] bg-border mt-1" />
        </div>
      </motion.div>
    </div>
  );
}
