import { ArrowUpRight, Check, MapPin, Sparkles, Star } from "lucide-react";
import { useState } from "react";

import showcaseVideo from "@/assets/studio-aura-showcase.mp4.asset.json";
import showcasePoster from "@/assets/studio-aura-showcase.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { DEMOS, whatsappLink, type Demo } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

function DemoCard({ demo }: { demo: Demo }) {
  const [peek, setPeek] = useState(false);
  const demoHref =
    demo.url ?? whatsappLink(`Hi Studio Aura! Please share the live demo of ${demo.name}.`);

  return (
    <article
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 motion-reduce:transform-none"
    >
      <div className={cn("relative overflow-hidden", demo.screenshot ? "aspect-[4/5] bg-charcoal" : "aspect-[4/5]")}>
        {demo.image ? <img
          src={demo.image}
          alt={`${demo.name} website preview`}
          loading="lazy"
          className={cn(
            "h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-105 motion-reduce:transform-none",
            demo.screenshot ? "object-contain object-top" : "object-cover",
            peek && "scale-105 blur-[2px]",
          )}
        /> : (
          <div className="flex h-full flex-col items-center justify-center bg-charcoal p-8 text-center">
            <span className="eyebrow text-rose">Coming soon</span>
            <div className="my-8 grid h-28 w-28 place-items-center rounded-full border border-gold/40 font-display text-5xl italic text-gold">VA</div>
            <Sparkles className="h-5 w-5 text-gold/60" />
          </div>
        )}
        <div className="bg-veil absolute inset-0" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal/70 px-3 py-1 text-[0.7rem] font-medium text-ivory backdrop-blur-md">
            <MapPin className="h-3 w-3 text-gold" /> {demo.area}
          </span>
          {demo.rating && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[0.7rem] font-semibold text-charcoal">
              <Star className="h-3 w-3 fill-current" /> {demo.rating}
            </span>
          )}
        </div>

        <div
          className={cn(
            "absolute inset-x-4 bottom-4 rounded-2xl bg-charcoal/85 p-5 text-ivory backdrop-blur-md transition-all duration-500",
            peek ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
          )}
        >
          <p className="eyebrow text-[0.6rem] text-gold">Inside the website</p>
          <ul className="mt-3 space-y-2 text-sm">
            {demo.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "absolute inset-x-5 bottom-5 transition-opacity duration-300",
            peek && "opacity-0",
          )}
        >
          <div className="flex flex-wrap gap-1.5">
            {demo.tags.map((t) => (
              <span key={t} className="rounded-full border border-ivory/25 px-2.5 py-0.5 text-[0.65rem] text-ivory/85">
                {t}
              </span>
            ))}
          </div>
          <h3 className="mt-3 text-3xl leading-tight text-ivory">{demo.name}</h3>
          <p className="text-sm text-ivory/70">{demo.tagline}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{demo.description}</p>
        {demo.comingSoon ? <p className="mt-auto border-t border-border pt-4 text-sm text-gold-soft">In the works · Preview coming soon</p> : <div className="mt-auto flex flex-wrap items-center gap-2">
          <Button asChild variant="gold" size="lg" className="flex-1 px-4">
            <a href={demoHref} target="_blank" rel="noreferrer">
              {demo.url ? "Open live demo" : "Request preview"} <ArrowUpRight />
            </a>
          </Button>
          <Button
            type="button"
            variant="editorial"
            size="lg"
            aria-pressed={peek}
            aria-label={`${peek ? "Close details for" : "Peek inside"} ${demo.name}`}
            className="px-4"
            onClick={() => setPeek((v) => !v)}
          >
            {peek ? "Close" : "Peek inside"}
          </Button>
        </div>}
      </div>
    </article>
  );
}

export function Portfolio({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={cn("relative px-5 sm:px-8", asPage ? "pb-24 pt-10" : "py-24 md:py-32")}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Distinctive brands, <em className="text-gold-gradient">beautifully online</em>
            </>
          }
          intro="From neighbourhood cafés to bridal studios and independent boutiques. Every brand deserves its own signature."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {DEMOS.map((d) => (
            <DemoCard key={d.name} demo={d} />
          ))}
        </div>
        <div className="mt-16 border-t border-gold/25 pt-10">
          <p className="eyebrow text-gold">Studio Aura · In motion</p>
          <video className="mt-6 aspect-video w-full rounded-lg bg-charcoal object-contain" controls playsInline preload="metadata" poster={showcasePoster.url} aria-label="Studio Aura website showcase">
            <source src={showcaseVideo.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
