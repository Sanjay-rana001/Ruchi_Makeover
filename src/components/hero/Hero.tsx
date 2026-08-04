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
    <Section fullBleed className="relative min-h-[90vh] lg:min-h-screen pt-24 lg:pt-0 flex items-center bg-gradient-to-br from-background via-surface-muted to-accent-glow p-0 m-0 border-b border-border overflow-hidden">
      
      {/* Subtle luxury editorial texture/grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1.5px, transparent 0)', backgroundSize: '40px 40px' }} />

      <Container className="w-full relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left: Text Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center h-full pt-12 lg:pt-32"
            animate={{ x: textX, y: textY }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <Reveal delay={1.5} direction="up">
              <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-accent mb-8 block font-medium">
                The Aesthetics Studio
              </span>
            </Reveal>

            <div className="flex flex-col gap-1 mb-8">
              <Reveal delay={1.7}>
                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-foreground leading-[1] tracking-[-0.02em]">
                  Elevating
                </h1>
              </Reveal>
              <Reveal delay={1.9}>
                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-foreground leading-[1] tracking-[-0.02em] flex items-center gap-4">
                  <span className="italic font-light text-foreground-muted">modern</span> beauty.
                </h1>
              </Reveal>
            </div>

            <Reveal delay={2.1}>
              <div className="w-12 h-[1px] bg-accent mb-8" />
              <p className="text-base md:text-lg text-foreground-muted font-sans font-light max-w-md leading-relaxed mb-12">
                A sanctuary designed for the modern aesthetic. We blend cutting-edge techniques with editorial vision to reveal your most pristine self.
              </p>
            </Reveal>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Reveal delay={2.3}>
                <Button variant="primary" withArrow>
                  Book Appointment
                </Button>
              </Reveal>
              <Reveal delay={2.5}>
                <Button variant="ghost" withArrow className="text-accent hover:text-foreground">
                  EXPLORE SERVICES
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
