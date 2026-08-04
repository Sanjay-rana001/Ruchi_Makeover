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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="group h-full flex">
              <Link 
                href={`/services/${service.slug}`}
                className="w-full flex flex-col bg-surface rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-accent-soft transition-all duration-500 ease-out hover:-translate-y-2 relative"
              >
                {/* Floating Glow Effect Behind Card */}
                <div className="absolute inset-0 bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-2xl" />

                {/* Image Section */}
                <div className="relative h-80 w-full overflow-hidden bg-surface-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="bg-white/95 backdrop-blur-md text-accent px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-surface relative z-10 transition-colors duration-500">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-8 flex-grow">
                    {service.shortDescription}
                  </p>
                  
                  {/* Info Tags with Vibrant Colors */}
                  <div className="flex flex-col gap-4 pt-6 border-t border-border/50">
                    <div className="flex items-center text-xs text-foreground font-semibold uppercase tracking-wider">
                      <Clock className="w-4 h-4 mr-4 text-highlight stroke-2" />
                      {service.duration}
                    </div>
                    <div className="flex items-center text-xs text-foreground font-semibold uppercase tracking-wider">
                      <Tag className="w-4 h-4 mr-4 text-success stroke-2" />
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Hover Action Footer */}
                <div className="bg-surface-muted px-8 md:px-10 py-6 flex items-center justify-between transition-colors duration-500 group-hover:bg-accent-soft/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-accent-hover transition-colors">
                    Explore Details
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent transition-colors duration-500 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-foreground/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
