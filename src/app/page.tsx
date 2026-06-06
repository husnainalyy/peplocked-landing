import Background from "@/components/Background";
import ScrollAnimations from "@/components/ScrollAnimations";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Dashboard from "@/components/sections/Dashboard";
import TrustLogos from "@/components/sections/TrustLogos";
import ProblemSection from "@/components/sections/ProblemSection";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Coverage from "@/components/sections/Coverage";
import Comparison from "@/components/sections/Comparison";
import LockedIn from "@/components/sections/LockedIn";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">
        <Hero />
        <ProductShowcase />
        <Dashboard />
      </main>

      <TrustLogos />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <Coverage />
      <Comparison />
      <LockedIn />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <SiteFooter />

      <ScrollAnimations />
    </>
  );
}
