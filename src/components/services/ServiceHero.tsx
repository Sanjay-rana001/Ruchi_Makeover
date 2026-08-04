"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ServiceHero({ title, label, image }: { title: string, label: string, image: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: imageY }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
        <Container>
          <motion.div 
            style={{ y: textY, opacity }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-4 block">
              {label}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tight">
              {title}
            </h1>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
