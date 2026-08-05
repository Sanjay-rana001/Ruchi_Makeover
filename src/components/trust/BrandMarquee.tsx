"use client";

import { motion } from "framer-motion";

const BRANDS = [
  { name: "MAC", domain: "maccosmetics.com" },
  { name: "NARS", domain: "narscosmetics.com" },
  { name: "Charlotte Tilbury", domain: "charlottetilbury.com" },
  { name: "Huda Beauty", domain: "hudabeauty.com" },
  { name: "Fenty", domain: "fentybeauty.com" },
  { name: "Bobbi Brown", domain: "bobbibrowncosmetics.com" },
  { name: "Estée Lauder", domain: "esteelauder.com" },
  { name: "Maybelline", domain: "maybelline.com" },
  { name: "L'Oréal", domain: "loreal.com" },
  { name: "NYX", domain: "nyxcosmetics.com" },
  { name: "Dior", domain: "dior.com" },
  { name: "Chanel", domain: "chanel.com" },
  { name: "Rare Beauty", domain: "rarebeauty.com" },
  { name: "Tarte", domain: "tartecosmetics.com" },
  { name: "Too Faced", domain: "toofaced.com" },
  { name: "Smashbox", domain: "smashbox.com" },
  { name: "Urban Decay", domain: "urbandecay.com" }
];

// Double the array for seamless infinite scroll
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS];

export function BrandMarquee() {
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-background border-b border-border overflow-hidden flex flex-col items-center select-none relative">
      
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-foreground-muted mb-6 md:mb-8 text-center px-4">
        Premium Brands We Use
      </span>
      
      <div className="w-full relative flex overflow-hidden">
        {/* Left Gradient Fade - Reduced width on mobile to show more logos */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {MARQUEE_ITEMS.map((brand, idx) => (
            <div 
              key={idx} 
              className="px-4 md:px-8 lg:px-10 flex flex-col items-center justify-center gap-2 md:gap-3 group cursor-default"
            >
              {/* Reliable Google Favicon API for Brand Icons */}
              <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-surface border border-border/50 shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow duration-300 group-hover:border-accent/50 p-2 md:p-3">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} 
                  alt={`${brand.name} Icon`}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              
              <span className="font-sans text-[9px] md:text-[10px] lg:text-xs font-semibold tracking-wider text-foreground-muted group-hover:text-accent transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade - Reduced width on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

    </div>
  );
}
