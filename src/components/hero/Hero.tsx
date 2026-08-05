"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  // Mouse Parallax values
  const textX = mousePos.x * -15;
  const textY = mousePos.y * -15;
  const imageX = mousePos.x * 10;
  const imageY = mousePos.y * 10;

  return (
    <Section fullBleed className="relative min-h-[85vh] lg:min-h-[90vh] flex bg-gradient-to-br from-background via-surface-muted to-accent-glow p-0 m-0 border-b border-border overflow-hidden">
      
      {/* Subtle luxury editorial texture/grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1.5px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container className="w-full relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 h-full">
          
          {/* Left: Text Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center h-full"
            animate={{ x: textX, y: textY }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <Reveal delay={1.5} direction="up">
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.35em] uppercase text-[#FF8596] mb-6 block font-bold">
                Professional Makeup Artist
              </span>
            </Reveal>

            <div className="flex flex-col mb-12 relative">
              <Reveal delay={1.7}>
                <h1 className="flex flex-col font-serif tracking-tight">
                  <span className="text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] italic text-[#4A3236] font-light leading-[1.1] drop-shadow-sm">
                    Flawless
                  </span>
                  <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-[#332226] leading-[1.1] mt-1 md:mt-2">
                    Bridal <span className="italic text-[#4A3236]/70 font-light">&</span> Party
                  </span>
                  <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] text-[#332226] leading-[1.1]">
                    Makeup
                  </span>
                </h1>
              </Reveal>
            </div>

            <Reveal delay={2.1}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#FF8596]/50" />
                <p className="text-base md:text-lg text-foreground/70 font-sans font-light max-w-sm leading-relaxed">
                  Expert makeup services tailored to enhance your natural features for your most special occasions.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Reveal delay={2.3}>
                <Button variant="primary" withArrow>
                  Book Appointment
                </Button>
              </Reveal>
              <Reveal delay={2.5}>
                <Button variant="ghost" withArrow className="text-accent hover:text-foreground">
                  Explore Services
                </Button>
              </Reveal>
            </div>
          </motion.div>

          {/* Right: Asymmetric Image Composition */}
          <motion.div 
            className="lg:col-span-6 relative h-full flex items-center"
            animate={{ x: imageX, y: imageY }}
            transition={{ type: "spring", stiffness: 40, damping: 25 }}
          >
            <HeroImage />
          </motion.div>

        </div>
      </Container>
      
      {/* Desktop Scroll Indicator */}
      <div className="hidden md:block">
        <ScrollIndicator />
      </div>
    </Section>
  );
}
