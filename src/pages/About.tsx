import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, BarChart3, Landmark, Building2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Top Section: Hero-like */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary mb-8">
              Expert Valuation & <br /> Strategic Advisory.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              estatedev is a premier institutional estate surveying and valuation firm, delivering uncompromising accuracy across Nigeria.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Authoritative Architecture" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div className="mb-32">
          <SectionHeader title="Our Story" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main story box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-[#F8F9FA] p-12 md:p-16 rounded-[2rem] border border-outline-variant/30 flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-primary mb-8">
                A Legacy of Trust in Nigerian Real Estate
              </h3>
              <div className="space-y-6 text-on-surface-variant leading-relaxed font-medium">
                <p>
                  Founded over two decades ago, estatedev emerged from a recognized need for rigorous, globally compliant property valuation services within the rapidly expanding Nigerian market. We began as a specialized consultancy focused on commercial asset appraisal in Lagos.
                </p>
                <p>
                  Today, our footprint spans major economic hubs across West Africa. We have certified billions of Naira in asset value, serving multinational corporations, financial institutions, and government agencies, always anchored by our commitment to precision and the strict ethical codes of the Nigerian Institution of Estate Surveyors and Valuers (NIESV).
                </p>
              </div>
            </motion.div>

            {/* Right side stats and image */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary p-10 rounded-[2rem] text-white flex flex-col justify-center gap-4"
              >
                <Building2 size={40} className="opacity-60" />
                <div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">₦500B+</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Assets Valued</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-grow rounded-[2rem] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600880212340-02d956ea3a58?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white rounded-3xl border-l-[6px] border-primary shadow-sm space-y-6"
          >
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Mission</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              To provide institutional-grade real estate valuation and advisory services that empower our clients to make decisive, data-backed financial decisions with absolute confidence in the integrity of our methodologies.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-12 bg-white rounded-3xl border-l-[6px] border-primary shadow-sm space-y-6"
          >
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Vision</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium">
              To be the undisputed standard-bearer for real estate economics and property valuation across Sub-Saharan Africa, recognized globally for uncompromising ethical standards and analytical rigor.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader title="Core Values" />
            <p className="max-w-md text-sm font-bold uppercase tracking-widest text-on-surface-variant leading-relaxed md:mb-12">
              The foundational principles that govern our practice and define our professional conduct in every valuation mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unwavering Integrity",
                desc: "Absolute adherence to ethical standards and NIESV guidelines. We deliver objective, unvarnished truths in every appraisal, free from external influence.",
                icon: Shield
              },
              {
                title: "Analytical Precision",
                desc: "Meticulous data gathering and rigorous financial modeling form the backbone of our methodology. We leave no variable unexamined in determining true asset value.",
                icon: BarChart3
              },
              {
                title: "Institutional Authority",
                desc: "We operate with the stability and knowledge base of a premium consultancy firm. Our reports are recognized documents of record by financial and legal bodies.",
                icon: Landmark
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-[#FBFBFB] rounded-3xl border border-outline-variant/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white border border-outline-variant/30 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">{value.title}</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
