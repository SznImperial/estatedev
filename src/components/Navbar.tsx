import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLightStyle = location.pathname !== '/' || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Listings', path: '/listings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isLightStyle ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Logo light={!isLightStyle} className="scale-90 md:scale-100 origin-left" />
          <div className="ml-4 pl-4 border-l border-white/20 hidden xl:block">
            <span className={cn(
              "font-black text-sm tracking-tighter uppercase whitespace-nowrap",
              isLightStyle ? "text-primary/80" : "text-white/80"
            )}>
              estatedev
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors relative group",
                isLightStyle 
                  ? "text-on-surface-variant hover:text-primary" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300",
                isLightStyle ? "bg-primary" : "bg-white",
                location.pathname === link.path && "w-full",
                "group-hover:w-full"
              )} />
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
              isLightStyle
                ? "bg-primary text-white hover:bg-primary-container"
                : "bg-white text-primary hover:bg-white/90 shadow-xl"
            )}
          >
            Request Valuation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-full",
            isLightStyle ? "text-primary" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-white z-40 md:hidden flex flex-col p-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-primary tracking-tighter uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-primary text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest"
            >
              Request Valuation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
