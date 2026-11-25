import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, QrCode, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-studio.jpg";
import { Button } from "@/components/ui/button";
import { LAUNCH_WINDOW } from "@/lib/benefits";
import { WA_FREE_SAMPLE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const STATS = [
  { value: `${LAUNCH_WINDOW} hrs`, label: "Delivery" },
  { value: "0%", label: "Commission" },
  { value: "₹3,499", label: "Starting at" },
];

export function Hero() {
  return (
    <section className="grain relative -mt-20 overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-28">
      <div className="glow-orb pointer-events-none absolute -left-32 top-10 h-96 w-96" />
      <div className="glow-orb-rose pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            New Delhi Boutique Web Studio
          </span>

          <h1 className="mt-7 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            Websites That Turn Local Visitors Into{" "}
            <em className="text-gold-gradient font-semibold">Loyal Regulars</em>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Custom mobile-first websites, 0%-commission WhatsApp ordering & table bookings, and
             printable Table QR menus—delivered in {LAUNCH_WINDOW} hours.
          </p>

          <div className="mt-9 flex flex-col gap-3 xl:flex-row [&_a]:h-auto [&_a]:min-h-14 [&_a]:whitespace-normal [&_a]:px-5 [&_a]:py-3 [&_a]:text-center">
            <Button asChild variant="editorial" size="xl">
              <Link to="/work">
                View Selected Work <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="gold" size="xl">
              <a href={WA_FREE_SAMPLE} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Request Your Free Sample Preview
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-7">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 font-serif text-2xl text-foreground sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms] lg:max-w-none">
          <div className="relative overflow-hidden rounded-t-full rounded-b-3xl border border-gold/30 p-2 shadow-card">
            <img
              src={heroImage}
              alt="A café website on a phone beside a latte and a gold-edged table QR menu card"
              className="aspect-[3/4] w-full rounded-t-full rounded-b-2xl object-cover"
              width={1024}
              height={1536}
            />
          </div>

          <div className="absolute -left-4 top-1/3 flex animate-float items-center gap-3 rounded-2xl bg-ivory px-4 py-3 text-charcoal shadow-card sm:-left-10">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground">
              <CalendarCheck className="h-4 w-4" />
            </span>
            <div className="text-xs leading-tight">
              <p className="font-semibold">New table booking</p>
              <p className="opacity-60">Sat · 8:00 PM · 4 guests</p>
            </div>
          </div>

          <div className="absolute -right-3 bottom-10 flex animate-float items-center gap-3 rounded-2xl border border-gold/40 bg-charcoal/90 px-4 py-3 shadow-card [animation-delay:1.5s] sm:-right-8">
            <QrCode className="h-6 w-6 text-gold" />
            <div className="text-xs leading-tight">
              <p className="font-semibold text-ivory">Table 7 scanned</p>
              <p className="text-ivory/60">Menu opened in 1 tap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
