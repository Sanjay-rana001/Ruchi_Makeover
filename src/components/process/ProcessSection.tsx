"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    id: "01",
    title: "Consult",
    description: "We begin with a deep dive into your vision, skin type, and event details. We discuss your preferences, inspirations, and any concerns to ensure we are perfectly aligned before picking up a single brush.",
    image: "/media/images/about.png",
  },
  {
    id: "02",
    title: "Plan",
    description: "Next, we curate a customized beauty blueprint. From selecting the exact foundation match to planning the timeline for the event day, everything is meticulously organized so you can simply relax.",
    image: "/media/images/skin.png",
  },
  {
    id: "03",
    title: "Create",
    description: "The execution phase. Using premium, long-lasting products, we build your look layer by layer. The focus is on flawless blending, enhancing your natural structure, and ensuring total comfort.",
    image: "/media/images/bridal.png",
  },
  {
    id: "04",
    title: "Glow",
    description: "The final reveal. You step out looking absolutely radiant and feeling entirely like yourself, ready to turn heads and create memories with a look that will last all night.",
    image: "/media/images/party.png",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-background py-24 md:py-32" id="process">
      <Container>
        <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">
          How It Works
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 lg:mb-24">
          The Beauty Process
        </h2>

        {/* Desktop Interactive Sticky Section */}
        <div className="hidden lg:flex gap-16 relative" ref={containerRef}>
          {/* Left: Sticky Text Content */}
          <div className="w-1/2 relative py-32">
            
            {/* Vertical Progress Line (Background) */}
            <div className="absolute left-6 top-32 bottom-32 w-[1px] bg-border/40" />
            
            {/* Vertical Progress Line (Active Fill) */}
            <motion.div 
              className="absolute left-6 top-32 bottom-32 w-[2px] bg-accent origin-top"
              style={{ scaleY: smoothProgress }}
            />

            <div className="flex flex-col gap-40">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={step.id} 
                  step={step} 
                  index={index} 
                  total={steps.length} 
                  progress={scrollYProgress} 
                />
              ))}
            </div>
          </div>

          {/* Right: Sticky Image Container */}
          <div className="w-1/2 h-[450px] lg:h-[500px] sticky top-24 lg:top-32 rounded-lg overflow-hidden shadow-2xl">
            {steps.map((step, index) => (
              <ProcessImage 
                key={step.id} 
                image={step.image} 
                index={index} 
                total={steps.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="flex lg:hidden flex-col gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-6">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-md overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-3xl text-foreground/30">{step.id}</span>
                <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Child component for text steps to calculate their active state based on scroll
function ProcessStep({ step, index, total, progress }: { step: any, index: number, total: number, progress: any }) {
  // Each step is active for a specific chunk of the scroll progress (e.g., 0-0.25, 0.25-0.5)
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, 
    [start - 0.1, start, end - 0.1, end], 
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div 
      style={{ opacity }}
      className="pl-20 relative flex flex-col gap-4"
    >
      <div className="absolute left-[1.15rem] top-2 w-3 h-3 rounded-full bg-background border-2 border-accent -translate-x-1/2 z-10" />
      <span className="font-serif text-5xl text-accent-soft absolute left-8 top-[-0.5rem]">{step.id}</span>
      <h3 className="font-serif text-3xl text-foreground">{step.title}</h3>
      <p className="text-foreground-muted leading-relaxed text-lg max-w-md">
        {step.description}
      </p>
    </motion.div>
  );
}

// Child component for images to handle fade and scale transitions
function ProcessImage({ image, index, total, progress }: { image: string, index: number, total: number, progress: any }) {
  const start = index / total;
  const end = (index + 1) / total;

  // Crossfade opacity
  const opacity = useTransform(progress, 
    [Math.max(0, start - 0.1), start, end - 0.05, end + 0.05], 
    [0, 1, 1, 0]
  );
  
  // Scale down when exiting, scale in when entering
  const scale = useTransform(progress,
    [Math.max(0, start - 0.1), start, end - 0.05, end + 0.05],
    [1.1, 1, 1, 0.95]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 w-full h-full origin-center"
    >
      <Image
        src={image}
        alt={`Process step ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={index === 0}
      />
    </motion.div>
  );
}
