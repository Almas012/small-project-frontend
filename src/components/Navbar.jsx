import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBus, FaPhoneAlt, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Offers', href: '#offers' },
    { name: 'Bus Tickets', href: '#booking' },
    { name: 'Datarooms', href: '#datarooms' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-2 text-2xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
          <FaBus className="text-3xl" />
          <span>Voyage</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-medium transition-colors hover:text-primary ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className={`flex items-center gap-2 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${scrolled ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white'}`}>
                <FaPhoneAlt size={14} />
            </div>
            <div className="flex flex-col leading-tight">
                <span className={`text-xs font-medium ${scrolled ? 'text-slate-400' : 'text-white/70'}`}>Call to Book</span>
                <span className={`font-bold ${scrolled ? 'text-slate-800' : 'text-white'}`}>1800-VOYAGE</span>
            </div>
          </div>
          <Link to="/signin" className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 font-medium">
            <FaUser /> Sign In
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden text-2xl ${scrolled ? 'text-slate-700' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-700 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-2 text-slate-600 py-2">
                <FaPhoneAlt className="text-primary" /> <span>1800-VOYAGE</span>
              </div>
              <Link to="/signin" className="w-full bg-primary text-white py-3 rounded-lg font-medium text-center block" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
