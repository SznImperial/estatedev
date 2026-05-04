import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Landmark } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-[#F9F9FA]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="For professional valuation inquiries, property appraisals, or corporate real estate consulting, please contact our Lagos headquarters. Our team of certified surveyors is ready to assist you."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant/30">
              <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-8 pb-4 border-b border-outline-variant/30">
                Head Office
              </h3>
              
              <ul className="space-y-10">
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-2">Address</h4>
                    <p className="text-sm font-semibold leading-relaxed text-primary">
                      123 estatedev Tower,<br />
                      Tech District,<br />
                      Victoria Island, Lagos
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-2">Phone</h4>
                    <p className="text-sm font-semibold text-primary">+234 (0) 1 234 5678</p>
                    <p className="text-sm font-semibold text-primary">+234 (0) 800 ESTATE VAL</p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-2">Email</h4>
                    <p className="text-sm font-semibold text-primary">inquiries@estatedev.com</p>
                    <p className="text-sm font-semibold text-primary">valuations@estatedev.com</p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant mb-2">Business Hours</h4>
                    <p className="text-sm font-semibold text-primary">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm font-semibold text-primary">Saturday - Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant/30">
              <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-8 pb-4 border-b border-outline-variant/30">
                Send an Inquiry
              </h3>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Corporate Email</label>
                    <input 
                      type="email" 
                      placeholder="john.doe@company.com"
                      className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+234..."
                      className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Inquiry Type</label>
                  <select 
                    className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium appearance-none"
                  >
                    <option>Commercial Valuation</option>
                    <option>Residential Appraisal</option>
                    <option>Asset Management Consultation</option>
                    <option>Land Surveying Brief</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Message Details</label>
                  <textarea 
                    rows={6}
                    placeholder="Please provide specific details regarding your valuation needs..."
                    className="w-full px-6 py-4 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary transition-colors font-medium resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/10 group">
                    Submit Request
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative h-[500px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Office Location Map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-75"></div>
              <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                <Landmark size={24} className="text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
