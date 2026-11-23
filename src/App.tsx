import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Packages } from '@/components/Packages';
import { Process } from '@/components/Process';
import { BookPreview } from '@/components/BookPreview';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <div className="mx-auto max-w-5xl px-8">
          <div className="hairline-gold h-px" />
        </div>
        <Packages />
        <Process />
        <BookPreview />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
