import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Scale, Building2, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, SERVICES } from '../constants';

const Home = () => {
  const featuredProperties = PROPERTIES.filter(p => p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-primary text-white pt-20">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90" />
        </div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-[2px] bg-white/40" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/70">
                Established 1998
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-6 md:mb-10"
            >
              estatedev
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 md:mb-16"
            >
              Defining excellence in property valuation, surveying, and asset management across Nigeria's dynamic real estate landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6 mb-24 lg:mb-32"
            >
              <Link
                to="/listings"
                className="group flex items-center gap-4 bg-white text-primary px-8 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:bg-white/90"
              >
                Explore Listings
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-4 border border-white/30 text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-primary"
              >
                Our Experience
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block">
          <div className="max-w-screen-2xl mx-auto px-12 pb-12">
            <div className="grid grid-cols-4 gap-1 border-t border-white/10 pt-12">
              {[
                { label: "Assets Valued", value: "₦2.4T+" },
                { label: "Years Experience", value: "25+" },
                { label: "Active Listings", value: "180+" },
                { label: "Qualified Professionals", value: "45+" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[9px] uppercase font-bold tracking-[0.25em] text-white/50">{stat.label}</p>
                  <p className="text-3xl xl:text-4xl font-black tracking-tighter leading-none">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeader 
              title="Integrated Core Competencies"
              subtitle="From statutory valuations to complex asset brokerage, we provide end-to-end professional support."
            />
            <div className="lg:mb-12">
              <Link to="/about" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
                Full Service Catalog <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-surface rounded-3xl border border-outline-variant/30 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   {service.icon === 'Scale' && <Scale size={32} />}
                   {service.icon === 'Building2' && <Building2 size={32} />}
                   {service.icon === 'Key' && <Key size={32} />}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="h-[1px] w-full bg-outline-variant/30 mb-8" />
                <ul className="space-y-4">
                  {["Expert Consultation", "Statutory Compliance", "Performance Audits"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mandates */}
      <section className="py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <SectionHeader 
            title="Premium Listings" 
            subtitle="Curated selection of high-value commercial and residential assets currently under our management."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/listings"
              className="inline-flex items-center gap-4 border border-primary/20 text-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5"
            >
              Browse All Listings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[30deg] translate-x-1/2" />
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <SectionHeader 
            title="Integrity In Every Valuation" 
            subtitle="Our reports are recognized by major financial institutions and government agencies nationwide."
            align="center"
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <ShieldCheck size={48} className="mx-auto mb-6 text-white/60" />
              <h4 className="text-xl font-bold uppercase tracking-tight mb-3">FRC Compliant</h4>
              <p className="text-white/60 text-sm leading-relaxed">Adhering to the Financial Reporting Council of Nigeria guidelines and international valuation standards.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <TrendingUp size={48} className="mx-auto mb-6 text-white/60" />
              <h4 className="text-xl font-bold uppercase tracking-tight mb-3">Market Insight</h4>
              <p className="text-white/60 text-sm leading-relaxed">Deep data-driven analysis of regional price trends for over two decades across 36 states.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <Users size={48} className="mx-auto mb-6 text-white/60" />
              <h4 className="text-xl font-bold uppercase tracking-tight mb-3">Expert Team</h4>
              <p className="text-white/60 text-sm leading-relaxed">Fully registered members of the NIESV and ESVARBON governing bodies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instruction CTA */}
      <section className="py-32 px-6 lg:px-12 bg-surface">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 text-white">
            <SectionHeader 
              title="Speak with a Partner" 
              subtitle="Identify a premium listing or request a valuation brief from our expert team."
              light
            />
            <div className="space-y-6 mt-12">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                   <Key size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Secure Access</p>
                  <p className="text-sm font-semibold">Strict Confidentiality Assured</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12 md:w-1/2 bg-white">
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Full Name</label>
                <input type="text" className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" placeholder="Olatunji Bello" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" placeholder="o.bello@example.com" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Service Required</label>
                <select className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium appearance-none">
                  <option>Asset Valuation</option>
                  <option>Estate Agency</option>
                  <option>Property Management</option>
                </select>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/10">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
