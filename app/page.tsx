import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ROICalculator from "@/components/ROICalculator";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ROICalculator />
      <Services />
      <CaseStudies />
    </main>
  );
}
