import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { BentoGrid } from "@/components/bento-grid";
import { Testimonials } from "@/components/testimonials";
import { AdmissionsPathfinder } from "@/components/admissions-pathfinder";
import { StickyFooter } from "@/components/sticky-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <HeroSection />
      <TrustSection />
      <BentoGrid />
      <Testimonials />
      <AdmissionsPathfinder />
      <Footer />
      <StickyFooter />
    </main>
  );
}
