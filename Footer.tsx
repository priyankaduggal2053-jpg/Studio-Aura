import { Sparkles, Instagram, MessageCircle, Heart } from 'lucide-react';
import { waLink, WA_MESSAGES, INSTAGRAM_URL } from '@/lib/contact';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
              <Sparkles className="h-4 w-4 text-gold" />
            </span>
            <span className="font-display text-2xl font-semibold text-ivory">
              Studio <span className="italic text-gradient-gold">Aura</span>
            </span>
          </a>

          <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
            Websites that turn local visitors into loyal regulars — for cafes, restaurants, salons
            and boutique brands across New Delhi.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivory/60">
            <a href="#work" className="transition-colors hover:text-gold">Work</a>
            <a href="#packages" className="transition-colors hover:text-gold">Packages</a>
            <a href="#why-us" className="transition-colors hover:text-gold">Why Us</a>
            <a href="#book" className="transition-colors hover:text-gold">Book Free Preview</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={waLink(WA_MESSAGES.sample)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory/70 transition-all duration-300 hover:border-rose hover:text-rose"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ivory/40">© {new Date().getFullYear()} Studio Aura · New Delhi, India</p>
          <p className="flex items-center gap-1.5 text-xs text-ivory/50">
            Crafted with care by <span className="font-semibold text-gold">Priyanka Duggal</span>
            <Heart className="h-3 w-3 fill-rose text-rose" />
          </p>
        </div>
      </div>
    </footer>
  );
}
