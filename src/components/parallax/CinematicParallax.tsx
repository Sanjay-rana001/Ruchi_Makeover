"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CinematicParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image scales up slightly and moves vertically
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Text moves in the opposite direction for strong depth
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <Section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-zinc-950" id="philosophy">
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {/* Parallax Image Layer */}
        <motion.div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ 
            scale: imageScale,
            y: imageY 
          }}
        >
          <Image
            src="/media/images/bridal.png"
            alt="The Art of Beauty"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/30" />
        </motion.div>

        {/* Parallax Text Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <Container className="h-full flex flex-col items-center justify-center text-center">
            <motion.div 
              style={{ y: textY, opacity: textOpacity }}
              className="max-w-4xl mx-auto flex flex-col items-center gap-6"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                The Art of Beauty
              </span>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Confidence begins when you feel like yourself.
              </h2>
            </motion.div>
          </Container>
        </div>
      </div>
    </Section>
  );
}
