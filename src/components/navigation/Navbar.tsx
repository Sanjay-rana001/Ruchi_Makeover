"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[0.76,0,0.24,1] ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif font-medium tracking-wide relative z-[60]">
            TAS<span className="text-accent">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-sans tracking-wide text-foreground-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" href={`https://wa.me/${siteData.social.whatsapp}`}>
              WhatsApp
            </Button>
            <Button variant="primary" href="#booking">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[60] text-foreground p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
