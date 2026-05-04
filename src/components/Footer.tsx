import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="block scale-110 origin-left">
              <Logo light />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-xs font-medium">
              estatedev<br />
              (BAAC - Estate Surveyors & Valuers)
            </p>
            <p className="text-white/40 leading-relaxed text-xs max-w-xs">
              Foremost authority in professional real estate valuation and surveying services in Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/40">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-white/60 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white/60 transition-colors">Our Story</Link></li>
              <li><Link to="/listings" className="text-sm hover:text-white/60 transition-colors">Premium Listings</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white/60 transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/40">Professional Services</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm hover:text-white/60 transition-colors">Plant & Machinery Valuation</Link></li>
              <li><Link to="#" className="text-sm hover:text-white/60 transition-colors">Land Titling Advisory</Link></li>
              <li><Link to="#" className="text-sm hover:text-white/60 transition-colors">Feasibility Studies</Link></li>
              <li><Link to="#" className="text-sm hover:text-white/60 transition-colors">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-white/40">Head Office</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <MapPin size={18} className="text-white/60 shrink-0" />
                <span className="text-sm text-on-primary">123 estatedev Tower, Tech District, Victoria Island, Lagos</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-white/60 shrink-0" />
                <span className="text-sm text-on-primary">+234 (1) 456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-white/60 shrink-0" />
                <span className="text-sm text-on-primary">info@estatedev.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-[10px] uppercase tracking-[3px] text-white/40">
            © 2024 estatedev All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-[10px] uppercase tracking-[3px] text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-[10px] uppercase tracking-[3px] text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
