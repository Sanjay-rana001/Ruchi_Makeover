import type { Metadata } from "next";
import { Outfit, Italiana } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import { PageLoader } from "@/components/ui/PageLoader";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Italiana({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`${fontSans.variable} ${fontSerif.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <PageLoader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
