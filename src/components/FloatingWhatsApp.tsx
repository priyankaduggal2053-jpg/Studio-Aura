import { WA_FREE_SAMPLE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_FREE_SAMPLE}
      target="_blank"
      rel="noreferrer"
      aria-label="Get a Free Sample Website on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-2.5 pl-2.5 pr-2.5 text-whatsapp-foreground shadow-card transition-all hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="grid h-10 w-10 animate-pulse-ring place-items-center rounded-full bg-whatsapp-foreground/15">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold leading-tight sm:block">
        Get a Free Sample
        <br />
        <span className="font-normal opacity-90">Website on WhatsApp</span>
      </span>
    </a>
  );
}
