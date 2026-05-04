import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, light = false }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex items-end">
        {/* Simplified geometry representing the buildings in the image */}
        <div className={cn(
          "w-6 h-8 border-2 rounded-t-sm",
          light ? "border-white/90 bg-white/10" : "border-primary bg-primary/5"
        )} />
        <div className={cn(
          "w-6 h-6 border-2 -ml-1 rounded-t-sm relative z-10",
          light ? "border-white bg-white/20" : "border-primary bg-primary/10"
        )} />
        <div className={cn(
          "w-4 h-4 border-2 -ml-1 rounded-t-sm opacity-60",
          light ? "border-white/60" : "border-primary/60"
        )} />
      </div>
      
      <div className="flex flex-col -space-y-1">
        <span className={cn(
          "font-black text-2xl tracking-tighter uppercase leading-none",
          light ? "text-white" : "text-primary"
        )}>
          ESTATEDEV
        </span>
        <span className={cn(
          "text-[7px] uppercase font-bold tracking-[0.3em] opacity-60",
          light ? "text-white" : "text-primary"
        )}>
          Estate Surveyors
        </span>
      </div>
    </div>
  );
};

export default Logo;
