import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

export function Card({ title, description, label = 'ONE PART', className, onClick }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gray-50 p-8 rounded-2xl ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
    >
      <span className="text-xs font-semibold text-gray-600 mb-4 block">
        {label}
      </span>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <motion.button
        whileHover={{ x: 5 }}
        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}