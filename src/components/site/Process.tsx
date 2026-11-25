import { SectionHeading } from "./SectionHeading";
import { LAUNCH_WINDOW } from "@/lib/benefits";

const STEPS = [
  { n: "01", title: "We Build a Free Live Sample First", text: "Share your business name on WhatsApp. We craft a live sample website for you—free, no commitment." },
  { n: "02", title: `Customize With Your Real Photos & Menu in ${LAUNCH_WINDOW} Hrs`, text: `Send your photos, prices and timings. We polish every detail and deliver in ${LAUNCH_WINDOW} hours.` },
  { n: "03", title: "Launch & Print Your Free Table QR Code", text: "Go live, share the link everywhere, and place your printed QR menu on every table." },
];

export function Process() {
  return (
    <section className="theme-ivory relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The 3-step process"
          title={
            <>
              From hello to <em className="text-primary">live</em> in {LAUNCH_WINDOW} hours
            </>
          }
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="hairline absolute left-0 right-0 top-8 hidden md:block" aria-hidden="true" />
          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-charcoal font-serif text-xl text-gold shadow-soft">
                {s.n}
              </span>
              <h3 className="mt-6 text-2xl leading-tight sm:text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
