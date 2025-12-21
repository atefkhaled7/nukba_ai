import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script"; // استيراد مكون السكريبت
import "./globals.css";

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
    <html lang="ar" dir="rtl">
      <head>
        {/* ملف CSS الخاص بواجهة الشات */}
        <link
          href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-cairo antialiased bg-nukhba-black text-nukhba-white`}
      >
        {children}
        <SpeedInsights />

        {/* كود تفعيل الشات بوت */}
        <Script
          id="n8n-chat-script"
          src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
          type="module"
          strategy="afterInteractive"
          onLoad={() => {
            // @ts-ignore
            import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js').then(
              (mod) => {
                mod.createChat({
                  webhookUrl: 'https://atefkhaledua7.app.n8n.cloud/webhook/cbad2cc3-d9c0-41b8-a09a-6de720188f4d/chat',
                  webhookConfig: {
                    method: 'POST'
                  },
                  showWelcomeMessage: true,
                  title: 'نخبة للذكاء الاصطناعي',
                  subtitle: 'مساعدك الذكي للأتمتة',
                  mainColor: '#000000', // لون أسود يتناسب مع الـ bg-nukhba-black
                });
              }
            );
          }}
        />
      </body>
    </html>
  );
}