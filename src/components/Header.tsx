import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';
import { navigationLinks, personalInfo } from '../data/portfolio';

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = navigationLinks
        .map((link) => link.href.replace('#', ''))
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');
  const focus =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur border-b border-gray-200 dark:border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => goTo('#home')} className={`flex items-center gap-3 rounded-lg ${focus}`}>
            <span className="w-9 h-9 rounded-lg bg-primary-dark text-white flex items-center justify-center text-sm font-semibold">
              {initials}
            </span>
            <span className="hidden sm:block font-semibold text-gray-900 dark:text-white text-sm">
              {personalInfo.name}
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navigationLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => goTo(link.href)}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${focus} ${
                    active
                      ? 'text-primary dark:text-primary-light bg-primary/10'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors ${focus}`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => goTo('#contact')}
              className={`hidden md:inline-flex px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors ${focus}`}
            >
              Contact me
            </button>
            <button
              className={`md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 ${focus}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-1" aria-label="Mobile">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => goTo(link.href)}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary dark:text-primary-light bg-primary/10'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => goTo('#contact')}
              className="w-full mt-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
            >
              Contact me
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;