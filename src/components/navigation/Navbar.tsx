"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { Menu, X, ChevronsRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-20 flex items-center">
        <div className="container mx-auto px-6 w-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start justify-center relative z-[60]">
            <div className="text-2xl font-serif font-bold tracking-widest leading-none">
              Ruchi
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-white/70 mt-1">
              Makeover
            </div>
          </Link>

          {/* Desktop Center Navigation with Curved White Tab */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 h-full">
            {/* Left Curve SVG */}
            <svg className="w-6 h-6 absolute top-0 -left-6 text-white fill-current" viewBox="0 0 24 24">
              <path d="M0 0H24V24C24 10.7452 13.2548 0 0 0Z" />
            </svg>
            
            {/* White Background Block */}
            <div className="bg-white h-full px-12 flex items-center justify-center rounded-b-full gap-8 shadow-sm">
              {siteData.navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-sm font-semibold tracking-wide text-zinc-800 hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Curve SVG */}
            <svg className="w-6 h-6 absolute top-0 -right-6 text-white fill-current" viewBox="0 0 24 24">
              <path d="M24 0H0V24C0 10.7452 10.7452 0 24 0Z" />
            </svg>
          </div>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center">
            <Link href="#contact" className="flex items-center bg-white p-1 rounded-full cursor-pointer hover:scale-105 transition-transform group">
              <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                Contact Us
              </div>
              <div className="px-2 text-black">
                <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[60] text-white p-2 -mr-2"
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
