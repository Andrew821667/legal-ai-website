import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import YandexMetrika from "@/components/YandexMetrika";

export const metadata: Metadata = {
  title: "Legal AI PRO - Юристы, разрабатывающие AI-решения",
  description: "Создаем интеллектуальные системы для автоматизации юридической работы. 20+ лет практики + программирование. Налоговый комплаенс, договоры, суды. YandexGPT, GigaChat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        {/* Yandex Metrika */}
        {process.env.NEXT_PUBLIC_YM_COUNTER_ID && (
          <YandexMetrika counterId={process.env.NEXT_PUBLIC_YM_COUNTER_ID} />
        )}

        <Header />
        {children}
        <Footer />
        <AdminPanel password={process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"} />
      </body>
    </html>
  );
}
