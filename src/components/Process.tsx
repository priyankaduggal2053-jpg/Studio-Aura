import { Gift, Camera, QrCode } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const STEPS = [
  {
    icon: Gift,
    step: 'Step 1',
    title: 'We Build a Free Live Sample First',
    body: 'See your actual website live on the internet before you commit to anything. No advance, no obligation.',
  },
  {
    icon: Camera,
    step: 'Step 2',
    title: 'Customize With Your Real Photos & Menu in 24 Hrs',
    body: 'Send your dishes, prices, and photos on WhatsApp. We swap everything in and polish it within a day.',
  },
  {
    icon: QrCode,
    step: 'Step 3',
    title: 'Launch & Print Your Free Table QR Code',
    body: 'Go live with hosting on us, and get a print-ready table QR menu so guests order straight from their seat.',
  },
];

export function Process() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            Why Studio Aura
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-medium text-ivory sm:text-6xl">
            From First Hello to <span className="italic text-gradient-gold">Launch in 3 Steps</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="hairline-gold absolute left-0 right-0 top-10 hidden h-px md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 160}>
              <div className="relative text-center md:px-4">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-charcoal-soft shadow-[0_0_36px_rgba(212,175,55,0.15)]">
                  <s.icon className="h-8 w-8 text-gold" />
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest2 text-rose">{s.step}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ivory">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              ['0% commission', 'on every order & booking, forever'],
              ['Built for mobile', 'because 90% of your guests browse on their phone'],
              ['Delhi-local', 'we understand cafes, salons & boutiques here'],
            ].map(([big, small]) => (
              <div
                key={big}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-gold/30"
              >
                <p className="font-display text-xl font-semibold text-gold">{big}</p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/55">{small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
