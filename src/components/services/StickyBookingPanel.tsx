import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

interface StickyBookingPanelProps {
  title: string;
  price: string;
  duration: string;
  includes: string[];
}

export function StickyBookingPanel({ title, price, duration, includes }: StickyBookingPanelProps) {
  return (
    <>
      {/* Desktop Sticky Panel */}
      <div className="hidden lg:flex flex-col bg-surface border border-border/50 rounded-2xl p-8 sticky top-32 shadow-xl">
        <h3 className="font-serif text-2xl text-foreground mb-2 uppercase tracking-tight">{title}</h3>
        <p className="text-primary font-medium text-lg mb-8">{price}</p>

        <div className="flex flex-col gap-6 mb-8 border-t border-border/40 pt-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 block mb-1">Duration</span>
            <span className="text-foreground">{duration}</span>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 block mb-3">Includes</span>
            <ul className="flex flex-col gap-3">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button variant="primary" className="w-full flex justify-center py-4">Check Availability</Button>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border/50 z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">Starting from</span>
          <span className="text-foreground font-medium">{price.replace("Starting from ", "")}</span>
        </div>
        <Button variant="primary" className="px-6">Book Now</Button>
      </div>
    </>
  );
}
