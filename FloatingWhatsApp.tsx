import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink, WA_MESSAGES } from '@/lib/contact';

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(WA_MESSAGES.sample)}
      target="_blank"
      rel="noreferrer"
      aria-label="Get a free sample website on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(37,211,102,0.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_16px_48px_rgba(37,211,102,0.6)] sm:bottom-7 sm:right-7 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-[#25D366]/40 blur-lg" />
      <MessageCircle className="h-5 w-5 fill-white" />
      <span className="hidden sm:inline">Get a Free Sample Website</span>
      <span className="sm:hidden">Free Sample</span>
    </a>
  );
}
