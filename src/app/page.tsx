import { Hero } from "@/components/hero/Hero";
import { BrandMarquee } from "@/components/trust/BrandMarquee";
import { TrustStats } from "@/components/trust/TrustStats";
import { EditorialIntro } from "@/components/editorial/EditorialIntro";
import { AboutSection } from "@/components/editorial/AboutSection";
import { ServiceList } from "@/components/services/ServiceList";
import { CinematicParallax } from "@/components/parallax/CinematicParallax";
import { FeaturedLook } from "@/components/editorial/FeaturedLook";
import { ProcessSection } from "@/components/process/ProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <TrustStats />
      <EditorialIntro />
      <AboutSection />
      <ServiceList />
      <CinematicParallax />
      <FeaturedLook />
      <ProcessSection />
    </>
  );
}
