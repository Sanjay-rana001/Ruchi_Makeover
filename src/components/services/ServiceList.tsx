"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export function ServiceList() {
  return (
    <Section className="py-24 md:py-32 bg-background relative" id="services">
      <Container>
        {/* Header Area */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-4 block">
              Our Services
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
              Curated for you.
            </h2>
          </div>
          <p className="text-foreground-muted max-w-md text-lg leading-relaxed">
            Discover our premium range of beauty and styling services, designed to elevate your natural beauty with a touch of elegance.
          </p>
        </div>

        {/* Premium Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants} className="group">
                <Link 
                  href={`/services/${service.slug}`}
                  className="block relative h-[380px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-border/20"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Premium Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {service.id}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:text-accent-soft transition-colors duration-300 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2 drop-shadow-sm">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/20 pt-5">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <span className="text-[10px] text-white font-semibold uppercase tracking-wider flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-accent-soft" />
                          {service.duration}
                        </span>
                        <span className="text-[10px] text-white font-semibold uppercase tracking-wider flex items-center">
                          <Tag className="w-3.5 h-3.5 mr-1.5 text-accent-soft" />
                          {service.price}
                        </span>
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
