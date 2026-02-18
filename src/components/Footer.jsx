import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBus, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-bg-section text-white pt-20 pb-10 border-t border-borderColorCustom">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaBus className="text-primary" />
              <span>Voyage</span>
            </div>
            <p className="text-textColorCustom-paragraph text-sm leading-relaxed">
              Making bus travel easier, safer, and more accessible for everyone. Book your next journey with us today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center hover:bg-primary transition-all duration-300 text-textColorCustom-muted hover:text-white"><FaFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center hover:bg-primary transition-all duration-300 text-textColorCustom-muted hover:text-white"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center hover:bg-primary transition-all duration-300 text-textColorCustom-muted hover:text-white"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center hover:bg-primary transition-all duration-300 text-textColorCustom-muted hover:text-white"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-textColorCustom-paragraph text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-4 text-textColorCustom-paragraph text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-textColorCustom-paragraph text-sm mb-4">Subscribe to get the latest updates and offers.</p>
            <form className="flex flex-col gap-3">
                <input type="email" placeholder="Your email address" className="bg-bg-card border border-borderColorCustom rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors" />
                <button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-lg text-sm font-bold transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-borderColorCustom pt-8 text-center text-textColorCustom-muted text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Voyage Bus Booking. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <FaHeart className="text-red-500" /> by Voyage Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
