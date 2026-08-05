"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function EditorialIntro() {
  return (
    <Section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Context & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
                The Experience
              </span>
              <div className="h-px flex-1 bg-foreground/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <p className="text-foreground/70 leading-relaxed text-lg max-w-md font-light">
                We believe that every face tells a unique story. Step into a space where luxury meets authenticity, and let us craft a look that is unapologetically yours.
              </p>
              
              <div>
                <Button variant="primary" className="group">
                  Meet Your Beauty Expert
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Main Heading */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground tracking-tight">
              <span className="block overflow-hidden pb-3">
                <motion.span custom={0} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="block">
                  Beauty is <span className="italic font-light text-foreground/80">personal.</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-3">
                <motion.span custom={1} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="block">
                  Your experience
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-3">
                <motion.span custom={2} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="block text-foreground/80">
                  should be too.
                </motion.span>
              </span>
            </h2>
          </div>

        </div>
      </Container>
    </Section>
  );
}
