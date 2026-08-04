"use client";

import Image from "next/image";
import { ImageReveal } from "../motion/ImageReveal";
import { Parallax } from "../motion/Parallax";

export function HeroImage() {
  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] lg:h-[100vh] lg:w-[120%] lg:-mr-12 overflow-visible z-10 flex items-center lg:translate-y-16 translate-y-8">
      
      {/* Background colorful pop block */}
      <div className="absolute top-[15%] -left-[5%] w-[70%] h-[70%] bg-accent/20 border border-accent/30 rounded-3xl" />

      {/* Main Portrait */}
      <ImageReveal delay={1.5} className="w-full h-[85%] relative z-20 shadow-xl border border-background">
        <Image
          src="/media/images/hero.png"
          alt="Premium South Asian Bridal Makeup"
          fill
          className="object-cover object-center grayscale-[0.2]"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </ImageReveal>

      {/* Floating Metadata */}
      <Parallax offset={60} className="absolute bottom-24 -left-12 z-30 hidden lg:block bg-background p-8 border border-border shadow-sm">
        <div className="flex flex-col gap-3">
          <span className="text-[9px] tracking-[0.3em] text-accent uppercase font-bold">Editorial Beauty</span>
          <span className="text-sm font-serif italic text-foreground pr-8">Redefining the aesthetic.</span>
          <div className="w-12 h-[1px] bg-border mt-1" />
        </div>
      </Parallax>

    </div>
  );
}
