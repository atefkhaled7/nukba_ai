"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "499",
    description: "مناسبة للمشاريع الصغيرة",
    features: [
      "بوت يرد على الأسئلة المتكررة",
      "لغة واحدة (عربي أو إنجليزي)",
      "بدون Memory",
      "1000 رسالة شهريًا",
      "دعم عبر البريد",
    ],
    cta: "ابدأ الآن",
    popular: false,
  },
  {
    name: "Standard",
    price: "999",
    description: "الأكثر مبيعًا",
    features: [
      "عربي + إنجليزي",
      "Memory أساسية (اسم + رقم + آخر طلب)",
      "3000 رسالة شهريًا",
      "تخصيص الردود حسب البزنس",
      "لوحة تحكم بسيطة",
      "دعم واتساب",
    ],
    cta: "اشترك الآن",
    popular: true,
  },
  {
    name: "Premium",
    price: "1999",
    description: "للشركات والمتاجر الكبيرة",
    features: [
      "Memory كاملة (تاريخ العميل – الطلبات – التفضيلات)",
      "Automations متقدمة",
      "Integrations (CRM – Google Sheets – API)",
      "عدد رسائل غير محدود",
      "تدريب مخصص للبوت",
      "دعم VIP 24/7",
      "تحديثات شهرية",
    ],
    cta: "احجز مكالمة",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-nukhba-charcoal relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-4"
          >
            خطط <span className="text-nukhba-gold">الأسعار</span>
          </motion.h2>
          <p className="text-gray-400">اختر الباقة المناسبة لاحتياجاتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'bg-nukhba-black border-nukhba-gold shadow-2xl shadow-nukhba-gold/10 scale-105 z-10' 
                  : 'bg-nukhba-black/50 border-nukhba-charcoal hover:border-nukhba-gold/30'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nukhba-gold text-nukhba-black px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر مبيعًا
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-nukhba-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-nukhba-gold">{plan.price}</span>
                  <span className="text-gray-400">ريال / شهر</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-nukhba-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
