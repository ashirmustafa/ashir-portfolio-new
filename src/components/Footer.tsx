import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourusername' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/yourusername' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cyber-black border-t border-cyber-red py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-orbitron font-bold mb-4">ashir.</h3>
            <p className="font-rajdhani text-cyber-white/80 mb-6 leading-relaxed">
              Full Stack Developer passionate about building impactful digital experiences. 
              Always learning, always coding.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-cyber-red" />
              <span className="font-rajdhani text-cyber-white/70">Faisalabad, Pakistan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyber-red" />
              <span className="font-rajdhani text-cyber-white/70">muhammadashirone@gmail.com</span>
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
            <h4 className="text-xl font-orbitron font-bold text-cyber-white mb-6">CONNECT</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 cyber-border flex items-center justify-center hover-glow group"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-cyber-white group-hover:text-cyber-red transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-orbitron font-bold text-cyber-white mb-2">LET'S CONNECT</h5>
              <p className="font-rajdhani text-cyber-white/70 text-sm">
                Open to collaborations and new opportunities!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyber-red/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-rajdhani text-cyber-white/60 text-sm mb-4 md:mb-0">
            © 2025 Ashir. All rights reserved. Designed & built by Ashir.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#contact" className="font-rajdhani text-cyber-white/60 hover:text-cyber-red transition-colors duration-300 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
