import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import { PageLoader } from "@/components/ui/PageLoader";
import { Footer } from "@/components/navigation/Footer";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontDisplay = Bodoni_Moda({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ruchi Makeover | Luxury Beauty",
  description: "Where beauty becomes an experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <PageLoader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
