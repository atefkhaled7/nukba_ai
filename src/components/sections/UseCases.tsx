"use client";

import { motion } from 'framer-motion';
import { ShoppingBag, Stethoscope, Utensils, Building2, Home, Scissors, Car, Hotel } from 'lucide-react';

const useCases = [
  { icon: ShoppingBag, title: "متاجر إلكترونية" },
  { icon: Stethoscope, title: "عيادات" },
  { icon: Utensils, title: "مطاعم" },
  { icon: Building2, title: "شركات خدمات" },
  { icon: Home, title: "عقارات" },
  { icon: Scissors, title: "صالونات" },
  { icon: Car, title: "معارض سيارات" },
  { icon: Hotel, title: "فنادق" },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-nukhba-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-4"
          >
            مناسب لكل أنواع <span className="text-nukhba-gold">البزنس في الخليج</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-nukhba-black rounded-xl border border-nukhba-gold/5 hover:border-nukhba-gold/30 hover:bg-nukhba-black/80 transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-nukhba-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-6 h-6 text-nukhba-gold" />
              </div>
              <h3 className="text-lg font-medium text-nukhba-white">{useCase.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
