import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal AI - Юристы, разрабатывающие AI-решения",
  description: "Создаем интеллектуальные системы для автоматизации юридической работы. 20+ лет практики + программирование. YandexGPT, GigaChat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
