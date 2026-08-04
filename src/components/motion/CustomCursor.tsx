"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"none" | "button" | "image" | "book">("none");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy spring config so the cursor doesn't feel sluggish
  const springConfig = { damping: 20, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('a[href="#booking"]') || target.closest('button[data-book="true"]')) {
        setHoverType("book");
      } else if (target.tagName.toLowerCase() === "button" || target.tagName.toLowerCase() === "a" || target.closest("button") || target.closest("a")) {
        setHoverType("button");
      } else if (target.tagName.toLowerCase() === "img" || target.closest("img")) {
        setHoverType("image");
      } else {
        setHoverType("none");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined" || isTouchDevice) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          body { cursor: none; }
          a, button { cursor: none; }
        }
      ` }} />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground pointer-events-none z-[100] flex items-center justify-center mix-blend-difference text-background font-sans text-[8px] font-bold tracking-widest"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: hoverType !== "none" ? 2.5 : 1,
          backgroundColor: hoverType !== "none" ? "rgba(255,255,255,0.1)" : "transparent",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {hoverType === "none" && (
          <motion.div
            className="w-1.5 h-1.5 bg-background rounded-full"
            animate={{ scale: 1 }}
          />
        )}
        {hoverType === "image" && <span>VIEW</span>}
        {hoverType === "book" && <span>BOOK</span>}
      </motion.div>
    </>
  );
}
