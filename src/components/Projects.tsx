import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col bg-white dark:bg-dark-card rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border hover:border-primary/60 dark:hover:border-primary-light/40 transition-colors">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover border-b border-gray-200 dark:border-dark-border"
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border text-2xl font-semibold text-primary dark:text-primary-light"
        >
          {project.title.split(/[\s:]/)[0]}
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
          {project.featured && (
            <span className="ml-2 align-middle text-xs font-medium text-primary dark:text-primary-light bg-primary/10 px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-surface rounded"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-auto pt-5 flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors ${focus}`}
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-surface text-sm font-medium rounded-lg transition-colors ${focus}`}
              >
                <CodeBracketIcon className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Projects" description="Selected work, from real products to personal builds." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(projects as Project[]).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;