import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ROICalculator from "@/components/ROICalculator";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import LeadMagnets from "@/components/LeadMagnets";
import AboutTeam from "@/components/AboutTeam";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ROICalculator />
      <Services />
      <CaseStudies />
      <LeadMagnets />
      <AboutTeam />
    </main>
  );
}
