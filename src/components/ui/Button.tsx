import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nukhba-gold disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          {
            'bg-nukhba-gold text-nukhba-black hover:bg-[#C5A028]': variant === 'primary',
            'bg-nukhba-charcoal text-nukhba-white hover:bg-gray-800': variant === 'secondary',
            'border border-nukhba-gold text-nukhba-gold hover:bg-nukhba-gold/10': variant === 'outline',
            'text-nukhba-white hover:bg-white/10': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
