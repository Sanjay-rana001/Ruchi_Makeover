"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

export function EditorialIntro() {
  return (
    <Section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Context & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">
                The Experience
              </span>
              <div className="h-px flex-1 bg-zinc-200" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-zinc-900 tracking-tight">
                Beauty is <span className="italic font-light text-zinc-500">personal.</span><br/>
                Your experience should be too.
              </h2>
              
              <p className="text-zinc-600 leading-relaxed text-lg max-w-md font-light">
                We believe that every face tells a unique story. Step into a space where luxury meets authenticity, and let us craft a look that is unapologetically yours.
              </p>
              
              <div>
                <Button variant="primary">
                  Meet Your Beauty Expert
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Editorial Image Collage */}
          <div className="w-full lg:w-7/12 relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Main Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute right-0 top-0 w-[80%] h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/media/images/hero.jpg" 
                alt="Ruchi Makeover Signature Style" 
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Overlapping Detail Image */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-0 bottom-10 w-[45%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-10"
            >
              <Image 
                src="/media/images/service-facial.jpg" 
                alt="Luxury Beauty Detail" 
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Floating Glass Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -left-6 top-1/4 z-20 bg-white/80 backdrop-blur-md border border-white/40 px-6 py-4 rounded-2xl shadow-xl"
            >
              <p className="font-serif text-xl text-zinc-900 italic">Unapologetically Yours</p>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
