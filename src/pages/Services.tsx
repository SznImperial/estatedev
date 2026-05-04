import React from 'react';
import { motion } from 'motion/react';
import { Scale, Building2, Key, Check, ArrowRight, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const Services = () => {
  const competencies = [
    {
      title: "Asset Valuation",
      icon: Landmark,
      description: "Rigorous appraisal of industrial, commercial, and residential properties. Our reports are built on precise market data and comply with global valuation standards.",
      items: ["Industrial Complexes", "Commercial Portfolios", "Premium Residential"],
      link: "/contact",
      linkText: "Explore Valuation"
    },
    {
      title: "Agency Services",
      icon: Landmark, // Replace with Handshake icon if available or another suitable placeholder
      description: "Strategic brokerage for sales and acquisitions. We leverage extensive market networks to secure optimal transaction values for high-end real estate assets.",
      items: ["Property Sales", "Strategic Acquisitions", "Lease Administration"],
      link: "/listings",
      linkText: "Explore Agency"
    },
    {
      title: "Property Management",
      icon: Building2,
      description: "Comprehensive management frameworks designed to preserve asset value, optimize operational efficiency, and ensure stable tenant relations.",
      items: ["Facility Management", "Tenant Relations", "Value Preservation"],
      link: "/contact",
      linkText: "Explore Management"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 bg-[#FBFBFB]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        
        {/* Hero Section Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col lg:flex-row mb-32"
        >
          <div className="p-12 lg:p-20 lg:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-on-surface-variant mb-6 inline-block">
              Professional Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-primary mb-8">
              Expert Valuation & <br /> Advisory Services.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              We deliver authoritative asset valuation, strategic agency services, and comprehensive property management tailored for institutional and private clients.
            </p>
            <div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary-container transition-all group"
              >
                Request Valuation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional Building" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </motion.div>

        {/* Competencies Section */}
        <div>
          <div className="mb-20">
            <SectionHeader title="Core Competencies" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((comp, idx) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-2xl border border-outline-variant/30 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-xl text-primary mb-8">
                  <comp.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary mb-6">
                  {comp.title}
                </h3>
                
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  {comp.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-primary">
                      <Check size={16} className="text-on-surface-variant" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={comp.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity group"
                >
                  {comp.linkText}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
