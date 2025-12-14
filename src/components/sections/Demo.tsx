"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

export function Demo() {
  return (
    <section className="py-20 bg-nukhba-black relative overflow-hidden">
      <div className="absolute inset-0 bg-nukhba-gold/5 skew-y-3 transform origin-top-left scale-110 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-nukhba-white mb-6"
          >
            شوف البوت وهو <span className="text-nukhba-gold">يشتغل</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-nukhba-charcoal rounded-2xl overflow-hidden shadow-2xl border border-nukhba-charcoal"
        >
          <div className="aspect-video bg-black/50 flex items-center justify-center relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">تجربة حية للمحادثة مع Nukhba AI</p>
            </div>
            
            <div className="w-20 h-20 bg-nukhba-gold/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg shadow-nukhba-gold/20">
              <Play className="w-8 h-8 text-nukhba-black fill-current" />
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg" className="min-w-[200px]">
            شاهد الديمو الآن
          </Button>
        </div>
      </div>
    </section>
  );
}
