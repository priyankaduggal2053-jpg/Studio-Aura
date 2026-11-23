import { useState } from 'react';
import { ExternalLink, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { DEMO_URL } from '@/lib/contact';

type Cafe = {
  name: string;
  area: string;
  tagline: string;
  description: string;
  tags: string[];
  rating?: string;
  theme: { bg: string; accent: string; chip: string };
};

const CAFES: Cafe[] = [
  {
    name: 'Teddy Garden Café',
    area: 'Ashok Nagar',
    tagline: 'Cozy teddy-bear & garden specialty cafe',
    description:
      'A whimsical garden-cafe website with an interactive Ube & waffle menu and one-tap WhatsApp table booking.',
    tags: ['Interactive Menu', 'WhatsApp Booking', 'QR Table Menu'],
    theme: { bg: 'from-[#3d2f2a] to-[#1a1412]', accent: 'text-gold-soft', chip: 'bg-gold/10 text-gold border-gold/25' },
  },
  {
    name: "Nobby's Cafe",
    area: 'East Patel Nagar',
    tagline: 'Luxury 4.8★ neighborhood cafe',
    description:
      'A refined, editorial experience for a 4.8★ rated local favourite, built around private celebration bookings.',
    tags: ['Private Celebrations', 'Gallery', 'Premium Branding'],
    rating: '4.8',
    theme: { bg: 'from-[#2b2229] to-[#17121a]', accent: 'text-rose-soft', chip: 'bg-rose/10 text-rose-soft border-rose/30' },
  },
  {
    name: 'La Bros Cafè',
    area: 'Ashok Nagar',
    tagline: 'Vibrant 100% pure-veg hangout',
    description:
      'A bold digital menu for a 100% pure-veg coffee spot, with a WhatsApp pickup list that skips the queue.',
    tags: ['Digital Menu', 'WhatsApp Pickup', 'Pure Veg'],
    theme: { bg: 'from-[#233024] to-[#111812]', accent: 'text-emerald-300', chip: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25' },
  },
];

export function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            Featured Work
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-medium text-ivory sm:text-6xl">
            Live Sites, Loved by <span className="italic text-gradient-gold">Real Cafes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-ivory/60">
            Three Delhi cafés, three distinct experiences — every one mobile-first, booking-ready,
            and built to convert visitors into regulars.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CAFES.map((cafe, i) => (
            <Reveal key={cafe.name} delay={i * 130}>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Visual preview */}
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${cafe.theme.bg}`}>
                  <div className="absolute inset-0 opacity-60">
                    <div className="aura-glow absolute -top-10 right-0 h-48 w-48 rounded-full" />
                  </div>
                  {/* Faux browser window */}
                  <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-charcoal-soft/90 shadow-2xl backdrop-blur transition-transform duration-700 group-hover:scale-[1.05]">
                    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-rose/70" />
                      <span className="h-2 w-2 rounded-full bg-gold/70" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
                      <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
                    </div>
                    <div className="space-y-2 p-3">
                      <div className={`h-2 w-1/2 rounded-full bg-white/25 ${cafe.theme.accent.replace('text-', 'bg-')}`} />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                      <div className="flex gap-1.5 pt-1">
                        <div className="h-6 flex-1 rounded-md bg-gold/25" />
                        <div className="h-6 flex-1 rounded-md bg-white/10" />
                      </div>
                    </div>
                  </div>

                  {cafe.rating && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                      <Star className="h-3 w-3 fill-gold text-gold" /> {cafe.rating}
                    </span>
                  )}

                  <span
                    className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-charcoal/70 opacity-0 backdrop-blur transition-all duration-500 ${
                      hovered === i ? 'opacity-100 translate-y-0' : 'translate-y-2'
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4 text-ivory" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ivory/45">
                    <MapPin className="h-3 w-3" /> {cafe.area}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">{cafe.name}</h3>
                  <p className={`mt-1 text-sm italic ${cafe.theme.accent}`}>{cafe.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/60">{cafe.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cafe.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-3 py-1 text-[11px] font-medium ${cafe.theme.chip}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    View Live Site <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
