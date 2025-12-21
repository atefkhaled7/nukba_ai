import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Nukhba AI | وكالة ذكاء اصطناعي",
  description: "شات بوت ذكي يرد على عملائك 24/7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} font-cairo antialiased bg-nukhba-black text-nukhba-white`}
      >
        {children}
        <SpeedInsights />
        <Chatbot />
      </body>
    </html>
  );
}