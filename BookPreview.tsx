import { Instagram, MessageCircle, QrCode, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { waLink, WA_MESSAGES, INSTAGRAM_URL } from '@/lib/contact';

export function BookPreview() {
  return (
    <section id="book" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-gold/[0.1] via-white/[0.03] to-transparent p-10 text-center sm:p-16">
            <div className="aura-glow pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full" />

            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <QrCode className="h-6 w-6 text-gold" />
              </span>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                See Your Website Live — <span className="italic text-gradient-gold">Before You Pay</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-ivory/60">
                Message us on WhatsApp with your cafe or boutique name, and we will send back a free
                live sample preview — usually within hours.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waLink(WA_MESSAGES.sample)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_36px_rgba(212,175,55,0.4)] sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Free Preview on WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:border-rose hover:text-rose sm:w-auto"
                >
                  <Instagram className="h-5 w-5" />
                  DM on Instagram
                </a>
              </div>
              <p className="mt-6 flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.2em] text-ivory/40">
                <MapPin className="h-3.5 w-3.5" /> New Delhi, India
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
