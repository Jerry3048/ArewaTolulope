import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { projects } from "../data/portfolio";

// ✅ Variants for animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ✅ Reusable Project Card
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl 
               transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
  >
    {/* Project Image with Overlay */}
    <div className="relative overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex 
                      items-end justify-between p-4">
        <div className="flex gap-2">
          {/* Live Demo Link */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </motion.a>
          {/* GitHub Link */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
          >
            <CodeBracketIcon className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 
                     group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-secondary/10 
                       text-primary dark:text-secondary rounded-full border 
                       border-primary/20 dark:border-secondary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 
                     text-white text-center rounded-xl font-medium flex items-center 
                     justify-center gap-2 hover:from-primary/90 hover:to-primary transition-all duration-300"
        >
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          Live Demo
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 
                     dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-2 
                     hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary"
        >
          <CodeBracketIcon className="h-4 w-4" />
          Code
        </motion.a>
      </div>
    </div>
  </motion.div>
);

// ✅ Main Component
const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary dark:text-secondary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Have a project in mind? Let’s work together!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 
                       hover:from-secondary/90 hover:to-secondary text-gray-900 
                       font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Projects;