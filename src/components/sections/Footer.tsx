import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nukhba-black border-t border-nukhba-charcoal pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-nukhba-gold mb-4 block">
              Nukhba AI
            </Link>
            <p className="text-gray-400 max-w-sm">
              شات بوت ذكي يرد على عملائك 24/7. حل جاهز للشركات في الخليج لزيادة المبيعات وتحسين خدمة العملاء.
            </p>
          </div>

          <div>
            <h3 className="text-nukhba-white font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-nukhba-gold transition-colors">المميزات</Link></li>
              <li><Link href="#use-cases" className="text-gray-400 hover:text-nukhba-gold transition-colors">الاستخدامات</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-nukhba-gold transition-colors">الأسعار</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-nukhba-gold transition-colors">آراء العملاء</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-nukhba-white font-bold mb-4">تواصل معنا</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-nukhba-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nukhba-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nukhba-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nukhba-gold transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
            <a href="mailto:info@nukhba.ai" className="text-gray-400 hover:text-nukhba-gold transition-colors block">info@nukhba.ai</a>
          </div>
        </div>

        <div className="border-t border-nukhba-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nukhba AI. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-nukhba-gold text-sm transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="text-gray-500 hover:text-nukhba-gold text-sm transition-colors">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
