"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Send } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-nukhba-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 pattern-grid-lg opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-right">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-nukhba-black mb-6"
            >
              جاهز تبدأ؟ <br />
              خلّي البوت يشتغل بدل فريق خدمة العملاء
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-nukhba-black/80 text-lg mb-8"
            >
              سجل بياناتك الآن وسنتواصل معك لتقديم استشارة مجانية وتجربة حية للبوت الخاص بعملك.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-nukhba-black text-nukhba-gold hover:bg-nukhba-charcoal gap-2">
                احجز مكالمة مجانية
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-nukhba-black p-8 rounded-2xl shadow-2xl border border-nukhba-charcoal"
          >
            <h3 className="text-2xl font-bold text-nukhba-white mb-6">تواصل معنا</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">الاسم</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-nukhba-charcoal border border-nukhba-charcoal rounded-lg px-4 py-3 text-nukhba-white focus:outline-none focus:border-nukhba-gold transition-colors"
                  placeholder="اسمك الكريم"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-nukhba-charcoal border border-nukhba-charcoal rounded-lg px-4 py-3 text-nukhba-white focus:outline-none focus:border-nukhba-gold transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">الرسالة</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-nukhba-charcoal border border-nukhba-charcoal rounded-lg px-4 py-3 text-nukhba-white focus:outline-none focus:border-nukhba-gold transition-colors resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                />
              </div>
              <Button className="w-full gap-2" size="lg">
                إرسال
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
