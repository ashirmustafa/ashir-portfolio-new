
import React from 'react';
import { Instagram, Twitter, Youtube, Twitch, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Twitch, label: 'Twitch', href: '#' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#home' },
    { label: 'Our Team', href: '#team' },
    { label: 'Partners', href: '#partners' },
    { label: 'Latest News', href: '#news' },
  ];

  return (
    <footer className="bg-cyber-black border-t border-cyber-red py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-orbitron font-bold neon-text mb-4">OMENTEX</h3>
            <p className="font-rajdhani text-cyber-white/80 mb-6 leading-relaxed">
              Elite esports team dominating the competitive gaming scene. 
              We are the future of digital sports, setting new standards in professional gaming.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-cyber-red" />
              <span className="font-rajdhani text-cyber-white/70">Los Angeles, California</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyber-red" />
              <span className="font-rajdhani text-cyber-white/70">contact@omentex.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-cyber-white mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-rajdhani text-cyber-white/70 hover:text-cyber-red transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-orbitron font-bold text-cyber-white mb-6">FOLLOW US</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 cyber-border flex items-center justify-center hover-glow group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cyber-white group-hover:text-cyber-red transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-orbitron font-bold text-cyber-white mb-2">LIVE STREAMS</h5>
              <p className="font-rajdhani text-cyber-white/70 text-sm">
                Watch us dominate live on Twitch
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyber-red/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-rajdhani text-cyber-white/60 text-sm mb-4 md:mb-0">
            © 2024 OMENTEX. All rights reserved. Built for champions.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
