import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { personalInfo, navigationLinks, socialLinks } from '../data/portfolio';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      github: '🐙',
      linkedin: '💼',
      twitter: '🐦',
      facebook: '📘'
    };
    return icons[iconName] || '🔗';
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-secondary"
            >
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {personalInfo.title} passionate about creating beautiful, functional web experiences.
              Always learning, always building.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HeartIcon className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>by {personalInfo.name}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-secondary text-sm text-left transition-colors duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-gray-400 hover:text-secondary text-sm transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-gray-400 hover:text-secondary text-sm transition-colors duration-300"
              >
                {personalInfo.phone}
              </a>
              <p className="text-gray-400 text-sm">
                {personalInfo.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-secondary transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{getSocialIcon(social.icon)}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
              <motion.button
                whileHover={{ color: '#CBEA7B' }}
                onClick={() => scrollToSection('#home')}
                className="hover:text-secondary transition-colors duration-300"
              >
                Back to top ↑
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;