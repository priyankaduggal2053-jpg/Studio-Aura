import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WA_PREVIEW } from "@/lib/site";
import { InstagramIcon } from "./icons";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/packages", label: "Packages" },
  { to: "/why-us", label: "Why Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 text-ivory">
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold italic tracking-tight">Studio</span>
          <span className="font-display text-2xl font-semibold text-gold-gradient">Aura</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-ivory/75 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={`Studio Aura on Instagram ${INSTAGRAM_HANDLE}`}
            className="grid h-10 w-10 place-items-center rounded-full text-ivory/75 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <Button asChild variant="gold" size="default" className="hidden sm:inline-flex">
            <a href={WA_PREVIEW} target="_blank" rel="noreferrer">
              Book Free Preview
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ivory md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-nav mx-auto mt-2 max-w-6xl animate-fade-up rounded-3xl p-4 text-ivory md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/10 py-3 font-display text-2xl last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Button asChild variant="gold" size="lg" className="mt-3 w-full">
            <a href={WA_PREVIEW} target="_blank" rel="noreferrer">
              Book Free Preview
            </a>
          </Button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 text-sm text-ivory/75 hover:text-gold"
          >
            <InstagramIcon className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      )}
    </header>
  );
}
