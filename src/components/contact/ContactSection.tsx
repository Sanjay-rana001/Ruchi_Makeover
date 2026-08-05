"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import { Calendar, Phone, User, Sparkles } from "lucide-react";

export function ContactSection() {
  return (
    <Section className="dark-section py-24 md:py-32 bg-zinc-950 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#FF8596]/10 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <Reveal>
              <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#FF8596] mb-6 block font-bold">
                Let's Connect
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
                Ready for your <br className="hidden md:block" />
                <span className="text-[#FF8596]">transformation?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Secure your booking today. Fill out the details below and our team will get back to you to finalize your appointment.
              </p>
            </Reveal>
            
            {/* Direct Contact Info */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 border-t border-zinc-800/50 pt-8">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Direct Line</span>
                  <a href="tel:+919876543210" className="text-xl md:text-2xl font-sans font-light tracking-wide text-white hover:text-[#FF8596] transition-colors">+91 98765 43210</a>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Email Us</span>
                  <a href="mailto:hello@ruchimakeover.com" className="text-xl md:text-2xl font-sans font-light tracking-wide text-white hover:text-[#FF8596] transition-colors">hello@ruchimakeover.com</a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Form Card */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.4}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8596]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <form className="relative z-10 flex flex-col gap-4 md:gap-6" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name Input */}
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-1.5 md:mb-2 pl-1">Full Name</label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 md:left-4 w-4 h-4 text-zinc-500" />
                      <input 
                        type="text" 
                        placeholder="Sanjay Rana" 
                        className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg md:rounded-xl py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base focus:outline-none focus:border-[#FF8596]/50 focus:ring-1 focus:ring-[#FF8596]/50 transition-all placeholder:text-zinc-600 font-sans"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-1.5 md:mb-2 pl-1">Phone / WhatsApp</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 md:left-4 w-4 h-4 text-zinc-500" />
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg md:rounded-xl py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base focus:outline-none focus:border-[#FF8596]/50 focus:ring-1 focus:ring-[#FF8596]/50 transition-all placeholder:text-zinc-600 font-sans"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="relative">
                      <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-1.5 md:mb-2 pl-1">Service Needed</label>
                      <div className="relative flex items-center">
                        <Sparkles className="absolute left-3.5 md:left-4 w-4 h-4 text-zinc-500 z-10 pointer-events-none" />
                        <select 
                          className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg md:rounded-xl py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base focus:outline-none focus:border-[#FF8596]/50 focus:ring-1 focus:ring-[#FF8596]/50 transition-all appearance-none cursor-pointer font-sans relative z-0"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled className="text-zinc-600">Select a service...</option>
                          <option value="bridal">Signature Bridal</option>
                          <option value="party">Party Makeup</option>
                          <option value="hair">Hair Styling</option>
                          <option value="skin">Skin Prep</option>
                        </select>
                      </div>
                    </div>

                    {/* Date Input */}
                    <div className="relative">
                      <label className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-1.5 md:mb-2 pl-1">Event Date</label>
                      <div className="relative flex items-center">
                        <Calendar className="absolute left-3.5 md:left-4 w-4 h-4 text-zinc-500" />
                        <input 
                          type="date" 
                          className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg md:rounded-xl py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base focus:outline-none focus:border-[#FF8596]/50 focus:ring-1 focus:ring-[#FF8596]/50 transition-all font-sans cursor-text [color-scheme:dark]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="mt-2 md:mt-4 relative group w-full bg-white text-black py-3.5 md:py-4 rounded-lg md:rounded-xl font-bold tracking-wide uppercase text-[11px] md:text-sm hover:bg-[#FF8596] hover:text-white transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,133,150,0.4)]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Secure Your Booking
                    </span>
                  </button>

                </form>
              </motion.div>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
