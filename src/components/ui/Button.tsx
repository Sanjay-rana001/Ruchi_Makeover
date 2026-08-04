"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronsRight } from "lucide-react";
import MagneticButton from "../motion/MagneticButton";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  withArrow?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", withArrow = false, href, children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-500 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
    
    const variants = {
      primary: "bg-primary text-background px-8 py-4 rounded-full hover:bg-primary/90",
      secondary: "bg-transparent text-primary border border-border px-8 py-4 rounded-full hover:bg-secondary/50",
      ghost: "bg-transparent text-primary hover:text-foreground-muted py-2",
      whatsapp: "bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20",
    };

    const buttonContent = (
      <>
        {/* Hover scale effect background for primary variant */}
        {variant === "primary" && (
          <div className="absolute inset-0 w-full h-full bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
        )}
        <span className="relative z-10 transition-colors duration-500 text-sm tracking-wide uppercase">
          {children}
        </span>
        {withArrow && (
          <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
        )}
      </>
    );

    if (variant === "primary") {
      const buttonClasses = cn(
        "relative flex items-center p-[4px] rounded-full bg-white border border-gray-200 group overflow-hidden shadow-sm hover:shadow-lg transition-shadow",
        className
      );

      const content = (
        <>
          {/* Background Sweep */}
          <div className="absolute inset-0 bg-white rounded-full -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-10" />

          {/* Inner Pill */}
          <div className="relative px-5 py-1.5 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-950 rounded-full z-0" />
            <span className="relative z-20 text-white group-hover:text-black text-sm font-semibold transition-colors duration-500">
              {children}
            </span>
          </div>

          {/* Sliding Arrow */}
          <div className="relative z-20 flex items-center overflow-hidden h-4 w-6 mx-1.5">
            <ChevronsRight className="absolute left-0 w-4 h-4 text-black transition-all duration-700 ease-in-out group-hover:translate-x-8" />
            <ChevronsRight className="absolute left-0 w-4 h-4 text-black -translate-x-8 transition-all duration-700 ease-in-out group-hover:translate-x-0" />
          </div>
        </>
      );

      if (href) {
        return (
          <Link href={href} className={buttonClasses} {...(props as any)}>
            {content}
          </Link>
        );
      }

      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={buttonClasses}
          {...props}
        >
          {content}
        </button>
      );
    }

    const otherButtonClasses = cn(baseStyles, variants[variant as keyof typeof variants], className);
    if (href) {
      return (
        <Link href={href} className={otherButtonClasses} {...(props as any)}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={otherButtonClasses}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
export default Button;
