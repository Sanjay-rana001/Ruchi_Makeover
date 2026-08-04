"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export function EditorialIntro() {
  const lines = [
    "Beauty is personal.",
    "Your experience",
    "should be too.",
  ];

  return (
    <Section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left / Top: Label and CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-0"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 mb-8 block">
                The Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <p className="text-foreground/70 leading-relaxed max-w-sm text-lg">
                We believe that every face tells a unique story. Step into a space where luxury meets authenticity, and let us craft a look that is unapologetically yours.
              </p>
              
              <div>
                <Button variant="primary">Meet Your Beauty Expert</Button>
              </div>
            </motion.div>
          </div>

          {/* Right / Bottom: Large Staggered Typography */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-foreground tracking-tight">
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-2">
                  <motion.span
                    custom={i}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>
        </div>
      </Container>
    </Section>
  );
}
