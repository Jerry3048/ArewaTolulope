import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App () {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add Inter font
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
    
    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(link3);

    // Set page title
    document.title = 'Arewa Tolulope - Frontend Developer';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        style={{ display: 'none' }}
        onScroll={() => {
          const button = document.querySelector('.scroll-to-top') as HTMLElement;
          if (window.scrollY > 300) {
            button.style.display = 'block';
          } else {
            button.style.display = 'none';
          }
        }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default App;