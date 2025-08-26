import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolio';

function  Hero () {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHireMe = () => {
    scrollToSection('contact');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-secondary/10 dark:from-dark-bg dark:via-gray-900 dark:to-primary/10 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full  border-4 border-white dark:border-gray-700 shadow-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/30 dark:border-secondary/30"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {personalInfo.name}
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-12">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Christ Ambassador',
                  2000,
                   'Freelancer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I create beautiful, responsive web applications with modern technologies.
            Let's build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Hire Me
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;