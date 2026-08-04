"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Container } from "../ui/Container";
import { siteData } from "@/data/site";

function CountUp({ from, to, decimals = 0, suffix = "" }: { from: number, to: number, decimals?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, decimals, suffix, hasAnimated]);

  return <span ref={nodeRef} className="tabular-nums">{from.toFixed(decimals)}{suffix}</span>;
}

export function TrustStats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-surface py-20 border-b border-border">
      <Container>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {siteData.stats.map((stat, idx) => (
            <motion.div key={idx} variants={item} className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl font-serif text-foreground">
                <CountUp from={0} to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-foreground-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
