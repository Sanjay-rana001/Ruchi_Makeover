import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullBleed?: boolean;
}

export function Section({ children, className, fullBleed = false, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "py-24 md:py-32 overflow-hidden",
        fullBleed ? "w-full" : "",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  );
}
