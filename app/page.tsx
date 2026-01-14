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
import FAQ from "@/components/FAQ";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="services"></section>

      <section id="calculator">
        <ComparisonTable />
        <ROICalculator />
      </section>

      <section id="roi-calculator">
        <Services />
      </section>

      <section id="testimonials">
        <ProcessTimeline />
        <CaseStudies />
        <Testimonials />
      </section>

      <section id="cases"></section>

      <section id="offers"></section>

      <LeadMagnets />
      <AboutTeam />
      
      {/* Trust Signals & Sources for SEO - TEMPORARILY DISABLED */}
      {/* <TrustSignals /> */}
      
      {/* FAQ Section for SEO */}
      <FAQ />
    </main>
  );
}
