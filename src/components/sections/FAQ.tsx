"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "هل البوت يفهم اللهجة الخليجية؟",
    answer: "نعم، البوت مدرب خصيصًا لفهم اللهجات الخليجية المختلفة والرد بها بشكل طبيعي.",
  },
  {
    question: "هل يحتاج اشتراك WhatsApp API؟",
    answer: "نعم، لربط البوت بواتساب نحتاج لاستخدام WhatsApp Business API، ونحن نساعدك في عملية الربط بالكامل.",
  },
  {
    question: "هل في عقد إلزامي؟",
    answer: "لا، يمكنك إلغاء الاشتراك في أي وقت. نحن نؤمن بجودة خدمتنا ولا نحتاج لإلزامك بعقود طويلة.",
  },
  {
    question: "هل البوت يتعلم من العملاء؟",
    answer: "نعم، البوت يستخدم تقنيات التعلم الآلي لتحسين ردوده مع الوقت بناءً على تفاعلات العملاء.",
  },
  {
    question: "هل أقدر أضيف ردود خاصة؟",
    answer: "بالتأكيد، يمكنك تخصيص الردود وإضافة معلومات خاصة بعملك من خلال لوحة التحكم.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-nukhba-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-4"
          >
            الأسئلة <span className="text-nukhba-gold">الشائعة</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-nukhba-gold/10 rounded-xl overflow-hidden bg-nukhba-black/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right hover:bg-nukhba-gold/5 transition-colors"
              >
                <span className="text-lg font-medium text-nukhba-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-nukhba-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-nukhba-gold flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-nukhba-gold/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
