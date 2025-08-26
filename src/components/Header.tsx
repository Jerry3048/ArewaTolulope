import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';
import { navigationLinks, personalInfo } from '../data/portfolio';

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((link) => link.href.replace('#', ''));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Fixed scrollToSection for mobile
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    setIsMobileMenuOpen(false);

    // Wait for menu animation to finish before scrolling
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // adjust to match motion.div animation duration
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary dark:text-secondary"
        >
          {personalInfo.name.split(' ').map((name) => name[0]).join('')}
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary dark:text-secondary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-secondary"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <nav className="py-4 space-y-2 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md rounded-2xl mt-2">
          {navigationLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary dark:text-secondary bg-gray-100 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}

export default Header;