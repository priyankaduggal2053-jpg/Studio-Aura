export const WHATSAPP_NUMBER = '919999999999';

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  sample: 'Hi Studio Aura! I would love a free sample website preview for my business.',
  demo: 'Hi Studio Aura! Please show me your live cafe demo websites.',
  starter: 'Hi Studio Aura! I am interested in the Cafe & Boutique Starter package (₹3,499).',
  growth: 'Hi Studio Aura! I am interested in the Signature Growth & Events package (₹5,999).',
  qr: 'Hi Studio Aura! I want a free printable table QR menu for my cafe.',
};

export const INSTAGRAM_URL = 'https://instagram.com/studioaura.in';
export const DEMO_URL = 'https://lovable.app';
