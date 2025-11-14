import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

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
        <Header />
        {children}
        <Footer />
        <AdminPanel password={process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"} />
      </body>
    </html>
  );
}
