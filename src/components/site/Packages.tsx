import { Check, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LAUNCH_WINDOW } from "@/lib/benefits";
import { PACKAGES, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function Packages({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={cn("theme-ivory relative px-5 sm:px-8", asPage ? "py-20" : "py-24 md:py-32")}>
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Simple, transparent packages"
          title={
            <>
              One-time price. <em className="text-primary">No monthly fees.</em>
            </>
          }
          intro={`Pick a package, send us your menu on WhatsApp, and your website is live in ${LAUNCH_WINDOW} hours.`}
        />

        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">
            <Clock className="h-3.5 w-3.5 text-primary" /> {LAUNCH_WINDOW} hour express launch
          </span>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-[2rem] p-8 sm:p-10",
                p.featured
                  ? "bg-charcoal text-ivory shadow-card ring-1 ring-gold/50"
                  : "border border-border bg-card shadow-soft",
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-charcoal">
                  Signature
                </span>
              )}
              <h3 className="text-3xl sm:text-4xl">{p.name}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", p.featured ? "text-ivory/65" : "text-muted-foreground")}>
                {p.intro}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className={cn("font-serif text-5xl sm:text-6xl", p.featured && "text-gold-gradient")}>
                  {p.price}
                </span>
                <span className={cn("pb-2 text-sm", p.featured ? "text-ivory/60" : "text-muted-foreground")}>
                  one-time
                </span>
              </div>
              <p className={cn("mt-2 text-xs", p.featured ? "text-gold-soft" : "text-primary")}>{p.note}</p>

              <div className={cn("my-8 h-px", p.featured ? "hairline" : "bg-border")} />

              <ul className="space-y-3.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        p.featured ? "bg-gold/20 text-gold" : "bg-secondary text-primary",
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button asChild variant={p.featured ? "gold" : "default"} size="xl" className="mt-10 w-full rounded-full">
                <a href={whatsappLink(p.message)} target="_blank" rel="noreferrer">
                  {p.cta}
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
