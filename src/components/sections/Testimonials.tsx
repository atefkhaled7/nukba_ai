"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "وفر علينا 70% من وقت خدمة العملاء.",
    author: "أحمد محمد",
    role: "صاحب مطعم",
    rating: 5,
  },
  {
    quote: "الردود أسرع، والمبيعات زادت.",
    author: "سارة العلي",
    role: "صاحبة عيادة تجميل",
    rating: 5,
  },
  {
    quote: "أول مرة نلاقي بوت يفهم عربي خليجي.",
    author: "خالد الدوسري",
    role: "مدير شركة عقارات",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-nukhba-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-4"
          >
            آراء عملائنا في <span className="text-nukhba-gold">الخليج</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-nukhba-charcoal p-8 rounded-xl border border-nukhba-charcoal relative group hover:border-nukhba-gold/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-nukhba-gold/20 group-hover:text-nukhba-gold/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-nukhba-gold fill-current" />
                ))}
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-nukhba-gold/10 pt-6">
                <p className="font-bold text-nukhba-white">{testimonial.author}</p>
                <p className="text-sm text-nukhba-gold">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
