import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WA_FREE_SAMPLE, WHATSAPP_DISPLAY } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden px-5 pb-28 pt-24 sm:px-8 sm:pb-16">
      <div className="glow-orb pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow text-gold">Ready when you are</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            Let's build your <em className="text-gold-gradient">free sample</em> today
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Message us your café, restaurant or salon name. You'll see a live preview before paying a rupee.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="xl">
              <a href={WA_FREE_SAMPLE} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="editorial" size="xl">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <InstagramIcon /> Follow on Instagram
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            {WHATSAPP_DISPLAY} ·{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>

        <div className="hairline mt-20" />

        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <Link to="/" className="flex items-baseline gap-1.5 text-foreground">
            <span className="font-display text-2xl italic">Studio</span>
            <span className="font-display text-2xl text-gold-gradient">Aura</span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/work" className="hover:text-gold">Work</Link>
            <Link to="/packages" className="hover:text-gold">Packages</Link>
            <Link to="/why-us" className="hover:text-gold">Why Us</Link>
          </nav>
          <p className="font-display text-lg italic text-foreground/80">
            Crafted with care by Priyanka Duggal · New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
