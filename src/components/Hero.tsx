import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { waLink, WA_MESSAGES, DEMO_URL } from '@/lib/contact';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="aura-glow absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            New Delhi Boutique Web Studio
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-7xl lg:text-[5.25rem]">
            Websites That Turn
            <br />
            Local Visitors Into{' '}
            <span className="italic text-gradient-gold">Loyal Regulars</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            Custom mobile-first websites, 0%-commission WhatsApp ordering &amp; table bookings,
            and printable Table QR menus — delivered in 24 hours.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal sm:w-auto"
            >
              View Live Cafe Demos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(WA_MESSAGES.sample)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ivory px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:bg-gold hover:shadow-[0_0_36px_rgba(212,175,55,0.35)] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Request Your Free Sample Preview
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] py-6 backdrop-blur-sm">
            {[
              ['24 Hrs', 'Delivery'],
              ['0%', 'Commission'],
              ['Free', 'Table QR Menu'],
            ].map(([big, small]) => (
              <div key={small} className="px-2">
                <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">{big}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ivory/50">{small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
