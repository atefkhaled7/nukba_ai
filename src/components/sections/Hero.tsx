"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-nukhba-gold/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-nukhba-gold/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-nukhba-white mb-6 leading-tight"
          >
            شات بوت ذكي يرد على عملائك <span className="text-nukhba-gold">24/7</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-300 mt-4 block">
              بالعربي والإنجليزي
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            روبوتاتنا الذكية تضمن لك توفير 70% من تكاليف خدمة العملاء، مع تقديم تجربة محادثة تحاكي أفضل موظف مبيعات لديك، على مدار الساعة.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2">
              احجز مكالمة مجانية
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Play className="w-5 h-5" />
              شاهد الديمو
            </Button>
          </motion.div>
        </div>

        {/* Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-nukhba-charcoal bg-nukhba-black/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-nukhba-gold/5 to-transparent pointer-events-none" />
            
            {/* Mockup Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-nukhba-charcoal bg-nukhba-charcoal/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-gray-400 font-mono">Nukhba AI Dashboard</div>
              <div className="w-16" />
            </div>

            {/* Mockup Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 h-[400px] md:h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:block border-l border-nukhba-charcoal p-4 space-y-4">
                <div className="h-8 w-3/4 bg-nukhba-charcoal rounded animate-pulse" />
                <div className="h-8 w-1/2 bg-nukhba-charcoal rounded animate-pulse" />
                <div className="h-8 w-2/3 bg-nukhba-charcoal rounded animate-pulse" />
              </div>

              {/* Chat Area */}
              <div className="col-span-2 p-6 flex flex-col justify-end space-y-4">
                {/* Messages */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0" />
                  <div className="bg-nukhba-charcoal rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm text-gray-300">مرحباً، كيف يمكنني مساعدتك اليوم؟</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-nukhba-gold flex-shrink-0" />
                  <div className="bg-nukhba-gold/10 border border-nukhba-gold/20 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm text-nukhba-white">أريد حجز موعد للاستشارة.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0" />
                  <div className="bg-nukhba-charcoal rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm text-gray-300">بالتأكيد! ما هو الوقت المناسب لك؟</p>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 pt-4 border-t border-nukhba-charcoal flex gap-3">
                  <div className="h-10 flex-1 bg-nukhba-charcoal rounded-lg" />
                  <div className="h-10 w-10 bg-nukhba-gold rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
