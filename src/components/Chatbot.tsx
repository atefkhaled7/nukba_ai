"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function Chatbot() {
  useEffect(() => {
    // استيراد المكتبة ديناميكياً فقط في المتصفح لتجنب مشاكل SSR
    const initChat = async () => {
      try {
        // استخدام dynamic import الخاص بـ Next.js/Webpack بشكل صحيح
        const { createChat } = await import("@n8n/chat");
        
        createChat({
          webhookUrl: 'https://atefkhaledua7.app.n8n.cloud/webhook/cbad2cc3-d9c0-41b8-a09a-6de720188f4d/chat',
          webhookConfig: {
            method: 'POST'
          },
          showWelcomeMessage: true,
          title: 'نخبة للذكاء الاصطناعي',
          subtitle: 'مساعدك الذكي للأتمتة',
          i18n: {
            en: {
              title: 'Nukhba AI',
              subtitle: 'Your automation assistant',
              footer: 'Powered by Nukhba AI',
              getStarted: 'Get Started',
              inputPlaceholder: 'Type your message...',
              closeButtonTooltip: 'Close Chat',
            }
          }
        });
        console.log("n8n Chatbot: Initialized successfully");
      } catch (err) {
        console.error("n8n Chatbot: Error loading package:", err);
      }
    };

    initChat();
  }, []);

  return null;
}
