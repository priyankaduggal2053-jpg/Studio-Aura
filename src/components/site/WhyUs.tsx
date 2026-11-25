import { BadgePercent, Clock, FilePenLine, QrCode, Smartphone } from "lucide-react";

import { BENEFITS } from "@/lib/benefits";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const ICONS = { clock: Clock, edits: FilePenLine, mobile: Smartphone, commission: BadgePercent, qr: QrCode };

export function WhyUs({ asPage = false }: { asPage?: boolean }) {
  return (
    <section className={cn("grain relative overflow-hidden px-5 sm:px-8", asPage ? "pb-24 pt-10" : "py-24 md:py-32")}>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Studio Aura advantage"
          title={
            <>
              Why Brands Choose <em className="text-gold-gradient">Studio Aura</em>
            </>
          }
          intro="We design for one goal: turning the people who find you on Google and Instagram into regulars who keep coming back."
        />
        <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon, title, text }) => {
            const Icon = ICONS[icon];
            return (
            <div key={title} className="group border-t border-gold/25 py-8">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
