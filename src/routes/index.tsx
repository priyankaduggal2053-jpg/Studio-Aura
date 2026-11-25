import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Packages } from "@/components/site/Packages";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Aura — Boutique Web Studio for Cafes in New Delhi" },
      {
        name: "description",
        content:
          "Mobile-first cafe & salon websites with 0%-commission WhatsApp ordering, table bookings and printable QR menus—launched in 24–48 hours.",
      },
      { property: "og:title", content: "Studio Aura — Websites That Turn Visitors Into Regulars" },
      {
        property: "og:description",
        content: "New Delhi boutique web studio: WhatsApp ordering, table bookings & QR menus in 24–48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Packages />
      <WhyUs />
      <Process />
    </>
  );
}
