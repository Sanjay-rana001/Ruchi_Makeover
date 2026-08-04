"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const maskVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { 
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
  }
};

const imageScaleVariants = {
  hidden: { scale: 1.1 },
  visible: { 
    scale: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
  }
};

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Main image moves up slightly slower
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  // Secondary image moves up faster (more parallax depth)
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <Section className="py-24 md:py-40 bg-surface relative overflow-hidden" id="about">
      <Container>
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left: Images */}
          <div className="lg:col-span-6 relative h-[450px] md:h-[600px] lg:h-[800px] w-full">
            
            {/* Main Large Portrait */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={maskVariants}
              className="absolute left-0 top-0 w-[85%] md:w-[75%] h-[85%] md:h-[90%] overflow-hidden bg-background"
            >
              <motion.div 
                variants={imageScaleVariants} 
                style={{ y: y1 }}
                className="w-full h-[120%] -top-[10%] relative"
              >
                <Image
                  src="/media/images/about.png"
                  alt="Top Beauty Expert Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 40vw"
                />
              </motion.div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={maskVariants}
              className="absolute right-0 bottom-0 w-[55%] md:w-[45%] h-[40%] md:h-[50%] overflow-hidden bg-background z-10 shadow-2xl"
            >
              <motion.div 
                variants={imageScaleVariants}
                style={{ y: y2 }}
                className="w-full h-[140%] -top-[20%] relative"
              >
                <Image
                  src="/media/images/packages.png"
                  alt="Premium Luxury Makeup Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 55vw, 25vw"
                />
              </motion.div>
            </motion.div>
            
            {/* Editorial Metadata Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-12 -left-4 md:-left-12 bg-background/80 backdrop-blur-md px-6 py-4 flex flex-col gap-1 shadow-lg border border-border/50 z-20 rounded-sm"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent">8+ Years</span>
              <span className="text-[10px] uppercase tracking-wider text-foreground-muted">Experience</span>
            </motion.div>
            
          </div>

          {/* Right: Story Content */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-accent mb-6 block">
                Meet Your Beauty Expert
              </span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground tracking-tight mb-8">
                A beauty experience created around you.
              </h3>
              <div className="text-foreground-muted leading-relaxed flex flex-col gap-6 text-base md:text-lg">
                <p>
                  I believe that makeup should never feel like a mask. It should be a celebration of who you are. With over eight years of experience working with brides, celebrities, and everyday women, my philosophy remains simple: enhance, don't hide.
                </p>
                <p>
                  From our first consultation to the final touch-up, every step is tailored to your personality, your skin, and your vision. We use only premium, carefully selected products to ensure you look flawless in person and on camera, while feeling completely comfortable.
                </p>
              </div>
            </motion.div>

            {/* Metadata Integration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-y-6 gap-x-4 py-8 border-y border-border/50"
            >
              <div>
                <span className="block text-xl font-serif text-foreground mb-1">500+</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Happy Clients</span>
              </div>
              <div>
                <span className="block text-xl font-serif text-foreground mb-1">Certified</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Professional</span>
              </div>
              <div>
                <span className="block text-xl font-serif text-foreground mb-1">Premium</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Products Only</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button variant="primary">Read My Story</Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
