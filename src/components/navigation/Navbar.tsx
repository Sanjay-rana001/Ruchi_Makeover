"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { Menu, X, ChevronsRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll('.dark-section');
      let isDark = false;
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the middle of the navbar (y=32) is inside the dark section
        if (rect.top <= 32 && rect.bottom >= 32) {
          isDark = true;
        }
      });
      
      setIsOverDark(isDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-foreground h-16 flex items-center transition-colors duration-300">
        <div className="container mx-auto px-6 w-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start justify-center relative z-[100] mt-2 -ml-3 md:ml-0">
            <Image 
              src="/media/images/logo3.png" 
              alt="Ruchi Makeover" 
              width={130} 
              height={40} 
              className={`object-contain transition-all duration-500 ${isOverDark ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Center Navigation with Curved White Tab */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 drop-shadow-sm pointer-events-none">
            {/* Left Sweeping Flare SVG */}
            <svg className="absolute top-0 -left-[99px] w-[100px] h-12 text-white fill-current" viewBox="0 0 100 48" preserveAspectRatio="none">
              <path d="M 0 0 L 100 0 L 100 48 C 70 48 35 0 0 0 Z" />
            </svg>
            
            {/* White Background Block */}
            <div className="relative z-10 bg-white h-12 px-8 lg:px-14 flex items-center justify-center gap-6 lg:gap-10 pointer-events-auto">
              {siteData.navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-[12px] font-bold tracking-wide text-zinc-800 hover:text-black transition-colors uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Sweeping Flare SVG */}
            <svg className="absolute top-0 -right-[99px] w-[100px] h-12 text-white fill-current" viewBox="0 0 100 48" preserveAspectRatio="none">
              <path d="M 0 0 L 100 0 C 65 0 30 48 0 48 Z" />
            </svg>
          </div>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="#contact" 
              className="relative flex items-center p-1 bg-white border border-gray-100 rounded-full group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Background Sweep */}
              <div className="absolute inset-0 bg-white rounded-full -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10" />

              {/* Inner Pill */}
              <div className="relative px-5 py-2 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 bg-black rounded-full z-0" />
                <span className="relative z-20 text-white group-hover:text-black text-xs font-semibold transition-colors duration-500">
                  Contact Us
                </span>
              </div>

              {/* Sliding Arrow */}
              <div className="relative z-20 flex items-center overflow-hidden h-4 w-5 mx-2">
                <ChevronsRight className="absolute left-0 w-4 h-4 text-black transition-all duration-700 ease-in-out group-hover:translate-x-8" />
                <ChevronsRight className="absolute left-0 w-4 h-4 text-black -translate-x-8 transition-all duration-700 ease-in-out group-hover:translate-x-0" />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden relative z-[60] p-2 -mr-2 transition-colors duration-500 ${isOverDark ? "text-white" : "text-zinc-900"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
