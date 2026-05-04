import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, align = 'left', light = false }: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12 space-y-4 max-w-2xl",
      align === 'center' && "mx-auto text-center"
    )}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <div className={cn("w-12 h-[2px]", light ? "bg-white/40" : "bg-primary/20")} />
        <span className={cn(
          "text-[10px] uppercase font-bold tracking-[0.4em]",
          light ? "text-white/60" : "text-primary/60"
        )}>
          Management & Advisory
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-white/70" : "text-on-surface-variant"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
