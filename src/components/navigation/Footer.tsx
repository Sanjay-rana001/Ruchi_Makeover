import { Container } from "../ui/Container";
import { siteData } from "@/data/site";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border/50 py-8 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <Link href="/" className="font-serif text-xl text-foreground tracking-wide hover:text-accent transition-colors">
              Ruchi Makeover
            </Link>
            <span className="text-xs text-foreground-muted uppercase tracking-widest font-semibold">
              Professional Makeup Artist
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="text-xs text-foreground-muted/70">
            &copy; {currentYear} Ruchi Makeover. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
