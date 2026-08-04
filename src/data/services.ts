export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  duration: string;
  price: string;
  includes: string[];
  image: string;
  gallery: string[];
}

export const services: ServiceData[] = [
  {
    id: "01",
    title: "Bridal Makeup",
    slug: "bridal-makeup",
    shortDescription: "A flawless, long-lasting look designed for your special day.",
    fullDescription: "Your wedding day is one of the most important days of your life. Our signature Bridal Makeup service is designed to enhance your natural beauty while ensuring a flawless, camera-ready finish that lasts from the first tear to the final dance. We work closely with you to understand your vision, dress, and venue to curate a personalized look that feels authentically you.",
    whoItsFor: "Brides-to-be looking for a premium, stress-free makeup experience tailored perfectly to their wedding aesthetic.",
    duration: "2–3 Hours",
    price: "Starting from ₹15,000",
    includes: [
      "In-depth Consultation",
      "Premium Skin Prep",
      "Custom HD/Airbrush Makeup",
      "Hair Styling & Draping",
      "Premium Faux Lashes"
    ],
    image: "/media/images/bridal.png",
    gallery: []
  },
  {
    id: "02",
    title: "Party Makeup",
    slug: "party-makeup",
    shortDescription: "Glamorous and elegant styling for any special occasion.",
    fullDescription: "Whether it's a gala, a reception, or a high-profile event, our Party Makeup service ensures you step into the room radiating confidence. We focus on creating a look that perfectly complements your outfit and the event's atmosphere, striking the right balance between striking glamour and refined elegance.",
    whoItsFor: "Guests, bridesmaids, or anyone attending a special event who wants to look their absolute best.",
    duration: "1.5–2 Hours",
    price: "Starting from ₹5,000",
    includes: [
      "Skin Prep & Hydration",
      "Long-wear Event Makeup",
      "Basic Hair Styling",
      "Faux Lashes"
    ],
    image: "/media/images/party.png",
    gallery: []
  },
  {
    id: "03",
    title: "Skin Treatments",
    slug: "skin-treatments",
    shortDescription: "Rejuvenating therapies for a natural, healthy glow.",
    fullDescription: "Beautiful makeup starts with a beautiful canvas. Our bespoke skin treatments are tailored to your unique skin type and concerns. From deep exfoliation and hydration to advanced lifting and glowing therapies, we help you achieve healthy, radiant skin from within.",
    whoItsFor: "Anyone looking to improve their skin texture, address specific concerns, or achieve a natural bridal glow weeks before the event.",
    duration: "45–90 Minutes",
    price: "Starting from ₹3,500",
    includes: [
      "Skin Analysis",
      "Deep Cleansing & Exfoliation",
      "Targeted Serum Application",
      "Relaxing Facial Massage",
      "Custom Mask Therapy"
    ],
    image: "/media/images/skin.png",
    gallery: []
  },
  {
    id: "04",
    title: "Hair & Styling",
    slug: "hair-styling",
    shortDescription: "Expert hair styling tailored to your face shape and outfit.",
    fullDescription: "Your hair is your crown. Whether you desire classic romantic updos, sleek modern waves, or intricate traditional braids, our expert hair stylists use premium products to ensure your hair holds perfectly all day while remaining healthy and shiny.",
    whoItsFor: "Clients needing professional hair styling for events, shoots, or weddings.",
    duration: "1–1.5 Hours",
    price: "Starting from ₹2,500",
    includes: [
      "Hair Texturizing",
      "Custom Styling (Updo/Open)",
      "Hair Accessory Placement",
      "Long-hold Setting"
    ],
    image: "/media/images/hair.png",
    gallery: []
  },
  {
    id: "05",
    title: "Brows & Lashes",
    slug: "brows-lashes",
    shortDescription: "Precision shaping and lifting to frame your face.",
    fullDescription: "Perfectly groomed brows and lush lashes can transform your entire face. We offer precision brow shaping, tinting, lamination, and lash lifting services. Our goal is to enhance your natural features, giving you a structured, expressive, and effortless look even without makeup.",
    whoItsFor: "Those looking for low-maintenance beauty enhancements that make a high impact.",
    duration: "30–60 Minutes",
    price: "Starting from ₹1,500",
    includes: [
      "Consultation & Mapping",
      "Precision Shaping",
      "Custom Tinting (if required)",
      "Aftercare Advice"
    ],
    image: "/media/images/brows.png",
    gallery: []
  },
  {
    id: "06",
    title: "Beauty Packages",
    slug: "beauty-packages",
    shortDescription: "Comprehensive, all-inclusive beauty solutions.",
    fullDescription: "Curated for the ultimate pampering experience. Our Beauty Packages combine our top services—from pre-wedding skin prep to final day styling—into seamless, cost-effective journeys. Step into our studio and let us take care of everything from head to toe.",
    whoItsFor: "Brides, bridal parties, or individuals wanting a complete head-to-toe beauty transformation.",
    duration: "Varies",
    price: "Custom Quotes",
    includes: [
      "Multi-session Skin Prep",
      "Pre-wedding Trial",
      "Event Day Makeup & Hair",
      "Priority Booking"
    ],
    image: "/media/images/packages.png",
    gallery: []
  }
];
