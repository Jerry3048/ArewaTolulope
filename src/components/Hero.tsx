import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { GITHUB_URL, LINKEDIN_URL } from '../data/socials';

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const socials = [
  { icon: <Github className="w-5 h-5" />, url: GITHUB_URL, label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, url: LINKEDIN_URL, label: 'LinkedIn' },
];

function Hero() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center"
        >
          <div>
            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              Open to full-time roles and freelance projects
            </p>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-primary dark:text-primary-light font-medium">
              Frontend Developer and UI Designer
            </p>
            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I design website interfaces and build them into fast, responsive web applications with React
              and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => goTo('contact')}
                className={`px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors ${focus}`}
              >
                Contact me
              </button>
              <button
                onClick={() => goTo('projects')}
                className={`px-6 py-3 border border-gray-300 dark:border-dark-border text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-card font-medium rounded-lg transition-colors ${focus}`}
              >
                View projects
              </button>
              <div className="flex gap-2 sm:ml-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-dark-card transition-colors ${focus}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <dl className="mt-12 pt-6 border-t border-gray-200 dark:border-dark-border grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Currently</dt>
                <dd className="mt-1 font-medium text-gray-900 dark:text-white">
                  Frontend Developer and Team Lead, RewaCiti
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Studying</dt>
                <dd className="mt-1 font-medium text-gray-900 dark:text-white">
                  Computer Science and Electronics Engineering, Obafemi Awolowo University
                </dd>
              </div>
            </dl>
          </div>

          <div className="justify-self-center lg:justify-self-end w-full max-w-xs lg:max-w-sm">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full aspect-[4/5] object-cover rounded-lg border border-gray-200 dark:border-dark-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;