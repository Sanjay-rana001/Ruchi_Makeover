"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export function FeaturedLook() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <Section className="py-24 md:py-32 bg-surface relative overflow-hidden" id="featured-look">
      <Container>
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Content */}
          <motion.div 
            style={{ y: contentY }}
            className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
          >
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">
                Featured Look
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.1] tracking-tight mb-6">
                Soft Glam
              </h2>
              <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                The perfect balance between natural beauty and red-carpet elegance. Our signature Soft Glam look focuses on flawless, glowing skin, softly diffused eyes, and a hydrated, natural lip. It is the ultimate choice for modern brides and high-profile events where you want to look stunning yet effortless.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 border-y border-border/50">
              <div>
                <span className="block text-sm font-bold uppercase tracking-widest text-foreground mb-1">Skin</span>
                <span className="text-sm text-foreground/60">Luminous & Hydrated</span>
              </div>
              <div>
                <span className="block text-sm font-bold uppercase tracking-widest text-foreground mb-1">Eyes</span>
                <span className="text-sm text-foreground/60">Diffused Earth Tones</span>
              </div>
              <div>
                <span className="block text-sm font-bold uppercase tracking-widest text-foreground mb-1">Lips</span>
                <span className="text-sm text-foreground/60">Nude Gloss</span>
              </div>
              <div>
                <span className="block text-sm font-bold uppercase tracking-widest text-foreground mb-1">Hair</span>
                <span className="text-sm text-foreground/60">Textured Waves</span>
              </div>
            </div>

            <div>
              <Button variant="primary">Get This Look</Button>
            </div>
          </motion.div>

          {/* Right: Large Image with Parallax */}
          <div className="lg:col-span-7 h-[500px] md:h-[700px] w-full relative overflow-hidden rounded-sm order-1 lg:order-2">
            <motion.div 
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <Image
                src="/media/images/party.png"
                alt="Soft Glam Featured Look"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
