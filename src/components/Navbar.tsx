import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { waLink, WA_MESSAGES } from '@/lib/contact';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Packages', href: '#packages' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Book Free Preview', href: '#book' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav border-b border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
            <Sparkles className="h-4 w-4 text-gold" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-ivory">
            Studio <span className="italic text-gradient-gold">Aura</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-ivory/70 transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.sample)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]"
          >
            Book Free Preview
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-nav border-t border-white/5 md:hidden">
          <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.16em] text-ivory/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(WA_MESSAGES.sample)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-charcoal"
            >
              Book Free Preview
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
