"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";

export function ServiceList() {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  // Floating Image Cursor State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth cursor following
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Center the image on the cursor
    mouseX.set(e.clientX - 150); 
    mouseY.set(e.clientY - 200);
  };

  return (
    <Section className="py-24 md:py-32 bg-surface relative" id="services" onMouseMove={handleMouseMove}>
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-4 block">
              Our Services
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
              Curated for you.
            </h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-border/40 relative">
          {services.map((service) => (
            <ServiceRow 
              key={service.id} 
              service={service} 
              setActiveService={setActiveService} 
            />
          ))}

          {/* Desktop Floating Image Preview */}
          <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <AnimatePresence>
              {activeService && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    x: smoothX,
                    y: smoothY,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  className="w-[300px] h-[400px] rounded-lg overflow-hidden shadow-2xl border border-white/20"
                >
                  {services.map((svc) => (
                    svc.id === activeService && (
                      <div key={svc.id} className="relative w-full h-full">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover"
                          sizes="300px"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                            View
                          </span>
                        </div>
                      </div>
                    )
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceRow({ service, setActiveService }: { service: any, setActiveService: (id: string | null) => void }) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  return (
    <div 
      className="border-b border-border/40 group relative"
      onMouseEnter={() => setActiveService(service.id)}
      onMouseLeave={() => setActiveService(null)}
    >
      {/* Desktop View (Link) */}
      <Link 
        href={`/services/${service.slug}`}
        className="hidden lg:flex items-center justify-between py-12 px-4 transition-colors duration-500 hover:bg-white/50"
      >
        <div className="flex items-baseline gap-12 transition-transform duration-500 group-hover:translate-x-4">
          <span className="font-serif text-2xl text-foreground/30 font-medium">
            {service.id}
          </span>
          <h3 className="font-serif text-5xl xl:text-6xl text-foreground tracking-tight uppercase">
            {service.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-8 transition-transform duration-500 group-hover:-translate-x-4">
          <span className="text-sm text-foreground/50 max-w-xs text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {service.shortDescription}
          </span>
          <ArrowRight strokeWidth={1.5} className="w-8 h-8 text-foreground/30 group-hover:text-primary transition-colors duration-500" />
        </div>
      </Link>

      {/* Mobile / Tablet View (Accordion) */}
      <div className="lg:hidden flex flex-col">
        <button 
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="flex items-center justify-between py-8 px-2 text-left w-full"
        >
          <div className="flex items-baseline gap-6">
            <span className="font-serif text-xl text-foreground/40 font-medium">
              {service.id}
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-foreground uppercase tracking-tight">
              {service.title}
            </h3>
          </div>
          <ChevronDown 
            className={`w-6 h-6 text-foreground/40 transition-transform duration-500 ${isMobileExpanded ? "rotate-180" : ""}`} 
          />
        </button>

        <AnimatePresence>
          {isMobileExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="overflow-hidden"
            >
              <div className="px-2 pb-8 flex flex-col gap-6">
                <div className="relative w-full h-[250px] rounded-sm overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="flex flex-col gap-2 py-4 border-y border-border/40">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/50 uppercase tracking-widest font-semibold text-xs">Duration</span>
                    <span className="text-foreground">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/50 uppercase tracking-widest font-semibold text-xs">Starting Price</span>
                    <span className="text-foreground">{service.price}</span>
                  </div>
                </div>

                <Link href={`/services/${service.slug}`} className="w-full block">
                  <Button variant="primary" className="w-full flex justify-center">View Service</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
