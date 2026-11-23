import { Check, Crown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { waLink, WA_MESSAGES } from '@/lib/contact';

const PACKAGES = [
  {
    name: 'Cafe & Boutique Starter',
    price: '₹3,499',
    terms: 'One-Time · ₹1,500 advance to start, balance on delivery',
    features: [
      'Mobile-first 1-page website',
      'Interactive categorized menu',
      'Direct WhatsApp table & pickup booking',
      'Google Maps integration',
      'Free Printable Table Menu QR Code',
      'Free lifetime cloud hosting',
    ],
    featured: false,
  },
  {
    name: 'Signature Growth & Events',
    price: '₹5,999',
    terms: 'One-Time · Everything in Starter, plus:',
    features: [
      'Private birthday & event reservation form',
      'Multi-section photo gallery',
      'Custom .in / .com domain setup assistance',
      'Priority 24-hour edits',
    ],
    featured: true,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            Simple Transparent Packages
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-medium text-ivory sm:text-6xl">
            One Price. <span className="italic text-gradient-gold">24-Hour Turnaround.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-ivory/60">
            No retainers, no hidden fees, no commissions on your orders. You see a live sample
            before you pay a rupee beyond the advance.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 140} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 sm:p-10 ${
                  pkg.featured
                    ? 'border border-gold/50 bg-gradient-to-b from-gold/[0.12] to-white/[0.02] shadow-[0_0_60px_rgba(212,175,55,0.12)]'
                    : 'border border-white/10 bg-white/[0.03] hover:border-gold/30'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
                    <Crown className="h-3.5 w-3.5" /> Most Loved
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold text-ivory">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-semibold text-gradient-gold">{pkg.price}</span>
                  <span className="text-sm uppercase tracking-[0.14em] text-ivory/50">One-Time</span>
                </div>
                <p className="mt-2 text-xs text-ivory/50">{pkg.terms}</p>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ivory/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                        <Check className="h-3 w-3 text-gold" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(pkg.featured ? WA_MESSAGES.growth : WA_MESSAGES.starter)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-9 block rounded-full py-3.5 text-center text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-gold text-charcoal hover:bg-gold-soft hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]'
                      : 'border border-gold/40 text-gold hover:bg-gold hover:text-charcoal'
                  }`}
                >
                  Start on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
