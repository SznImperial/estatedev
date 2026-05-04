import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { cn } from '../lib/utils';

const Listings = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [search, setSearch] = useState('');

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesType = filter === 'All' || p.type === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                         p.location.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <SectionHeader 
            title="Premium Listings" 
            subtitle="Explore our curated portfolio of institutional-grade real estate across Nigeria's prime locations."
          />
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex overflow-x-auto pb-4 md:pb-0 w-full md:w-auto snap-hide-scrollbar gap-2">
            {(['All', 'Residential', 'Commercial'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                  filter === type 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
                    : "bg-white text-primary border border-outline-variant/30 hover:border-primary/50"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96 group">
            <input 
              type="text" 
              placeholder="Search Location or Asset Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-outline-variant/30 rounded-2xl focus:outline-none focus:border-primary focus:shadow-2xl focus:shadow-primary/5 transition-all font-medium"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/30">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            Showing <span className="text-primary">{filteredProperties.length}</span> Results
          </p>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors group">
            <SlidersHorizontal size={16} />
            Sort by Default
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <div className="w-20 h-20 bg-surface flex items-center justify-center rounded-full mx-auto mb-6 text-on-surface-variant">
                <Filter size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">No Matching Listings</h3>
              <p className="text-on-surface-variant mt-2">Adjust your filters or search terms to find available assets.</p>
              <button 
                onClick={() => {setFilter('All'); setSearch('')}}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
