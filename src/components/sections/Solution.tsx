"use client";

import { motion } from 'framer-motion';
import { Brain, Globe, Zap, MessageCircle, Database, Clock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Memory",
    description: "يتذكر بيانات كل عميل",
  },
  {
    icon: Globe,
    title: "Arabic + English",
    description: "يفهم اللهجات الخليجية",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "طلبات، حجوزات، تتبع شحن",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp + Messenger",
    description: "تكامل كامل مع منصات المحادثة او موقعك الخاص",
  },
  {
    icon: Database,
    title: "Integrations",
    description: "مع CRM / Google Sheets",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "ردود فورية 24/7",
  },
];

export function Solution() {
  return (
    <section id="features" className="py-20 bg-nukhba-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-6"
          >
            شات بوت يعمل بدل فريق خدمة العملاء — <span className="text-nukhba-gold">بدون تعب</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            البوت اللي هنبنيه لك مش مجرد ردود جاهزة.
            ده Bot ذكي يفهم الأسئلة، يتذكر العملاء، ويجاوب بالعربي/الإنجليزي بدقة عالية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-nukhba-charcoal border border-nukhba-charcoal hover:border-nukhba-gold/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-nukhba-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-nukhba-gold/20 transition-colors">
                <feature.icon className="w-6 h-6 text-nukhba-gold" />
              </div>
              <h3 className="text-xl font-bold text-nukhba-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
