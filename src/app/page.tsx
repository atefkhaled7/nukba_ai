import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { Solution } from '@/components/sections/Solution';
import { UseCases } from '@/components/sections/UseCases';
import { Demo } from '@/components/sections/Demo';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-nukhba-black text-nukhba-white font-sans selection:bg-nukhba-gold selection:text-nukhba-black">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <UseCases />
      <Demo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
