import React from "react";
import { motion, Variants } from "framer-motion";
import { skills } from "../data/portfolio";


interface skill{
  name:string;
  icon:string;
  level:number;

}
// Variants (cleaned & centralized)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// 🔹 Reusable Skill Card Component
const SkillCard = ({ skill, index }: { skill: skill; index: number }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      scale: 1.05,
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    }}
    className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
               hover:shadow-2xl transition-all duration-300 border border-gray-200 
               dark:border-gray-700 overflow-hidden"
  >
    {/* Hover Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Content */}
    <div className="relative z-10 text-center">
     <div className="text-4xl mb-4 group-hover:animate-bounce flex justify-center">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-12 h-12 object-contain" 
      />
</div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 
                     group-hover:text-primary dark:group-hover:text-secondary 
                     transition-colors duration-300">
        {skill.name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
        />
      </div>

      {/* Level */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        className="text-sm font-medium text-gray-600 dark:text-gray-400"
      >
        {skill.level}%
      </motion.span>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary dark:text-secondary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills by Category */}
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
              {category} Skills
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skillList.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Always learning new technologies and improving my skills
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 
                       border border-primary/20 dark:border-secondary/20 rounded-2xl"
          >
            <span className="text-primary dark:text-secondary font-semibold">🚀 Ready to innovation</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;