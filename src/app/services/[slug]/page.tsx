import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { StickyBookingPanel } from "@/components/services/StickyBookingPanel";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen">
      <ServiceHero 
        title={service.title} 
        label={service.title} 
        image={service.image} 
      />

      <Section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Left: Main Content */}
            <div className="w-full lg:w-2/3 flex flex-col gap-16">
              
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">The Experience</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">Who It's For</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {service.whoItsFor}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/5] rounded-md overflow-hidden">
                      <Image
                        src={img}
                        alt={`${service.title} gallery image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Sticky Booking Panel */}
            <div className="w-full lg:w-1/3">
              <StickyBookingPanel 
                title={service.title}
                price={service.price}
                duration={service.duration}
                includes={service.includes}
              />
            </div>
            
          </div>
        </Container>
      </Section>
    </main>
  );
}
