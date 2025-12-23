import type { Metadata } from "next";
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
import ExpertiseProof from "@/components/ExpertiseProof";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Legal AI PRO - Автоматизация юридической работы с ИИ | YandexGPT, GigaChat, Claude",
  description: "Юристы, создающие AI-решения для автоматизации договоров, судебных дел и комплаенса. 20+ лет опыта + разработка на YandexGPT, GigaChat, Claude. Проверка договоров, мониторинг судов, налоговый комплаенс. Консультация бесплатно.",
  keywords: [
    "автоматизация юридической работы",
    "AI для юристов",
    "YandexGPT юристы",
    "GigaChat правовой",
    "автоматизация договоров",
    "проверка договоров AI",
    "мониторинг судебных дел",
    "legal tech россия",
    "юридическая автоматизация",
    "налоговый комплаенс автоматизация"
  ],
  openGraph: {
    title: "Legal AI PRO - Автоматизация юридической работы с ИИ",
    description: "Юристы-разработчики. Создаем системы на YandexGPT и GigaChat для проверки договоров, мониторинга судов и автоматизации комплаенса. 20+ лет практики.",
    type: "website",
  },
};

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
      <ExpertiseProof />
      <Sources />
    </main>
  );
}
