"use client";

import { motion } from 'framer-motion';
import { Clock, DollarSign, MessageSquare, Users, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    text: "العملاء يبون رد فوري — التأخير = خسارة مبيعات",
  },
  {
    icon: DollarSign,
    text: "تكلفة فريق خدمة العملاء عالية",
  },
  {
    icon: MessageSquare,
    text: "رسائل كثيرة تتكرر يومياً",
  },
  {
    icon: Users,
    text: "صعوبة متابعة كل العملاء",
  },
  {
    icon: AlertCircle,
    text: "محتاجين خدمة 24/7 بدون توقف",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 bg-nukhba-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-4"
          >
            ليه الشركات تحتاج <span className="text-nukhba-gold">شات بوت ذكي؟</span>
          </motion.h2>
          <div className="w-24 h-1 bg-nukhba-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-nukhba-black/50 p-6 rounded-xl border border-nukhba-gold/10 hover:border-nukhba-gold/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-nukhba-gold/10 rounded-lg group-hover:bg-nukhba-gold/20 transition-colors">
                  <point.icon className="w-6 h-6 text-nukhba-gold" />
                </div>
                <p className="text-lg text-gray-300 pt-2">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
