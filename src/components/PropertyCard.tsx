import React from 'react';
import { motion } from 'motion/react';
import { MapPin, BedDouble, Bath, Square, ChevronRight } from 'lucide-react';
import { Property } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, compact = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/30"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
            property.status === 'For Sale' ? "bg-primary text-white" : "bg-white text-primary"
          )}>
            {property.status}
          </span>
          {property.featured && (
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Exclusive
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 text-on-surface-variant mb-2">
          <MapPin size={14} />
          <span className="text-xs font-medium">{property.location}</span>
        </div>
        
        <h3 className="text-lg font-black tracking-tight text-primary uppercase mb-1 leading-tight group-hover:text-primary-container transition-colors">
          {property.title}
        </h3>
        
        <p className="text-primary font-bold text-xl mb-4 tracking-tighter">
          {property.price}
        </p>
        
        <div className="flex items-center gap-4 py-4 border-y border-outline-variant/30 mb-6">
          {property.bedrooms && (
            <div className="flex items-center gap-1.5 grayscale opacity-70">
              <BedDouble size={16} />
              <span className="text-xs font-bold">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1.5 grayscale opacity-70">
              <Bath size={16} />
              <span className="text-xs font-bold">{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 grayscale opacity-70">
            <Square size={16} />
            <span className="text-xs font-bold">{property.area}</span>
          </div>
        </div>
        
        <Link 
          to="/listings"
          className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary group/btn transition-colors"
        >
          View Full Details
          <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
