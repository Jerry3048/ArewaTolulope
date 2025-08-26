import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolio';

function About () {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

 

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div  className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-primary dark:text-secondary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div className="flex justify-center lg:justify-start">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPinIcon className="h-5 w-5 text-primary dark:text-secondary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 text-primary dark:text-secondary" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <PhoneIcon className="h-5 w-5 text-primary dark:text-secondary" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary dark:text-secondary">1+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary dark:text-secondary">10+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary dark:text-secondary">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>

              {/* Download Resume Button */}
             <div className='flex justify-center items-center'>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center "
                >
                  <DocumentArrowDownIcon className="h-5 w-5 " />
                  Download Resume
                  <motion.div
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </motion.button>
             </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;