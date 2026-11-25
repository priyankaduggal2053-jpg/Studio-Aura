import teddyGarden from "@/assets/teddy-garden.jpg";
import kymsSalon from "@/assets/kyms-website.png.asset.json";
import nobbysWebsite from "@/assets/nobbys-website.png.asset.json";

export const WHATSAPP_NUMBER = "917289819755";
export const WHATSAPP_DISPLAY = "+91 72898 19755";
export const INSTAGRAM_HANDLE = "stud.ioauraweb";
export const INSTAGRAM_URL = "https://www.instagram.com/stud.ioauraweb?fqnt=YmF2b2RrZWJrNDcx&utm_-source=qr";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_FREE_SAMPLE = whatsappLink(
  "Hi Studio Aura! I'd love a free sample website for my business.",
);
export const WA_PREVIEW = whatsappLink(
  "Hi Priyanka! I'd like to book a free live preview of my website.",
);

export type Demo = {
  name: string;
  area: string;
  tagline: string;
  description: string;
  image?: string;
  comingSoon?: boolean;
  screenshot?: boolean;
  url?: string;
  rating?: string;
  tags: string[];
  features: string[];
};

export const DEMOS: Demo[] = [
  {
    name: "Teddy Garden Café",
    area: "Ashok Nagar",
    tagline: "Cozy teddy-bear & garden specialty café",
    description:
      "A whimsical, plant-filled website with an interactive Ube & waffle menu and one-tap WhatsApp table booking.",
    image: teddyGarden,
    url: "https://lovable.app",
    tags: ["Interactive menu", "Table booking"],
    features: ["Ube & waffle menu with categories", "WhatsApp table booking", "Google Maps directions"],
  },
  {
    name: "Kym's Luxury Salon & Bridal Studio",
    area: "Beauty & bridal",
    tagline: "Beauty, with a signature touch",
    description:
      "A luxury salon website concept pairing bridal artistry with a refined service menu and direct appointment enquiries.",
    image: kymsSalon.url,
    screenshot: true,
    tags: ["Salon & bridal", "Appointments"],
    features: ["Salon service menu", "Bridal lookbook", "WhatsApp appointment enquiries"],
  },
  {
    name: "Nobby's Cafe",
    area: "East Patel Nagar",
    tagline: "A neighbourhood culinary escape",
    description: "An editorial café website with a warm visual identity, menu discovery and celebration enquiries.",
    image: nobbysWebsite.url,
    screenshot: true,
    tags: ["Café & kitchen", "Celebrations"],
    features: ["Café menu", "Celebration enquiries", "Mobile-first experience"],
  },
  {
    name: "The Velvet Atelier",
    area: "Fashion & lifestyle",
    tagline: "An atelier in the making",
    description:
      "Our next boutique showcase. A considered digital home for a brand with a distinct point of view.",
    comingSoon: true,
    tags: ["Boutique", "Coming soon"],
    features: [],
  },
];

export type Package = {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
  intro: string;
  features: string[];
  cta: string;
  message: string;
};

export const PACKAGES: Package[] = [
  {
    name: "Cafe & Boutique Starter",
    price: "₹3,499",
    note: "₹1,500 advance to start, balance on delivery",
    intro: "Everything a local café, salon or boutique needs to start taking bookings online.",
    features: [
      "Mobile-first 1-page website",
      "Interactive categorised menu",
      "Direct WhatsApp table / pickup booking",
      "Google Maps integration",
      "Free printable Table Menu QR code",
      "Free lifetime cloud hosting",
    ],
    cta: "Start with Starter",
    message: "Hi Studio Aura! I'm interested in the Cafe & Boutique Starter package (₹3,499).",
  },
  {
    name: "Signature Growth & Events",
    price: "₹5,999",
    note: "Most chosen by cafés that host celebrations",
    featured: true,
    intro: "For brands ready to fill private events and look premium everywhere.",
    features: [
      "Everything in Starter",
      "Private birthday / event reservation form",
      "Multi-section photo gallery",
      "Custom .in / .com domain setup assistance",
      "Priority 24-hour edits",
    ],
    cta: "Choose Signature",
    message: "Hi Studio Aura! I'm interested in the Signature Growth & Events package (₹5,999).",
  },
];
