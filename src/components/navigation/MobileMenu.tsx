"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/data/site";
import { Button } from "../ui/Button";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const linkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as [number, number, number, number] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as [number, number, number, number] } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-black flex flex-col justify-center px-6"
    >
      <motion.div 
        variants={containerVars} 
        initial="initial" 
        animate="open" 
        exit="initial"
        className="flex flex-col gap-6 items-center text-center"
      >
        {siteData.navigation.map((item) => (
          <div key={item.name} className="overflow-hidden">
            <motion.div variants={linkVars}>
              <Link 
                href={item.href} 
                onClick={onClose}
                className="text-4xl font-serif text-white hover:text-white/70 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          </div>
        ))}

        <div className="overflow-hidden mt-8">
          <motion.div variants={linkVars} className="flex flex-col gap-4 w-full mt-4">
            <Link href="#booking" onClick={onClose} className="w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-white/90 transition-colors">
              Book Appointment
            </Link>
            <Link href={`https://wa.me/${siteData.social.whatsapp}`} onClick={onClose} className="w-full bg-transparent border border-white/20 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-white/10 transition-colors">
              WhatsApp Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
