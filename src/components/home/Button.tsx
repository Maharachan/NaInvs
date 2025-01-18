import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', className, size = 'md', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'rounded-lg font-medium transition-colors text-sm',
        size === 'sm' && 'px-4 py-2',
        size === 'lg' && 'px-8 py-4',
        variant === 'primary' && 'bg-[#0A74DA] text-white hover:bg-[#0A74DA]/90',
        variant === 'secondary' && 'bg-white text-[#0A74DA] hover:bg-gray-50',
        variant === 'outline' && 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}