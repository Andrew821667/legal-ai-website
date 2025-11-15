import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import ROICalculator from "@/components/ROICalculator";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import LeadMagnets from "@/components/LeadMagnets";
import AboutTeam from "@/components/AboutTeam";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ComparisonTable />
      <ROICalculator />
      <Services />
      <ProcessTimeline />
      <CaseStudies />
      <Testimonials />
      <LeadMagnets />
      <AboutTeam />
    </main>
  );
}